import { Component, OnInit } from '@angular/core';
import { CodeMeetService } from 'src/app/services/code-meet.service';

@Component({
  selector: 'app-code-meet-list',
  templateUrl: './code-meet-list.component.html',
  styleUrls: ['./code-meet-list.component.scss']
})
export class CodeMeetListComponent implements OnInit {

  constructor(private codeMeetService: CodeMeetService) { }

  codeMeets = [];

  ngOnInit(): void {
    this.getAllCodeMeet();
  }


  getAllCodeMeet() {
    this.codeMeetService.allCodeMeet().subscribe(
      res => {
        this.codeMeets = res;
        console.log(res);

      }
    )
  }


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


}
