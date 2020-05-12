import { Component, OnInit } from "@angular/core";

import { CategoryI } from "src/app/shared/models";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"],
})
export class GridComponent implements OnInit {
  public categories: CategoryI[];
  constructor() {}

  ngOnInit() {
    this.categories = [
      {
        img: "assets/images/products/product-4.jpg",
        name: "Clothing",
        category: "clothing",
      },
      {
        img: "assets/images/products/product-5.jpg",
        name: "Shoes",
        category: "shoes",
      },
      {
        img: "assets/images/products/product-1.jpg",
        name: "Accessories",
        category: "accessories",
      },
    ];
  }
}
