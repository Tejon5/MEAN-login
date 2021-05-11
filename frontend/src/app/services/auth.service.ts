import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//esta url debe ir en un .env
private URL = "http://localhost:3000"

  constructor(private http:HttpClient, private router: Router) { }

  signUp(user:any){
    return this.http.post<any>(this.URL + "/signup", user)
  }

  signIn(user:any){
    return this.http.post<any>(this.URL + "/signIn", user)
  }

  loggedIn():Boolean{
    return !!localStorage.getItem("token")
  }

  getToken(){
    return localStorage.getItem("token")
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/signin"])
  }
}
