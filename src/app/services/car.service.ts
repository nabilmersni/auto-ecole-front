import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _baselocalUrl = "http://localhost:3000";
  //Api router
  private _allCarUserUrl = this._baselocalUrl + "/car/all/";

  private _addCarUrl = this._baselocalUrl + "/car/add";

  private _deleteCarUrl = this._baselocalUrl + "/car/delete/";

  private _getOneCar = this._baselocalUrl + "/car/one/";

  private _updateCar = this._baselocalUrl + "/car/update/";

  constructor(private http:HttpClient) { }

  allCar(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._allCarUserUrl,{headers: headers_options});
  }

  addCar(car){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.post<any>(this._addCarUrl,car,{headers: headers_options});
  }

  deleteCar(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteCarUrl+id,{headers: headers_options});
  }

  getOneCar(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getOneCar+id,{headers: headers_options});
  }
  
  updateCar(id,car){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updateCar+id,car,{headers: headers_options});
  }
}
