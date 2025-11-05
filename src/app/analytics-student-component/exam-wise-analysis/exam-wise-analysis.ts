import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-exam-wise-analysis',
  imports: [CommonModule],
  templateUrl: './exam-wise-analysis.html',
  styleUrl: './exam-wise-analysis.css'
})
export class ExamWiseAnalysis implements AfterViewInit {
  examStats = [
    { exam: 'E1', basic: 25, intermediate: 0, advanced: 20 },
    { exam: 'E2', basic: 30, intermediate: 25, advanced: 10 },
    { exam: 'E3', basic: 15, intermediate: 40, advanced: 35 },
    { exam: 'E4', basic: 20, intermediate: 30, advanced: 25 },
    { exam: 'E5', basic: 10, intermediate: 50, advanced: 25 }
  ];

  ngAfterViewInit() {
    const ctx = document.getElementById('examScoresChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.examStats.map(e => e.exam),
        datasets: [
          {
            label: 'Basic',
            data: this.examStats.map(e => e.basic),
            backgroundColor: 'rgba(135, 76, 175, 0.85)',
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 18
          },
          {
            label: 'Intermediate',
            data: this.examStats.map(e => e.intermediate),
            backgroundColor: 'rgba(136, 77, 219, 0.6)',
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 18
          },
          {
            label: 'Advanced',
            data: this.examStats.map(e => e.advanced),
            backgroundColor: 'rgba(54, 162, 235, 0.9)',
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 18
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#444' },
            
          },
          y: {
            grid: { display: false },
            beginAtZero: true,
            max: 100,
            ticks: { color: '#444' }
          }
        },
        plugins: {
          legend: { display: true, position: 'top', labels: { color: '#444' } },
          tooltip: {
            backgroundColor: '#ffffff',
            titleColor: '#000',
            bodyColor: '#000',
            borderColor: '#ddd',
            borderWidth: 1
          }
        },
        layout: {
          padding: { left: 10, right: 10, top: 20, bottom: 10 }
        }
      }
    });
  }
}
