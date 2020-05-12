import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/shared/services/category.service";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
  public category: string;

  constructor(private categoryService: CategoryService) {
    this.categoryService.currentCategory.subscribe((category) => {
      this.category = category;
    });
  }

  ngOnInit() {}
}
