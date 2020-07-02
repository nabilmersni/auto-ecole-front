import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.scss']
})
export class ListVehiculeComponent implements OnInit {

  constructor(private userService : CarService) { }

  cars = [];

  ngOnInit(): void {
    this.getAllCar();
  }


  getAllCar(){
    this.userService.allCar().subscribe(
      res =>{
        this.cars = res;
        console.log(res);
        
      }
    )
  }

  
  deleteCar(car,index){
    this.cars.splice(index,1);

    this.userService.deleteCar(car._id).subscribe(
      res =>{
        console.log("car deleted")
      },
      err =>{
        console.log("car not deleted")
      }
    )
  }

}
