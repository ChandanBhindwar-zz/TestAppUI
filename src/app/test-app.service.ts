import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestAppService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl + 'api/myaccount/getUsers');
  }
  postUser(user) {
    return this.http.post(this.apiUrl + 'api/myaccount/postUser', user);
  }
  postUserLogin(user) {
    return this.http.post(this.apiUrl + 'api/myaccount/postUserLogin', user);
  }

  postImageUpload(uploadData) {
    return this.http.post(this.apiUrl + 'api/myaccount/postImageUpload', uploadData);
  }

  postAddEmail(data){
    return this.http.post(this.apiUrl + 'api/myaccount/postAddEmail', data);

  }


}
