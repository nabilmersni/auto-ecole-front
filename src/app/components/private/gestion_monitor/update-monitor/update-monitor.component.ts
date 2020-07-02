import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-monitor',
  templateUrl: './update-monitor.component.html',
  styleUrls: ['./update-monitor.component.scss']
})
export class UpdateMonitorComponent implements OnInit {

  public formRegister : FormGroup;
  


  constructor(private fb : FormBuilder, private userService: UserService, private router: Router,private activeroute: ActivatedRoute) { 

    let registerControls = {

      firstname : new FormControl("",[
        Validators.required,
        Validators.pattern("[A-Za-z ']+"),
        Validators.minLength(2)
      ]),
      lastname : new FormControl("",[
        Validators.required,
        Validators.pattern("[A-Za-z ']+"),
        Validators.minLength(2)
      ]),
      email : new FormControl("",[
        Validators.required,
        Validators.email,
        Validators.minLength(2)
      ]),
      phone : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern("[2-9][0-9]+")
      ]),
      /*
      password : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
      ])*/

    }

    this.formRegister = fb.group(registerControls)
  }

  ngOnInit(): void {

    let userId = this.activeroute.snapshot.params.id;
    this.userService.getOnemonitor(userId).subscribe(
      res =>{
        let user = res;

        this.formRegister.patchValue({
          firstname : user.firstname,
          lastname : user.lastname,
          email : user.email,
          phone : user.phone,
        })
      },
      err =>{
        console.log(err);
      }
    )
  }


  get myFirstName(){return this.formRegister.get('firstname');};
  get myLastName(){return this.formRegister.get('lastname');};
  get myEmail(){return this.formRegister.get('email');};
  get myPhone(){return this.formRegister.get('phone');};
  get myPassword(){return this.formRegister.get('password');};
  get myPassword2(){return this.formRegister.get('confirmPassword');};



  updateInfoUser(){
    let userId = this.activeroute.snapshot.params.id;

    let data = this.formRegister.value;
    let user = new User(null,data.firstname,data.lastname,data.phone,data.email,null);

    this.userService.updateInfomonitor(userId,user).subscribe(
      res =>{
        console.log("monitor Info updated");
        console.log(res);
        this.router.navigateByUrl('/monitors')
      },
      err =>{
        console.log("monitor not updated");
      }
    )

  }

}
