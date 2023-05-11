import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  employees: Employees[] = [];
  selectedEmployees: any[] = [];
  events: any[] = []; // Initialize events as an empty array
  response: any;

  constructor(
    private router: Router,
    private services: AppServicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEventId();
  }

  getEventId() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");

      if (id) {
        this.services.getEventById(id).subscribe(res => {
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
      }
    );
  }


  goBack() {
    return this.router.navigateByUrl('/Event')
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
