import { TeacherService } from './../../sharedService/teacher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  dataObject = new Teacher;

  updateID ;
  constructor(private serv : TeacherService , private rout : Router , private navigate : ActivatedRoute) {

    this.updateID= this.navigate.snapshot.paramMap.get('id'); 


    this.serv.getTeacherById(this.updateID).subscribe((data:any)=>{
      this.dataObject = data;
    })
  }


  update(){
    this.serv.putTeacher(this.dataObject , this.updateID).subscribe((data:any)=>{
    this.rout.navigateByUrl('lt')
    })
  }

  ngOnInit(): void {
  }

}
