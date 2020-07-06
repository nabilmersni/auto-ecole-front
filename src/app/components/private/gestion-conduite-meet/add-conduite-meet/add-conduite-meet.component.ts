import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConduiteMeetService } from 'src/app/services/conduite-meet.service';
import { UserService } from 'src/app/services/user.service';
import { CarService } from 'src/app/services/car.service';
import { MonitorService } from 'src/app/services/monitor.service';
import { Router } from '@angular/router';
import { ConduiteMeet } from 'src/app/models/conduite-meet';

@Component({
  selector: 'app-add-conduite-meet',
  templateUrl: './add-conduite-meet.component.html',
  styleUrls: ['./add-conduite-meet.component.scss']
})
export class AddConduiteMeetComponent implements OnInit {

  public formAddCodeMeet : FormGroup;
  users = [];
  monitors = [];
  cars = [];

  constructor(private fb : FormBuilder, private conduiteMeetService: ConduiteMeetService,private userService :UserService,private carService :CarService,private monitorService :MonitorService, private router: Router) { 

    let addCodeMeetControls = {

      date : new FormControl("",[
        Validators.required,
      ]),
      time : new FormControl("",[
        Validators.required,
      ]),
      user_id : new FormControl("",[
        Validators.required,
      ]),
      monitor_id : new FormControl("",[
        Validators.required,
      ]),
      car : new FormControl("",[
        Validators.required,
      ]),

    }

    this.formAddCodeMeet = fb.group(addCodeMeetControls)
  }

  ngOnInit(): void {
    this.getActiveUser();
    this.getActiveMonitor();
    this.getAllCar();
  }

  get mydate(){return this.formAddCodeMeet.get('date');};
  get mytime(){return this.formAddCodeMeet.get('time');};
  get myuser_id(){return this.formAddCodeMeet.get('user_id');};
  get mymonitor_id(){return this.formAddCodeMeet.get('monitor_id');};
  get mycar(){return this.formAddCodeMeet.get('car');};


  AddConduiteMeet(){
    let data = this.formAddCodeMeet.value;


    let conduiteMeet = new ConduiteMeet(null,data.date,data.time,data.user_id,data.monitor_id,data.car);
    console.log(data.car);

    this.conduiteMeetService.addConduiteMeet(conduiteMeet).subscribe(
      res =>{
        this.router.navigateByUrl('/conduite-meet-list')
      },
      err =>{
        console.log(err);
      }
    )

  }

  getActiveUser(){
      this.userService.activeUsers().subscribe(
        res =>{
          this.users = res;
          console.log(res); 
        }
      )
  }

  getActiveMonitor(){
    this.monitorService.activeMonitors().subscribe(
      res =>{
        this.monitors = res;
        console.log(res); 
      }
    )
}

getAllCar(){
  this.carService.allCar().subscribe(
    res =>{
      this.cars = res;
      console.log(res); 
    }
  )
}





}
