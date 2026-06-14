import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register() {
    this.auth.register(this.email, this.password).subscribe(res => {
      this.auth.saveToken(res.token);
      this.router.navigate(['/']);
    });
  }
}
