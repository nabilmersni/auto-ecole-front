import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/services/monitor.service';

@Component({
  selector: 'app-list-moniteurs',
  templateUrl: './list-moniteurs.component.html',
  styleUrls: ['./list-moniteurs.component.scss']
})
export class ListMoniteursComponent implements OnInit {

  constructor(private monitorService : MonitorService) { }

  users = [];

  ngOnInit(): void {
    this.getAll();
    

    

  }//nginit

  getAll(){
    this.monitorService.allmonitors().subscribe(
      res =>{
        this.users = res;
        console.log(res);
        
      }
    )
  }

  updateTest(user){
    this.monitorService.update_state_monitor(user._id).subscribe(
      res =>{
        console.log("user updated");
        this.getAll();
      },
      err =>{
        console.log("user not updated");
      }
    )

  }

  deleteTest(user,index){

    this.users.splice(index,1);

    this.monitorService.deletemonitor(user._id).subscribe(
      res =>{
        console.log("deleted")
      },
      err =>{
        console.log("not deleted")
      }
    )

  }

}
