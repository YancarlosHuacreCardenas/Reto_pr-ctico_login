import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import { RouterModule } from '@angular/router';   // ⭐ FALTABA ESTO
import { CommonModule } from '@angular/common';   // ⭐ recomendable

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule], // ⭐ AGREGA RouterModule
  templateUrl: './registro.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombre = '';
  email = '';
  password = '';
  confirmar = '';

  constructor(
    private registroService: RegistroService,
    private router: Router
  ) {}

  registrarUsuario() {
    if (this.password !== this.confirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (this.password.length < 6) {
      alert('La contraseña debe tener mínimo 6 caracteres');
      return;
    }

    this.registroService.registrar(this.nombre, this.email, this.password)
      .subscribe({
        next: () => {
          alert('Usuario registrado correctamente');
          this.router.navigate(['/login']);
        },
        error: () => alert('Error registrando usuario')
      });
  }
}
