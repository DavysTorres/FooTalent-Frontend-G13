import { Component, inject, Injectable } from '@angular/core';
import { 
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/user.model';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLinkWithHref, ReactiveFormsModule, HeaderComponent, FooterComponent],
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
    console.log("Un mensaje")
    this.userService.login(this.loginForm.value as Login).subscribe({
      next: (response: any) => {
        console.log(this.loginForm.value)
        if(response.token){
          this.userService.setToken(response.token);
          console.log(response.token);
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
