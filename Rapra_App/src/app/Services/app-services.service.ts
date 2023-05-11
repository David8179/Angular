import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of, from, throwError, ObservableInput } from 'rxjs';

import { catchError, tap, map } from 'rxjs/operators';
import { TemplateBindingParseResult } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://127.0.0.1:8000/api/";


  logIn(users: any) {
    return this.http.post(this.baseUrl + "login/", users);
  }

  employeeList() {
    return this.http.get(this.baseUrl + "employeelist/");
  }
  optionList() {
    return this.http.get(this.baseUrl + "options_list/");
  }

  createGroup(data: any) {
    return this.http.post(this.baseUrl + "grouplist/", data);
  }

  getGroups() {
    return this.http.get(this.baseUrl + "grouplist/");
  }

  deleteGroup(id: any) {
    const httpOptions = {

      headers: new HttpHeaders({

        'Content-Type': 'application/json',

      })

    }
    return this.http.post(this.baseUrl + "groupdelete/" + id + "/", {}, httpOptions);
  }

  getGroupByid(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + "groupedit/" + id + "/", {});
  }

  editGroup(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "groupedit/" + data.id + "/", data);
  }

  getAllEvents() {
    return this.http.get(this.baseUrl + "eventlist/");
  }

  createEvent(data: any) {
    return this.http.post(this.baseUrl + "eventlist/", data);
  }

  getEventById(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + "eventedit/" + id + "/", {});
  }
  editEvent(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "eventedit/" + data.id + "/", data);
  }

  delEvent(id: any) {
    return this.http.post(this.baseUrl + "eventdelete/" + id + "/", {});
  }

  getAllPolls() {
    return this.http.get(this.baseUrl + "createpoll/");
  }

  getPollById(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + "editpoll/" + id + "/", {});
  }

  editPoll(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "editpoll/" + data.id + "/", data);
  }

  delPoll(id: any) {
    return this.http.post(this.baseUrl + "deletepoll/" + id + "/", {});
  }

  createPoll(data: any) {
    return this.http.post(this.baseUrl + "createpoll/", data);
  }

  start_stop(id: any, actionText: string): Observable<any> {
    return this.http.post(this.baseUrl + "updatepoll/" + id + "/", { actionText });
  }



}



//   Login(users: any): Observable<any> {

//     const httpOptions = {

//       headers: new HttpHeaders({

//         'Content-Type': 'application/json',

//       })

//     }

//     return this.http.post(this.baseUrl + 'login/', JSON.stringify(users), httpOptions).pipe(

//       map(this.extractData),

//       catchError(this.handleError)

//     )

//   }

//   private extractData(res: any) {
//     const body = res;
//     return body || {};
//   }
//   private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred:', error.error.message);

//     } else {

//       console.error(


//       );

//     }
//     var errorarr = [];

//     var errorobj = { error: "401", errorstatus: error.status };

//     errorarr.push(errorobj)

//     return errorarr;

//   }
// }

