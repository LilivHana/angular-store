import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CategoryService } from "src/app/shared/services/category.service";
import { FiltersService } from "src/app/shared/services/filters.service";
import { FilterI } from "src/app/shared/models";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  public category: string;

  constructor(
    private router: ActivatedRoute,
    private categoryService: CategoryService,
    private filtersService: FiltersService
  ) {
    this.router.params.subscribe((params) => {
      this.getCategory(params.category);
    });
  }

  ngOnInit() {}

  private getCategory(category: string): void {
    this.categoryService.changeCategory(category);
    this.category = category;
    const filter: FilterI = {
      label: category,
      value: category,
      category: "navegation",
    };

    this.filtersService.addFilter(filter);
  }
}
