import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private apiUrl = 'http://localhost:8082/api/ideas'; // Update this to your actual Spring Boot endpoint

  constructor(private http: HttpClient) {}

    // Fetch all ideas
    getIdeas(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
  
    // Fetch a single idea by ID
    

    saveIdea(idea: { id?: number; title: string; content: string; tagname: string }): Observable<void> {
      return this.http.post<void>(this.apiUrl, idea);
    }
}

