import { StudentService } from './../../sharedService/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upate-student',
  templateUrl: './upate-student.component.html',
  styleUrls: ['./upate-student.component.css']
})
export class UpateStudentComponent implements OnInit {

 
  dataObject = new Student;

  updateID ;
  constructor(private serv : StudentService , private rout : Router , private navigate : ActivatedRoute) {

    this.updateID= this.navigate.snapshot.paramMap.get('id'); 


    this.serv.getTeacherById(this.updateID).subscribe((data:any)=>{
      this.dataObject = data;
    })
  }


  update(){
    this.serv.putTeacher(this.dataObject , this.updateID).subscribe((data:any)=>{
    this.rout.navigateByUrl('ls')
    })
  }

  ngOnInit(): void {
  }

}
