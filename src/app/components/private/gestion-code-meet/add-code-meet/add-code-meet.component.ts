import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CodeMeetService } from 'src/app/services/code-meet.service';
import { Router } from '@angular/router';
import { CodeMeet } from 'src/app/models/code-meet';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-code-meet',
  templateUrl: './add-code-meet.component.html',
  styleUrls: ['./add-code-meet.component.scss']
})
export class AddCodeMeetComponent implements OnInit {

  public formAddCodeMeet : FormGroup;
  users = [];

  constructor(private fb : FormBuilder, private codeMeetService: CodeMeetService, private router: Router,private userService :UserService) { 

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

    }

    this.formAddCodeMeet = fb.group(addCodeMeetControls)
  }

  ngOnInit(): void {
    this.getActiveUser();
  }

  get mydate(){return this.formAddCodeMeet.get('date');};
  get mytime(){return this.formAddCodeMeet.get('time');};
  get myuser_id(){return this.formAddCodeMeet.get('user_id');};


  addCodeMeet(){
    let data = this.formAddCodeMeet.value;

    let codeMeet = new CodeMeet(null,data.date,data.time,data.user_id);

    this.codeMeetService.addCodeMeet(codeMeet).subscribe(
      res =>{
        this.router.navigateByUrl('/code-meet-list')
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

}
