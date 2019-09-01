import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {

  show: boolean = true

  user = {
    id : 1,
    name: "Ramesh"
  };

  a = true;
  b = false;

  showActions = true;

  users = [{
    id: 100,
    firstName: "Ramesh",
    lastName: "Fadatare",
    emailId: "ramesh@gmail.com"
  },
  {
    id: 101,
    firstName: "Tony",
    lastName: "Stark",
    emailId: "tony@gmail.com"
  }, {
    id: 100,
    firstName: "Tom",
    lastName: "Cruise",
    emailId: "tom@gmail.com"
  }];
}
