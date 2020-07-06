import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router :Router,private userService: UserService) { }

  ngOnInit(): void {
    if(this.userService.isLoggedInAndActive()){
      this.router.navigateByUrl('/dashboard')
    }else{
      this.router.navigateByUrl('/accountdesactiver')
    }
  }

}
