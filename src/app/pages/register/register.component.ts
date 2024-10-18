import { Component, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Users } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLinkWithHref,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private router = inject(Router);
  private userService = inject(UsersService);

  registerForm = new FormGroup({
    nombre: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required]
    }),
    role: new FormControl('', {
      validators: [Validators.required],
    }),
  },
  {
    validators: this.passwordValidator,
  })

  passwordValidator(control: AbstractControl) {
    return control.get('password')?.value ===
    control.get('confirmPassword')?.value
    ? null
    : {missmatch: true};
  }

  get nombre(){
    return this.registerForm.get('nombre');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get role(){
    return this.registerForm.get('role');
  }


  OnSubmit(event: Event){
    if(this.registerForm.valid){
      this.userService.register(this.registerForm.value as Users).subscribe({
        next: (response) => {
          this.router.navigate(['inicio-sesion']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      alert("Campos incompletos")
    }
  }
}
