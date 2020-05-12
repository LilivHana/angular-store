import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import PRICE from "src/app/shared/constants/price";
import { PriceI } from "src/app/shared/models";

@Component({
  selector: "app-price-filter",
  templateUrl: "./price-filter.component.html",
  styleUrls: ["./price-filter.component.scss"],
})
export class PriceFilterComponent implements OnInit {
  public priceForm: FormGroup;
  public prices: PriceI[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.priceForm = this.formBuilder.group({
      min: null,
      max: null,
    });

    this.getPrices();
  }

  onPrice(): void {
    if (this.priceForm.value) {
      console.log(this.priceForm.value);
    }
  }

  private getPrices(): void {
    this.prices = PRICE.sort((a, b) => a.max - b.max);
  }
}
