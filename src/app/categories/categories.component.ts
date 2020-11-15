import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import {Category} from '../category';

@Component({
  selector: 'app-cotegories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  selectedCategory: Category;
  categories: Category[];


  getCategories(): void{
    this.categoriesService.getCategories()
    .subscribe( categories => this.categories = categories);
  }
  ngOnInit(): void {
    this.getCategories();
  }

  onSelect(category: Category): void{
    this.selectedCategory = category;
  }
  constructor(private categoriesService: CategoriesService) { }

}
