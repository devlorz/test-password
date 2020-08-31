import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl({ value: 'test', disabled: true }),
    password: new FormControl(''),
  });

  get usernameForm() {
    return this.form.get('username');
  }
  get passwordForm() {
    return this.form.get('password');
  }

  @ViewChild('password') password;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form.getRawValue());
    interval(1000)
      .pipe(take(1))
      .subscribe(() => this.router.navigate(['home']));
    // should reset form for disable password autofill in Firefox and also Chrome
    this.form.reset();
  }
}
