import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-hours',
  templateUrl: './admin-hours.component.html',
  styleUrls: ['./admin-hours.component.css']
})
export class AdminHoursComponent implements OnInit {

  toggle = false;
  days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  hours = {};
  day = null;
  open = null;
  close = null;
  closed = false;

  constructor() {
    firebase.database().ref('/hours').on('value', (snapshot) => {
      this.hours = snapshot.val();
    });
  }

  getHours() {
    var times = [];
    for (var hour = 0; hour <= 24; hour++) {
      var timeOfDay = (hour <= 12) ? 'AM' : 'PM';
      var time = (hour === 0) ? 12 : hour;
      if (hour > 12) time = (hour - 12);
      times.push(`${time}:00${timeOfDay}`);
      times.push(`${time}:30${timeOfDay}`);
    }
    return times;
  }

  getDay(dayOfWeek) {
    this.reset();
    this.day = dayOfWeek;
    if (this.hours && this.hours[this.day]) {
      this.open = this.hours[this.day].open;
      this.close = this.hours[this.day].close;
    } else {
      this.closed = true;
    }
  }

  reset() {
    this.day = null;
    this.close = null;
    this.open = null;
    this.closed = false;
  }

  updateDay() {
    if (this.closed) this.open = this.close = null;
    firebase.database().ref(`hours/${this.day}`).set({
      open: this.open,
      close: this.close
    }).then(this.reset.bind(this));
  }

  ngOnInit() {
  }

}
