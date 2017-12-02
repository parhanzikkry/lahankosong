import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private pathGet5NewLahan = 'http://localhost:3000/lahan/limalahanterbaru';
  private pathGetDetailLahan = 'http://localhost:3000/lahan/detaillahan/';
  private pathGetDataLahan = 'http://localhost:3000/lahan/cariberdasar/';

  constructor(private http: Http) { }

  get5NewLahan() {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.get(this.pathGet5NewLahan, {headers: header})
    .map((response: Response) => {
        const body = response.json();
        return body.lahan || {};
    });
  }

  getDetailLahan(id: number) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.get(this.pathGetDetailLahan + id, {headers: header})
    .map((response: Response) => {
        const body = response.json();
        return body.lahan || {};
    });
  }

  getDataLahan(kategori: number, pilihan: number) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.get(this.pathGetDataLahan + kategori + '/' + pilihan, {headers: header})
    .map((response: Response) => {
        const body = response.json();
        return body.lahan || {};
    });
  }

}
