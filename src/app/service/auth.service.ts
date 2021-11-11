import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {SignUpForm} from "../model/SingUpForm";
import {JWTToken} from "../model/jwttoken";
import {SignInForm} from "../model/SignInForm";
import {RecruitmentPost} from "../model/RecruitmentPost";
import {Search} from "../model/search";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data ?: boolean;

  constructor(private http: HttpClient) {
  }
  register(AppUser:any, id:number): Observable<any> {
    return this.http.post<any>(API_URL + '/rest/register/'+id,AppUser);
  }
  login(AppUser: any): Observable<JWTToken> {
    return this.http.post<JWTToken>(API_URL + '/rest/login', AppUser);
  }
  createEmployment(Employment: any,id_user:number): Observable<any> {
    return this.http.post<any>(API_URL + "/rest/createEmployment/"+id_user, Employment)
  }
  createUserProfile(UserProfile: any,id_user:number): Observable<any> {
    return this.http.post<any>(API_URL + "/rest/createUserProfile/"+id_user, UserProfile)
  }
  getUserProfile(id : number): Observable<any> {
    return this.http.get<any>(API_URL + "/rest/UserProfileByUser/"+id)
  }
  getUserbyUserId(userId : number): Observable<any> {
    return this.http.get<any>(API_URL + "/rest/UserById/"+userId)
  }
  deleteEmploymentByid(id : number) :Observable<any> {
    return this.http.get<any>(API_URL + "/admin/deleteElementById/"+id)}
  getListEmploymenyUnauthenticated() :Observable<any> {
    return this.http.get<any>(API_URL + "/admin/listEmploymentUnauthenticated")}
  getListEmploymentAuthenticated() :Observable<any> {
    return this.http.get<any>(API_URL + "/admin/listEmploymentAuthenticated")}
  acceptEmployment(id :number):Observable<any> {
    return this.http.get<any>(API_URL + "/admin/acceptEmployment/"+id)}
  lockEmployment(id :number):Observable<any> {
    return this.http.get<any>(API_URL + "/admin/lockEmployment/"+id)
  }
  getUserProfileById(id :number) :Observable<any> {
    return this.http.get<any>(API_URL + "/rest/findById/"+id)
  }
  getAllListPost() :Observable<any> {
    return this.http.get<any>(API_URL + "/rest/AllListPost")
  }
  recruitment(id_user :number, id_post :number){
    return this.http.get<any>(API_URL + '/user/recruiment/'+id_user+'/'+id_post)
  }
  getEmploymentByUser(id :number) : Observable<any> {
  return this.http.get<any>(API_URL + "/rest/EmploymentByUser/"+id)}
  getUserProfileOfEmployment(id:number): Observable<any> {
    return this.http.get<any>(API_URL + "/rest/UserProfileofEmployment/"+id)}
  showAllUser():Observable<any> {
    return this.http.get<any>(API_URL + "/admin/showAllUser/")}
  deleteUser(id_user :number) : Observable<any> {
    return this.http.get<any>(API_URL + "/admin/deleteById/"+id_user);
  }
  detailRecruitmentPost(id: number): Observable<RecruitmentPost>{
    return this.http.get<RecruitmentPost>(API_URL + "/rest/list/"+id);
  }
  notify(id :number): Observable<any>{
    return this.http.get<any>(API_URL + "/user/notify/"+id);}
  listTopCompany(): Observable<any>{
    return this.http.get<any>(API_URL + "/rest/listTopCompany");}
  listRecruitmentBySalaryHot(): Observable<any>{
    return this.http.get<any>(API_URL + "/rest/findAllBySalaryHot");}
  listRecruitmentByFieldHot(): Observable<any>{
    return this.http.get<any>(API_URL + "/rest/findAllByFieldHot");}

  getEmploymentById(id :number):  Observable<any>{
    return this.http.get<any>(API_URL + "/rest/Employment/"+id);}
  getlitsPost(id :number):  Observable<any>{
    return this.http.get<any>(API_URL + "/rest/listRecruimentPost/"+id);}
  test(value : any): Observable<any>{
    return this.http.post<any>(API_URL + "/rest/find",value)
  }
  test1(search: string): Observable<any>{
    return this.http.get<any>(API_URL + "/rest/searchAdvanced?search=" + search);
  }
  listSave(id:number): Observable<any>{
    return this.http.get<any>(API_URL + "/user/save/"+id);}

  search$ = new BehaviorSubject<string>('');

  setData(data:any){
    this.data = data;
  }
  getData(): boolean{
    return <boolean>this.data;
  }
}
