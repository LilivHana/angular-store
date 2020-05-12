import { Component, OnInit } from "@angular/core";

import { CategoryI } from "src/app/shared/models";
import CATEGORIES from "src/app/shared/constants/category";

@Component({
  selector: "app-category-filter",
  templateUrl: "./category-filter.component.html",
  styleUrls: ["./category-filter.component.scss"],
})
export class CategoryFilterComponent implements OnInit {
  public categories: CategoryI[];

  constructor() {}

  ngOnInit() {
    this.getCategories();
  }

  private getCategories(): void {
    this.categories = CATEGORIES;
  }
}
