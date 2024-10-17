import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { ValidacionCorreoComponent } from './components/validacion-correo/validacion-correo.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TeacherDashboardComponent } from './pages/teacher-dashboard/teacher-dashboard.component';
import { CursoManagementComponent } from './pages/curso-management/curso-management.component';
import { CrearCursoComponent } from './pages/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './pages/editar-curso/editar-curso.component';
import { EliminarCursoComponent } from './pages/eliminar-curso/eliminar-curso.component';
//import { ContenidoManagementComponent } from './pages/contenido-management/contenido-management.component';
import { AprendizDashboardComponent } from './pages/aprendiz-dashboard/aprendiz-dashboard.component';
import { VistaCursoComponent } from './pages/vista-curso/vista-curso.component';
import { ConfirmAccountComponent } from './pages/confirm-account/confirm-account.component';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature/feature.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'feature', loadChildren: () => import('../feature/feature.module').then(m => m.FeatureModule) },
  { path: 'inicio-sesion', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegisterComponent },
  { path: 'validacion', component: ValidacionCorreoComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'cursos', component: CourseListComponent },
  { path: 'curso/:id', component: CourseDetailComponent },
  { path: 'aprendiz-dashboard', component: AprendizDashboardComponent},
  { path: 'vista-curso', component: VistaCursoComponent},
  { path: 'teacher-dashboard', component: TeacherDashboardComponent},
  { path: 'curso-management', component: CursoManagementComponent },
  { path: 'crear-curso', component: CrearCursoComponent },
  { path: 'editar-curso/:id', component: EditarCursoComponent },
  { path: 'eliminar-curso/:id', component: EliminarCursoComponent },
  //{ path: 'contenido-management', component: ContenidoManagementComponent },
  { path: 'listCurso', component: CourseListComponent  },
  { path: 'aprendiz-dashboard', component: AprendizDashboardComponent },
  { path: 'verifyAccount', component: ConfirmAccountComponent },
  /*
  ,
  { path: 'admin-dashboard', component: AdminDashboardComponent }*/
];

@NgModule({

  imports: [CommonModule, RouterModule.forChild(routes), FeatureComponent],
  exports: [RouterModule],
})

export class AppRoutingModule {}
