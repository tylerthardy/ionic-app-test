import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-select',
  templateUrl: './item-select.component.html',
  styleUrls: ['./item-select.component.scss'],
})
export class ItemSelectComponent implements OnInit {

  constructor() { }

  @Input() item: any;

  ngOnInit() {}
}
