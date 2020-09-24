import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestAppService } from '../test-app.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  selectedFile: File;
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    image: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private testAppService: TestAppService) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.testAppService.postImageUpload(uploadData)
      .subscribe();
  }

  registerFormSubmit() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    uploadData.append('formData', this.registerForm.value);
    console.log('registerForm', uploadData);
    this.testAppService.postUser(uploadData).subscribe(data => {
      if (data) {
        alert('You have registered successfully');
        this.router.navigate(['/userLogin']);
      } else {
        alert('Something is error. Please try again');
      }
    });
  }

}
