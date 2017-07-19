import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DummyDataService {
  apiUrl = 'http://jsonplaceholder.typicode.com/';
  posts: any;
  constructor(public http: Http) {
    console.log('Data service connected ...');
  }
  getPosts() {
    this.posts = this.http.get(this.apiUrl + 'posts').map(res => res.json());
    return this.posts;
  }
}
