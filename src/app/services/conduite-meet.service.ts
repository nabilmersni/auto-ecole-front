import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ConduiteMeet } from '../models/conduite-meet';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class ConduiteMeetService {

  private _baselocalUrl = "http://localhost:3000";
  //Api router
  private _allconduiteMeetUserUrl = this._baselocalUrl + "/conduite_meet/all/";
  private _upcomingConduiteMeetUserUrl = this._baselocalUrl + "/conduite_meet/all/upcoming/";
  private _passedConduiteMeetUserUrl = this._baselocalUrl + "/conduite_meet/all/passed/";

  private _upcomingConduiteMeetForMonitorUserUrl = this._baselocalUrl + "/conduite_meet/all/monitor/upcoming/";
  private _passedConduiteMeetForMonitorUserUrl = this._baselocalUrl + "/conduite_meet/all/monitor/passed/";

  private _addconduiteMeetUrl = this._baselocalUrl + "/conduite_meet/add";

  private _deleteconduiteMeetUrl = this._baselocalUrl + "/conduite_meet/delete/";

  private _getOneconduiteMeetUrl = this._baselocalUrl + "/conduite_meet/one/";

  private _updateconduiteMeetUrl = this._baselocalUrl + "/conduite_meet/update/";

  constructor(private http:HttpClient) { }


  allConduiteMeet(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._allconduiteMeetUserUrl,{headers: headers_options});
  }

  upcomingConduitedeMeetForOneUser(){
    let user_id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._upcomingConduiteMeetUserUrl+user_id,{headers: headers_options});
  }

  passedConduiteMeetForOneUser(){
    let user_id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._passedConduiteMeetUserUrl+user_id,{headers: headers_options});
  }
  //-----------------------------------------
  upcomingConduitedeMeetForOneMonitor(){
    let user_id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._upcomingConduiteMeetForMonitorUserUrl+user_id,{headers: headers_options});
  }

  passedConduiteMeetForOneMonitor(){
    let user_id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._passedConduiteMeetForMonitorUserUrl+user_id,{headers: headers_options});
  }
  //-------------------------------------------

  addConduiteMeet(conduiteMeet){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.post<any>(this._addconduiteMeetUrl,conduiteMeet,{headers: headers_options});
  }

  deleteConduiteMeet(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteconduiteMeetUrl+id,{headers: headers_options});
  }

  getOneConduiteMeet(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getOneconduiteMeetUrl+id,{headers: headers_options});
  }
  
  updateConduiteMeet(id,conduiteMeet){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updateconduiteMeetUrl+id,conduiteMeet,{headers: headers_options});
  }
  
}
