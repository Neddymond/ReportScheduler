import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedules';
import { SchedulesService } from '../schedules.service';
import {mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  public loading = true;
  public errorMsg: string = "";
  public successMsg: string = "";
  public schedules: Schedule[] = [];
  public columns = ["date", "name", "email", "document", "cancel"];

  constructor(private scheduleService: SchedulesService) {}

  ngOnInit(): void {
    this.scheduleService.getSchedules()
      .subscribe((schedules: Schedule[]) => {
        this.schedules = schedules;
        this.loading = false;
      }, 
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
        this.loading = false
      });
  };

  cancelSchedule(id: string) {
    this.scheduleService.cancelSchedule(id)
      .pipe( mergeMap(() => this.scheduleService.getSchedules()))
      .subscribe((schedules: Schedule[]) => {
        this.schedules = schedules;
        this.successMsg = "Successfully cancelled the schedule."
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  };
}
