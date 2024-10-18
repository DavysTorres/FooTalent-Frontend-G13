import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/user.model';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {
  MatDialog,
} from '@angular/material/dialog';
import { MensajeDialogoComponent } from '../mensaje-dialogo/mensaje-dialogo.component';
@Component({
  selector: 'app-validacion-correo',
  standalone: true,
  templateUrl: './validacion-correo.component.html',
  styleUrls: ['./validacion-correo.component.css'],
  imports: [
    ReactiveFormsModule, HeaderComponent, FooterComponent
  ],
})
export class ValidacionCorreoComponent {
  private userService = inject(UsersService);
  private dialog = inject(MatDialog);

  validatoremailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Agregué la validación de email
  });

  get email() {
    return this.validatoremailForm.get('email');
  }

  onSubmit() {
    if (this.validatoremailForm.valid) {
      this.userService.requestResetPassword(this.validatoremailForm.value as Users).subscribe({
        next: (response) => {
          console.log("Revisa tu correo electronico:", response);
          this.dialog.open(MensajeDialogoComponent,{
            data: { title: 'Correo Enviado', content: 'Revisa tu correo electrónico para más instrucciones.', isSuccess: true }
          });
        },
        error: (error) => {
          this.dialog.open(MensajeDialogoComponent,{
            data: { title: 'Error al procesar los datos', content: 'Vuelve a realizar la petición de reestablecimiento de contraseña', isSuccess: false }
          });
        },
      });
    } else {
      this.dialog.open(MensajeDialogoComponent,{
        data: { title: 'Campos vacios', content: 'Ingrese su email, por favor', isSuccess: false }
      });
    }
  }
}
