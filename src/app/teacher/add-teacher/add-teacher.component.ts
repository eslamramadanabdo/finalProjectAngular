import { TeacherService } from './../../sharedService/teacher.service';
import { Teacher } from './../../models/teacher';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {


  dataObject = new Teacher;
  constructor(private serv : TeacherService , private rout : Router) {}


  save(){
    this.serv.postTeacher(this.dataObject).subscribe((data:any)=>{
    this.rout.navigateByUrl('lt')
    })
  }

  ngOnInit(): void {
  }

}
