import { userBalance } from './../mocks/components-mocks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, Observable } from 'rxjs';
import { userData } from '../mocks/components-mocks';
import { UserBalance, UserData } from '../interfaces/componentsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUserData(userCpf : string) : Observable<UserData>{
    //return from(this.http.get(userCpf).pipe(
      //map(()=>{
        //return userData;
      //}),
      //catchError(err =>{
        //return err;
      //})
    //))
    return of(userData);
  }

  getUserbalance(userCPF: string): Observable<UserBalance>{
    //return from(this.http.get(userCPF).pipe(
      //auth.service.spec.tsmap(()=>{
        //return userBalance;
      //}),
      //auth.service.spec.tscatchError(err =>{
        //return err;
      //})
    //))
    return of(userBalance)
  }
}
