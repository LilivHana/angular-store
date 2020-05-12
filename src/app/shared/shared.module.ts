import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ComponentsModule } from "./components/components.module";
import { ServicesModule } from "./services/services.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ServicesModule,
  ],
  exports: [ComponentsModule, ServicesModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
