import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
declare const google: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [AppService]
})
export class DetailComponent implements OnInit {
  public idLahan: any;
  public detailLahan: any;

  constructor(
    private AppService: AppService,
    private activatedRoute: ActivatedRoute
  ) {
      this.activatedRoute.params.subscribe((params: Params) => {
        const id = params['id'];
        this.idLahan = id;
      });
  }

  ngOnInit() {
    this.AppService.getDetailLahan(this.idLahan).subscribe(data => {
      console.log(data);
      data.forEach(item => {
        const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
        const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
        this.detailLahan = {
          nama_pemilik: item.pemilik,
          alamat_pemilik: item.alamat_pemilik,
          foto_pemilik: item.foto_pemilik,
          alamat_lahan: item.alamat_lahan,
          luasan_lahan: item.luasan_lahan,
          lahan_sebelumnya: item.sebelumnya,
          pengelolaan: _pengelolaan,
          kemitraan: _kemitraan
        };

        const map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(item.latitude, item.longitude),
          scrollwheel: false,
          zoom: 12
        });
        const infowindow = new google.maps.InfoWindow({
          content: item.alamat_lahan
        });
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(item.latitude, item.longitude),
          map: map,
          title: 'Posisi Lahan'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      });
    });
  }

}
