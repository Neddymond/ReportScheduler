import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';
import { Buffer } from 'buffer';
import { Schedule } from '../schedules';
import { type } from 'os';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  // private fileName: string;
  uploading: boolean = false;

  public successMsg: string;
  public errorMsg: string;
  public date: string;
  public name: string;
  public email: string;
  public document: File;

  constructor(private scheduleService: SchedulesService) { }

  ngOnInit(): void {
  }

  private onUpload() {
    this.uploading = !this.uploading;
    // console.log(this.document);

    this.scheduleService.upload(this.document).subscribe((event: any) => {
      if (typeof (event) === "object") {
        this.uploading = false;
      }
    })
  }

  public handleFileInput(event: any) {
    this.document = event.target.files[0];
    // this.onUpload();
  };

  createSchedule() {
    this.successMsg = "";
    this.errorMsg = "";
    this.scheduleService.createSchedule(this.date, this.name, this.email, this.document)
      .subscribe((createdSchedule: Schedule) => {
        this.date = "";
        this.name = "";
        this.email = "";
        this.document = null;
        const date = new Date(createdSchedule.date).toDateString();
        this.successMsg = `Report scheduled successfully for ${date}`;
        console.log(this.successMsg)
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}
