import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AppService]
})
export class ProfileComponent implements OnInit {
  public lahanTerdaftar: any;
  private pemilik: any;
  public enum: number;

  constructor(
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pemilik = this.AppService.CheckStatus();
    if(!this.pemilik) {
      this.router.navigate(['']);
    } else { 
      this.lahanTerdaftar = [];
      this.AppService.get5NewLahan().subscribe(data => {
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
    }
  }

}
