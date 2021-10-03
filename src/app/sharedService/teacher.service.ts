import { Teacher } from './../models/teacher';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApiFunctionsService <Teacher> {

  constructor(http : HttpClient) { 
    super("http://localhost:3000/teacher", http);
  }
}
