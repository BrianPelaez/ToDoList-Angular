import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from '../mock-task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  

  apiURL = 'http://localhost:5000/tasks/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {

    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(id: number): Observable<Task>{
    return this.http.delete<Task>(this.apiURL+id)
  }
}
