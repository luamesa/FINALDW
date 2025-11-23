import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],   
})
export class Register {

  username = "";
  email = "";
  password = "";

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(() => {
      alert("Usuario creado con éxito");
      this.router.navigate(['/login']);
    }, err => {
      alert("Error al registrarse, revise los datos");
    });
  }
}
