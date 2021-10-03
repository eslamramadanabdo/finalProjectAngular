import { StudentService } from './../../sharedService/student.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  dataObject = new Student;
  constructor(private serv : StudentService , private rout : Router) {}


  save(){
    this.serv.postTeacher(this.dataObject).subscribe((data:any)=>{
    this.rout.navigateByUrl('ls')
    })
  }

  ngOnInit(): void {
  }
}
