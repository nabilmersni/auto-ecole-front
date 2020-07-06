import { Component, OnInit } from '@angular/core';
import { CodeMeetService } from 'src/app/services/code-meet.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-user-code-meet',
  templateUrl: './user-code-meet.component.html',
  styleUrls: ['./user-code-meet.component.scss']
})
export class UserCodeMeetComponent implements OnInit {

  constructor(private codeMeetService: CodeMeetService) { }

  upcomingCodeMeets = [];
  passedCodeMeets = [];

  ngOnInit(): void {
    this.getAllUpcomingCodeMeet();
    this.getAllPassedCodeMeet();
  }


  getAllUpcomingCodeMeet() {
    this.codeMeetService.upcomingCodeMeetForOneUser().subscribe(
      res => {
        this.upcomingCodeMeets = res;
        console.log(res);
      }
    )
  }

  
  getAllPassedCodeMeet() {
    this.codeMeetService.passedCodeMeetForOneUser().subscribe(
      res => {
        this.passedCodeMeets = res;
        console.log(res);
      }
    )
  }

/*
  deleteCodeMeet(car, index) {
    this.codeMeets.splice(index, 1);

    this.codeMeetService.deleteCodeMeet(car._id).subscribe(
      res => {
        console.log("code meet deleted")
      },
      err => {
        console.log("code meet not deleted")
      }
    )
  }
*/
}
