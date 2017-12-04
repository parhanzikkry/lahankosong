import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  public token: string;
  private jwtHelper: JwtHelper = new JwtHelper();
  private site = 'http://localhost:3000/';
  private pathGet5NewLahan = this.site + 'lahan/limalahanterbaru';
  private pathGetDetailLahan = this.site + 'lahan/detaillahan/';
  private pathGetDataLahan = this.site + 'lahan/cariberdasar/';
  private pathGetLahanKecamatan = this.site + 'lahan/lahankecamatan/';
  private pathGetDataProvinsi = this.site + 'registrasilahan/dataprovinsi';
  private pathGetDataKabupatenKota = this.site + 'registrasilahan/datakabupatenkota/';
  private pathGetDataKecamatan = this.site + 'registrasilahan/datakecamatan/';
  private pathLogin = this.site + 'auth/login';
  private pathRegister = this.site + 'auth/register';
  public markers = [];

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

  getLahanKecamatan(kabupatenKota_id: number) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.get(this.pathGetLahanKecamatan + kabupatenKota_id, {headers: header})
    .map((response: Response) => {
        const body = response.json();
        return body.lahan || {};
    });
  }

  getDataProvinsi() {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.get(this.pathGetDataProvinsi, {headers: header})
    .map((response: Response) => {
        const body = response.json();
        return body.provinsi || {};
    });
  }

  getDataKabupatenKota(provinsi_id: number) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.get(this.pathGetDataKabupatenKota + provinsi_id, {headers: header})
    .map((response: Response) => {
        const body = response.json();
        return body.kabupatenkota || {};
    });
  }

  getDataKecamatan(kabupatenkota_id: number) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.get(this.pathGetDataKecamatan + kabupatenkota_id, {headers: header})
    .map((response: Response) => {
        const body = response.json();
        return body.kecamatan || {};
    });
  }

  public Login(username: string, password:string) {
    const header = new Headers();
    header.append('Content-type', 'application/json' );
    return this.http.post(this.pathLogin, JSON.stringify({username: username, password: password}), {headers: header})
      .map((response: Response) => {
        console.log(response);
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().token;
        if (token) {
            // set token property
            this.token = token;
            // store username and jwt token in localStorage to keep user logged in
            // between page refreshes.
            localStorage.setItem('currentUser', JSON.stringify({token: token}));
            return true;
        } else {
            return false;
        }
    });
  }

  public Logout() {
    localStorage.removeItem('currentUser');
  }

  public RegisterPublisher(
    username: string,
    password: string,
    nama: string,
    email: string,
    noHp: string,
    TTL: string,
    alamat: string
  ) {
    const header = new Headers();
    header.append('Content-type', 'application/json' );
    const body = JSON.stringify({
      username_publisher: username,
      password_publisher: password,
      nama_publisher: nama,
      email_publisher: email,
      TTL_publisher: TTL,
      no_hp_publisher: noHp,
      alamat_publisher: alamat
    });
    return this.http.post(this.pathRegister, body, {headers: header})
      .map((response: Response) => {
        console.log(response);
      })
  }

  public CheckStatus() {
    if(localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

}
