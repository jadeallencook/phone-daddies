import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google-form',
  templateUrl: './google-form.component.html',
  styleUrls: ['./google-form.component.css']
})
export class GoogleFormComponent implements OnInit {

  // cache form id
  formID: string;

  // updates google form
  updateForm(form) {
    // scroll to top
    scroll(0, 0);
    // cache dom element
    let $form = document.getElementById('google-form');
    // cache forms
    let forms = {
      repair: 'https://docs.google.com/forms/d/e/1FAIpQLScgjISDQe65dkhqF9Jt8FM8FN10ZAkartimpKuflYFq3NpEEw/viewform?embedded=true',
      sell: 'https://docs.google.com/forms/d/e/1FAIpQLSePjlT8amizo2lBqTGmT5RHjulxDT4lxFIkwFWe8nHdJqyM9w/viewform?embedded=true'
    }
    // form switch
    if (form && forms[form]) {
      $form.setAttribute('src', forms[form]);
    } else { // show repair form by default
      $form.setAttribute('src', forms.repair);
    }
  }

  // get data from url
  constructor(private route: ActivatedRoute) {
    this.formID = route.snapshot.params['formID'];
  }

  // display correct form
  ngOnInit() {
    // init form update
    this.updateForm(this.formID);
    // sub to param changes
    this.route.params.forEach(params => {
      // update form when params changes
      this.updateForm(params.formID);
    })
  }

}
