import { Routes } from '@angular/router';

// Componentes públicos
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TeamComponent } from './components/team/team.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ReservasComponent } from './components/reservas/reservas.component';

// Login y Registro
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

// Panel admin
import { AdminComponent } from './pages/admin/admin.component';
import { ClienteListaComponent } from './pages/admin/customer-list/customer-list.component';
import { ClienteFormComponent } from './pages/admin/customer-form/customer-form.component';
import { ProductoListaComponent } from './pages/admin/product-list/product-list.component';
import { ProductoFormComponent } from './pages/admin/product-form/product-form.component';

export const routes: Routes = [

  // Primero mostrar LOGIN
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  // Páginas públicas
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'experience', component: ExperienceComponent },

  // Panel de administración (SIN GUARD)
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'cliente-lista', component: ClienteListaComponent },
      { path: 'cliente-form', component: ClienteFormComponent },
      { path: 'cliente-form/:id', component: ClienteFormComponent },

      { path: 'producto-lista', component: ProductoListaComponent },
      { path: 'producto-form', component: ProductoFormComponent },
      { path: 'producto-form/:id', component: ProductoFormComponent },

      { path: '', redirectTo: 'cliente-lista', pathMatch: 'full' }
    ]
  },

  // Redirección por defecto
  { path: '**', redirectTo: 'login' }
];
