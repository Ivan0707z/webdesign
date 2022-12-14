import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatrol } from '../interfaces/ipatrol';
import { IPeople } from '../interfaces/ipeople';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiurl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getPosts():Observable<IPatrol[]>{
    const url = `${this.apiurl}/posts`
    return this.http.get<IPatrol[]>(url);
  }
  getPeople():Observable<IPeople[]>{
    const url = `${this.apiurl}/people`
    return this.http.get<IPeople[]>(url);
  }
  getPostById(id:number):Observable<IPatrol>{
    const url = `${this.apiurl}/posts/${id}`;
    return this.http.get<IPatrol>(url);
  }
  addPost(mission: IPatrol): Observable<IPatrol> {
    const url = `${this.apiurl}/posts`;
    return this.http.post<IPatrol>(url, mission, httpOptions);
  }
  deletePost(mission: IPatrol): Observable<IPatrol> {
    const url = `${this.apiurl}/posts/${mission.id}`
    return this.http.delete<IPatrol>(url);
  }
  updatePosts(mission: IPatrol): Observable<IPatrol> {
    const url = `${this.apiurl}/${mission.id}`;
    return this.http.put<IPatrol>(this.apiurl, mission, httpOptions);
  }
}
