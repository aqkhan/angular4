import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  name: string;
  age: number;
  address: Address;
  hobbies: any[];
  constructor() { }

  ngOnInit() {
    this.name = 'James Bond';
    this.age = 29;
    this.address = {
      city: 'Abbottabad',
      street: 'House 272, Street 2, Jinnahabd',
      state: 'KPK'
    };
    this.hobbies = ['Blue da bee daba da', 'da bee daba da'];
  }

  clickMe() {
    console.log('Do something you sucker!');
  }
  addHobby(hobby: string) {
    this.hobbies.push(hobby);
    return false;
  }
  delHobby(i: number) {
    this.hobbies.splice(i, 1);
    console.log(this.hobbies);
    return false;
  }

}

interface Address {
  city: string;
  street: string;
  state: string;
}
