import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'paper-doll',
  templateUrl: './paper-doll.component.html',
  styleUrls: ['./paper-doll.component.scss'],
})
export class PaperDollComponent implements OnInit {

  @Input() slots: any;
  
  constructor() { }

  ngOnInit() {
    if (this.slots) {
      let out = [];
      for (let i in this.slots) {
        let item = this.slots[i];
        out[item.slot] = item;
      }
      this.slots = out;
    }
  }

}
/*
NONE = -1;
HEAD_SLOT = 0;
CAPE_SLOT = 1;
AMULET_SLOT = 2;
WEAPON_SLOT = 3;
BODY_SLOT = 4;
SHIELD_SLOT = 5;
LEG_SLOT = 7;
HANDS_SLOT = 9;
FEET_SLOT = 10;
RING_SLOT = 12;
AMMUNITION_SLOT = 13;
*/
