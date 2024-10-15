import { Component, inject } from '@angular/core';
import {
  FormBuilder,
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
  private fb = inject(FormBuilder);

  constructor() {}

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
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value as Login).subscribe({
        next: (response: any) => {

          if (response.data.token) {
            // Almacena el token en el servicio de usuarios
            this.userService.setToken(response.data.token);
            // Almacena la informacion del usuario
            this.userService.setUsuario(response.data.usuario.id, response.data.usuario.nombre,response.data.usuario.email)


            // Obtiene el rol del usuario desde la respuesta
            const userRole = response.data.usuario.role;

            // Redirecciona según el rol del usuario
            switch (userRole) {
              case 'Docente':
                this.router.navigate(['/teacher-dashboard']);
                break;
              case 'Aprendiz':
                this.router.navigate(['/aprendiz-dashboard']);
                break;
              case 'Admin':
                this.router.navigate(['/admin-dashboard']);
                break;
              default:
                this.router.navigate(['/']);
                break;
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
