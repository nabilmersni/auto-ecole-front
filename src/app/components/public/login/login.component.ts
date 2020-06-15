import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin : FormGroup;

  constructor(private fb :FormBuilder) { 

    let logControls = {

      email : new FormControl("",[
        Validators.required,
        Validators.email,
        Validators.minLength(2)
      ]),

      password : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
      ]),
    }

    this.formLogin = fb.group(logControls)

  }

  ngOnInit(): void {
  }

  get logemail(){return this.formLogin.get('email');};
  get logpassword(){return this.formLogin.get('password');};

  logIn(){
    console.log(this.formLogin.value);
  }

}
