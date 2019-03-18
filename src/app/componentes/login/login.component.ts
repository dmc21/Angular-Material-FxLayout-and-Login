import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      nickname: ['', [Validators.required]],
      pass: ['', Validators.required]
    });
    }

  iniciarSesion(): void {

    if (this.loginForm.value.nickname === '1' && this.loginForm.value.pass === '1') {
      localStorage.setItem('session', 'logged');
      this.router.navigate(['admin']);
    } else {
      alert('Las credenciales no son correctas');
    }

  }

}
