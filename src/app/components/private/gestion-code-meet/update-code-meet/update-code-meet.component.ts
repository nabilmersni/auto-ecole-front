import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CodeMeetService } from 'src/app/services/code-meet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CodeMeet } from 'src/app/models/code-meet';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-code-meet',
  templateUrl: './update-code-meet.component.html',
  styleUrls: ['./update-code-meet.component.scss']
})
export class UpdateCodeMeetComponent implements OnInit {

  public formAddCodeMeet : FormGroup;
  users = [];
  nrSelect
  

  constructor(private fb : FormBuilder, private codeMeetService: CodeMeetService,private userService :UserService, private router: Router,private activedRouter : ActivatedRoute) { 

    let userId = this.activedRouter.snapshot.params.userId;
    this.nrSelect = userId;

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

    let codeMeetId = this.activedRouter.snapshot.params.id;
    
    this.codeMeetService.getOneCodeMeet(codeMeetId).subscribe(
      res =>{
        let codeMeet = res;

        this.formAddCodeMeet.patchValue({
          date : codeMeet.date,
          time : codeMeet.time,
        })
      },
      err =>{
        console.log(err);
      }
    )

    this.getActiveUser();
  }

  get mydate(){return this.formAddCodeMeet.get('date');};
  get mytime(){return this.formAddCodeMeet.get('time');};
  get myuser_id(){return this.formAddCodeMeet.get('user_id');};



  updateCodeMeet(){
    let codeMeetId = this.activedRouter.snapshot.params.id;

    let data = this.formAddCodeMeet.value;

    let codeMeet = new CodeMeet(null,data.date,data.time,data.user_id);


    this.codeMeetService.updateCodeMeet(codeMeetId,codeMeet).subscribe(
      res =>{
        console.log("code meet updated");
        console.log(res);
        this.router.navigateByUrl('/code-meet-list')
      },
      err =>{
        console.log("code meet not updated");
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
