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
  public login: boolean;
  private NamaUser: string;
  private status: any;
  constructor(
    private AppService: AppService
  ) { }

  ngDoCheck() {
    this.status = this.AppService.CheckStatus();
    if (!this.status) {
      this.login = false;
    } else {
      if(this.status.role == 'admin') {
        this.NamaUser = this.status.nama_admin;
        this.login = true;
      } else if(this.status.role == 'publisher') {
        this.NamaUser = this.status.nama_publisher;
        this.login = true;
      } else {
        this.login = false;
      }
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
