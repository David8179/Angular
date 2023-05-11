import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groups } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  allGroups: any;

  constructor(
    private router: Router,
    private Services: AppServicesService
  ) { }


  ngOnInit(): void {
    this.getGroups();
  }


  getGroups() {
    this.Services.getGroups().subscribe({
      next: (res) => {
        this.allGroups = res;
      }
    });
  }

  groupDelete(id: any) {
    if (window.confirm('Are you sure want to delete this Group?')) {
      this.Services.deleteGroup(id).subscribe({
        next: (res) => {
          console.log(res);
          alert('Group deleted Successfully.')
          this.getGroups();
          return this.router.navigateByUrl('/Group');
        }

      })
    }
    else {
      alert('Failed to delete Group!')
    }
  }

  getGroupById(id: any) {
    return this.router.navigate(['/groupedit/', id]);
  }

  details(id: any) {
    return this.router.navigate(['/Group_Detials/', id]);
  }

  create() {
    return this.router.navigateByUrl('/New_Group');
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
