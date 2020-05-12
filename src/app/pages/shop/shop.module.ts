import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SharedModule } from "src/app/shared/shared.module";
import { ShopRoutingModule } from "./shop-routing.module";
import { ShopComponent } from "./shop.component";
import { HomeComponent } from "./home/home.component";
import { CategoryComponent } from "./category/category.component";
import { NavFilterComponent } from "./components/nav-filter/nav-filter.component";
import { CategoryFilterComponent } from "./components/category-filter/category-filter.component";
import { SizeFilterComponent } from "./components/size-filter/size-filter.component";
import { PriceFilterComponent } from "./components/price-filter/price-filter.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { BadgeFilterComponent } from './components/badge-filter/badge-filter.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent,
    CategoryComponent,
    NavFilterComponent,
    CategoryFilterComponent,
    SizeFilterComponent,
    PriceFilterComponent,
    CarouselComponent,
    BreadcrumbComponent,
    BadgeFilterComponent,
    ProductGridComponent,
    ProductItemComponent,
  ],
  imports: [CommonModule, NgbModule, ShopRoutingModule, SharedModule],
})
export class ShopModule {}
