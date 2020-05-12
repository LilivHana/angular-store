import { Component, OnInit } from "@angular/core";

import { CategoryService } from "src/app/shared/services/category.service";
import { FiltersService } from "src/app/shared/services/filters.service";
import { FilterI } from "src/app/shared/models";

@Component({
  selector: "app-badge-filter",
  templateUrl: "./badge-filter.component.html",
  styleUrls: ["./badge-filter.component.scss"],
})
export class BadgeFilterComponent implements OnInit {
  public filters: FilterI[];

  constructor(private filtersService: FiltersService) {
    this.filtersService.currentFilter.subscribe((filters) => {
      this.filters = filters;
    });
  }

  ngOnInit() {}

  removeFilter(filter: FilterI) {
    this.filtersService.removeFilter(filter);
  }
}
