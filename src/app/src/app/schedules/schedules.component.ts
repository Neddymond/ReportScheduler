import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';
import { Buffer } from 'buffer';
import { Schedule } from '../schedules';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  public successMsg: string;
  public errorMsg: string;
  public date: string;
  public name: string;
  public email: string;
  public document: string;

  constructor(private scheduleService: SchedulesService) { }

  ngOnInit(): void {
  }

  createSchedule() {
    this.successMsg = "";
    this.errorMsg = "";
    this.scheduleService.createSchedule(this.date, this.name, this.email, this.document)
      .subscribe((createdSchedule: Schedule) => {
        this.date = "";
        this.name = "";
        this.email = "";
        this.document = "";
        const date = new Date(createdSchedule.date).toDateString();
        this.successMsg = `Report scheduled successfully for ${date}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}
