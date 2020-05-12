import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-cart",
  templateUrl: "./nav-cart.component.html",
  styleUrls: ["./nav-cart.component.scss"]
})
export class NavCartComponent implements OnInit {
  public countItems: number = 0;

  constructor() {}

  ngOnInit() {}

  showItems(): void {
    this.countItems++;
  }
}
