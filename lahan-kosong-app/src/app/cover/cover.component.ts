import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  providers: [AppService]
})
export class CoverComponent implements OnInit {
  public newLahan: any;

  constructor(private AppService: AppService) { }

  ngOnInit() {
    this.newLahan = [];
    this.AppService.get5NewLahan().subscribe(data => { 
      data.forEach(item => {
        let _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(", ");
        let _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(", ");
        let _lahan = {
          pemilik: item.pemilik,
          luasan: item.luasan_lahan,
          alamat: item.alamat_lahan,
          kemitraan: _kemitraan,
          pengelolaan: _pengelolaan
        }
        this.newLahan.push(_lahan);
      });
    });
  }

}
