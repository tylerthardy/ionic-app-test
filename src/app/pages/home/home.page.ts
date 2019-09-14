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
            activity{
              name,
              type
            },
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
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}
