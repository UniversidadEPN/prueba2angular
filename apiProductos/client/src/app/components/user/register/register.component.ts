import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { UserInterface } from "src/app/models/user-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public user: UserInterface = {
    name: "",
    email: "",
    password: ""
  }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.authService.registerUser(
      this.user.name,
      this.user.email,
      this.user.password
    ).subscribe(user => {
    this.authService.setUser(user);
    let token = user.id;
    this.authService.setToken(token);
    this.router.navigate(['/user/profile']);

  });

  }


}
