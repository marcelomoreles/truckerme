import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: 'jose-motorista@truckme.com', password: '123123' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private afAuth: AngularFireAuth
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.afAuth.signInWithEmailAndPassword(this.login.username, this.login.password)
      .then((res) =>  {
        console.log({res});
        alert(res)
      })
      .catch((err) => {
        this.submitted = false;
        alert(err);
        // console.log(err);
      })

      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
