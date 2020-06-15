import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'first-app';

  users = ['nabil', 'yassine', 'ayoub','nabil'];

  test = true;

  delete(uer: String, index : number){
    //let index = this.users.indexOf("user");

    this.users.splice(index, 1);
  }

  isError = false;

  userJson = {

    firstName : "nabil",
    lastName : "mersni",

    adress : {
      city : "ariana",
      zip : "2081"
    }

  }

  usersTab = [
    {
      firstName : "test",
      lastName : "abcd",
      adress : {
      city : "ariana",
      zip : "1243"
    }
    },
    this.userJson,
    this.userJson
  ];

}
