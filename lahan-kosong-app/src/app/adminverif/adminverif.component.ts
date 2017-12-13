import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert2';

@Component({
    selector: 'app-adminverif',
    templateUrl: './adminverif.component.html',
    styleUrls: ['./adminverif.component.css'],
    providers: [AppService]
})
export class AdminverifComponent implements OnInit {
  public Arr = Array;
  public lahanTerdaftar: any;
  private pemilik: any;
  public enum: number;

  constructor(
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.lahanTerdaftar = [];
    this.AppService.unverifiedlahan().subscribe(data => {
      this.enum = 1;
      data.forEach(item => {
        const _kemitraan = item.kemitraan.map(function(e){ return e.kemitraan; }).join(', ');
        const _pengelolaan = item.pengelolaan.map(function(e){ return e.pengelolaan; }).join(', ');
        const _lahan = {
          pemilik: item.pemilik,
          luasan: item.luasan_lahan,
          alamat: item.alamat_lahan,
          kemitraan: _kemitraan,
          pengelolaan: _pengelolaan,
          id: item.id,
          no: this.enum
        };
        this.lahanTerdaftar.push(_lahan);
        this.enum++;
      });
    });
    console.log(this.lahanTerdaftar);
  }
}
