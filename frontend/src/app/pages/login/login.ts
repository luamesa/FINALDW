import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'], 
})
export class Login {

  email = "";
  password = "";

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe((res: any) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/reviews']);
      }, err => {
        alert("Credenciales incorrectas");
      });
  }
}
