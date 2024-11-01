import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.css']
})
export class ConfirmAccountComponent implements OnInit {
  message: string = '';

  constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.userService.verifyAccount(token).subscribe({
          next: (response) => {
            this.message = 'Tu cuenta ha sido confirmada con éxito!';
          },
          error: (error) => {
            this.message = 'Ha ocurrido un error al confirmar tu cuenta.';
            console.error('Error:', error);
          }
        });
      } else {
        this.message = 'El token de confirmación no es válido.';
      }
    });
  }
}
