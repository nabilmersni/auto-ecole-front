import { Component, OnInit } from '@angular/core';
import { ConduiteMeetService } from 'src/app/services/conduite-meet.service';

@Component({
  selector: 'app-conduite-meet-list',
  templateUrl: './conduite-meet-list.component.html',
  styleUrls: ['./conduite-meet-list.component.scss']
})
export class ConduiteMeetListComponent implements OnInit {

  constructor(private conduiteMeetService: ConduiteMeetService) { }

  conduiteMeets = [];

  ngOnInit(): void {
    this.getAllConduiteMeet();
  }


  getAllConduiteMeet() {
    this.conduiteMeetService.allConduiteMeet().subscribe(
      res => {
        this.conduiteMeets = res;
        console.log(res);

      }
    )
  }


  deleteConduiteMeet(conduite, index) {
    this.conduiteMeets.splice(index, 1);

    this.conduiteMeetService.deleteConduiteMeet(conduite._id).subscribe(
      res => {
        console.log("conduite meet deleted")
      },
      err => {
        console.log("conduite meet not deleted")
      }
    )
  }

}
