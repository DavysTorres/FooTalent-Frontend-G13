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
import { ContenidoManagementComponent } from './pages/contenido-management/contenido-management.component';
import { CreateCourseComponent } from './forms/create-course/create-course.component';
import { AprendizDashboardComponent } from './pages/aprendiz-dashboard/aprendiz-dashboard.component';
import { VistaCursoComponent } from './pages/vista-curso/vista-curso.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'validacion', component: ValidacionCorreoComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'aprendiz-dashboard', component: AprendizDashboardComponent},
  { path: 'vista-curso', component: VistaCursoComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
