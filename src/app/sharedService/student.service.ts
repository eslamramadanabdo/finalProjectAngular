import { Student } from './../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends ApiFunctionsService <Student> {

  constructor(http : HttpClient) { 
    super("http://localhost:3000/student", http);
  }
}
