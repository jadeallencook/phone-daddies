import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-unavailable',
  templateUrl: './admin-unavailable.component.html',
  styleUrls: ['./admin-unavailable.component.css']
})
export class AdminUnavailableComponent implements OnInit {

  toggle = false;
  dates = [];
  date = {
    in: null,
    out: null,
    date: null
  };

  constructor() {
    firebase.database().ref('unavailable/').on('value', (snapshot) => {
      this.dates = [];
      if (snapshot.val()) {
        Object.keys(snapshot.val()).forEach(dateStamp => {
          this.dates.push({
            in: snapshot.val()[dateStamp].in,
            out: snapshot.val()[dateStamp].out,
            date: dateStamp
          });
        });
      }
    });
  }

  deleteDate(date) {
    firebase.database().ref(`unavailable/${date}/`).remove();
  }

  addDate() {
    firebase.database().ref(`unavailable/${this.date.date}`).set({
      out: this.date.out,
      in: this.date.in,
    }).then(() => {
      this.date = {
        in: null,
        out: null,
        date: null
      };
    })
  }

  ngOnInit() {
  }

}
