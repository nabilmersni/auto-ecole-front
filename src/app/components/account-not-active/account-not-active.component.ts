import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-not-active',
  templateUrl: './account-not-active.component.html',
  styleUrls: ['./account-not-active.component.scss']
})
export class AccountNotActiveComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

}
