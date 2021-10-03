import { UpateStudentComponent } from './student/upate-student/upate-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';

import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { HomeComponent } from './shared/home/home.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "ct", component: AddTeacherComponent },
  { path: "lt", component: ListTeacherComponent },
  { path: "lt/:id", component: UpdateTeacherComponent},
  { path: "cs", component: AddStudentComponent },
  { path: "ls", component: ListStudentComponent },
  { path: "ls/:id", component: UpateStudentComponent},

  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

