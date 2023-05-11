import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees, Options } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {

  employees: Employees[] = [];
  selectedEmployees = [];

  options: Options[] = [];
  selectedOptions = [];
  polls = {
    poll_name: "",
    end_time: "",
    start_time: ""
  }
  end_time: any;
  start_time: any;
  constructor(
    private router: Router,
    private services: AppServicesService
  ) { }

  ngOnInit(): void {
    this.optionList();
    this.employeeList();

  }

  employeeList() {
    this.services.employeeList().subscribe(
      (res: any) => {
        this.employees = res;
      });
  }

  optionList() {
    this.services.optionList().subscribe((res: any) => {
      console.log(res);
      this.options = res;
    });
  }

  createPoll() {
    let body = {
      poll_name: this.polls.poll_name,
      poll_employees_list: this.selectedEmployees,
      options_list: this.selectedOptions,
      poll_start: this.start_time,
      poll_end: this.end_time

    }
    this.services.createPoll(body).subscribe({
      next: (res) => {
        console.log(res)

        alert('New Poll Added Successfully!');
        return this.router.navigateByUrl('/Poll');
      }
    })
  }

  cancel() {

    return this.router.navigateByUrl('/Poll')
  }

  group() {
    return this.router.navigateByUrl('/Group');
  }

  event() {
    return this.router.navigateByUrl('/Event');
  }

  poll() {
    return this.router.navigateByUrl('/Poll');
  }
  signOut() {
    alert('You are Signed Out!')
    return this.router.navigateByUrl('/');
  }




}
