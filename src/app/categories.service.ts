import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  api_uri: 'http://localhost:3000/';

  constructor() { }

  getCategories(): Observable<Category[]>{

  }
}
