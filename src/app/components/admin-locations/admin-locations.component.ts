import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-locations',
  templateUrl: './admin-locations.component.html',
  styleUrls: ['./admin-locations.component.css']
})
export class AdminLocationsComponent implements OnInit {

  toggle = false;
  locations = [];
  location = {
    name: '',
    address: ''
  };
  locationsRef = firebase.database().ref('locations/');

  constructor() {
    this.locationsRef.on('value', (snapshot) => {
      this.locations = [];
      if (snapshot.val()) {
        Object.keys(snapshot.val()).forEach(uid => {
          this.locations.push({
            uid: uid,
            name: snapshot.val()[uid].name,
            address: snapshot.val()[uid].address
          });
        });
      } else {
        this.locations = snapshot.val();
      }
    });
  }

  addLocation() {
    this.locationsRef.push(this.location).then(this.resetLocation.bind(this));
  }

  resetLocation() {
    this.location = {
      name: '',
      address: ''
    };
  }

  deleteLocation(uid) {
    firebase.database().ref(`locations/${uid}/`).remove().then(this.resetLocation.bind(this));
  }

  ngOnInit() {
  }

}
