import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { AppService } from '../app.service';
import { validateConfig } from '@angular/router/src/config';
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

  private formLahan: FormGroup;
  private fotopemilik: any;
  private fotolahan: any;
  private iddesakel: any;
  private idkemitraan: any;
  private idpengelolaan: any;

  constructor(
    private _fb: FormBuilder,
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (!this.AppService.CheckStatus()) {
      this.router.navigate(['']);
    } else {
      this.formLahan = this._fb.group({
        nama_pemilik: ['', Validators.required],
        email_pemilik: ['', Validators.required],
        no_hp_pemilik: ['', Validators.required],
        alamat_pemilik: ['', Validators.required],
        foto_pemilik: ['', Validators.required],
        alamat_lengkap_lahan: ['', Validators.required],
        luasan_lahan: ['', Validators.required],
        provinsi_lahan: ['', Validators.required],
        kabupatenkota_lahan: ['', Validators.required],
        kecamatan_lahan: ['', Validators.required],
        desakelurahan_lahan: ['', Validators.required],
        pengelolaan_sebelumnya_lahan: ['', Validators.required],
        nama_pengelolaanlahan: ['', Validators.required],
        detail_pengelolaanlahan: ['', Validators.required],
        nama_kemitraanlahan: ['', Validators.required],
        detail_kemitraanlahan: ['', Validators.required],
        foto_lahan: ['', Validators.required]
      })


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

  DaftarkanLahan(){
    if(this.formLahan.status == "VALID") {
      let datapemilik = {
        nama_pemilik: this.formLahan.value.nama_pemilik,
        alamat_pemilik: this.formLahan.value.alamat_pemilik,
        no_hp_pemilik: this.formLahan.value.no_hp_pemilik,
        email_pemilik: this.formLahan.value.email_pemilik
      }
      this.AppService.daftarpemilik(datapemilik)
      .subscribe(pemilik => {
        if (pemilik.status == true) {
          let fotopemilik: Array<File> = this.formLahan.value.foto_pemilik;
          this.AppService.tambahfotopemilik(fotopemilik, pemilik.info.id)
          .then(fotopemilik => {
                let hasil:any = fotopemilik
                if (hasil.status == true) {
                  let datalahan = {
                    fk_id_desakel: this.iddesakel,
                    alamat_lengkap_lahan: this.formLahan.value.alamat_lengkap_lahan,
                    longitude_lahan: '',
                    latitude_lahan: '',
                    luasan_lahan: this.formLahan.value.luasan_lahan,
                    pengelolaan_sebelumnya_lahan: this.formLahan.value.pengelolaan_sebelumnya_lahan,
                    fk_id_pemilik: pemilik.info.id,
                    deskripsi_lahan: '',
                    status_lahan: 'unverif'
                  }
                  this.AppService.tambahlahan(datalahan)
                    .subscribe(lahan => {
                      if (lahan.status == true) {
                        let fotolahan: Array<File> = this.formLahan.value.foto_lahan;
                        this.AppService.tambahfotolahan(fotolahan, lahan.info.id)
                          .then(fotolahan => {
                            let hasilfoto:any = fotolahan;
                            console.log(hasilfoto);
                            if(hasilfoto.status == true) {
                              let datapengelolaanlahan = {
                                fk_id_pengelolaan: this.idpengelolaan,
                                detail_pengelolaanlahan: this.formLahan.value.detail_pengelolaanlahan
                              };
                              this.AppService.tambahpengelolaanlahan(datapengelolaanlahan, lahan.info.id)
                                .subscribe(pengelolaan => {
                                  if(pengelolaan.status == true) {
                                    let datakemitraanlaan = {
                                      fk_id_kemitraan: this.idkemitraan,
                                      detail_kemitraanlahan: this.formLahan.value.detail_kemitraanlahan
                                    };
                                    this.AppService.tambahkemitraanlahan(datakemitraanlaan, lahan.info.id)
                                      .subscribe(kemitraan => {
                                      })
                                  }
                                })
                            }
                          })
                      }
                    })  
                }
              })
          }
        });
      // this.AppService.daftarLahan(this.formLahan.value)
      //   .subscribe(data => {
      //   })
    }
  }

  inputfotopemilik(event: any){
    if(event.target.files && event.target.files.length > 0) {
      let file = <Array<File>> event.target.files;
      this.formLahan.get('foto_pemilik').setValue(file);
      this.fotopemilik = file[0].name;
    }
  }

  inputfotolahan(event: any) {
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files;
      this.formLahan.get('foto_lahan').setValue(file);
      this.fotolahan = '';
      for(let i=0; i<file.length; i++) {
        this.fotolahan += file[i].name
        if(i!= file.length-1) {
          this.fotolahan += ',';
        }
      }
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

  setProvinsi() {
    this.selectedProvinsi = this.formLahan.value.provinsi_lahan;
    const pilihan = +Object.keys(this.searchProvinsi).find(key => this.searchProvinsi[key] === this.formLahan.value.provinsi_lahan);
    this.getDataKabupatenKota(pilihan);
    this.showKabupatenKota = 1;
  }

  setKabupatenKota() {
    this.selectedKabupatenKota = this.formLahan.value.kabupatenkota_lahan;
    const pilihan = +Object.keys(this.searchKabupatenKota).find(key => this.searchKabupatenKota[key] === this.formLahan.value.kabupatenkota_lahan);
    this.getDataKecamatan(pilihan);
    this.showKecamatan = 1;
  }

  setKecamatan() {
    this.selectedKecamatan = this.formLahan.value.kecamatan_lahan;
    const pilihan = +Object.keys(this.searchKecamatan).find(key => this.searchKecamatan[key] === this.formLahan.value.kecamatan_lahan);
    this.getDataDesaKel(pilihan);
    this.showDesaKel = 1;
  }

  setDesaKel() {
    this.selectedDesaKel = this.formLahan.value.desakelurahan_lahan;
    const pilihan = +Object.keys(this.searchDesaKel).find(key => this.searchDesaKel[key] === this.formLahan.value.desakelurahan_lahan);
    this.iddesakel = pilihan;
  }

  setBidang() {
    this.selectedBidang = this.formLahan.value.nama_pengelolaanlahan;
    const pilihan = +Object.keys(this.searchBidang).find(key => this.searchBidang[key] === this.formLahan.value.nama_pengelolaanlahan);
    this.idpengelolaan = pilihan;
    this.showTambahBidang = 1;
  }

  setKemitraan() {
    this.selectedKemitraan = this.formLahan.value.nama_kemitraanlahan;
    const pilihan = +Object.keys(this.searchKemitraan).find(key => this.searchKemitraan[key] === this.formLahan.value.nama_kemitraanlahan);
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
                              