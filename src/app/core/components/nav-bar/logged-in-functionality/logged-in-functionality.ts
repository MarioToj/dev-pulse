import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logged-in-functionality',
  imports: [RouterLink],
  templateUrl: './logged-in-functionality.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInFunctionality {
  hideUserMenu = signal(true);
  onHideMenu() {
    this.hideUserMenu.set(!this.hideUserMenu());
  }
}
