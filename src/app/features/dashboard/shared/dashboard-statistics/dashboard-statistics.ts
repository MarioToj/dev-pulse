import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-statistics',
  imports: [],
  templateUrl: './dashboard-statistics.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardStatistics {
  value = input.required<number>();
  description = input.required<string>();
}
