import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
})
export class CheckboxComponent implements OnInit {
  @Input() id: any;

  constructor() {}

  ngOnInit() {}
}
