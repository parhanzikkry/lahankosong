import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AppService]
})
export class ProfileComponent implements OnInit {
  public lahanTerdaftar: any;
  private pemilik: any;
  public enum: number;

  constructor(
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pemilik = this.AppService.CheckStatus();
    if (!this.pemilik) {
      this.router.navigate(['']);
    } else {
      if(this.pemilik.role == 'admin') {
        this.router.navigate(['/dashboard']);
      }
      this.lahanTerdaftar = [];
      this.AppService.getMyLahan().subscribe(data => {
        console.log(data);
        this.enum = 1;
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          var status;
          if(item.status == 'verif') {
            status = 'Terverifikasi';
          } else {
            status = 'Belum Terverifikasi';
          }
          const _lahan = {
            pemilik: item.pemilik,
            luasan: item.luasan_lahan,
            alamat: item.alamat_lahan,
            kemitraan: _kemitraan,
            pengelolaan: _pengelolaan,
            id: item.id,
            no: this.enum,
            status: status
          };
          this.lahanTerdaftar.push(_lahan);
          this.enum++;
        });
      });
    }
  }

  ngDeleted(id: any) {
    swal({
      title: 'Apa Anda yakin?',
      text: 'Lahan yang telah dihapus tidak dapat dikembalikan lagi',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.value) {
        this.AppService.hapuslahansaya(id)
          .subscribe(hapus => {
            this.ngOnInit();
          });
        swal({
          title: 'Lahan telah terhapus',
          type: 'success'
        });
      }
    });
  }
}
