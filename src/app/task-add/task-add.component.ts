import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  taskForm!: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskTitle :["", [Validators.required]]

    })
  }

  onKeyPress($event: any)
    {
if(this.taskForm.valid)
{
  alert("task entered")
}
else
{
  alert("Enter required field")
}
    }
  

}
