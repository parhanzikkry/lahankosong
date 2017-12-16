import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { AppService } from '../app.service';
import { validateConfig } from '@angular/router/src/config';
import swal from 'sweetalert2';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [AppService]
})
export class UploadComponent implements OnInit {
  public selectedBidang: any = [];
  public selectedKemitraan: any;
  public selectedKecamatan: any;
  public selectedDesaKel: any;
  public showDesaKel: any;
  public showTambahBidang: any = 0;
  public indexbidang: any = [''];
  public booltambahbidang: boolean = false;
  public showTambahKemitraan: any = 0;
  public indexkemitraan: any = [''];
  public booltambahkemitraan: any = false;
  public idKabupatenKota = 3201;
  public searchKecamatan = {};
  public searchDesaKel = {};
  public lat: number = -6.5971469;
  public lng: number = 106.8060388;
  public zoom: number = 10;
  public pointLat: number;
  public pointLng: number;

  public searchBidang = {1: 'Pertanian Basah', 2: 'Petanian Kering', 3: 'Agroforestry', 4: 'Peternakan', 5: 'Perikanan', 6: 'Kehutanan'};
  public searchKemitraan = {1: 'Sewa', 2: 'Bagi Hasil', 3: 'Kerja Sama', 4: 'Jual'};

  private formLahan: FormGroup;
  private fotopemilik: any;
  private fotolahan: any;
  private iddesakel: any;
  private idkemitraan: any =[];
  private idpengelolaan: any = [];

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

      this.selectedBidang = [];
      this.selectedKemitraan = [];
      this.selectedKecamatan = 'Pilih Kecamatan';
      this.selectedDesaKel = 'Pilih Desa/Kelurahan';
      this.getDataKecamatan(this.idKabupatenKota);
    }
  }

  mapClicked($event: any) {
    this.pointLat = $event.coords.lat;
    this.pointLng = $event.coords.lng;
  }

  DaftarkanLahan() {
    if (this.formLahan.status === 'VALID') {
      const datapemilik = {
        nama_pemilik: this.formLahan.value.nama_pemilik,
        alamat_pemilik: this.formLahan.value.alamat_pemilik,
        no_hp_pemilik: this.formLahan.value.no_hp_pemilik,
        email_pemilik: this.formLahan.value.email_pemilik
      };
      this.AppService.daftarpemilik(datapemilik)
      .subscribe(pemilik => {
        if (pemilik.status === true) {
          let fotopemilik: Array<File> = this.formLahan.value.foto_pemilik;
          this.AppService.tambahfotopemilik(fotopemilik, pemilik.info.id)
          .then(fotopemilik => {
                let hasil: any = fotopemilik;
                if (hasil.status === true) {
                  const datalahan = {
                    fk_id_desakel: this.iddesakel,
                    alamat_lengkap_lahan: this.formLahan.value.alamat_lengkap_lahan,
                    longitude_lahan: parseFloat(this.formLahan.value.longitude_lahan),
                    latitude_lahan: parseFloat(this.formLahan.value.latitude_lahan),
                    luasan_lahan: this.formLahan.value.luasan_lahan,
                    potensi_lahan: this.formLahan.value.potensi_lahan,
                    jarak_air_lahan: this.formLahan.value.jarak_air_lahan,
                    jarak_jalan_lahan: this.formLahan.value.jarak_jalan_lahan,
                    keterangan_jalan_lahan: this.formLahan.value.keterangan_jalan_lahan,
                    jarak_pasar_lahan: this.formLahan.value.jarak_pasar_lahan,
                    pengelolaan_sebelumnya_lahan: this.formLahan.value.pengelolaan_sebelumnya_lahan,
                    fk_id_pemilik: pemilik.info.id,
                    deskripsi_lahan: '',
                    status_lahan: 'unverif'
                  };
                  this.AppService.tambahlahan(datalahan)
                    .subscribe(lahan => {
                      if (lahan.status === true) {
                        let fotolahan: Array<File> = this.formLahan.value.foto_lahan;
                        this.AppService.tambahfotolahan(fotolahan, lahan.info.id)
                          .then(fotolahan => {
                            let hasilfoto: any = fotolahan;
                            if (hasilfoto.status === true) {
                              const datapengelolaanlahan = {
                                fk_id_pengelolaan: this.idpengelolaan,
                                detail_pengelolaanlahan: this.formLahan.value.detail_pengelolaanlahan
                              };
                              this.AppService.tambahpengelolaanlahan(datapengelolaanlahan, lahan.info.id)
                                .subscribe(pengelolaan => {
                                  if (pengelolaan.status === true) {
                                    const datakemitraanlaan = {
                                      fk_id_kemitraan: this.idkemitraan,
                                      detail_kemitraanlahan: this.formLahan.value.detail_kemitraanlahan
                                    };
                                    this.AppService.tambahkemitraanlahan(datakemitraanlaan, lahan.info.id)
                                      .subscribe(kemitraan => {
                                        swal({
                                          title: 'Pendaftaran Lahan Berhasil',
                                          text: 'Silahkan klik OK untuk melanjutkan',
                                          type: 'success',
                                          confirmButtonColor: '#28a745',
                                          confirmButtonText: 'OK'
                                        });
                                        this.router.navigate(['/profile']);
                                      });
                                  }
                                });
                            }
                          });
                      }
                    });
                }
              });
          }
        });
    }
  }

  inputfotopemilik(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      let file = <Array<File>> event.target.files;
      this.formLahan.get('foto_pemilik').setValue(file);
      this.fotopemilik = file[0].name;
    }
  }

  inputfotolahan(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files;
      this.formLahan.get('foto_lahan').setValue(file);
      this.fotolahan = '';
      for (let i = 0; i < file.length; i++) {
        this.fotolahan += file[i].name;
        if (i !== file.length - 1) {
          this.fotolahan += ',';
        }
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

  setBidang(i:number) {
    const pilihan = +Object.keys(this.searchBidang)
    .find(key => this.searchBidang[key] === this.formLahan.value.nama_pengelolaanlahan);
    if(i == this.selectedBidang.length) {
      this.selectedBidang.push(this.formLahan.value.nama_pengelolaanlahan);
      this.idpengelolaan.push(pilihan);
    } else {
      this.idpengelolaan[i] = pilihan;
      this.selectedBidang[i] = this.formLahan.value.nama_pengelolaanlahan;
    }
    this.booltambahbidang = true;
  }
  
  tambahBidang() {
    this.showTambahBidang += 1;
    this.indexbidang.push('');
    this.booltambahbidang = false;
  }

  setKemitraan(i:number) {
    const pilihan = +Object.keys(this.searchKemitraan)
                    .find(key => this.searchKemitraan[key] === this.formLahan.value.nama_kemitraanlahan);
    if(i == this.selectedKemitraan.length) {
      this.selectedKemitraan.push(this.formLahan.value.nama_kemitraanlahan);
      this.idkemitraan.push(pilihan);
    } else {
      this.selectedKemitraan[i] = this.formLahan.value.nama_kemitraanlahan;
      this.idkemitraan[i] = pilihan;
    }
    this.booltambahkemitraan = true;
  }

  tambahKemitraan() {
    this.showTambahKemitraan += 1;
    this.indexkemitraan.push('');
    this.booltambahkemitraan = false;
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  objectValues(obj) {
    return Object.keys(obj).map(key => obj[key]);
  }

  strToNum(value: string): number {
    return +value;
  }

}
