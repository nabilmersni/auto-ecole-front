import { Component, OnInit } from '@angular/core';
import { ConduiteMeetService } from 'src/app/services/conduite-meet.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-user-conduite-meet',
  templateUrl: './user-conduite-meet.component.html',
  styleUrls: ['./user-conduite-meet.component.scss']
})
export class UserConduiteMeetComponent implements OnInit {

  constructor(private conduiteMeetService: ConduiteMeetService) { }

  upcomingCodeMeets = [];
  passedCodeMeets = [];

  ngOnInit(): void {
    this.getAllUpcomingCodeMeet();
    this.getAllPassedCodeMeet();
  }


  getAllUpcomingCodeMeet() {
    this.conduiteMeetService.upcomingConduitedeMeetForOneUser().subscribe(
      res => {
        this.upcomingCodeMeets = res;
        console.log(res);
      }
    )
  }

  
  getAllPassedCodeMeet() {
    this.conduiteMeetService.passedConduiteMeetForOneUser().subscribe(
      res => {
        this.passedCodeMeets = res;
        console.log(res);
      }
    )
  }

}
