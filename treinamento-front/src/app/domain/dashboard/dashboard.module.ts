import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';

@NgModule({
  declarations: [DashboardListComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
