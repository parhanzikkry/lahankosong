import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [AppService]
})

export class BrowseComponent implements OnInit {
  public selectedType: any;
  public selectedBidang: any;
  public selectedKemitraan: any;
  public selectedLuas: any;
  public selectedKecamatan: any;
  public selectedDesaKel: any;
  public showDesaKel: any;
  public lat: number = -6.5971469;
  public lng: number = 106.8060388;
  public zoom: number = 10;
  public markers: marker[];

  public searchType = {1: 'Pengelolaan', 2: 'Kemitraan', 3: 'Luasan', 4: 'Wilayah'};
  public searchBidang = {1: 'Pertanian Basah', 2: 'Petanian Kering', 3: 'Agroforestry', 4: 'Peternakan', 5: 'Perikanan', 6: 'Kehutanan'};
  public searchKemitraan = {1: 'Sewa', 2: 'Bagi Hasil', 3: 'Kerja Sama', 4: 'Jual'};
  public searchLuas = {1: 'Kurang dari 1 Ha', 2: '1 Ha sampai 5 Ha', 3: 'Lebih dari 5 Ha'};
  public idKabupatenKota = 3201;
  public searchKecamatan = {};
  public searchDesaKel = {};

  constructor(
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedType = 'Pilih';
    this.selectedBidang = 'Pilih';
    this.selectedKemitraan = 'Pilih';
    this.selectedLuas = 'Pilih';
    this.selectedKecamatan = 'Pilih';
    this.selectedDesaKel = 'Pilih';
    this.getDataKecamatan(this.idKabupatenKota);
  }

  setType(type: any) {
    this.selectedType = type;
    this.showDesaKel = 0;
    this.selectedBidang = 'Pilih';
    this.selectedKemitraan = 'Pilih';
    this.selectedLuas = 'Pilih';
    this.selectedKecamatan = 'Pilih';
    this.selectedDesaKel = 'Pilih';
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

  getDataDesaKel(desaKel_id: number) {
    this.searchDesaKel = {};
    this.AppService.getDataDesaKel(desaKel_id)
    .subscribe(data => {
      data.forEach(item => {
        this.searchDesaKel[item.id] = item.name;
      });
    });
  }

  setKecamatan(kecamatan: any) {
    this.markers = [];
    this.selectedDesaKel = 'Pilih';
    this.selectedKecamatan = kecamatan;
    const pilihan = +Object.keys(this.searchKecamatan).find(key => this.searchKecamatan[key] === kecamatan);
    this.AppService.getLahanKecamatan(pilihan)
    .subscribe(data => {
      data.forEach(item => {
        const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
        const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
        this.markers.push({
          id: item.id,
          lat: item.latitude,
          lng: item.longitude,
          pemilik: item.pemilik,
          luas: item.luasan_lahan,
          alamat: item.alamat_lahan,
          kemitraan: _kemitraan,
          pengelolaan: _pengelolaan,
          draggable: false
        });
      });
    });
    this.getDataDesaKel(pilihan);
    this.showDesaKel = 1;
  }

  setDesaKel(desaKel: any) {
    this.markers = [];
    this.selectedDesaKel = desaKel;
    const pilihan = +Object.keys(this.searchDesaKel).find(key => this.searchDesaKel[key] === desaKel);
    this.AppService.getLahanDesaKelurahan(pilihan)
    .subscribe(data => {
      data.forEach(item => {
        const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
        const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
        this.markers.push({
          id: item.id,
          lat: item.latitude,
          lng: item.longitude,
          pemilik: item.pemilik,
          luas: item.luasan_lahan,
          alamat: item.alamat_lahan,
          kemitraan: _kemitraan,
          pengelolaan: _pengelolaan,
          draggable: false
        });
      });
    });
  }

  setBidang(bidang: any) {
    this.markers = [];
    this.selectedBidang = bidang;
    const pilihan = +Object.keys(this.searchBidang).find(key => this.searchBidang[key] === bidang);
    this.AppService.getDataLahan(1, pilihan)
      .subscribe(data => {
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          this.markers.push({
            id: item.id,
            lat: item.latitude,
            lng: item.longitude,
            pemilik: item.pemilik,
            luas: item.luasan_lahan,
            alamat: item.alamat_lahan,
            kemitraan: _kemitraan,
            pengelolaan: _pengelolaan,
            draggable: false
          });
        });
      });
  }

  setKemitraan(kemitraan: any) {
    this.markers = [];
    this.selectedKemitraan = kemitraan;
    const pilihan = +Object.keys(this.searchKemitraan).find(key => this.searchKemitraan[key] === kemitraan);
    this.AppService.getDataLahan(2, pilihan)
      .subscribe(data => {
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          this.markers.push({
            id: item.id,
            lat: item.latitude,
            lng: item.longitude,
            pemilik: item.pemilik,
            luas: item.luasan_lahan,
            alamat: item.alamat_lahan,
            kemitraan: _kemitraan,
            pengelolaan: _pengelolaan,
            draggable: false
          });
        });
      });
  }

  setLuas(luas: any) {
    this.markers = [];
    this.selectedLuas = luas;
    const pilihan = +Object.keys(this.searchLuas).find(key => this.searchLuas[key] === luas);
    this.AppService.getDataLahan(3, pilihan)
      .subscribe(data => {
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          this.markers.push({
            id: item.id,
            lat: item.latitude,
            lng: item.longitude,
            pemilik: item.pemilik,
            luas: item.luasan_lahan,
            alamat: item.alamat_lahan,
            kemitraan: _kemitraan,
            pengelolaan: _pengelolaan,
            draggable: false
          });
        });
      });
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

interface marker {
  id: number;
  lat: number;
  lng: number;
  pemilik: string;
  luas: string;
  alamat: string;
  kemitraan: string;
  pengelolaan: string;
	label?: string;
	draggable: boolean;
}