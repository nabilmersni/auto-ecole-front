import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CodeMeet } from '../models/code-meet';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class CodeMeetService {

  private _baselocalUrl = "http://localhost:3000";
  //Api router
  private _allCodeMeetUserUrl = this._baselocalUrl + "/code_meet/all/";
  private _upcomingCodeMeetUserUrl = this._baselocalUrl + "/code_meet/all/upcoming/";
  private _passedCodeMeetUserUrl = this._baselocalUrl + "/code_meet/all/passed/";

  private _addCodeMeetUrl = this._baselocalUrl + "/code_meet/add";

  private _deleteCodeMeetUrl = this._baselocalUrl + "/code_meet/delete/";

  private _getOneCodeMeetUrl = this._baselocalUrl + "/code_meet/one/";

  private _updateCodeMeetUrl = this._baselocalUrl + "/code_meet/update/";

  constructor(private http:HttpClient) { }


  allCodeMeet(){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._allCodeMeetUserUrl,{headers: headers_options});
  }

  upcomingCodeMeetForOneUser(){
    let user_id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._upcomingCodeMeetUserUrl+user_id,{headers: headers_options});
  }

  passedCodeMeetForOneUser(){
    let user_id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._passedCodeMeetUserUrl+user_id,{headers: headers_options});
  }

  addCodeMeet(codeMeet){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.post<any>(this._addCodeMeetUrl,codeMeet,{headers: headers_options});
  }

  deleteCodeMeet(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteCodeMeetUrl+id,{headers: headers_options});
  }

  getOneCodeMeet(id){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.get<any>(this._getOneCodeMeetUrl+id,{headers: headers_options});
  }
  
  updateCodeMeet(id,codeMeet){
    let headers_options = new HttpHeaders().set("Authorisation",localStorage.getItem("token"));
    return this.http.patch<any>(this._updateCodeMeetUrl+id,codeMeet,{headers: headers_options});
  }

}

/*
    let user_id;
    let token = localStorage.getItem("token")
    if(token){
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      let user_id =  new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    }
*/