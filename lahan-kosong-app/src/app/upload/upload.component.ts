import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';
declare const google: any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [AppService]
})
export class UploadComponent implements OnInit {
  public selectedBidang: any;
  public selectedKemitraan: any;
  public selectedProvinsi: any;
  public selectedKabupatenKota: any;
  public selectedKecamatan: any;
  public selectedDesaKel: any;
  public showKabupatenKota: any;
  public showKecamatan: any;
  public showDesaKel: any;
  public showTambahBidang: any;
  public showTambahKemitraan: any;
  public searchProvinsi = {};
  public searchKabupatenKota = {};
  public searchKecamatan = {};
  public searchDesaKel = {};
  public map: any;

  public searchBidang = {1: 'Pertanian', 3: 'Agroforestry', 4: 'Peternakan', 5: 'Perikanan', 6: 'Kehutanan'};
  public searchKemitraan = {1: 'Sewa', 2: 'Bagi Hasil', 3: 'Kerja Sama', 4: 'Jual'};

  constructor(
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (!this.AppService.CheckStatus()) {
      this.router.navigate(['']);
    } else {
        this.selectedBidang = 'Pilih Bidang Pengelolaan';
        this.selectedKemitraan = 'Pilih Jenis Kemitraan';
        this.selectedProvinsi = 'Pilih Provinsi';
        this.selectedKabupatenKota = 'Pilih Kabupaten/Kota';
        this.selectedKecamatan = 'Pilih Kecamatan';
        this.selectedDesaKel = 'Pilih Desa/Kelurahan';
        this.getDataProvinsi();

        this.map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(-6.5971469, 106.8060388),
          scrollwheel: false,
          zoom: 10
        });

        google.maps.event.addListener(this.map, 'click', function(event){
          alert(
            'Berikut adalah koordinat titik yang Anda pilih\n\nLatitude : ' + event.latLng.lat() + '\nLongitude : ' + event.latLng.lng()
          );
        });
    }
  }

  getDataProvinsi() {
    this.searchProvinsi = {};
    this.AppService.getDataProvinsi()
    .subscribe(data => {
      data.forEach(item => {
        this.searchProvinsi[item.id] = item.name;
      });
    });
  }

  getDataKabupatenKota(provinsi_id: number) {
    this.searchKabupatenKota = {};
    this.AppService.getDataKabupatenKota(provinsi_id)
    .subscribe(data => {
      data.forEach(item => {
        this.searchKabupatenKota[item.id] = item.name;
      });
    });
  }

  getDataKecamatan(kabupatenKota_id: number) {
    this.searchKecamatan = {};
    this.AppService.getDataKecamatan(kabupatenKota_id)
    .subscribe(data => {
      data.forEach(item => {
        this.searchKecamatan[item.id] = item.name;
      });
    });
  }

  getDataDesaKel(kecamatan_id: number) {
    this.searchDesaKel = {};
    this.AppService.getDataDesaKel(kecamatan_id)
    .subscribe(data => {
      data.forEach(item => {
        this.searchDesaKel[item.id] = item.name;
      });
    });
  }

  setProvinsi(provinsi: any) {
    this.selectedProvinsi = provinsi;
    const pilihan = +Object.keys(this.searchProvinsi).find(key => this.searchProvinsi[key] === provinsi);
    this.getDataKabupatenKota(pilihan);
    this.showKabupatenKota = 1;
  }

  setKabupatenKota(kabupatenKota: any) {
    this.selectedKabupatenKota = kabupatenKota;
    const pilihan = +Object.keys(this.searchKabupatenKota).find(key => this.searchKabupatenKota[key] === kabupatenKota);
    this.getDataKecamatan(pilihan);
    this.showKecamatan = 1;
  }

  setKecamatan(kecamatan: any) {
    this.selectedKecamatan = kecamatan;
    const pilihan = +Object.keys(this.searchKecamatan).find(key => this.searchKecamatan[key] === kecamatan);
    this.getDataDesaKel(pilihan);
    this.showDesaKel = 1;
  }

  setDesaKel(desaKel: any) {
    this.selectedDesaKel = desaKel;
    const pilihan = +Object.keys(this.searchDesaKel).find(key => this.searchDesaKel[key] === desaKel);
    console.log(pilihan + ', ' + desaKel);
  }

  setBidang(bidang: any) {
    this.selectedBidang = bidang;
    const pilihan = +Object.keys(this.searchBidang).find(key => this.searchBidang[key] === bidang);
    console.log(pilihan + ', ' + bidang);
    this.showTambahBidang = 1;
  }

  setKemitraan(kemitraan: any) {
    this.selectedKemitraan = kemitraan;
    const pilihan = +Object.keys(this.searchKemitraan).find(key => this.searchKemitraan[key] === kemitraan);
    console.log(pilihan + ', ' + kemitraan);
    this.showTambahKemitraan = 1;
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  objectValues(obj) {
    return Object.keys(obj).map(key => obj[key]);
  }

}
