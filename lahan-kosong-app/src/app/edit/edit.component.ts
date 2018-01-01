import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { AppService } from '../app.service';
import { validateConfig } from '@angular/router/src/config';
import swal from 'sweetalert2';

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
  public showTambahBidang: any = 0;
  public indexbidang: any = [''];
  public booltambahbidang: boolean = false;
  public showTambahKemitraan: any = 0;
  public indexkemitraan: any = [''];
  public booltambahkemitraan: any = false;;
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
  private pemilik:any;
  

  constructor(
    private _fb: FormBuilder,
    private AppService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.idLahan = id;
    });
  }

  ngOnInit() {
    this.pemilik = this.AppService.CheckStatus();
    if (!this.pemilik) {
      this.router.navigate(['']);
    } else {
      if(this.pemilik.role != 'publisher') {
        this.router.navigate(['']);
      } else {
        this.selectedBidang = [];
        this.selectedKemitraan = [];
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
              this.pointLat = item.latitude;
              this.pointLng = item.longitude;
            });
          }
        });
      }
    }
  }

  mapClicked($event: any) {
    this.pointLat = $event.coords.lat;
    this.pointLng = $event.coords.lng;
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
