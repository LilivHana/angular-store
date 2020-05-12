import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FiltersService } from "./filters.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    FiltersService,
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
})
export class ServicesModule {}
