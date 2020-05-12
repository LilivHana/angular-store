import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private catgeorySource = new BehaviorSubject("");

  public currentCategory = this.catgeorySource.asObservable();

  constructor() {}

  changeCategory(category: string): void {
    this.catgeorySource.next(category);
  }
}
