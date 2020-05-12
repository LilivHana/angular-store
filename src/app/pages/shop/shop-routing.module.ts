import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShopComponent } from "./shop.component";
import { CategoryComponent } from "./category/category.component";

const routes: Routes = [
  {
    path: "",
    component: ShopComponent,
    children: [
      { path: ":category", component: CategoryComponent },
      { path: "", redirectTo: "all" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
