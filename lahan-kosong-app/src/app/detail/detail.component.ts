import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [AppService]
})
export class DetailComponent implements OnInit {
  private login: boolean;
  private NamaUser: string;
  public status: any;
  
  public idLahan: any;
  public pointLat: number;
  public pointLng: number;
  public zoom: number = 10;
  public detailLahan = {};

  constructor(
    private AppService: AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.idLahan = id;
    });
  }

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

  ngOnInit() {
    this.AppService.getDetailLahan(this.idLahan).subscribe(data => {
      data.forEach(item => {
        const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
        const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
        const fotoArr = [];
        for (let i = 0; i < item.foto.path.length; i++) { fotoArr.push(i); }
        this.detailLahan = {
          nama_pemilik: item.pemilik || '-',
          alamat_pemilik: item.alamat_pemilik || '-',
          email_pemilik: item.email_pemilik || '-',
          foto_pemilik: item.foto_pemilik,
          alamat_lahan: item.alamat_lahan || '-',
          luasan_lahan: item.luasan_lahan || '-',
          lahan_sebelumnya: item.sebelumnya || '-',
          jarak_air_lahan: item.jarak_air_lahan || '-',
          jarak_jalan_lahan: item.jarak_jalan_lahan || '-',
          keterangan_jalan_lahan: item.keterangan_jalan_lahan || '-',
          jarak_pasar_lahan: item.jarak_pasar_lahan || '-',
          potensi_lahan: item.potensi_lahan || '-',
          pengelolaan: _pengelolaan || '-',
          kemitraan: _kemitraan || '-',
          foto: item.foto.path,
          fotoCount: fotoArr,
          status: item.status
        };
        this.pointLat = this.strToNum(item.latitude);
        this.pointLng = this.strToNum(item.longitude);
      });
    });
  }

  onVerif() {
    this.AppService.veriflahanini(this.idLahan)
      .subscribe(data => {
        if (data.status) {
          swal({
            title: 'Lahan Terverifikasi',
            text: 'Silahkan klik OK untuk melanjutkan',
            type: 'success',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['dashboard']);
        } else {
          swal({
            title: 'Verifikasi Gagal',
            text: 'Silahkan coba lagi',
            type: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
          });
        }
      })
  }

  strToNum(value: string): number {
    return +value;
  }

  valPlus(value: string): number {
    return +value + 1;
  }

}
