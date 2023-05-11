import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  employees: Employees[] = [];
  selectedEmployees = [];
  events = {
    event_name: "",
    description: "",
    event_date: "",
    event_location: "",
  }

  constructor(
    private router: Router,
    private services: AppServicesService
  ) { }

  ngOnInit(): void {
    this.employeeList();
  }

  createEvent() {
    let err = ''
    if (!this.events.event_name) {
      err = "Please enter Event Name"
    }
    else if (!this.events.description) {
      err = "Please enter Description"
    }
    else if (!this.events.event_date) {
      err = "Please enter Event Date"
    }
    else if (!this.events.event_location) {
      err = "Please enter Event location"
    }
    if (err) {
      alert(err)
    }

    else {

      let body = {
        event_name: this.events.event_name,
        description: this.events.description,
        event_location: this.events.event_location,
        event_date: this.events.event_date,
        event_employees_list: this.selectedEmployees
      }
      this.services.createEvent(body).subscribe({
        next: (res) => {
          console.log(res);
          alert('New Event Added Successfully!');
          return this.router.navigateByUrl('/Event');
        },
        error: (error) => {
          console.log(error)
          alert('Please Select atleast One Employee!')

        }
      })

    }
  }

  employeeList() {
    this.services.employeeList().subscribe(
      (res: any) => {
        console.log(res);
        this.employees = res;
      });
  }

  cancel() {
    return this.router.navigateByUrl('/Event');
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

