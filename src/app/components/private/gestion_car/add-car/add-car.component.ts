import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  public formAddCar : FormGroup;

  constructor(private fb : FormBuilder, private carService: CarService, private router: Router) { 

    let addCarControls = {

      matricule : new FormControl("",[
        Validators.required,
      ]),
      marque : new FormControl("",[
        Validators.required,
      ]),
      color : new FormControl("",[
        Validators.required,
      ]),

    }

    this.formAddCar = fb.group(addCarControls)
  }

  ngOnInit(): void {
  }

  get mymatricule(){return this.formAddCar.get('matricule');};
  get mymarque(){return this.formAddCar.get('marque');};
  get mycolor(){return this.formAddCar.get('color');};


  addCar(){
    let data = this.formAddCar.value;

    let car = new Car(null,data.matricule,data.marque,data.color);

    this.carService.addCar(car).subscribe(
      res =>{
        this.router.navigateByUrl('/cars')
      },
      err =>{
        console.log(err);
      }
    )

  }


}
