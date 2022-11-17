import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private URL = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.URL);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${this.URL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.URL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch(`${this.URL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.URL);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${this.URL}?title=${title}`);
  }
}
