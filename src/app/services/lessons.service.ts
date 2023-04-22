import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) {
  }
  port = 3005;
  url = `http://localhost:${this.port}/api/v1`;


  getLessons(id: string) {
    return this.http.get<any>(`${this.url}/lessons/${id}`);
  }


}
