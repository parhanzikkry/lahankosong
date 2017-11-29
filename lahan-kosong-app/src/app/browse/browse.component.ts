import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  public selectedType: any;
  public selectedLuas: any;
  public selectedKemitraan: any;
  public selectedBidang: any;

  public searchType = ['wilayah', 'luasan', 'bidang pengelolaan', 'kemitraan'];
  public searchLuas = ['kurang dari 1 hektare', '1 sampai 5 hektare', 'lebih dari 5 hektare'];
  public searchKemitraan = ['bagi hasil', 'jual', 'kerja sama', 'sewa'];
  public searchBidang = ['kehutanan', 'pertanian', 'perkebunan', 'peternakan'];

  constructor() { }

  ngOnInit() {
    this.selectedType = 'pilih';
    this.selectedLuas = 'pilih';
    this.selectedKemitraan = 'pilih';
    this.selectedBidang = 'pilih';

    let bogor = { lat: -6.5971469, lng: 106.8060388 };
    let map = new google.maps.Map(document.getElementById('map'), {
      center: bogor,
      scrollwheel: false,
      zoom: 12
    });
    let infowindow = new google.maps.InfoWindow({
      content: 'Ini pusat Kota Bogor'
    });
    let marker = new google.maps.Marker({
      position: bogor,
      map: map,
      title: 'Kota Bogor'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

  setType(type: any) { this.selectedType = type; }
  setLuas(luas: any) { this.selectedLuas = luas; }
  setKemitraan(kemitraan: any) { this.selectedKemitraan = kemitraan; }
  setBidang(bidang: any) { this.selectedBidang = bidang; }
}