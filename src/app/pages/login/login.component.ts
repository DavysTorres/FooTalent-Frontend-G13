//Cspell:disable

import { Component, Inject, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Login } from '../../models/login.model';
import { ProgressSpinnerOverviewComponent } from '../../components/progress-spinner-overview/progress-spinner-overview.component';
import { CommonModule } from '@angular/common';
import { MatSnackBar,  MatSnackBarConfig } from '@angular/material/snack-bar'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLinkWithHref, ReactiveFormsModule, HeaderComponent, FooterComponent, ProgressSpinnerOverviewComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Cambié "styleUrl" por "styleUrls" para corregir un error tipográfico
})
export class LoginComponent {
  private router = inject(Router);
  private userService = inject(UsersService);
  private fb = inject(FormBuilder);
  private snackBar=inject(MatSnackBar)

  constructor() {}
  loading = false
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
      this.loading = true
      this.userService.login(this.loginForm.value as Login).subscribe({
        next: (response: any) => {
          if (response.data.token) {
            // Almacena el token en el servicio de usuarios
            this.userService.setToken(response.data.token);
            // Almacena la informacion del usuario
            this.userService.setUsuario(
              response.data.usuario.id,
              response.data.usuario.nombre,
              response.data.usuario.email,
              response.data.usuario.avatar,
              response.data.usuario.role,
              );

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

            this.openSnackBar('¡Login exitoso!');
          } else {
            this.loading = false;
            this.formInvalid = true;
            this.openSnackBar('Error al iniciar sesión');;
          }
        },
        error: (error) => {
          console.log('Error en el login:', error);
          this.loading = false;
          this.openSnackBar('ERROR: Verifica tus credenciales');
        },
      });
    } else {
      this.openSnackBar('Campos incompletos');
      this.loading = false;
    }
  }

  openSnackBar(message: string) {

    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top';
    config.panelClass = ['snackbar'];
    this.snackBar.open(message, 'Cerrar', config);
  }


}
