import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  public formRegister : FormGroup;

  constructor(private fb : FormBuilder, private userService: UserService, private router: Router) { 

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
      password : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
      ])

    }

    this.formRegister = fb.group(registerControls)
  }

  ngOnInit(): void {
  }

  get myFirstName(){return this.formRegister.get('firstname');};
  get myLastName(){return this.formRegister.get('lastname');};
  get myEmail(){return this.formRegister.get('email');};
  get myPhone(){return this.formRegister.get('phone');};
  get myPassword(){return this.formRegister.get('password');};
  get myPassword2(){return this.formRegister.get('confirmPassword');};

  registerUser(){
    let data = this.formRegister.value;

    let user = new User(null,data.firstname,data.lastname,data.phone,data.email,data.password);

    this.userService.registerUser(user).subscribe(
      res =>{
        this.router.navigateByUrl('/users')
      },
      err =>{
        console.log(err);
      }
    )

  }

}
