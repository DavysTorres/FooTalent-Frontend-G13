import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ValidacionCorreoComponent } from './components/validacion-correo/validacion-correo.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },
  // otras rutas aquí
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'validacion', component: ValidacionCorreoComponent},
    { path: 'reset', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
