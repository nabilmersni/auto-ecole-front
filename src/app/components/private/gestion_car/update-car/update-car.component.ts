import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent implements OnInit {

  public formAddCar : FormGroup;

  constructor(private fb : FormBuilder, private carService: CarService, private router: Router, private activedRouter : ActivatedRoute) { 

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

    let carId = this.activedRouter.snapshot.params.id;
    this.carService.getOneCar(carId).subscribe(
      res =>{
        let car = res;

        this.formAddCar.patchValue({
          matricule : car.matricule,
          marque : car.marque,
          color : car.color,
        })
      },
      err =>{
        console.log(err);
      }
    )
  }

  get mymatricule(){return this.formAddCar.get('matricule');};
  get mymarque(){return this.formAddCar.get('marque');};
  get mycolor(){return this.formAddCar.get('color');};


  updateCar(){
    let carId = this.activedRouter.snapshot.params.id;

    let data = this.formAddCar.value;
    let car = new Car(null,data.matricule,data.marque,data.color);


    this.carService.updateCar(carId,car).subscribe(
      res =>{
        console.log("car updated");
        console.log(res);
        this.router.navigateByUrl('/cars')
      },
      err =>{
        console.log("car not updated");
      }
    )

  }


}
