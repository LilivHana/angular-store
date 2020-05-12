import { Component, OnInit, Input } from "@angular/core";

import { CategoryI } from "src/app/shared/models";

@Component({
  selector: "app-grid-item",
  templateUrl: "./grid-item.component.html",
  styleUrls: ["./grid-item.component.scss"],
})
export class GridItemComponent implements OnInit {
  @Input() category: CategoryI;

  constructor() {}

  ngOnInit() {}
}
