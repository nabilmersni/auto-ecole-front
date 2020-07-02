import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService : UserService) { }

  users = [];

  ngOnInit(): void {
    this.getAll();
    

    

  }//nginit

  getAll(){
    this.userService.allUsers().subscribe(
      res =>{
        this.users = res;
        console.log(res);
        
      }
    )
  }

  updateTest(user){
    this.userService.update_state_User(user._id).subscribe(
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

    this.userService.deleteUser(user._id).subscribe(
      res =>{
        console.log("deleted")
      },
      err =>{
        console.log("not deleted")
      }
    )

  }




}
