import { Component, OnInit } from '@angular/core';
import { ConduiteMeetService } from 'src/app/services/conduite-meet.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-monitor-conduite-meet',
  templateUrl: './monitor-conduite-meet.component.html',
  styleUrls: ['./monitor-conduite-meet.component.scss']
})
export class MonitorConduiteMeetComponent implements OnInit {

  constructor(private conduiteMeetService: ConduiteMeetService) { }

  upcomingCodeMeets = [];
  passedCodeMeets = [];

  ngOnInit(): void {
    this.getAllUpcomingCodeMeet();
    this.getAllPassedCodeMeet();
  }


  getAllUpcomingCodeMeet() {
    this.conduiteMeetService.upcomingConduitedeMeetForOneMonitor().subscribe(
      res => {
        this.upcomingCodeMeets = res;
        console.log(res);
      }
    )
  }

  
  getAllPassedCodeMeet() {
    this.conduiteMeetService.passedConduiteMeetForOneMonitor().subscribe(
      res => {
        this.passedCodeMeets = res;
        console.log(res);
      }
    )
  }

}
