import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {Task} from 'src/app/task.model';


@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  constructor(private service:SharedService) { }

  public taskList: Task[];

  ModalTitle: string;
  ActivateAddEditTaskComp: boolean=false;
  task:any;
  
 

  ngOnInit(): void {
    this.refreshTaskList();
  }

  addClick(){
    this.task={
      id:0,
      title:"",
      description:"",
      dateAdded:"",
      deadline:"",
      importance:"",
      status:"",
      closedAt:""
    }
    this.ModalTitle="Add Task";
    this.ActivateAddEditTaskComp=true;
  }

  editClick(item: any){
    this.task=item;
    this.ModalTitle="Edit Task";
    this.ActivateAddEditTaskComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure ?')){
      this.service.deleteTask(item.id).subscribe(data =>{
        alert("delete successfully");
        this.refreshTaskList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTaskComp=false; 
    this.refreshTaskList();
  }

  refreshTaskList(){
    this.service.getTasksList().subscribe(data =>{
      this.taskList=data;
    });
  }

}
