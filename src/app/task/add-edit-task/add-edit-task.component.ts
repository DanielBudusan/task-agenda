import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/task.model';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() task: any;
  id: number;
  title: string;
  description: string;
  dateAdded: Date;
  deadline: Date;
  importance: string;
  status: string;
  closedAt: Date;




  ngOnInit(): void {
    this.id = this.task.id;
    this.title = this.task.title;
    this.description = this.task.description;
    this.dateAdded = this.task.dateAdded;
    this.deadline = this.task.deadline;
    this.importance = this.task.importance;
    this.status = this.task.status;
    this.closedAt = this.task.closedAt;
  }

  addTask() {
    var val = {
      id: this.id,
      title: this.title,
      description: this.description,
      dateAdded: this.dateAdded,
      deadline: this.deadline,
      importance: this.importance,
      status: this.status,
      closedAt: this.closedAt
    };
    this.service.addTask(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateTask() {
    var val = {
      id: this.id,
      title: this.title,
      description: this.description,
      dateAdded: this.dateAdded,
      deadline: this.deadline,
      importance: this.importance,
      status: this.status,
      closedAt: this.closedAt
    };
    this.service.updateTask(this.id,val).subscribe(res => {
      alert(res.toString());
    });
  }

}
