import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { Chart as ChartInstance } from 'chart.js/auto';
import { StudentReportService } from '../../Services/student-report-service';

@Component({
  selector: 'app-exam-wise-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-wise-analysis.html',
  styleUrls: ['./exam-wise-analysis.css']
})
export class ExamWiseAnalysis implements AfterViewInit, OnDestroy {
  examStats: Array<{ exam: string; basic: number; intermediate: number; advanced: number }> = [];
  private chart?: ChartInstance;

  constructor(private studentService: StudentReportService) {}

  ngAfterViewInit(): void {
    this.studentService.getDifficultyAnalytics().subscribe({
      next: (rows) => {
        if (!rows || rows.length === 0) return;

        const examName = rows[0].examName || "Exam";

        let basic = 0;
        let intermediate = 0;
        let advanced = 0;

        rows.forEach(r => {
          const value = Math.round(r.avgScore || 0);

          if (r.difficulty === "basic") {
            basic = value;
          }

          if (r.difficulty === "intermediate") {
            intermediate = value;
          }

          if (r.difficulty === "advanced") {
            advanced = value;
          }
        });

        this.examStats = [
          {
            exam: examName,
            basic,
            intermediate,
            advanced
          }
        ];


        this.renderChart();
      },

      error: (err) => console.error('Difficulty analytics load failed:', err)
    });
  }

  private renderChart(): void {
    const el = document.getElementById('examScoresChart') as HTMLCanvasElement | null;
    if (!el) return;

    if (this.chart) this.chart.destroy();

    const labels = this.examStats.map(e => e.exam);
    const basic = this.examStats.map(e => e.basic);
    const interm = this.examStats.map(e => e.intermediate);
    const adv = this.examStats.map(e => e.advanced);

    this.chart = new Chart(el, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Basic', data: basic, backgroundColor: 'rgba(135, 76, 175, 0.85)', borderRadius: 6, borderSkipped: false, barThickness: 18 },
          { label: 'Intermediate', data: interm, backgroundColor: 'rgba(136, 77, 219, 0.6)', borderRadius: 6, borderSkipped: false, barThickness: 18 },
          { label: 'Advanced', data: adv, backgroundColor: 'rgba(54, 162, 235, 0.9)', borderRadius: 6, borderSkipped: false, barThickness: 18 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false }, ticks: { color: '#444' } },
          y: { grid: { display: false }, beginAtZero: true, max: 100, ticks: { color: '#444' } }
        },
        plugins: {
          legend: { display: true, position: 'top', labels: { color: '#444' } },
          tooltip: { backgroundColor: '#fff', titleColor: '#000', bodyColor: '#000', borderColor: '#ddd', borderWidth: 1 }
        },
        layout: { padding: { left: 10, right: 10, top: 20, bottom: 10 } }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.chart) this.chart.destroy();
  }
}
