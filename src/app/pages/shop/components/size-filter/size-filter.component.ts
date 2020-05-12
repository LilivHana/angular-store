import { Component, OnInit } from "@angular/core";

import { FiltersService } from "src/app/shared/services/filters.service";
import { FilterI } from "src/app/shared/models";
import { SizeI } from "src/app/shared/models";
import SIZE from "src/app/shared/constants/size";

@Component({
  selector: "app-size-filter",
  templateUrl: "./size-filter.component.html",
  styleUrls: ["./size-filter.component.scss"],
})
export class SizeFilterComponent implements OnInit {
  public sizes: SizeI[];
  public sizesSelected: SizeI[];
  public category: string;

  constructor(private filtersService: FiltersService) {
    this.filtersService.currentFilter.subscribe((filters) => {
      this.getSizes(filters);
    });
  }

  ngOnInit() {
    // this.getSizes();
  }

  activeSize(item: SizeI): void {
    item.active = !item.active;

    const filter: FilterI = {
      label: item.title,
      value: item.size,
      type: "size",
      category: this.category,
    };

    if (item.active) {
      this.filtersService.addFilter(filter);
    } else {
      this.filtersService.removeFilter(filter);
    }

    // console.log(this.sizes.filter(({ active }) => active));
  }

  private getSizes(filters: FilterI[]): void {
    if (filters.length > 0) {
      const { value } = filters.find(
        ({ category }) => category === "navegation"
      );
      this.sizes = SIZE.filter(({ category }) => category === value);
      this.category = value;

      const selectValues = filters
        .filter(({ type }) => type === "size")
        .map(({ value }) => value);
      this.sizes.map((item) => {
        item.active = selectValues.includes(item.size);
        return item;
      });
    }
  }
}
