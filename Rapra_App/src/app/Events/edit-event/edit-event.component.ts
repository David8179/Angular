import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  employees: Employees[] = [];
  selectedEmployees: any[] = [];
  events: any[] = [];
  response: any;
  eventId: any;

  constructor(
    private router: Router,
    private services: AppServicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEventId();
    this.employeeList();
  }

  getEventId() {
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get("id");

      if (this.eventId) {
        this.services.getEventById(this.eventId).subscribe(res => {
          this.response = res;
          this.events.push(this.response);
          console.log(this.events);
        });
      }
    });
  }

  employeeList() {
    this.services.employeeList().subscribe(
      (res: any) => {
        console.log(res);
        this.employees = res;
      });
  }


  change(event: any) {
    this.services.editEvent(event).subscribe({
      next: (res) => {
        console.log(res);
        alert('Chnages Applied Successfully!');
        return this.router.navigateByUrl('/Event');
      }
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

