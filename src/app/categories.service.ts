import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from 'src/models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUri = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUri);
  }

  getCategory(id: number): Observable<Category>{
    const url = `${this.apiUri}/${id}`;
    return this.http.get<Category>(url);
  }
}
