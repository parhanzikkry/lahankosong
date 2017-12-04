import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  public selectedKabupatenKota: any;
  public selectedKecamatan: any;
  public showKabupatenKota: any;
  public showKecamatan: any;
  public map: any;

  public searchType = {1: 'Pengelolaan', 2: 'Kemitraan', 3: 'Luasan', 4: 'Wilayah'};
  public searchBidang = {1: 'Pertanian', 3: 'Agroforestry', 4: 'Peternakan', 5: 'Perikanan', 6: 'Kehutanan'};
  public searchKemitraan = {1: 'Sewa', 2: 'Bagi Hasil', 3: 'Kerja Sama', 4: 'Jual'};
  public searchLuas = {1: 'Kurang dari 1 Ha', 2: '1 Ha sampai 5 Ha', 3: 'Lebih dari 5 Ha'};
  public searchProvinsi = {};
  public searchKabupatenKota = {};
  public searchKecamatan = {};

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
    this.selectedProvinsi = 'Pilih';
    this.selectedKabupatenKota = 'Pilih';
    this.selectedKecamatan = 'Pilih';
    this.getDataProvinsi();

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(-6.5971469, 106.8060388),
      scrollwheel: false,
      zoom: 10
    });
  }

  clearMarkers() {
    this.AppService.markers.forEach(marker => {
      marker.setMap(null);
    });
  }

  setType(type: any) {
    this.selectedType = type;
    this.showKabupatenKota = 0;
    this.showKecamatan = 0;
    this.selectedBidang = 'Pilih';
    this.selectedKemitraan = 'Pilih';
    this.selectedLuas = 'Pilih';
    this.selectedProvinsi = 'Pilih';
    this.selectedKabupatenKota = 'Pilih';
    this.selectedKecamatan = 'Pilih';
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
    this.clearMarkers();
    this.selectedKecamatan = kecamatan;
    const pilihan = +Object.keys(this.searchKecamatan).find(key => this.searchKecamatan[key] === kecamatan);
    this.AppService.getLahanKecamatan(pilihan)
    .subscribe(data => {
      data.forEach(item => {
        const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
        const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
        const infowindow = new google.maps.InfoWindow({
          content: `Info lahan :
                    <h5 class="card-title">Lahan milik ` + item.pemilik + `</h5>
                    <p class="card-text">
                      <strong>Luasan</strong> : ` + item.luasan_lahan + ` Ha<br />
                      <strong>Kemitraan</strong> : ` + _kemitraan + `<br />
                      <strong>Pengelolaan</strong> : ` + _pengelolaan + `<br />
                      <strong>Alamat</strong> : ` + item.alamat_lahan + `
                    </p>
                    <div class="text-center">
                      <a href="/detail/` + item.id + `" class="btn btn-success btn-sm text-white">Lihat Detail</a>
                    </div>`
        });
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(item.latitude, item.longitude),
          map: this.map,
          title: item.alamat_lahan
        });
        marker.addListener('click', function() {
          infowindow.open(this.map, marker);
        });
        this.AppService.markers.push(marker);
      });
    });
  }

  setBidang(bidang: any) {
    this.clearMarkers();
    this.selectedBidang = bidang;
    const pilihan = +Object.keys(this.searchBidang).find(key => this.searchBidang[key] === bidang);
    this.AppService.getDataLahan(1, pilihan)
      .subscribe(data => {
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          const infowindow = new google.maps.InfoWindow({
            content: `Info lahan :
                      <h5 class="card-title">Lahan milik ` + item.pemilik + `</h5>
                      <p class="card-text">
                        <strong>Luasan</strong> : ` + item.luasan_lahan + ` Ha<br />
                        <strong>Kemitraan</strong> : ` + _kemitraan + `<br />
                        <strong>Pengelolaan</strong> : ` + _pengelolaan + `<br />
                        <strong>Alamat</strong> : ` + item.alamat_lahan + `
                      </p>
                      <div class="text-center">
                        <a href="/detail/` + item.id + `" class="btn btn-success btn-sm text-white">Lihat Detail</a>
                      </div>`
          });
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.latitude, item.longitude),
            map: this.map,
            title: item.alamat_lahan
          });
          marker.addListener('click', function() {
            infowindow.open(this.map, marker);
          });
          this.AppService.markers.push(marker);
        });
      });
  }

  setKemitraan(kemitraan: any) {
    this.clearMarkers();
    this.selectedKemitraan = kemitraan;
    const pilihan = +Object.keys(this.searchKemitraan).find(key => this.searchKemitraan[key] === kemitraan);
    this.AppService.getDataLahan(2, pilihan)
      .subscribe(data => {
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          const infowindow = new google.maps.InfoWindow({
            content: `Info lahan :
                      <h5 class="card-title">Lahan milik ` + item.pemilik + `</h5>
                      <p class="card-text">
                        <strong>Luasan</strong> : ` + item.luasan_lahan + ` Ha<br />
                        <strong>Kemitraan</strong> : ` + _kemitraan + `<br />
                        <strong>Pengelolaan</strong> : ` + _pengelolaan + `<br />
                        <strong>Alamat</strong> : ` + item.alamat_lahan + `
                      </p>
                      <div class="text-center">
                        <a href="/detail/` + item.id + `" class="btn btn-success btn-sm text-white">Lihat Detail</a>
                      </div>`
          });
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.latitude, item.longitude),
            map: this.map,
            title: item.alamat_lahan
          });
          marker.addListener('click', function() {
            infowindow.open(this.map, marker);
          });
          this.AppService.markers.push(marker);
        });
      });
  }

  setLuas(luas: any) {
    this.clearMarkers();
    this.selectedLuas = luas;
    const pilihan = +Object.keys(this.searchLuas).find(key => this.searchLuas[key] === luas);
    this.AppService.getDataLahan(3, pilihan)
      .subscribe(data => {
        data.forEach(item => {
          const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
          const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
          const infowindow = new google.maps.InfoWindow({
            content: `Info lahan :
                      <h5 class="card-title">Lahan milik ` + item.pemilik + `</h5>
                      <p class="card-text">
                        <strong>Luasan</strong> : ` + item.luasan_lahan + ` Ha<br />
                        <strong>Kemitraan</strong> : ` + _kemitraan + `<br />
                        <strong>Pengelolaan</strong> : ` + _pengelolaan + `<br />
                        <strong>Alamat</strong> : ` + item.alamat_lahan + `
                      </p>
                      <div class="text-center">
                        <a href="/detail/` + item.id + `" class="btn btn-success btn-sm text-white">Lihat Detail</a>
                      </div>`
          });
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.latitude, item.longitude),
            map: this.map,
            title: item.alamat_lahan
          });
          marker.addListener('click', function() {
            infowindow.open(this.map, marker);
          });
          this.AppService.markers.push(marker);
        });
      });
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  objectValues(obj) {
    return Object.keys(obj).map(key => obj[key]);
  }
}
