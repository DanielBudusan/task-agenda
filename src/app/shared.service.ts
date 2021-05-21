import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { TaskComponent } from './task/task.component';
import {Task} from 'src/app/task.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://52.168.37.57/api";
  

  constructor(private http:HttpClient) { }


  getTasksList():Observable<Task[]>{
    return this.http.get<Task[]>(this.APIUrl+'/Tasks')
  }

  addTask(val: any){
    return this.http.post(this.APIUrl+'/Tasks', val)
  }

  updateTask(id: any, val: any){
    return this.http.put(this.APIUrl+'/Tasks/'+id, val)
  }

  deleteTask(val: any){
    return this.http.delete(this.APIUrl+'/Tasks/'+ val)
  }







}
