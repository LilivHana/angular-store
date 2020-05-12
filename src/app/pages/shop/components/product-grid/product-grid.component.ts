import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.scss"],
})
export class ProductGridComponent implements OnInit {
  public products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit() {}
}
