import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private apiUrl = 'http://localhost:8000/posts'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  savePost(post: { id: string; title: string; text: string; tag: string }): Observable<void> {
    return this.http.post<void>(this.apiUrl, post);
  }
}
