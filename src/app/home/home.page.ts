import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loadout: any;
  loadoutId: string;
  loading = true;
  error: any;
  inventorySlotIds: Number[] = new Array(28).fill(0).map((x, i) => i);

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadoutId = this.route.snapshot.paramMap.get("loadoutId");
    if (!this.loadoutId) {
      this.loading = false;
      this.error = "No id given";
      return;
    }
    this.apollo
      .watchQuery({
        query: gql`
        query{
          loadout(_id:"${this.loadoutId}"){
            name,
            inventory{
              itemid: id,
              name,
              slot,
              icon_url,
              quantity
            },
            equipment{
              itemid: id,
              name,
              slot,
              icon_url,
              quantity
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.loadout = result.data && result.data.loadout;
        if (this.loadout.inventory) {
          let out = [];
          for (let i in this.loadout.inventory) {
            let item = this.loadout.inventory[i];
            out[item.slot - 1] = item;
          }
          this.loadout.inventory = out;
        }
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}
