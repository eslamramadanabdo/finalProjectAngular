import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbareComponent } from './shared/navbare/navbare.component';
import { HomeComponent } from './shared/home/home.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HttpClientModule } from "@angular/common/http";
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { UpateStudentComponent } from './student/upate-student/upate-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbareComponent,
    HomeComponent,
    AddTeacherComponent,
    ListTeacherComponent,
    NotfoundComponent,
    UpdateTeacherComponent,
    ListStudentComponent,
    UpateStudentComponent,
    AddStudentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
