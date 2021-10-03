import { TeacherService } from './../../sharedService/teacher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {

alldata :[]
  constructor(private serv: TeacherService){
    this.serv.getTeacher().subscribe((data:any)=>{
this.alldata =data;
    })
  }

  ngOnInit(): void {
  }

  delete(id){
    this.serv.deleteTeacher(id).subscribe((data:any)=>{
      window.location.reload()
    })
  }

}
