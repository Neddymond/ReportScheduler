import { Injectable } from '@angular/core';
import { environment } from "../environments/environment"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from "./schedules";

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.BASE_URL}/schedule`);
  };

  createSchedule(date: string, name: string, email: string, document: string): 
  Observable<Schedule> {
    return this.http.post<Schedule>(`${this.BASE_URL}/schedule`, {
      date,
      name,
      email,
      document
    });
  };

  cancelSchedule(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/schedule/${id}`);
  };
}
