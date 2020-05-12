import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { FilterI } from "src/app/shared/models";

@Injectable({
  providedIn: "root",
})
export class FiltersService {
  private filters: FilterI[] = [];

  private filterSource = new BehaviorSubject([]);

  public currentFilter = this.filterSource.asObservable();

  constructor() {}

  addFilter(filter: FilterI): void {
    const filters = this.addFilterInFilters(filter);
    this.changeFilter(filters);
  }

  removeFilter(filter: FilterI): void {
    const filters = this.removeFilterInFilters(filter);
    this.changeFilter(filters);
  }

  private changeFilter(filters: FilterI[]): void {
    this.filterSource.next(filters);
    // console.log(this.currentFilter);

    // if (this.checkFilter(filter)) {
    // }
  }

  private checkFilter(filters: FilterI[]): boolean {
    return true;
  }

  private addFilterInFilters(objFilter: FilterI): FilterI[] {
    if (objFilter.category === "navegation") {
      return this.filtersNavegation(objFilter);
    }
    if (objFilter.type === "size") {
      return this.filtersSize(objFilter);
    }
  }

  private removeFilterInFilters(objFilter: FilterI): FilterI[] {
    // if (objFilter.category === "navegation") {
    //   return this.filtersNavegation(objFilter);
    // }
    if (objFilter.type === "size") {
      return this.removeFiltersSize(objFilter);
    }
  }

  private filtersSize(objFilter: FilterI): FilterI[] {
    const filters = [...this.filters];
    const _filters = filters.filter(
      ({ category }) =>
        category === objFilter.category || category === "navegation"
    );

    if (_filters.length > 0) {
      const checkList = filters.filter((item) => item === objFilter);

      if (checkList.length === 0) {
        _filters.push(objFilter);
      }
    }

    this.filters = _filters;

    return this.filters;
  }

  private removeFiltersSize(objFilter: FilterI): FilterI[] {
    const filters = this.filters.filter(
      ({ value, category }) =>
        value !== objFilter.value &&
        (category === objFilter.category || category === "navegation")
    );
    this.filters = filters;
    return this.filters;
  }

  private filtersNavegation(objFilter: FilterI): FilterI[] {
    const filters = [...this.filters];
    const _filter = filters.filter((item) => item.category === "navegation");

    if (_filter.length > 0) {
      const _filters = filters.map((item) => {
        return item.category === "navegation" ? objFilter : item;
      });
      this.filters = _filters.filter((item) => {
        if (item.category === "navegation") {
          return true;
        }
        if (item.category === objFilter.value) {
          return true;
        }
      });
    } else {
      this.filters.push(objFilter);
    }
    return this.filters;
  }
}
