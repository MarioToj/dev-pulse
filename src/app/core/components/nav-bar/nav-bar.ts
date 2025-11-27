import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoggedOutFunctionality } from './logged-out-functionality/logged-out-functionality';
import { LoggedInFunctionality } from './logged-in-functionality/logged-in-functionality';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, LoggedOutFunctionality, LoggedInFunctionality],
  templateUrl: './nav-bar.html',
})
export class NavBar {
  userService = inject(UserService);
}
