import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  users = {
    username: "",
    password: ""
  }

  constructor(
    private router: Router,
    private Services: AppServicesService
  ) { }

  ngOnInit(): void {
  }

  login() {

    let err = ''
    if (!this.users.username && !this.users.password) {
      err = "Please enter username and password"
    }

    else if (!this.users.username) {
      err = "Please enter username"
    }
    else if (!this.users.password) {
      err = "Please enter Password"
    }
    if (err) {
      alert(err)
    }

    else {

      this.Services.logIn(this.users).subscribe({

        next: (response) => {
          console.log(response)
          alert('Login Successfull!')
          return this.router.navigateByUrl('/Welcome')

        },

        error: (error) => {
          console.log(error)
          alert('Invalid login credentials.')

        }

      });
    }
  }
}
