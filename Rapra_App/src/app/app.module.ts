import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './Events/event/event.component';
import { PollsComponent } from './Polls/polls/polls.component';
import { LogInComponent } from './LogIn/log-in/log-in.component';
import { WelcomeComponent } from './Welcome Page/welcome/welcome.component';
import { GroupComponent } from './Groups/group/group.component';
import { NewGroupComponent } from './Groups/new-group/new-group.component';
import { FormsModule } from '@angular/forms';
import { NewEventComponent } from './Events/new-event/new-event.component';
import { NewPollComponent } from './Polls/new-poll/new-poll.component';
import { EditPollComponent } from './Polls/edit-poll/edit-poll.component';
import { GroupDetailsComponent } from './Groups/group-details/group-details.component';
import { EditGroupComponent } from './Groups/edit-group/edit-group.component';
import { EventDetailsComponent } from './Events/event-details/event-details.component';
import { PollDetailsComponent } from './Polls/poll-details/poll-details.component';
import { EditEventComponent } from './Events/edit-event/edit-event.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    PollsComponent,
    LogInComponent,
    WelcomeComponent,
    GroupComponent,
    NewGroupComponent,
    NewEventComponent,
    NewPollComponent,
    EditPollComponent,
    GroupDetailsComponent,
    EditGroupComponent,
    EventDetailsComponent,
    PollDetailsComponent,
    EditEventComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GoogleMapsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
