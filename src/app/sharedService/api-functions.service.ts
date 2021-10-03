
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService<T> {

  constructor( @Inject (String) public url : string , public http :HttpClient){}

  getTeacher() : Observable<T>{
    return this.http.get<T>(this.url);
  }

  getTeacherById(id) : Observable<T>{
    return this.http.get<T>(this.url+ `/${id}`);
  }

  postTeacher(dataObject : T) : Observable<T>{
    return this.http.post<T>(this.url , dataObject)
  }

  putTeacher(dataObject : T , id) : Observable<T>{
    return this.http.put<T>(this.url+ `/${id}` , dataObject)
  }



  deleteTeacher(id):Observable<T> {
    return this.http.delete<T>(this.url + `/${id}`);
  }
}