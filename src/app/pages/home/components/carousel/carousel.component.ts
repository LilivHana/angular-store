import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

interface Describe {
  title: string;
  subtitle?: string;
}

interface Carousel {
  img: string;
  category: string;
  describe: Describe;
}

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  public data = [];
  public banners: Carousel[];

  constructor(private carouselConfig: NgbCarouselConfig) {
    carouselConfig.interval = 100000000;
    carouselConfig.showNavigationArrows = false;
  }

  ngOnInit() {
    this.data = [
      {
        img: "assets/images/banners/cover-5.jpg",
        category: "clothing",
      },
      {
        img: "assets/images/banners/cover-23.jpg",
        category: "shoes",
      },
      {
        img: "assets/images/banners/cover-16.jpg",
        category: "accesories",
      },
    ];
    this.loadCarousel();
  }

  private loadCarousel(): void {
    this.banners = this.getCarousel(this.data);
  }

  private getCarousel(data: any): Carousel[] {
    const carousel: Carousel[] = [];
    for (const { img, category } of data) {
      const dtCarousel = this.getData(img, category);
      carousel.push(dtCarousel);
    }
    return carousel;
  }

  private getData(img: string, category: string): Carousel {
    const data: Carousel = {
      img,
      category,
      describe: {
        title: "new collection",
        subtitle: category,
      },
    };
    return data;
  }
}
