import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {Task} from '../Task';
import {TASK} from '../mock-tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = ' http://localhost:5000/tasks';

  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}

//npm run server para que corra LA BASE DE DATOS DE LAS TAREAS en el localhost:5000/tasks