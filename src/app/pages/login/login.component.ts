import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLinkWithHref, ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Cambié "styleUrl" por "styleUrls" para corregir un error tipográfico
})
export class LoginComponent {
  private router = inject(Router);
  private userService = inject(UsersService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Agregué la validación de email
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  formInvalid = false;

  onSubmit() {
    console.log(this.loginForm.valid)
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value as Login).subscribe({
        next: (response: any) => {


            localStorage.setItem('user_token', response.token);
            console.log(response.token)

          if (response.token) {
            // Almacena el token en el servicio de usuarios
            //this.userService.setToken(response.token);

            // Obtiene el rol del usuario desde la respuesta
            const userRole = response.usuario.role;

            // Redirecciona según el rol del usuario
            if (userRole === 'Docente') {
              this.router.navigate(['/docente-dashboard']);
            } else if (userRole === 'Aprendiz') {
              this.router.navigate(['/aprendiz-dashboard']);
            } else if (userRole === 'Admin') {
              this.router.navigate(['/admin-dashboard']);
            } else {
              // Si no tiene un rol específico, redirecciona a la página de inicio
              this.router.navigate(['/']);
            }

            alert('Ingreso exitoso');
          } else {
            this.formInvalid = true;
            alert('Error al iniciar sesión');
          }
        },
        error: (error) => {
          console.log('Error en el login:', error);
          alert('Error al iniciar sesión. Verifica tus credenciales.');
        },
      });
    } else {
      alert('Campos incompletos o inválidos.');
    }
  }
}
