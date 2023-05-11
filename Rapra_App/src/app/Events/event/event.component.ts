import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  allEvents: any;

  constructor(
    private router: Router,
    private services: AppServicesService
  ) { }
  ngOnInit(): void {
    this.getAllEvents();
  }
  getAllEvents() {
    this.services.getAllEvents().subscribe({
      next: (res) => {
        this.allEvents = res;

      }
    })
  }

  deleteEvent(id: any) {
    if (window.confirm('Are you sure want to delete this Event?')) {
      this.services.delEvent(id).subscribe({
        next: (res) => {
          console.log(id);
          this.getAllEvents();
          alert('Event Deleted Successfully!');
          return this.router.navigateByUrl('/Event');
        }
      });
    }
    else {
      alert('Failed to delete Event!')
    }
  }

  getEventById(id: any) {
    return this.router.navigate(['/Edit_Event/', id]);
  }

  eventDetails(id: any) {
    return this.router.navigate(['/Event_Details/', id]);
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

  create() {
    return this.router.navigateByUrl('/New_Event');
  }

  new() {
    return this.router.navigateByUrl('/New_Event');
  }

}
