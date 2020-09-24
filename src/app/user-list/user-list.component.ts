import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestAppService } from '../test-app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  isClick = false;
  users = [];
  emailForm = this.fb.group({
    email: ['', Validators.required],
    userId: ['', Validators.required]
  });

  constructor(private testAppService: TestAppService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.testAppService.getUsers().subscribe((data: any) => {
      this.users = [];
      this.users = data;
      console.log('users', this.users);
    });
  }

  emailFormSubmit() {
    this.testAppService.postAddEmail(this.emailForm.value).subscribe(data => {
      if (data) {
        this.isClick = false;
        alert('Email has added successfully');
        this.getUsers();
      } else {
        alert('Something is error. Please try again');
      }
    });
  }
  close() {
    this.isClick = false;
  }
  addEmail(id) {
    this.isClick = true;
    this.emailForm.patchValue({
      userId: id
    });
  }

}
