import { Component, DoCheck } from '@angular/core';
import { AppService } from '../app.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppService]
})
export class HeaderComponent implements DoCheck {
  private login: boolean;
  private NamaUser: string;
  constructor(
    private AppService: AppService
  ) { }

  ngDoCheck() {
    this.NamaUser = this.AppService.CheckStatus().nama_publisher;
    if (!this.NamaUser) {
      this.login = false;
    } else {
      this.login = true;
    }
  }

  public onLogout() {
    this.AppService.Logout();
    swal({
      title: 'Anda telah Logout',
      type: 'success',
      confirmButtonColor: '#28a745',
      confirmButtonText: 'OK'
    });
  }

}
