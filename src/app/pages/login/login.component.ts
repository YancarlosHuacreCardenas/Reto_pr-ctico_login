import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';   // <-- ⭐ IMPORTAR ESTO
import { CommonModule } from '@angular/common';   // <-- ⭐ (opcional pero recomendado)

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],  // <-- ⭐ AÑADIR RouterModule
  templateUrl: './login.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private loginService: LoginService, private router: Router) {}

  iniciarSesion() {
    this.loginService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => alert('Correo o contraseña incorrectos')
    });
  }
}
