import { Component, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Users } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLinkWithHref,
    ReactiveFormsModule,
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
    role: new FormControl('', {
      validators: [Validators.required],
    }),
  })

  get nombre(){
    return this.registerForm.get('firstname');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('firstname');
  }

  get role(){
    return this.registerForm.get('role');
  }


  OnSubmit(event: Event){
    if(this.registerForm.valid){
      this.userService.register(this.registerForm.value as Users).subscribe({
        next: (response) => {
          this.router.navigate(['login']);
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
