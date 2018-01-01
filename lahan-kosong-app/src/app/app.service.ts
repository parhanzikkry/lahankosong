import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
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
  private pathGetLahanDesaKelurahan = this.site + 'lahan/lahandesakelurahan/';
  private pathGetDataProvinsi = this.site + 'registrasilahan/dataprovinsi';
  private pathGetDataKabupatenKota = this.site + 'registrasilahan/datakabupatenkota/';
  private pathGetDataKecamatan = this.site + 'registrasilahan/datakecamatan/';
  private pathGetDataDesaKel = this.site + 'registrasilahan/datadesakel/';
  private pathLogin = this.site + 'auth/login';
  private pathRegister = this.site + 'auth/register';
  private pathMyLahan = this.site + 'lahan/mylahan';
  private pathVerifiedLahan = this.site + 'lahan/verifiedlahan';
  private pathUnverifiedLahan = this.site + 'lahan/unverifiedlahan';
  private pathRegisterPemilik = this.site + 'registrasilahan/tambahpemilik';
  private pathRegisterFotoPemilik = this.site + 'registrasilahan/tambahfotopemilik';
  private pathRegisterLahan = this.site + 'registrasilahan/tambahlahan';
  private pathRegisterFotoLahan = this.site + 'registrasilahan/tambahfoto';
  private pathRegisterPengelolaanlahan = this.site + 'registrasilahan/tambahpengelolaanlahan';
  private pathRegisterKemitraanlahan = this.site + 'registrasilahan/tambahkemitraanlahan';
  private pathHapuslahansaya = this.site + 'kelolalahan/hapuslahansaya';
  private pathPublisherData = this.site + 'kelolalahan/datapublisher';
  private pathDeletePublisher = this.site + 'kelolalahan/hapusdatapublisher/';
  private pathVerifLahanIni = this.site + 'kelolalahan/veriflahanini/';

  progressObserver = new Subject<number>();
  progress$ = this.progressObserver.asObservable();
  progress = 0;
  public markers = [];
  public _latitude = 0.0;
  public _longitude = 0.0;

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

  getLahanDesaKelurahan(id: any) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.get(this.pathGetLahanDesaKelurahan + id, {headers: header})
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
      console.log(response);
        const body = response.json();
        return body.kecamatan || {};
    });
  }

  getDataDesaKel(kecamatan_id: number) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.get(this.pathGetDataDesaKel + kecamatan_id, {headers: header})
    .map((response: Response) => {
        const body = response.json();
        return body.desakelurahan || {};
    });
  }

  public Login(username: string, password: string) {
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
      });
  }

  public CheckStatus() {
    if (localStorage.getItem('currentUser')) {
      const token = JSON.parse(localStorage.getItem('currentUser')).token;
      if (!this.jwtHelper.isTokenExpired(token)) {
        return this.jwtHelper.decodeToken(token).token;
      } else {
        localStorage.removeItem('currentUser');
        return false;
      }
    } else {
      return false;
    }
  }

  public getMyLahan() {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.get(this.pathMyLahan, {headers: header})
    .map((response: Response) => {
        const body = response.json();
        return body.lahan || {};
    });
  }

  public daftarLahan(data: any) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.post(this.pathRegisterLahan, data , {headers: header})
      .map((response: Response) => {
        return response.json();
      });
  }

  public daftarpemilik(data: any) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.post(this.pathRegisterPemilik, data, {headers: header})
      .map((response: Response) => {
        return response.json();
      });
  }

  public tambahfotopemilik(data:  Array<File>, id: any) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < data.length; i++) {
        formData.append(i, data[i], data[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      setInterval(() => {}, 500);
      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);
        this.progressObserver.next(this.progress);
      };
      xhr.open('POST', this.pathRegisterFotoPemilik + '/' + id, true);
      xhr.setRequestHeader('token', localStorage.getItem('currentUser')); // put token to header
      xhr.send(formData);
    });
  }

  public tambahlahan(data: any) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.post(this.pathRegisterLahan, data, {headers: header})
      .map((response: Response) => {
        return response.json();
      });
  }

  public tambahfotolahan(data: Array<File>, id: any) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < data.length; i++) {
        formData.append(i, data[i], data[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      setInterval(() => {}, 500);
      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);
        this.progressObserver.next(this.progress);
      };
      xhr.open('POST', this.pathRegisterFotoLahan + '/' + id, true);
      xhr.setRequestHeader('token', localStorage.getItem('currentUser')); // put token to header
      xhr.send(formData);
    });
  }

  public tambahpengelolaanlahan(data: any, id: any) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.post(this.pathRegisterPengelolaanlahan + '/' + id , data, {headers: header})
      .map((response: Response) => {
        return response.json();
      });
  }

  public tambahkemitraanlahan(data: any, id: any) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.post(this.pathRegisterKemitraanlahan + '/' + id, data, {headers: header})
      .map((response: Response) => {
        return response.json();
      });
  }

  public hapuslahansaya(id: any) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.get(this.pathHapuslahansaya + '/' + id, {headers: header})
      .map((response: Response) => {
        console.log(response);
        return response.json();
      });
  }

  public verifiedlahan() {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.get(this.pathVerifiedLahan, {headers: header})
    .map((response: Response) => {
      const body = response.json();
      return body.lahan || {};
    });
  }

  public unverifiedlahan() {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.get(this.pathUnverifiedLahan, {headers: header})
    .map((response: Response) => {
      const body = response.json();
      return body.lahan || {};
    });
  }

  public publisherdata() {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.get(this.pathPublisherData, {headers: header})
    .map((response: Response) => {
      const body = response.json();
      return body.data || {};
    });
  }

  public deletepublisher(id: any) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.get(this.pathDeletePublisher + id, {headers: header})
      .map((response: Response) => {
        return response;
      })
  }

  public veriflahanini(id:any) {
    const header = new Headers();
    header.append('Content-type', 'application/json');
    header.append('token', localStorage.getItem('currentUser'));
    return this.http.get(this.pathVerifLahanIni + id, {headers: header})
      .map((response: Response) => {
        return response.json();
      })
  }

}
