import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestAppService } from '../test-app.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private router: Router, private fb: FormBuilder, private testAppService: TestAppService) { }

  ngOnInit(): void {
  }

  loginFormSubmit() {
    this.testAppService.postUserLogin(this.loginForm.value).subscribe(data => {
      if (data) {
        alert('You have login successfully');
        this.router.navigate(['userList']);
      } else {
        alert('Sorry, your user id or password is invalid. Try again.');
      }
    });

  }

}
