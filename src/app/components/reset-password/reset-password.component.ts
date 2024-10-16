import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatDialog } from '@angular/material/dialog';
import { MensajeDialogoComponent } from '../mensaje-dialogo/mensaje-dialogo.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  imports: [
    ReactiveFormsModule, HeaderComponent, FooterComponent
  ],
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  token: string | null = null;
  userId: string | null = null;
  private dialog = inject(MatDialog);
  private router = inject(Router);

  constructor(private route: ActivatedRoute, private userService: UsersService) {
    this.resetForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmNewPassword: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.userId = params['id'];
    });
  }

  onSubmit() {
    if (this.resetForm.valid && this.resetForm.value.newPassword === this.resetForm.value.confirmNewPassword) {
      if (this.token && this.userId) {
        const resetData = {
          userId: this.userId,
          token: this.token,
          password: this.resetForm.value.newPassword
        };
        this.userService.resetPassword(resetData).subscribe({
          next: (response) => {
            console.log('Contraseña restablecida con éxito:', response);
            const dialogRef = this.dialog.open(MensajeDialogoComponent,{
              data: { title: 'Contraseña restablecida con éxito', content: 'Ya puedes volver a iniciar sesión con tu nueva contraseña', redirectTo:'/login' }
            });
            dialogRef.afterClosed().subscribe(() => {
                this.router.navigate(['/login']);
            });
          },
          error: (error) => {
            console.log('Error al restablecer la contraseña:', error);
            const dialogRef = this.dialog.open(MensajeDialogoComponent,{
              data: { title: 'Error', content: 'Ha ocurrido un error al restablecer la contraseña. Por favor, inténtalo de nuevo.', redirectTo:'/error' }
            });
            dialogRef.afterClosed().subscribe(() => {
                this.router.navigate(['/error']);
            });
          }
        });
      }
    } else {
      alert('Las contraseñas no coinciden o son inválidas');
    }
  }
}
