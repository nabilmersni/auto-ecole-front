import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private _baselocalUrl = "http://localhost:3000";

  //Api router
  private _monitorRegisterUrl = this._baselocalUrl + "/monitor/register";
  //Api router
  private _monitorLoginUrl = this._baselocalUrl + "/monitor/login";
  //Api router
  private _allmonitorUrl = this._baselocalUrl + "/monitor/all";
    //Api router
    private _activemonitorUrl = this._baselocalUrl + "/monitor/active";
  //Api router
  private _updatemonitor_stateUrl = this._baselocalUrl + "/monitor/update-state/";

  //Api router
  private _updatemonitorInfoUrl = this._baselocalUrl + "/monitor/update/";
  //Api router
  private _deletemonitorUrl = this._baselocalUrl + "/monitor/delete/";
  //getOnemonitor
  private _getOnemonitorUrl = this._baselocalUrl + "/monitor/one/";

  constructor(private http:HttpClient) { }




  registermonitor(user:User){
    return this.http.post<any>(this._monitorRegisterUrl,user);
  }

  allmonitors(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._allmonitorUrl,{headers: headers_options});
  }

  activeMonitors(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._activemonitorUrl,{headers: headers_options});
  }

  getOnemonitor(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getOnemonitorUrl+id,{headers: headers_options});
  }
  

  update_state_monitor(id: String){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updatemonitor_stateUrl+id,null,{headers: headers_options});
  }

  updateInfomonitor(id,monitor){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updatemonitorInfoUrl+id,monitor,{headers: headers_options});
  }

  deletemonitor(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.delete<any>(this._deletemonitorUrl+id,{headers: headers_options});
  }


}
