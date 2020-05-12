import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

import { HOME_CAROUSEL } from "src/app/shared/constants/shop";
import { CategoryService } from "src/app/shared/services/category.service";
import { ShopHomeCarouselI } from "src/app/shared/models";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  providers: [NgbCarouselConfig],
})
export class CarouselComponent implements OnInit {
  public banners: ShopHomeCarouselI[];
  public showCarousel: boolean;

  constructor(
    carouselConfig: NgbCarouselConfig,
    private categoryService: CategoryService
  ) {
    carouselConfig.showNavigationArrows = false;
    carouselConfig.pauseOnHover = true;
    carouselConfig.interval = 100000000;

    this.categoryService.currentCategory.subscribe((category) => {
      this.doCarousel(category);
    });
  }

  ngOnInit() {
    this.banners = HOME_CAROUSEL;
  }

  private doCarousel(category: string) {
    this.showCarousel = category === "all";
  }
}
