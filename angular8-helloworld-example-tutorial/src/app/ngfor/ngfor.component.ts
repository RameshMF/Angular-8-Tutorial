import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
    id: 102,
    firstName: "Tom",
    lastName: "Cruise",
    emailId: "tom@gmail.com"
  }];
}
