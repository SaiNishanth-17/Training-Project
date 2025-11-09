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
        // rows looks like: [ { _id: 'basic', avgScore: 60, attempts: 5 }, ... ]
        const lookup: Record<string, number> = { basic: 0, intermediate: 0, advanced: 0 };
        rows.forEach(r => { lookup[r._id] = Math.round(r.avgScore || 0); });

        const examName = rows.length>0 ? (rows[0] as any).examName || 'Exam' : 'Exam';

        this.examStats = [{
          exam: 'All Exams',
          basic: lookup['basic'] || 0,
          intermediate: lookup['intermediate'] || 0,
          advanced: lookup['advanced'] || 0
        }];

        this.renderChart();
      },
      error: (err) => console.error('Difficulty analytics load failed:', err)
    });
  }

  private renderChart(): void {
    const el = document.getElementById('examScoresChart') as HTMLCanvasElement | null;
    if (!el) return;

    // Destroy old chart if any (prevents duplicates when navigating)
    if (this.chart) {
      this.chart.destroy();
    }

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