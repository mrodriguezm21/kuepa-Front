import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) {
  }
  port = 3005;
  url = `http://localhost:${this.port}/api/v1`;

  getMessages() {
    return this.http.get<any>(`${this.url}/messages`);
  }
  postMessage(message: any) {
    return this.http.post<any>(`${this.url}/messages`, message);
  }

}
