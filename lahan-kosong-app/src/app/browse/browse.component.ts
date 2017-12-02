import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';
declare const google: any;

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
  public selectedProvinsi: any;
  public selectedKota: any;
  public selectedKecamatan: any;
  public lahan = [];

  public searchType = {1: 'Bidang Pengelolaan', 2: 'Kemitraan', 3: 'Luasan', 4: 'Wilayah'};
  public searchBidang = {1: 'Pertanian', 2: 'Hutan Kota', 3: 'Agroforestry', 4: 'Peternakan', 5: 'Perikanan', 6: 'Perkebunan'};
  public searchKemitraan = {1: 'Sewa', 2: 'Bagi Hasil', 3: 'Kerja Sama', 4: 'Jual'};
  public searchLuas = {1: 'Kurang dari 1 Ha', 2: '1 Ha sampai 5 Ha', 3: 'Lebih dari 5 Ha'};

  constructor(private AppService: AppService) { }

  ngOnInit() {
    this.selectedType = 'pilih';
    this.selectedBidang = 'pilih';
    this.selectedKemitraan = 'pilih';
    this.selectedLuas = 'pilih';
    this.selectedProvinsi = 'pilih';
    this.selectedKota = 'pilih';
    this.selectedKecamatan = 'pilih';

    const map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(-6.5971469, 106.8060388),
      scrollwheel: false,
      zoom: 11
    });
  }

  // clearMarker() {
  //   for (let i = 0; i < this.markers.length; i++) {
  //     this.markers[i].setMap(null);
  //   }
  // }

  loadLahan(listLahan: any) {
    listLahan.forEach(lahan => {
      console.log(lahan.latitude + ', ' + lahan.longitude);
    });
  }

  setType(type: any) {
    this.selectedType = type;
  }

  setBidang(bidang: any) {
    this.lahan = [];
    this.selectedBidang = bidang;
    const pilihan = +Object.keys(this.searchBidang).find(key => this.searchBidang[key] === bidang);
    const map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(-6.5971469, 106.8060388),
      scrollwheel: false,
      zoom: 11
    });
    this.AppService.getDataLahan(1, pilihan)
      .subscribe(data => {
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          const _lahan = {
              pemilik: item.pemilik,
              luasan: item.luasan_lahan,
              alamat: item.alamat_lahan,
              kemitraan: _kemitraan,
              pengelolaan: _pengelolaan,
              latitude: item.latitude,
              longitude: item.longitude
          };
          this.lahan.push(_lahan);
          console.log(item.latitude + ', ' + item.longitude);
          let infowindow = new google.maps.InfoWindow({
            content: item.alamat_lahan
          });
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.latitude, item.longitude),
            map: map,
            title: item.alamat_lahan
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        });
      this.loadLahan(this.lahan);
      });
  }

  setKemitraan(kemitraan: any) {
    this.lahan = [];
    this.selectedKemitraan = kemitraan;
    const pilihan = +Object.keys(this.searchKemitraan).find(key => this.searchKemitraan[key] === kemitraan);
    const map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(-6.5971469, 106.8060388),
      scrollwheel: false,
      zoom: 11
    });
    this.AppService.getDataLahan(2, pilihan)
      .subscribe(data => {
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          const _lahan = {
              pemilik: item.pemilik,
              luasan: item.luasan_lahan,
              alamat: item.alamat_lahan,
              kemitraan: _kemitraan,
              pengelolaan: _pengelolaan,
              latitude: item.latitude,
              longitude: item.longitude
          };
          this.lahan.push(_lahan);

          const infowindow = new google.maps.InfoWindow({
            content: item.alamat_lahan
          });
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.latitude, item.longitude),
            map: map,
            title: item.alamat_lahan
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        });
        this.loadLahan(this.lahan);
      });
  }

  setLuas(luas: any) {
    this.lahan = [];
    this.selectedLuas = luas;
    const pilihan = +Object.keys(this.searchLuas).find(key => this.searchLuas[key] === luas);
    const map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(-6.5971469, 106.8060388),
      scrollwheel: false,
      zoom: 11
    });
    this.AppService.getDataLahan(3, pilihan)
      .subscribe(data => {
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          const _lahan = {
              pemilik: item.pemilik,
              luasan: item.luasan_lahan,
              alamat: item.alamat_lahan,
              kemitraan: _kemitraan,
              pengelolaan: _pengelolaan,
              latitude: item.latitude,
              longitude: item.longitude
          };
          this.lahan.push(_lahan);

          const infowindow = new google.maps.InfoWindow({
            content: item.alamat_lahan
          });
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.latitude, item.longitude),
            map: map,
            title: item.alamat_lahan
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        });
        this.loadLahan(this.lahan);
      });
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  objectValues(obj) {
    return Object.keys(obj).map(key => obj[key]);
  }
}
