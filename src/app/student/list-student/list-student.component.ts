import { StudentService } from './../../sharedService/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {


  alldata :[]
  constructor(private serv: StudentService){
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
