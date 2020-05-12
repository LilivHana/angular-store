import { NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import LOCALE_PT from "@angular/common/locales/pt";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { NavCartComponent } from "./shared/components/nav-cart/nav-cart.component";
import { HomeComponent } from "./pages/home/home.component";
import { CarouselComponent } from "./pages/home/components/carousel/carousel.component";
import { GridComponent } from "./pages/home/components/grid/grid.component";
import { GridItemComponent } from "./pages/home/components/grid-item/grid-item.component";

registerLocaleData(LOCALE_PT);

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    NavCartComponent,
    HomeComponent,
    CarouselComponent,
    GridComponent,
    GridItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
