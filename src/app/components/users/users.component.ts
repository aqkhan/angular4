import { Component, OnInit } from '@angular/core';
// Include the service that you want to use in the component.
import { DummyDataService } from '../../services/dummy-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // If you're not sure about type set it to any
  posts: Posts;

  // Set the service as an injectable inside the constructor
  constructor(private dataService: DummyDataService) {
  }

  ngOnInit() {
    // Data service uttilization
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

}

interface Posts {
  id: number;
  title: string;
  content: string;
}
