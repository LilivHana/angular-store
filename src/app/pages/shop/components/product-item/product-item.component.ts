import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent implements OnInit {
  public product: any;

  constructor() {}

  ngOnInit() {
    this.product = {
      category: "shoes",
      title: "Leather mid-heel Sandals",
      images: [
        "/assets/images/products/product-7.jpg",
        "/assets/images/products/product-122.jpg",
      ],
      price: 129,
      link: "#",
    };
  }
}
