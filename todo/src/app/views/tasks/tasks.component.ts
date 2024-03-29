import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from "../../service/data-handler.service";
import { Task } from "../../model/Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] | undefined;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.tasks = this.dataHandler.getTasks();
  }

}
