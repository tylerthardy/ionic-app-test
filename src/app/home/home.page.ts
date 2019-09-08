import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loadout: any;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        query{
          loadout(_id:"5d73f7a7ea861c2a68fc5c71"){
            name,
            inventory{
              id,
              name,
              slot,
              icon_url
            },
            equipment{
              id,
              name,
              slot,
              icon_url
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
