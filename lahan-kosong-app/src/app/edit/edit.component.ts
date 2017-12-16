import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { AppService } from '../app.service';
import { validateConfig } from '@angular/router/src/config';
import swal from 'sweetalert2';
declare const google: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [AppService]
})
export class EditComponent implements OnInit {
  public idLahan: any;
  public detailLahan = {};
  public selectedBidang: any;
  public selectedKemitraan: any;
  public selectedKecamatan: any;
  public selectedDesaKel: any;
  public showDesaKel: any;
  public showTambahBidang: any;
  public showTambahKemitraan: any;
  public idKabupatenKota = 3201;
  public searchKecamatan = {};
  public searchDesaKel = {};
  public map: any;

  public searchBidang = {1: 'Pertanian Basah', 2: 'Petanian Kering', 3: 'Agroforestry', 4: 'Peternakan', 5: 'Perikanan', 6: 'Kehutanan'};
  public searchKemitraan = {1: 'Sewa', 2: 'Bagi Hasil', 3: 'Kerja Sama', 4: 'Jual'};

  private formLahan: FormGroup;
  private fotopemilik: any;
  private fotolahan: any;
  private iddesakel: any;
  private idkemitraan: any;
  private idpengelolaan: any;
  private pemilik:any;

  constructor(
    private _fb: FormBuilder,
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.idLahan = id;
    });
  }

  ngOnInit() {
    this.pemilik = this.AppService.CheckStatus();
    console.log(this.pemilik);
    if (!this.pemilik) {
      this.router.navigate(['']);
    } else {
      if(this.pemilik.role != 'publisher') {
        this.router.navigate(['']);
      } else {
        this.selectedBidang = 'Pilih Bidang Pengelolaan';
        this.selectedKemitraan = 'Pilih Jenis Kemitraan';
        this.selectedKecamatan = 'Pilih Kecamatan';
        this.selectedDesaKel = 'Pilih Desa/Kelurahan';
        this.getDataKecamatan(this.idKabupatenKota);
        this.formLahan = this._fb.group({
          nama_pemilik: ['', Validators.required],
          email_pemilik: ['', Validators.required],
          no_hp_pemilik: ['', Validators.required],
          alamat_pemilik: ['', Validators.required],
          foto_pemilik: ['', Validators.required],
          alamat_lengkap_lahan: ['', Validators.required],
          longitude_lahan: ['', Validators.required],
          latitude_lahan: ['', Validators.required],
          luasan_lahan: ['', Validators.required],
          potensi_lahan: ['', Validators.required],
          jarak_air_lahan: ['', Validators.required],
          jarak_jalan_lahan: ['', Validators.required],
          keterangan_jalan_lahan: ['', Validators.required],
          jarak_pasar_lahan: ['', Validators.required],
          kecamatan_lahan: ['', Validators.required],
          desakelurahan_lahan: ['', Validators.required],
          pengelolaan_sebelumnya_lahan: ['', Validators.required],
          nama_pengelolaanlahan: ['', Validators.required],
          detail_pengelolaanlahan: ['', Validators.required],
          nama_kemitraanlahan: ['', Validators.required],
          detail_kemitraanlahan: ['', Validators.required],
          foto_lahan: ['', Validators.required]
        });
  
        this.AppService.getDetailLahan(this.idLahan).subscribe(data => {
          if(data[0].idpublisher != this.pemilik.id && this.pemilik.role != 'admin') {
            this.router.navigate(['']);
          } else {
            data.forEach(item => {
              const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
              const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
              this.detailLahan = {
                nama_pemilik: item.pemilik,
                alamat_pemilik: item.alamat_pemilik,
                email_pemilik: item.email_pemilik,
                foto_pemilik: item.foto_pemilik,
                no_hp_pemilik: item.no_hp_pemilik,
                kecamatan_lahan: this.searchKecamatan[item.kecamatanid],
                desa_lahan: item.desa,
                alamat_lahan: item.alamat_lahan,
                latitude_lahan: item.latitude,
                longitude_lahan: item.longitude,
                luasan_lahan: item.luasan_lahan,
                lahan_sebelumnya: item.sebelumnya,
                jarak_air_lahan: item.jarak_air_lahan,
                jarak_jalan_lahan: item.jarak_jalan_lahan,
                keterangan_jalan_lahan: item.keterangan_jalan_lahan,
                jarak_pasar_lahan: item.jarak_pasar_lahan,
                potensi_lahan: item.potensi_lahan,
                pengelolaan: _pengelolaan,
                kemitraan: _kemitraan
              };
              this.map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(item.latitude, item.longitude),
                scrollwheel: false,
                zoom: 12
              });
              const infowindow = new google.maps.InfoWindow({
                content: item.alamat_lahan
              });
              const marker = new google.maps.Marker({
                position: new google.maps.LatLng(item.latitude, item.longitude),
                map: this.map,
                title: 'Posisi Lahan'
              });
              marker.addListener('click', function() {
                infowindow.open(this.map, marker);
              });
    
              google.maps.event.addListener(this.map, 'click', function(event){
                alert(
                  'Berikut adalah koordinat titik yang Anda pilih\n\nLatitude : ' + event.latLng.lat() + '\nLongitude : ' + event.latLng.lng()
                );
              });
            });
          }
        });
      }
    }
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

  setKecamatan() {
    this.selectedKecamatan = this.formLahan.value.kecamatan_lahan;
    const pilihan = +Object.keys(this.searchKecamatan)
                      .find(key => this.searchKecamatan[key] === this.formLahan.value.kecamatan_lahan);
    this.getDataDesaKel(pilihan);
    this.showDesaKel = 1;
  }

  setDesaKel() {
    this.selectedDesaKel = this.formLahan.value.desakelurahan_lahan;
    const pilihan = +Object.keys(this.searchDesaKel)
                      .find(key => this.searchDesaKel[key] === this.formLahan.value.desakelurahan_lahan);
    this.iddesakel = pilihan;
  }

  setBidang() {
    this.selectedBidang = this.formLahan.value.nama_pengelolaanlahan;
    const pilihan = +Object.keys(this.searchBidang)
                      .find(key => this.searchBidang[key] === this.formLahan.value.nama_pengelolaanlahan);
    this.idpengelolaan = pilihan;
    this.showTambahBidang = 1;
  }

  setKemitraan() {
    this.selectedKemitraan = this.formLahan.value.nama_kemitraanlahan;
    const pilihan = +Object.keys(this.searchKemitraan)
                      .find(key => this.searchKemitraan[key] === this.formLahan.value.nama_kemitraanlahan);
    this.idkemitraan = pilihan;
    this.showTambahKemitraan = 1;
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  objectValues(obj) {
    return Object.keys(obj).map(key => obj[key]);
  }

}
