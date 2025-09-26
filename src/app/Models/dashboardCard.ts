export interface StatCard {
  label: string;
  value: number | string;
  icon: string;
  color: string;
  change: string;
  trend: 'positive' | 'negative' | 'neutral';
}