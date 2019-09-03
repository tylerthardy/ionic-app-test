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
  author: any;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        query {
          author(id: 21559){
            name,
            books {
              title
              isbn,
              authors {
                name
              }
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.author = result.data && result.data.author;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}
