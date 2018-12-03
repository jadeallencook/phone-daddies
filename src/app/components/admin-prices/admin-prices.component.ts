import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-prices',
  templateUrl: './admin-prices.component.html',
  styleUrls: ['./admin-prices.component.css']
})
export class AdminPricesComponent implements OnInit {

  toggle = false;

  quote = {
    make: '',
    model: '',
    quote: 0,
  }

  allMakes = environment.phones.makes;
  allModels = environment.phones.models;

  makes = null;
  models = null;

  quotes = {};

  constructor() {
    firebase.database().ref('prices/').on('value', (snapshot) => {
      this.makes = environment.phones.makes;
      this.models = environment.phones.models;
      if (snapshot.val()) {
        this.quotes = snapshot.val();
        this.makes = Object.keys(snapshot.val());
      } else {
        this.quotes = {};
        this.makes.forEach(make => {
          this.quotes[make] = {};
          this.models[make].forEach(model => {
            this.quotes[make][model] = 0;
          });
        });
      }
    });
  }

  saveQuote() {
    firebase.database().ref(`prices/${this.quote.make}/${this.quote.model}/`).set(this.quote.quote).then(this.resetQuote.bind(this));
  }

  resetQuote() {
    this.quote = {
      make: '',
      model: '',
      quote: 0,
    }
  }

  updateQuote(make, model) {
    this.quote = {
      make: make,
      model: model,
      quote: 0,
    }
    if (this.quotes[make][model]) this.quote.quote = this.quotes[make][model];
  }

  ngOnInit() {
  }

}
