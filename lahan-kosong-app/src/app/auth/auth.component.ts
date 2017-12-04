import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AppService]
})
export class AuthComponent implements OnInit {
  private loginForm: FormGroup;
  private registerForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
    this.registerForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nama: ['', Validators.required],
      email: ['', Validators.required],
      noHp: ['', Validators.required],
      TTL: ['', Validators.required],
      alamat: ['', Validators.required]
    })
  }

  public onLogin() {
    this.AppService.Login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(data => {
        if(data) {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['']);
        }
      })
  }

  public onRegister() {
    console.log(`ini datanya= ${this.registerForm.value}`, this.registerForm.value);
    this.AppService.RegisterPublisher(this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.nama, this.registerForm.value.email, this.registerForm.value.noHp, this.registerForm.value.TTL, this.registerForm.value.alamat)
      .subscribe(data => {
        console.log(data);
      })
  }

}
