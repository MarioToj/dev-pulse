import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardStatistics } from '../../shared/dashboard-statistics/dashboard-statistics';

@Component({
  selector: 'app-dashboard-page',
  imports: [DashboardStatistics],
  templateUrl: './dashboard-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {}
