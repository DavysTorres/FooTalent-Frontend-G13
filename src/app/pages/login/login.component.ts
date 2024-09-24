import { Component, inject, Injectable } from '@angular/core';
import { 
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
private router = inject(Router);
private userService = inject(UsersService);

loginForm = new FormGroup({
  email: new FormControl('', {
    validators: [Validators.required],
  }),
  password: new FormControl('', {
    validators: [Validators.required],
  }),
});

get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

formInvalid = false

OnSubmit(){
  if(this.loginForm.valid){
    this.userService.login(this.loginForm.value as Users).subscribe({
      next: (response: any) => {
        if(response.token){
          this.userService.setToken(response.token);
          alert('Ingreso exitoso');
          this.router.navigate(['']);
        } else {
          this.formInvalid = true
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  } else {
    alert ('Campos incompletos');
  }
}
}
