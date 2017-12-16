webpackJsonp([1,5],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
        this.site = 'http://localhost:3000/';
        this.pathGet5NewLahan = this.site + 'lahan/limalahanterbaru';
        this.pathGetDetailLahan = this.site + 'lahan/detaillahan/';
        this.pathGetDataLahan = this.site + 'lahan/cariberdasar/';
        this.pathGetLahanKecamatan = this.site + 'lahan/lahankecamatan/';
        this.pathGetLahanDesaKelurahan = this.site + 'lahan/lahandesakelurahan/';
        this.pathGetDataProvinsi = this.site + 'registrasilahan/dataprovinsi';
        this.pathGetDataKabupatenKota = this.site + 'registrasilahan/datakabupatenkota/';
        this.pathGetDataKecamatan = this.site + 'registrasilahan/datakecamatan/';
        this.pathGetDataDesaKel = this.site + 'registrasilahan/datadesakel/';
        this.pathLogin = this.site + 'auth/login';
        this.pathRegister = this.site + 'auth/register';
        this.pathMyLahan = this.site + 'lahan/mylahan';
        this.pathVerifiedLahan = this.site + 'lahan/verifiedlahan';
        this.pathUnverifiedLahan = this.site + 'lahan/unverifiedlahan';
        this.pathRegisterPemilik = this.site + 'registrasilahan/tambahpemilik';
        this.pathRegisterFotoPemilik = this.site + 'registrasilahan/tambahfotopemilik';
        this.pathRegisterLahan = this.site + 'registrasilahan/tambahlahan';
        this.pathRegisterFotoLahan = this.site + 'registrasilahan/tambahfoto';
        this.pathRegisterPengelolaanlahan = this.site + 'registrasilahan/tambahpengelolaanlahan';
        this.pathRegisterKemitraanlahan = this.site + 'registrasilahan/tambahkemitraanlahan';
        this.pathHapuslahansaya = this.site + 'kelolalahan/hapuslahansaya';
        this.pathPublisherData = this.site + 'kelolalahan/datapublisher';
        this.pathDeletePublisher = this.site + 'kelolalahan/hapusdatapublisher/';
        this.pathVerifLahanIni = this.site + 'kelolalahan/veriflahanini/';
        this.progressObserver = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.progress$ = this.progressObserver.asObservable();
        this.progress = 0;
        this.markers = [];
        this._latitude = 0.0;
        this._longitude = 0.0;
    }
    AppService.prototype.get5NewLahan = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.get(this.pathGet5NewLahan, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.lahan || {};
        });
    };
    AppService.prototype.getDetailLahan = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.get(this.pathGetDetailLahan + id, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.lahan || {};
        });
    };
    AppService.prototype.getDataLahan = function (kategori, pilihan) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.get(this.pathGetDataLahan + kategori + '/' + pilihan, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.lahan || {};
        });
    };
    AppService.prototype.getLahanKecamatan = function (kabupatenKota_id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.get(this.pathGetLahanKecamatan + kabupatenKota_id, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.lahan || {};
        });
    };
    AppService.prototype.getLahanDesaKelurahan = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.get(this.pathGetLahanDesaKelurahan + id, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.lahan || {};
        });
    };
    AppService.prototype.getDataProvinsi = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.get(this.pathGetDataProvinsi, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.provinsi || {};
        });
    };
    AppService.prototype.getDataKabupatenKota = function (provinsi_id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.get(this.pathGetDataKabupatenKota + provinsi_id, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.kabupatenkota || {};
        });
    };
    AppService.prototype.getDataKecamatan = function (kabupatenkota_id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.get(this.pathGetDataKecamatan + kabupatenkota_id, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.kecamatan || {};
        });
    };
    AppService.prototype.getDataDesaKel = function (kecamatan_id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.get(this.pathGetDataDesaKel + kecamatan_id, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.desakelurahan || {};
        });
    };
    AppService.prototype.Login = function (username, password) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        return this.http.post(this.pathLogin, JSON.stringify({ username: username, password: password }), { headers: header })
            .map(function (response) {
            console.log(response);
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in localStorage to keep user logged in
                // between page refreshes.
                localStorage.setItem('currentUser', JSON.stringify({ token: token }));
                return true;
            }
            else {
                return false;
            }
        });
    };
    AppService.prototype.Logout = function () {
        localStorage.removeItem('currentUser');
    };
    AppService.prototype.RegisterPublisher = function (username, password, nama, email, noHp, TTL, alamat) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        var body = JSON.stringify({
            username_publisher: username,
            password_publisher: password,
            nama_publisher: nama,
            email_publisher: email,
            TTL_publisher: TTL,
            no_hp_publisher: noHp,
            alamat_publisher: alamat
        });
        return this.http.post(this.pathRegister, body, { headers: header })
            .map(function (response) {
        });
    };
    AppService.prototype.CheckStatus = function () {
        if (localStorage.getItem('currentUser')) {
            var token = JSON.parse(localStorage.getItem('currentUser')).token;
            if (!this.jwtHelper.isTokenExpired(token)) {
                return this.jwtHelper.decodeToken(token).token;
            }
            else {
                localStorage.removeItem('currentUser');
                return false;
            }
        }
        else {
            return false;
        }
    };
    AppService.prototype.getMyLahan = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.get(this.pathMyLahan, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.lahan || {};
        });
    };
    AppService.prototype.daftarLahan = function (data) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.post(this.pathRegisterLahan, data, { headers: header })
            .map(function (response) {
            return response.json();
        });
    };
    AppService.prototype.daftarpemilik = function (data) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.post(this.pathRegisterPemilik, data, { headers: header })
            .map(function (response) {
            return response.json();
        });
    };
    AppService.prototype.tambahfotopemilik = function (data, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < data.length; i++) {
                formData.append(i, data[i], data[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            setInterval(function () { }, 500);
            xhr.upload.onprogress = function (event) {
                _this.progress = Math.round(event.loaded / event.total * 100);
                _this.progressObserver.next(_this.progress);
            };
            xhr.open('POST', _this.pathRegisterFotoPemilik + '/' + id, true);
            xhr.setRequestHeader('token', localStorage.getItem('currentUser')); // put token to header
            xhr.send(formData);
        });
    };
    AppService.prototype.tambahlahan = function (data) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.post(this.pathRegisterLahan, data, { headers: header })
            .map(function (response) {
            return response.json();
        });
    };
    AppService.prototype.tambahfotolahan = function (data, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < data.length; i++) {
                formData.append(i, data[i], data[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            setInterval(function () { }, 500);
            xhr.upload.onprogress = function (event) {
                _this.progress = Math.round(event.loaded / event.total * 100);
                _this.progressObserver.next(_this.progress);
            };
            xhr.open('POST', _this.pathRegisterFotoLahan + '/' + id, true);
            xhr.setRequestHeader('token', localStorage.getItem('currentUser')); // put token to header
            xhr.send(formData);
        });
    };
    AppService.prototype.tambahpengelolaanlahan = function (data, id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.post(this.pathRegisterPengelolaanlahan + '/' + id, data, { headers: header })
            .map(function (response) {
            return response.json();
        });
    };
    AppService.prototype.tambahkemitraanlahan = function (data, id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.post(this.pathRegisterKemitraanlahan + '/' + id, data, { headers: header })
            .map(function (response) {
            return response.json();
        });
    };
    AppService.prototype.hapuslahansaya = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.get(this.pathHapuslahansaya + '/' + id, { headers: header })
            .map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    AppService.prototype.verifiedlahan = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.get(this.pathVerifiedLahan, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.lahan || {};
        });
    };
    AppService.prototype.unverifiedlahan = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.get(this.pathUnverifiedLahan, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.lahan || {};
        });
    };
    AppService.prototype.publisherdata = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.get(this.pathPublisherData, { headers: header })
            .map(function (response) {
            var body = response.json();
            return body.data || {};
        });
    };
    AppService.prototype.deletepublisher = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.get(this.pathDeletePublisher + id, { headers: header })
            .map(function (response) {
            return response;
        });
    };
    AppService.prototype.veriflahanini = function (id) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-type', 'application/json');
        header.append('token', localStorage.getItem('currentUser'));
        return this.http.get(this.pathVerifLahanIni + id, { headers: header })
            .map(function (response) {
            return response.json();
        });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 190;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(232);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminlahanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminlahanComponent = (function () {
    function AdminlahanComponent(AppService, router, route) {
        this.AppService = AppService;
        this.router = router;
        this.route = route;
        this.Arr = Array;
    }
    AdminlahanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lahanTerdaftar = [];
        this.AppService.verifiedlahan().subscribe(function (data) {
            console.log(data);
            _this.enum = 1;
            data.forEach(function (item) {
                var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                var _lahan = {
                    pemilik: item.pemilik,
                    luasan: item.luasan_lahan,
                    alamat: item.alamat_lahan,
                    kemitraan: _kemitraan,
                    pengelolaan: _pengelolaan,
                    id: item.id,
                    no: _this.enum
                };
                _this.lahanTerdaftar.push(_lahan);
                _this.enum++;
            });
        });
    };
    AdminlahanComponent.prototype.ngDeleted = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Apa Anda yakin?',
            text: 'Lahan yang telah dihapus tidak dapat dikembalikan lagi',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
        }).then(function (result) {
            if (result.value) {
                _this.AppService.hapuslahansaya(id)
                    .subscribe(function (hapus) {
                    _this.ngOnInit();
                });
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                    title: 'Lahan telah terhapus',
                    type: 'success'
                });
            }
        });
    };
    return AdminlahanComponent;
}());
AdminlahanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminlahan',
        template: __webpack_require__(317),
        styles: [__webpack_require__(290)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AdminlahanComponent);

var _a, _b, _c;
//# sourceMappingURL=adminlahan.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpublisherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminpublisherComponent = (function () {
    function AdminpublisherComponent(AppService, router, route) {
        this.AppService = AppService;
        this.router = router;
        this.route = route;
        this.Arr = Array;
    }
    AdminpublisherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.publisher = [];
        this.AppService.publisherdata()
            .subscribe(function (data) {
            _this.enum = 1;
            data.forEach(function (item) {
                var _publisher = {
                    nama: item.nama_publisher,
                    email: item.email_publisher,
                    nohp: item.no_hp_publisher,
                    ttl: item.TTL_publisher,
                    alamat: item.alamat_publisher,
                    id: item.id,
                    no: _this.enum
                };
                _this.publisher.push(_publisher);
                _this.enum++;
            });
        });
    };
    AdminpublisherComponent.prototype.ngDelete = function (id) {
        this.AppService.deletepublisher(id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    return AdminpublisherComponent;
}());
AdminpublisherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminpublisher',
        template: __webpack_require__(318),
        styles: [__webpack_require__(291)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AdminpublisherComponent);

var _a, _b, _c;
//# sourceMappingURL=adminpublisher.component.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminverifComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminverifComponent = (function () {
    function AdminverifComponent(AppService, router, route) {
        this.AppService = AppService;
        this.router = router;
        this.route = route;
        this.Arr = Array;
    }
    AdminverifComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lahanTerdaftar = [];
        this.AppService.unverifiedlahan().subscribe(function (data) {
            _this.enum = 1;
            data.forEach(function (item) {
                var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                var _lahan = {
                    pemilik: item.pemilik,
                    luasan: item.luasan_lahan,
                    alamat: item.alamat_lahan,
                    kemitraan: _kemitraan,
                    pengelolaan: _pengelolaan,
                    id: item.id,
                    no: _this.enum
                };
                _this.lahanTerdaftar.push(_lahan);
                _this.enum++;
            });
        });
    };
    AdminverifComponent.prototype.ngDeleted = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Apa Anda yakin?',
            text: 'Lahan yang telah dihapus tidak dapat dikembalikan lagi',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
        }).then(function (result) {
            if (result.value) {
                _this.AppService.hapuslahansaya(id)
                    .subscribe(function (hapus) {
                    _this.ngOnInit();
                });
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                    title: 'Lahan telah terhapus',
                    type: 'success'
                });
            }
        });
    };
    return AdminverifComponent;
}());
AdminverifComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminverif',
        template: __webpack_require__(319),
        styles: [__webpack_require__(292)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AdminverifComponent);

var _a, _b, _c;
//# sourceMappingURL=adminverif.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Lahan Kosong';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(320),
        styles: [__webpack_require__(293)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cover_cover_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__browse_browse_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__no_content_no_content_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__detail_detail_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__upload_upload_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__content_content_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__adminlahan_adminlahan_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__adminverif_adminverif_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__adminpublisher_adminpublisher_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__edit_edit_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__post_post_component__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__cover_cover_component__["a" /* CoverComponent */],
            __WEBPACK_IMPORTED_MODULE_12__browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_13__no_content_no_content_component__["a" /* NoContentComponent */],
            __WEBPACK_IMPORTED_MODULE_14__detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_15__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__adminlahan_adminlahan_component__["a" /* AdminlahanComponent */],
            __WEBPACK_IMPORTED_MODULE_22__adminverif_adminverif_component__["a" /* AdminverifComponent */],
            __WEBPACK_IMPORTED_MODULE_23__adminpublisher_adminpublisher_component__["a" /* AdminpublisherComponent */],
            __WEBPACK_IMPORTED_MODULE_24__edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_25__post_post_component__["a" /* PostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* HomeComponent */] },
                { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_12__browse_browse_component__["a" /* BrowseComponent */] },
                { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_14__detail_detail_component__["a" /* DetailComponent */] },
                { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_24__edit_edit_component__["a" /* EditComponent */] },
                { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_18__upload_upload_component__["a" /* UploadComponent */] },
                { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */] },
                { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                { path: 'post', component: __WEBPACK_IMPORTED_MODULE_25__post_post_component__["a" /* PostComponent */] },
                { path: '**', component: __WEBPACK_IMPORTED_MODULE_13__no_content_no_content_component__["a" /* NoContentComponent */] },
            ]),
            __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDeTMHQ3sm7_RXFEBlAbVRrHwCH6sOTSUU'
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = (function () {
    function AuthComponent(_fb, AppService, router, route) {
        this._fb = _fb;
        this.AppService = AppService;
        this.router = router;
        this.route = route;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.registerForm = this._fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            nama: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            noHp: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            TTL: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            alamat: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    AuthComponent.prototype.onLogin = function () {
        var _this = this;
        this.AppService.Login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    title: 'Login Berhasil',
                    text: 'Silahkan klik OK untuk melanjutkan',
                    type: 'success',
                    confirmButtonColor: '#28a745',
                    confirmButtonText: 'OK'
                });
                var role = _this.AppService.CheckStatus();
                if (role.role == 'admin') {
                    _this.router.navigate(['dashboard']);
                }
                else if (role.role == 'publisher') {
                    _this.router.navigate(['profile']);
                }
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    title: 'Login Gagal',
                    text: 'Username atau Password yang Anda masukkan salah',
                    type: 'error',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'OK'
                });
            }
        });
    };
    AuthComponent.prototype.onRegister = function () {
        this.AppService.RegisterPublisher(this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.nama, this.registerForm.value.email, this.registerForm.value.noHp, this.registerForm.value.TTL, this.registerForm.value.alamat)
            .subscribe(function (data) {
            console.log(data);
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                title: 'Pendaftaran Berhasil',
                text: 'Silahkan cek email Anda untuk konfirmasi',
                type: 'success',
                confirmButtonColor: '#28a745',
                confirmButtonText: 'OK'
            });
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(321),
        styles: [__webpack_require__(294)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], AuthComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseComponent = (function () {
    function BrowseComponent(AppService, router, route) {
        this.AppService = AppService;
        this.router = router;
        this.route = route;
        this.lat = -6.5971469;
        this.lng = 106.8060388;
        this.zoom = 10;
        this.searchType = { 1: 'Pengelolaan', 2: 'Kemitraan', 3: 'Luasan', 4: 'Wilayah' };
        this.searchBidang = { 1: 'Pertanian Basah', 2: 'Petanian Kering', 3: 'Agroforestry', 4: 'Peternakan', 5: 'Perikanan', 6: 'Kehutanan' };
        this.searchKemitraan = { 1: 'Sewa', 2: 'Bagi Hasil', 3: 'Kerja Sama', 4: 'Jual' };
        this.searchLuas = { 1: 'Kurang dari 1 Ha', 2: '1 Ha sampai 5 Ha', 3: 'Lebih dari 5 Ha' };
        this.idKabupatenKota = 3201;
        this.searchKecamatan = {};
        this.searchDesaKel = {};
    }
    BrowseComponent.prototype.ngOnInit = function () {
        this.selectedType = 'Pilih';
        this.selectedBidang = 'Pilih';
        this.selectedKemitraan = 'Pilih';
        this.selectedLuas = 'Pilih';
        this.selectedKecamatan = 'Pilih';
        this.selectedDesaKel = 'Pilih';
        this.getDataKecamatan(this.idKabupatenKota);
    };
    BrowseComponent.prototype.setType = function (type) {
        this.selectedType = type;
        this.showDesaKel = 0;
        this.selectedBidang = 'Pilih';
        this.selectedKemitraan = 'Pilih';
        this.selectedLuas = 'Pilih';
        this.selectedKecamatan = 'Pilih';
        this.selectedDesaKel = 'Pilih';
    };
    BrowseComponent.prototype.getDataKecamatan = function (kabupatenKota_id) {
        var _this = this;
        this.searchKecamatan = {};
        this.AppService.getDataKecamatan(kabupatenKota_id)
            .subscribe(function (data) {
            data.forEach(function (item) {
                _this.searchKecamatan[item.id] = item.name;
            });
        });
    };
    BrowseComponent.prototype.getDataDesaKel = function (desaKel_id) {
        var _this = this;
        this.searchDesaKel = {};
        this.AppService.getDataDesaKel(desaKel_id)
            .subscribe(function (data) {
            data.forEach(function (item) {
                _this.searchDesaKel[item.id] = item.name;
            });
        });
    };
    BrowseComponent.prototype.setKecamatan = function (kecamatan) {
        var _this = this;
        this.markers = [];
        this.selectedDesaKel = 'Pilih';
        this.selectedKecamatan = kecamatan;
        var pilihan = +Object.keys(this.searchKecamatan).find(function (key) { return _this.searchKecamatan[key] === kecamatan; });
        this.AppService.getLahanKecamatan(pilihan)
            .subscribe(function (data) {
            data.forEach(function (item) {
                var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                _this.markers.push({
                    id: item.id,
                    lat: item.latitude,
                    lng: item.longitude,
                    pemilik: item.pemilik,
                    luas: item.luasan_lahan,
                    alamat: item.alamat_lahan,
                    kemitraan: _kemitraan,
                    pengelolaan: _pengelolaan,
                    draggable: false
                });
            });
        });
        this.getDataDesaKel(pilihan);
        this.showDesaKel = 1;
    };
    BrowseComponent.prototype.setDesaKel = function (desaKel) {
        var _this = this;
        this.markers = [];
        this.selectedDesaKel = desaKel;
        var pilihan = +Object.keys(this.searchDesaKel).find(function (key) { return _this.searchDesaKel[key] === desaKel; });
        this.AppService.getLahanDesaKelurahan(pilihan)
            .subscribe(function (data) {
            data.forEach(function (item) {
                var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                _this.markers.push({
                    id: item.id,
                    lat: item.latitude,
                    lng: item.longitude,
                    pemilik: item.pemilik,
                    luas: item.luasan_lahan,
                    alamat: item.alamat_lahan,
                    kemitraan: _kemitraan,
                    pengelolaan: _pengelolaan,
                    draggable: false
                });
            });
        });
    };
    BrowseComponent.prototype.setBidang = function (bidang) {
        var _this = this;
        this.markers = [];
        this.selectedBidang = bidang;
        var pilihan = +Object.keys(this.searchBidang).find(function (key) { return _this.searchBidang[key] === bidang; });
        this.AppService.getDataLahan(1, pilihan)
            .subscribe(function (data) {
            data.forEach(function (item) {
                var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                _this.markers.push({
                    id: item.id,
                    lat: item.latitude,
                    lng: item.longitude,
                    pemilik: item.pemilik,
                    luas: item.luasan_lahan,
                    alamat: item.alamat_lahan,
                    kemitraan: _kemitraan,
                    pengelolaan: _pengelolaan,
                    draggable: false
                });
            });
        });
    };
    BrowseComponent.prototype.setKemitraan = function (kemitraan) {
        var _this = this;
        this.markers = [];
        this.selectedKemitraan = kemitraan;
        var pilihan = +Object.keys(this.searchKemitraan).find(function (key) { return _this.searchKemitraan[key] === kemitraan; });
        this.AppService.getDataLahan(2, pilihan)
            .subscribe(function (data) {
            data.forEach(function (item) {
                var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                _this.markers.push({
                    id: item.id,
                    lat: item.latitude,
                    lng: item.longitude,
                    pemilik: item.pemilik,
                    luas: item.luasan_lahan,
                    alamat: item.alamat_lahan,
                    kemitraan: _kemitraan,
                    pengelolaan: _pengelolaan,
                    draggable: false
                });
            });
        });
    };
    BrowseComponent.prototype.setLuas = function (luas) {
        var _this = this;
        this.markers = [];
        this.selectedLuas = luas;
        var pilihan = +Object.keys(this.searchLuas).find(function (key) { return _this.searchLuas[key] === luas; });
        this.AppService.getDataLahan(3, pilihan)
            .subscribe(function (data) {
            data.forEach(function (item) {
                var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                _this.markers.push({
                    id: item.id,
                    lat: item.latitude,
                    lng: item.longitude,
                    pemilik: item.pemilik,
                    luas: item.luasan_lahan,
                    alamat: item.alamat_lahan,
                    kemitraan: _kemitraan,
                    pengelolaan: _pengelolaan,
                    draggable: false
                });
            });
        });
    };
    BrowseComponent.prototype.objectKeys = function (obj) {
        return Object.keys(obj);
    };
    BrowseComponent.prototype.objectValues = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    BrowseComponent.prototype.strToNum = function (value) {
        return +value;
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-browse',
        template: __webpack_require__(322),
        styles: [__webpack_require__(295)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], BrowseComponent);

var _a, _b, _c;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = (function () {
    function ContentComponent(AppService) {
        this.AppService = AppService;
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-content',
        template: __webpack_require__(323),
        styles: [__webpack_require__(296)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], ContentComponent);

var _a;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoverComponent = (function () {
    function CoverComponent() {
    }
    CoverComponent.prototype.ngOnInit = function () {
    };
    return CoverComponent;
}());
CoverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cover',
        template: __webpack_require__(324),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [])
], CoverComponent);

//# sourceMappingURL=cover.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(AppService, router, route) {
        this.AppService = AppService;
        this.router = router;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.admin = this.AppService.CheckStatus();
        if (this.admin.role != 'admin') {
            if (this.admin.role == 'publisher') {
                this.router.navigate(['/profile']);
            }
            this.router.navigate(['']);
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(325),
        styles: [__webpack_require__(298)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = (function () {
    function DetailComponent(AppService, router, activatedRoute) {
        var _this = this;
        this.AppService = AppService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.lat = -6.5971469;
        this.lng = 106.8060388;
        this.zoom = 10;
        this.detailLahan = {};
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.idLahan = id;
        });
    }
    DetailComponent.prototype.ngDoCheck = function () {
        this.status = this.AppService.CheckStatus();
        if (!this.status) {
            this.login = false;
        }
        else {
            if (this.status.role == 'admin') {
                this.NamaUser = this.status.nama_admin;
                this.login = true;
            }
            else if (this.status.role == 'publisher') {
                this.NamaUser = this.status.nama_publisher;
                this.login = true;
            }
            else {
                this.login = false;
            }
        }
    };
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AppService.getDetailLahan(this.idLahan).subscribe(function (data) {
            data.forEach(function (item) {
                var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                var fotoArr = [];
                for (var i = 0; i < item.foto.path.length; i++) {
                    fotoArr.push(i);
                }
                _this.detailLahan = {
                    nama_pemilik: item.pemilik || '-',
                    alamat_pemilik: item.alamat_pemilik || '-',
                    email_pemilik: item.email_pemilik || '-',
                    foto_pemilik: item.foto_pemilik,
                    alamat_lahan: item.alamat_lahan || '-',
                    luasan_lahan: item.luasan_lahan || '-',
                    lahan_sebelumnya: item.sebelumnya || '-',
                    jarak_air_lahan: item.jarak_air_lahan || '-',
                    jarak_jalan_lahan: item.jarak_jalan_lahan || '-',
                    keterangan_jalan_lahan: item.keterangan_jalan_lahan || '-',
                    jarak_pasar_lahan: item.jarak_pasar_lahan || '-',
                    potensi_lahan: item.potensi_lahan || '-',
                    pengelolaan: _pengelolaan || '-',
                    kemitraan: _kemitraan || '-',
                    foto: item.foto.path,
                    fotoCount: fotoArr,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    status: item.status
                };
            });
        });
    };
    DetailComponent.prototype.onVerif = function () {
        var _this = this;
        this.AppService.veriflahanini(this.idLahan)
            .subscribe(function (data) {
            if (data.status) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                    title: 'Lahan Terverifikasi',
                    text: 'Silahkan klik OK untuk melanjutkan',
                    type: 'success',
                    confirmButtonColor: '#28a745',
                    confirmButtonText: 'OK'
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                    title: 'Verifikasi Gagal',
                    text: 'Silahkan coba lagi',
                    type: 'error',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'OK'
                });
            }
        });
    };
    DetailComponent.prototype.strToNum = function (value) {
        return +value;
    };
    DetailComponent.prototype.valPlus = function (value) {
        return +value + 1;
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(326),
        styles: [__webpack_require__(299)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], DetailComponent);

var _a, _b, _c;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = (function () {
    function EditComponent(_fb, AppService, router, route) {
        var _this = this;
        this._fb = _fb;
        this.AppService = AppService;
        this.router = router;
        this.route = route;
        this.detailLahan = {};
        this.showTambahBidang = 0;
        this.indexbidang = [''];
        this.booltambahbidang = false;
        this.showTambahKemitraan = 0;
        this.indexkemitraan = [''];
        this.booltambahkemitraan = false;
        this.idKabupatenKota = 3201;
        this.searchKecamatan = {};
        this.searchDesaKel = {};
        this.lat = -6.5971469;
        this.lng = 106.8060388;
        this.zoom = 10;
        this.searchBidang = { 1: 'Pertanian Basah', 2: 'Petanian Kering', 3: 'Agroforestry', 4: 'Peternakan', 5: 'Perikanan', 6: 'Kehutanan' };
        this.searchKemitraan = { 1: 'Sewa', 2: 'Bagi Hasil', 3: 'Kerja Sama', 4: 'Jual' };
        this.idkemitraan = [];
        this.idpengelolaan = [];
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.idLahan = id;
        });
    }
    ;
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pemilik = this.AppService.CheckStatus();
        if (!this.pemilik) {
            this.router.navigate(['']);
        }
        else {
            if (this.pemilik.role != 'publisher') {
                this.router.navigate(['']);
            }
            else {
                this.selectedBidang = [];
                this.selectedKemitraan = [];
                this.selectedKecamatan = 'Pilih Kecamatan';
                this.selectedDesaKel = 'Pilih Desa/Kelurahan';
                this.getDataKecamatan(this.idKabupatenKota);
                this.formLahan = this._fb.group({
                    nama_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    email_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    no_hp_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    alamat_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    foto_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    alamat_lengkap_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    longitude_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    latitude_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    luasan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    potensi_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    jarak_air_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    jarak_jalan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    keterangan_jalan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    jarak_pasar_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    kecamatan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    desakelurahan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    pengelolaan_sebelumnya_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    nama_pengelolaanlahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    detail_pengelolaanlahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    nama_kemitraanlahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    detail_kemitraanlahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                    foto_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
                });
                this.AppService.getDetailLahan(this.idLahan).subscribe(function (data) {
                    if (data[0].idpublisher != _this.pemilik.id && _this.pemilik.role != 'admin') {
                        _this.router.navigate(['']);
                    }
                    else {
                        data.forEach(function (item) {
                            var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                            var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                            _this.detailLahan = {
                                nama_pemilik: item.pemilik,
                                alamat_pemilik: item.alamat_pemilik,
                                email_pemilik: item.email_pemilik,
                                foto_pemilik: item.foto_pemilik,
                                no_hp_pemilik: item.no_hp_pemilik,
                                kecamatan_lahan: _this.searchKecamatan[item.kecamatanid],
                                desa_lahan: item.desa,
                                alamat_lahan: item.alamat_lahan,
                                luasan_lahan: item.luasan_lahan,
                                lahan_sebelumnya: item.sebelumnya,
                                jarak_air_lahan: item.jarak_air_lahan,
                                jarak_jalan_lahan: item.jarak_jalan_lahan,
                                keterangan_jalan_lahan: item.keterangan_jalan_lahan,
                                jarak_pasar_lahan: item.jarak_pasar_lahan,
                                potensi_lahan: item.potensi_lahan,
                                pengelolaan: _pengelolaan,
                                kemitraan: _kemitraan
                            };
                            _this.pointLat = item.latitude;
                            _this.pointLng = item.longitude;
                        });
                    }
                });
            }
        }
    };
    EditComponent.prototype.mapClicked = function ($event) {
        this.pointLat = $event.coords.lat;
        this.pointLng = $event.coords.lng;
    };
    EditComponent.prototype.getDataKecamatan = function (kabupatenKota_id) {
        var _this = this;
        this.searchKecamatan = {};
        this.AppService.getDataKecamatan(kabupatenKota_id)
            .subscribe(function (data) {
            data.forEach(function (item) {
                _this.searchKecamatan[item.id] = item.name;
            });
        });
    };
    EditComponent.prototype.getDataDesaKel = function (kecamatan_id) {
        var _this = this;
        this.searchDesaKel = {};
        this.AppService.getDataDesaKel(kecamatan_id)
            .subscribe(function (data) {
            data.forEach(function (item) {
                _this.searchDesaKel[item.id] = item.name;
            });
        });
    };
    EditComponent.prototype.setKecamatan = function () {
        var _this = this;
        this.selectedKecamatan = this.formLahan.value.kecamatan_lahan;
        var pilihan = +Object.keys(this.searchKecamatan)
            .find(function (key) { return _this.searchKecamatan[key] === _this.formLahan.value.kecamatan_lahan; });
        this.getDataDesaKel(pilihan);
        this.showDesaKel = 1;
    };
    EditComponent.prototype.setDesaKel = function () {
        var _this = this;
        this.selectedDesaKel = this.formLahan.value.desakelurahan_lahan;
        var pilihan = +Object.keys(this.searchDesaKel)
            .find(function (key) { return _this.searchDesaKel[key] === _this.formLahan.value.desakelurahan_lahan; });
        this.iddesakel = pilihan;
    };
    EditComponent.prototype.setBidang = function (i) {
        var _this = this;
        var pilihan = +Object.keys(this.searchBidang)
            .find(function (key) { return _this.searchBidang[key] === _this.formLahan.value.nama_pengelolaanlahan; });
        if (i == this.selectedBidang.length) {
            this.selectedBidang.push(this.formLahan.value.nama_pengelolaanlahan);
            this.idpengelolaan.push(pilihan);
        }
        else {
            this.idpengelolaan[i] = pilihan;
            this.selectedBidang[i] = this.formLahan.value.nama_pengelolaanlahan;
        }
        this.booltambahbidang = true;
    };
    EditComponent.prototype.tambahBidang = function () {
        this.showTambahBidang += 1;
        this.indexbidang.push('');
        this.booltambahbidang = false;
    };
    EditComponent.prototype.setKemitraan = function (i) {
        var _this = this;
        var pilihan = +Object.keys(this.searchKemitraan)
            .find(function (key) { return _this.searchKemitraan[key] === _this.formLahan.value.nama_kemitraanlahan; });
        if (i == this.selectedKemitraan.length) {
            this.selectedKemitraan.push(this.formLahan.value.nama_kemitraanlahan);
            this.idkemitraan.push(pilihan);
        }
        else {
            this.selectedKemitraan[i] = this.formLahan.value.nama_kemitraanlahan;
            this.idkemitraan[i] = pilihan;
        }
        this.booltambahkemitraan = true;
    };
    EditComponent.prototype.tambahKemitraan = function () {
        this.showTambahKemitraan += 1;
        this.indexkemitraan.push('');
        this.booltambahkemitraan = false;
    };
    EditComponent.prototype.objectKeys = function (obj) {
        return Object.keys(obj);
    };
    EditComponent.prototype.objectValues = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    EditComponent.prototype.strToNum = function (value) {
        return +value;
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(327),
        styles: [__webpack_require__(300)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], EditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(328),
        styles: [__webpack_require__(301)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(AppService) {
        this.AppService = AppService;
    }
    HeaderComponent.prototype.ngDoCheck = function () {
        this.status = this.AppService.CheckStatus();
        if (!this.status) {
            this.login = false;
        }
        else {
            if (this.status.role == 'admin') {
                this.NamaUser = this.status.nama_admin;
                this.login = true;
            }
            else if (this.status.role == 'publisher') {
                this.NamaUser = this.status.nama_publisher;
                this.login = true;
            }
            else {
                this.login = false;
            }
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        this.AppService.Logout();
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Anda telah Logout',
            type: 'success',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'OK'
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(329),
        styles: [__webpack_require__(302)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(330),
        styles: [__webpack_require__(303)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent.prototype.ngOnInit = function () {
    };
    return NoContentComponent;
}());
NoContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-no-content',
        template: __webpack_require__(331),
        styles: [__webpack_require__(304)]
    }),
    __metadata("design:paramtypes", [])
], NoContentComponent);

//# sourceMappingURL=no-content.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = (function () {
    function PostComponent() {
        this.ckeditorContent = "<p>My HTML</p>";
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    return PostComponent;
}());
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__(332),
        styles: [__webpack_require__(305)]
    }),
    __metadata("design:paramtypes", [])
], PostComponent);

//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(AppService, router, route) {
        this.AppService = AppService;
        this.router = router;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pemilik = this.AppService.CheckStatus();
        if (!this.pemilik) {
            this.router.navigate(['']);
        }
        else {
            if (this.pemilik.role == 'admin') {
                this.router.navigate(['/dashboard']);
            }
            this.lahanTerdaftar = [];
            this.AppService.getMyLahan().subscribe(function (data) {
                _this.enum = 1;
                data.forEach(function (item) {
                    var _kemitraan = item.kemitraan.map(function (e) { return e.kemitraan; }).join(', ');
                    var _pengelolaan = item.pengelolaan.map(function (e) { return e.pengelolaan; }).join(', ');
                    var status;
                    if (item.status == 'verif') {
                        status = 'Terverifikasi';
                    }
                    else {
                        status = 'Belum Terverifikasi';
                    }
                    var _lahan = {
                        pemilik: item.pemilik,
                        luasan: item.luasan_lahan,
                        alamat: item.alamat_lahan,
                        kemitraan: _kemitraan,
                        pengelolaan: _pengelolaan,
                        id: item.id,
                        no: _this.enum,
                        status: status
                    };
                    _this.lahanTerdaftar.push(_lahan);
                    _this.enum++;
                });
            });
        }
    };
    ProfileComponent.prototype.ngDeleted = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Apa Anda yakin?',
            text: 'Lahan yang telah dihapus tidak dapat dikembalikan lagi',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
        }).then(function (result) {
            if (result.value) {
                _this.AppService.hapuslahansaya(id)
                    .subscribe(function (hapus) {
                    _this.ngOnInit();
                });
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                    title: 'Lahan telah terhapus',
                    type: 'success'
                });
            }
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(333),
        styles: [__webpack_require__(306)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadComponent = (function () {
    function UploadComponent(_fb, AppService, router, route) {
        this._fb = _fb;
        this.AppService = AppService;
        this.router = router;
        this.route = route;
        this.selectedBidang = [];
        this.showTambahBidang = 0;
        this.indexbidang = [''];
        this.booltambahbidang = false;
        this.showTambahKemitraan = 0;
        this.indexkemitraan = [''];
        this.booltambahkemitraan = false;
        this.idKabupatenKota = 3201;
        this.searchKecamatan = {};
        this.searchDesaKel = {};
        this.lat = -6.5971469;
        this.lng = 106.8060388;
        this.zoom = 10;
        this.searchBidang = { 1: 'Pertanian Basah', 2: 'Petanian Kering', 3: 'Agroforestry', 4: 'Peternakan', 5: 'Perikanan', 6: 'Kehutanan' };
        this.searchKemitraan = { 1: 'Sewa', 2: 'Bagi Hasil', 3: 'Kerja Sama', 4: 'Jual' };
        this.idkemitraan = [];
        this.idpengelolaan = [];
    }
    UploadComponent.prototype.ngOnInit = function () {
        if (!this.AppService.CheckStatus()) {
            this.router.navigate(['']);
        }
        else {
            this.formLahan = this._fb.group({
                nama_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                email_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                no_hp_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                alamat_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                foto_pemilik: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                alamat_lengkap_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                longitude_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                latitude_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                luasan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                potensi_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                jarak_air_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                jarak_jalan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                keterangan_jalan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                jarak_pasar_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                kecamatan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                desakelurahan_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                pengelolaan_sebelumnya_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                nama_pengelolaanlahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                detail_pengelolaanlahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                nama_kemitraanlahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                detail_kemitraanlahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                foto_lahan: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
            });
            this.selectedBidang = [];
            this.selectedKemitraan = [];
            this.selectedKecamatan = 'Pilih Kecamatan';
            this.selectedDesaKel = 'Pilih Desa/Kelurahan';
            this.getDataKecamatan(this.idKabupatenKota);
        }
    };
    UploadComponent.prototype.mapClicked = function ($event) {
        this.pointLat = $event.coords.lat;
        this.pointLng = $event.coords.lng;
    };
    UploadComponent.prototype.DaftarkanLahan = function () {
        var _this = this;
        if (this.formLahan.status === 'VALID') {
            var datapemilik = {
                nama_pemilik: this.formLahan.value.nama_pemilik,
                alamat_pemilik: this.formLahan.value.alamat_pemilik,
                no_hp_pemilik: this.formLahan.value.no_hp_pemilik,
                email_pemilik: this.formLahan.value.email_pemilik
            };
            this.AppService.daftarpemilik(datapemilik)
                .subscribe(function (pemilik) {
                if (pemilik.status === true) {
                    var fotopemilik = _this.formLahan.value.foto_pemilik;
                    _this.AppService.tambahfotopemilik(fotopemilik, pemilik.info.id)
                        .then(function (fotopemilik) {
                        var hasil = fotopemilik;
                        if (hasil.status === true) {
                            var datalahan = {
                                fk_id_desakel: _this.iddesakel,
                                alamat_lengkap_lahan: _this.formLahan.value.alamat_lengkap_lahan,
                                longitude_lahan: parseFloat(_this.formLahan.value.longitude_lahan),
                                latitude_lahan: parseFloat(_this.formLahan.value.latitude_lahan),
                                luasan_lahan: _this.formLahan.value.luasan_lahan,
                                potensi_lahan: _this.formLahan.value.potensi_lahan,
                                jarak_air_lahan: _this.formLahan.value.jarak_air_lahan,
                                jarak_jalan_lahan: _this.formLahan.value.jarak_jalan_lahan,
                                keterangan_jalan_lahan: _this.formLahan.value.keterangan_jalan_lahan,
                                jarak_pasar_lahan: _this.formLahan.value.jarak_pasar_lahan,
                                pengelolaan_sebelumnya_lahan: _this.formLahan.value.pengelolaan_sebelumnya_lahan,
                                fk_id_pemilik: pemilik.info.id,
                                deskripsi_lahan: '',
                                status_lahan: 'unverif'
                            };
                            _this.AppService.tambahlahan(datalahan)
                                .subscribe(function (lahan) {
                                if (lahan.status === true) {
                                    var fotolahan = _this.formLahan.value.foto_lahan;
                                    _this.AppService.tambahfotolahan(fotolahan, lahan.info.id)
                                        .then(function (fotolahan) {
                                        var hasilfoto = fotolahan;
                                        if (hasilfoto.status === true) {
                                            var datapengelolaanlahan = {
                                                fk_id_pengelolaan: _this.idpengelolaan,
                                                detail_pengelolaanlahan: _this.formLahan.value.detail_pengelolaanlahan
                                            };
                                            _this.AppService.tambahpengelolaanlahan(datapengelolaanlahan, lahan.info.id)
                                                .subscribe(function (pengelolaan) {
                                                if (pengelolaan.status === true) {
                                                    var datakemitraanlaan = {
                                                        fk_id_kemitraan: _this.idkemitraan,
                                                        detail_kemitraanlahan: _this.formLahan.value.detail_kemitraanlahan
                                                    };
                                                    _this.AppService.tambahkemitraanlahan(datakemitraanlaan, lahan.info.id)
                                                        .subscribe(function (kemitraan) {
                                                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                                                            title: 'Pendaftaran Lahan Berhasil',
                                                            text: 'Silahkan klik OK untuk melanjutkan',
                                                            type: 'success',
                                                            confirmButtonColor: '#28a745',
                                                            confirmButtonText: 'OK'
                                                        });
                                                        _this.router.navigate(['/profile']);
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    UploadComponent.prototype.inputfotopemilik = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files;
            this.formLahan.get('foto_pemilik').setValue(file);
            this.fotopemilik = file[0].name;
        }
    };
    UploadComponent.prototype.inputfotolahan = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files;
            this.formLahan.get('foto_lahan').setValue(file);
            this.fotolahan = '';
            for (var i = 0; i < file.length; i++) {
                this.fotolahan += file[i].name;
                if (i !== file.length - 1) {
                    this.fotolahan += ',';
                }
            }
        }
    };
    UploadComponent.prototype.getDataKecamatan = function (kabupatenKota_id) {
        var _this = this;
        this.searchKecamatan = {};
        this.AppService.getDataKecamatan(kabupatenKota_id)
            .subscribe(function (data) {
            data.forEach(function (item) {
                _this.searchKecamatan[item.id] = item.name;
            });
        });
    };
    UploadComponent.prototype.getDataDesaKel = function (kecamatan_id) {
        var _this = this;
        this.searchDesaKel = {};
        this.AppService.getDataDesaKel(kecamatan_id)
            .subscribe(function (data) {
            data.forEach(function (item) {
                _this.searchDesaKel[item.id] = item.name;
            });
        });
    };
    UploadComponent.prototype.setKecamatan = function () {
        var _this = this;
        this.selectedKecamatan = this.formLahan.value.kecamatan_lahan;
        var pilihan = +Object.keys(this.searchKecamatan)
            .find(function (key) { return _this.searchKecamatan[key] === _this.formLahan.value.kecamatan_lahan; });
        this.getDataDesaKel(pilihan);
        this.showDesaKel = 1;
    };
    UploadComponent.prototype.setDesaKel = function () {
        var _this = this;
        this.selectedDesaKel = this.formLahan.value.desakelurahan_lahan;
        var pilihan = +Object.keys(this.searchDesaKel)
            .find(function (key) { return _this.searchDesaKel[key] === _this.formLahan.value.desakelurahan_lahan; });
        this.iddesakel = pilihan;
    };
    UploadComponent.prototype.setBidang = function (i) {
        var _this = this;
        var pilihan = +Object.keys(this.searchBidang)
            .find(function (key) { return _this.searchBidang[key] === _this.formLahan.value.nama_pengelolaanlahan; });
        if (i == this.selectedBidang.length) {
            this.selectedBidang.push(this.formLahan.value.nama_pengelolaanlahan);
            this.idpengelolaan.push(pilihan);
        }
        else {
            this.idpengelolaan[i] = pilihan;
            this.selectedBidang[i] = this.formLahan.value.nama_pengelolaanlahan;
        }
        this.booltambahbidang = true;
    };
    UploadComponent.prototype.tambahBidang = function () {
        this.showTambahBidang += 1;
        this.indexbidang.push('');
        this.booltambahbidang = false;
    };
    UploadComponent.prototype.setKemitraan = function (i) {
        var _this = this;
        var pilihan = +Object.keys(this.searchKemitraan)
            .find(function (key) { return _this.searchKemitraan[key] === _this.formLahan.value.nama_kemitraanlahan; });
        if (i == this.selectedKemitraan.length) {
            this.selectedKemitraan.push(this.formLahan.value.nama_kemitraanlahan);
            this.idkemitraan.push(pilihan);
        }
        else {
            this.selectedKemitraan[i] = this.formLahan.value.nama_kemitraanlahan;
            this.idkemitraan[i] = pilihan;
        }
        this.booltambahkemitraan = true;
    };
    UploadComponent.prototype.tambahKemitraan = function () {
        this.showTambahKemitraan += 1;
        this.indexkemitraan.push('');
        this.booltambahkemitraan = false;
    };
    UploadComponent.prototype.objectKeys = function (obj) {
        return Object.keys(obj);
    };
    UploadComponent.prototype.objectValues = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    UploadComponent.prototype.strToNum = function (value) {
        return +value;
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__(334),
        styles: [__webpack_require__(307)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], UploadComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".table th {\n    vertical-align: middle;\n    text-align: center;\n}\n\n.table td {\n    vertical-align: middle;\n}\n\n.table th:first-child {\n    border-radius: 10px 0px 0px 0px;\n}\n\n.table th:last-child {\n    border-radius: 0px 10px 0px 0px;  \n}\n\na .btn-primary {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\na .btn-warning {\n    border-radius: 0px;\n}\n\na .btn-danger {\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".table th {\n    vertical-align: middle;\n    text-align: center;\n}\n\n.table td {\n    vertical-align: middle;\n}\n\n.table th:first-child {\n    border-radius: 10px 0px 0px 0px;\n}\n\n.table th:last-child {\n    border-radius: 0px 10px 0px 0px;  \n}\n\na .btn-primary {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\na .btn-warning {\n    border-radius: 0px;\n}\n\na .btn-danger {\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".table th {\n    vertical-align: middle;\n    text-align: center;\n}\n\n.table td {\n    vertical-align: middle;\n}\n\n.table th:first-child {\n    border-radius: 10px 0px 0px 0px;\n}\n\n.table th:last-child {\n    border-radius: 0px 10px 0px 0px;  \n}\n\na .btn-primary {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\na .btn-warning {\n    border-radius: 0px;\n}\n\na .btn-danger {\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "a {\n    color: #4caf50;\n}\n\n.form-button {\n    margin-top: 25px;\n    margin-bottom: 10px;\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "@media screen and (max-width: 768px) { \n    h6, button {\n        font-size: 75%;\n    }\n}\n\n.scrollable-menu {\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n}\n\n#wrapper {\n    position: relative;\n}\n\n#over-map {\n    position: absolute; \n    width: auto;\n    bottom: 0px; \n    left: 0px; \n    z-index: 99;\n    background: #fff;\n    padding: 5px;\n    border-top: 2px solid #4CAF50;\n    border-right: 2px solid #4CAF50;\n    border-top-right-radius: 20px;\n}\n\nagm-map {\n  height: 575px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".text-nowrap {\n    white-space: nowrap;\n}\n\n.bg-green {\n    background: #4CAF50;\n    color: #fff;\n}\n\n.card-deck {\n    margin-bottom: 60px;\n}\n\n.content-wrapper {\n    border-radius: 10px;\n    border: 2px solid #4CAF50;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.content-title {\n    background: #4CAF50;\n    border-radius: 7px 7px 0px 0px;\n    padding: .5rem 1rem;\n    color: #fff;\n    font-weight: bold;\n}\n\n.content-list {\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\nul.leaf {\n    list-style-image: url(" + __webpack_require__(398) + ");\n    padding-left: 35px;\n    margin-bottom: 0px;\n}\n\nul.leaf li {\n    margin-bottom: 5px;\n}\n\nul.leaf li a:hover {\n    margin-left: 10px;\n}\n\nul.leaf li a {\n    color: #4CAF50;\n    text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".jumbotron {\n    background: url(" + __webpack_require__(397) + ") no-repeat center;\n    padding-top: 60px;\n    padding-bottom: 60px;\n}\n\n.bg-green {\n    background: #4CAF50;\n    color: #fff;\n}\n\n.bg-cover {\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n}\n\n#wrapper {\n    position: relative;\n}\n\n#over-cover {\n    position: absolute; \n    width: auto;\n    bottom: 0px; \n    right: 0px; \n    z-index: 99;\n    padding: 5px;\n}\n\n.sponsor-label {\n    vertical-align: top;\n    padding-top: 7px;\n}\n\n.sponsor-logo {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin: 0px 2px;\n}\n\n.sponsor-logo img {\n    width: 100%;\n    vertical-align: baseline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".justspace {\n    height: 40px;\n}\n\n.card-header {\n    background: #28a745;\n}\n\n.nav-item a {\n    color: #fff;\n}\n\n.nav-item a.active {\n    color: #000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".subtitle {\n    border-bottom: 3px solid #4caf50;\n    border-bottom-right-radius: 50%;\n    padding-right: 30px;\n    padding-bottom: 10px;\n}\n\n.justspace {\n    height: 40px;\n}\n\nagm-map {\n    height: 400px;\n}\n\n.verif-button .btn {\n    display: inline-block;\n    margin: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".justspace {\n    height: 30px;\n}\n\n.container {\n    background: #eee;\n    border-radius: 10px;\n    border-left: 5px solid #4CAF50;\n    padding-right: 5px;\n}\n\n.form-separator {\n    margin-left: -15px;\n    margin-bottom: 15px;\n    margin-top: 15px;\n    background: #4CAF50;\n    border-bottom-right-radius: 75%;\n    display: inline-block;\n    padding: 10px 30px 10px 10px;\n    color: #fff;\n}\n\n.form-button {\n    text-align: center;\n    margin-top: 20px;\n}\n\nspan.custom-file-control {\n    overflow: hidden;\n}\n\nagm-map {\n  height: 400px;\n  margin: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "footer {\n    border-top: 3px solid #4CAF50;\n}\n\nfooter a {\n    color: #4CAF50;\n}\n\nhr {\n    background: #fff;\n    width: 80%;\n}\n\n.text-silver {\n    color: #BDBDBD;\n}\n\n.bg-green {\n    background: #4CAF50;\n    color: #000;\n}\n\n.left-footer {\n    min-width: 250px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".bg-green {\n    background: #4caf50;\n    color: #fff;\n}\n\n.navbar .form-group a {\n    color: #4caf50;\n}\n\n.navbar-brand img {\n    display: inline-block;\n    vertical-align: top;\n    margin: 5px -5px 0px;\n}\n\n.navbar-title {\n    display: inline-block;\n    color: #fff;\n    font-size: 1.5rem;\n}\n\n.navbar-title small {\n    display: block;\n    font-size: 0.75rem;\n}\n\n.nav-link {\n    font-size: 1.2rem;\n    color: #fff;\n}\n\n.nav-item:hover a {\n    color: #FFEB3B;\n}\n\n.nav-item:hover a.dropdown-item {\n    color: #000;\n}\n\n.navbar-toggler {\n    color: #fff;\n    border-color: #fff;\n    padding: .2rem .5rem;\n}\n\n.navbar-toggler-icon {\n    background: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".justspace {\n    height: 40px;\n}\n\nimg {\n    width: 80%;\n    position: relative;\n    display: block;\n    margin: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".justspace {\n    height: 30px;\n}\n\n.container {\n    background: #eee;\n    border-radius: 10px;\n    border-left: 5px solid #4CAF50;\n    padding-right: 20px;\n}\n\n.form-button {\n    text-align: center;\n}\n\nbutton {\n    margin: 20px auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".just-space {\n    height: 20px;\n}\n\n.profile-user {\n    background: #eee;\n    border-radius: 10px;\n    border-left: 5px solid #4CAF50;\n    padding-right: 5px;\n}\n\n@media screen and (min-width: 992px) { \n    .table-profile {\n        margin-top: 1.5rem !important;\n    }\n}\n\n.table tr td {\n    border: none;\n    padding-top: .25rem;\n    padding-bottom: .25rem;\n    vertical-align: middle;\n}\n\n.thead-green th {\n    background: #4CAF50;\n    color: #fff;\n    vertical-align: middle;\n    text-align: center;\n    border-top: none;\n}\n\n.table th:first-child {\n    border-radius: 10px 0px 0px 0px;\n}\n\n.table th:last-child {\n    border-radius: 0px 10px 0px 0px;  \n}\n\na .btn-primary {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\na .btn-warning {\n    border-radius: 0px;\n}\n\na .btn-danger {\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".justspace {\n    height: 30px;\n}\n\n.container {\n    background: #eee;\n    border-radius: 10px;\n    border-left: 5px solid #4CAF50;\n    padding-right: 5px;\n}\n\n.form-separator {\n    margin-left: -15px;\n    margin-bottom: 15px;\n    margin-top: 15px;\n    background: #4CAF50;\n    border-bottom-right-radius: 75%;\n    display: inline-block;\n    padding: 10px 30px 10px 10px;\n    color: #fff;\n}\n\n.form-button {\n    text-align: center;\n    margin-top: 20px;\n}\n\nspan.custom-file-control {\n    overflow: hidden;\n}\n\nagm-map {\n  height: 400px;\n  margin: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-hover table-responsive-md\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Pemilik</th>\n      <th scope=\"col\">Alamat Lahan</th>\n      <th scope=\"col\">Luas</th>\n      <th scope=\"col\">Bidang Pengelolaan</th>\n      <th scope=\"col\">Kemitraan</th>\n      <th scope=\"col\">Pegaturan</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let lahan of lahanTerdaftar\">\n      <th scope=\"row\">{{ lahan.no }}</th>\n      <td>{{ lahan.pemilik }}</td>\n      <td>{{ lahan.alamat }}</td>\n      <td>{{ lahan.luasan }} Ha</td>\n      <td>{{ lahan.pengelolaan }}</td>\n      <td>{{ lahan.kemitraan }}</td>\n      <td class=\"text-center\">\n        <div class=\"btn-group\" role=\"group\">\n          <a href=\"/detail/{{ lahan.id }}\">\n            <button type=\"button\" class=\"btn btn-primary\" title=\"Lihat\">\n              <i class=\"fa fa-eye\"></i>\n            </button>\n          </a>\n          <button (click)=\"ngDeleted(lahan.id)\" type=\"button\" class=\"btn btn-danger\" title=\"Hapus\">\n            <i class=\"fa fa-times\"></i>\n          </button>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-hover table-responsive-md\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Nama</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">No. HP</th>\n        <th scope=\"col\">TTL</th>\n        <th scope=\"col\">Alamat</th>\n        <th scope=\"col\">Pegaturan</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of publisher\">\n        <th scope=\"row\">{{ data.no }}</th>\n        <td>{{ data.nama }}</td>\n        <td>{{ data.email }}</td>\n        <td>{{ data.nohp }}</td>\n        <td>{{ data.ttl }}</td>\n        <td>{{ data.alamat }}</td>\n        <td class=\"text-center\">\n          <div class=\"btn-group\" role=\"group\">\n            <button (click)=\"ngDelete(data.id)\" type=\"button\" class=\"btn btn-danger\" title=\"Hapus\">\n              <i class=\"fa fa-times\"></i> Delete\n            </button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-hover table-responsive-md\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Pemilik</th>\n        <th scope=\"col\">Alamat Lahan</th>\n        <th scope=\"col\">Luas</th>\n        <th scope=\"col\">Bidang Pengelolaan</th>\n        <th scope=\"col\">Kemitraan</th>\n        <th scope=\"col\">Pegaturan</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let lahan of lahanTerdaftar\">\n        <th scope=\"row\">{{ lahan.no }}</th>\n        <td>{{ lahan.pemilik }}</td>\n        <td>{{ lahan.alamat }}</td>\n        <td>{{ lahan.luasan }} Ha</td>\n        <td>{{ lahan.pengelolaan }}</td>\n        <td>{{ lahan.kemitraan }}</td>\n        <td class=\"text-center\">\n          <div class=\"btn-group\" role=\"group\">\n            <a href=\"/detail/{{ lahan.id }}\">\n              <button type=\"button\" class=\"btn btn-primary\" title=\"Lihat\">\n                <i class=\"fa fa-eye\"></i>\n              </button>\n            </a>\n            <button (click)=\"ngDeleted(lahan.id)\" type=\"button\" class=\"btn btn-danger\" title=\"Hapus\">\n              <i class=\"fa fa-times\"></i>\n            </button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n  <ul class=\"nav nav-tabs\" id=\"authTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"login-tab\" data-toggle=\"tab\" href=\"#login\" role=\"tab\">Login</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"daftar-tab\" data-toggle=\"tab\" href=\"#daftar\" role=\"tab\">Daftar</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\">\n    <div class=\"tab-pane active\" id=\"login\" role=\"tabpanel\">\n      <form [formGroup]=\"loginForm\" class=\"mt-3\">\n        <div class=\"form-group\">\n          <label for=\"Username\">Username :</label>\n          <input type=\"text\" class=\"form-control form-control\" id=\"Username\" placeholder=\"Username\"  formControlName=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Password\">Password :</label>\n          <input type=\"password\" class=\"form-control\" id=\"Password\" placeholder=\"Password\" formControlName=\"password\" appCapslock>\n        </div>\n        <div class=\"form-button\">\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onLogin()\">Login</button>\n          <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Batal</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"tab-pane\" id=\"daftar\" role=\"tabpanel\">\n      <form  [formGroup]=\"registerForm\" class=\"mt-3\">\n        <div class=\"form-group row\">\n          <label for=\"username_publisher\" class=\"col-sm-2 col-form-label\">Username</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"username_publisher\" placeholder=\"Username\" formControlName=\"username\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"password_publisher\" class=\"col-sm-2 col-form-label\">Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"password\" class=\"form-control\" id=\"password_publisher\" placeholder=\"Password\" formControlName=\"password\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"nama_publisher\" class=\"col-sm-2 col-form-label\">Nama</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"nama_publisher\" placeholder=\"Nama Lengkap\" formControlName=\"nama\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"email_publisher\" class=\"col-sm-2 col-form-label\">Email</label>\n          <div class=\"col-sm-10\">\n            <input type=\"email\" class=\"form-control\" id=\"email_publisher\" placeholder=\"Email\" formControlName=\"email\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"no_hp_publisher\" class=\"col-sm-2 col-form-label\">No. HP</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"no_hp_publisher\" placeholder=\"Nomor HP\" formControlName=\"noHp\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"ttl_publisher\" class=\"col-sm-2 col-form-label\">TTL</label>\n          <div class=\"col-sm-10\">\n            <input type=\"date\" class=\"form-control\" id=\"ttl_publisher\" placeholder=\"Tempat Tanggal Lahir\" formControlName=\"TTL\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"alamat_publisher\" class=\"col-sm-2 col-form-label\">Alamat</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"alamat_publisher\" placeholder=\"Alamat\" formControlName=\"alamat\">\n          </div>\n        </div>\n        <div class=\"form-button\">\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onRegister()\">Daftar</button>\n          <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Batal</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n    <agm-marker *ngFor=\"let marker of markers\"\n                [latitude]=\"strToNum(marker.lat)\"\n                [longitude]=\"strToNum(marker.lng)\">\n      <agm-info-window>\n        Info lahan :\n        <h5 class=\"card-title\">Lahan milik {{ marker.pemilik }}</h5>\n        <p class=\"card-text\">\n          <strong>Luasan</strong> : {{ marker.luas }} Ha<br />\n          <strong>Kemitraan</strong> : {{ marker.kemitraan }}<br />\n          <strong>Pengelolaan</strong> : {{ marker.pengelolaan }}<br />\n          <strong>Alamat</strong> : {{ marker.alamat }}\n        </p>\n        <div class=\"text-center\">\n          <a href=\"/detail/{{ marker.id }}\" class=\"btn btn-success btn-sm text-white\">Lihat Detail</a>\n        </div>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n  <div id=\"over-map\">\n    <!-- Kategori -->\n    <h6 class=\"d-inline-block my-1 mr-1\">Cari lahan berdasarkan : </h6>\n    <div class=\"d-inline-block dropup m-1\">\n      <button class=\"btn btn-success btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownType\" data-toggle=\"dropdown\">\n        {{ selectedType }}\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownType\">\n        <button class=\"dropdown-item px-2\" type=\"button\" (click)=\"setType(type)\" *ngFor=\"let type of objectValues(searchType)\">{{ type }}</button>\n      </div>\n    </div>\n\n    <!-- Wilayah -->\n    <div *ngIf=\"selectedType == 'Wilayah'\">\n      <h6 class=\"d-inline-block my-1 mr-1\">Kecamatan : </h6>\n      <div class=\"d-inline-block dropup m-1\" >\n        <button class=\"btn btn-success btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownKecamatan\" data-toggle=\"dropdown\">\n          {{ selectedKecamatan }}\n        </button>\n        <div class=\"dropdown-menu scrollable-menu\" aria-labelledby=\"dropdownKecamatan\">\n          <button class=\"dropdown-item px-2\" type=\"button\" (click)=\"setKecamatan(kecamatan)\" *ngFor=\"let kecamatan of objectValues(searchKecamatan)\">{{ kecamatan }}</button>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showDesaKel == 1\">\n      <h6 class=\"d-inline-block my-1 mr-1\">Desa/Kelurahan : </h6>\n      <div class=\"d-inline-block dropup m-1\" >\n        <button class=\"btn btn-success btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownDesaKel\" data-toggle=\"dropdown\">\n          {{ selectedDesaKel }}\n        </button>\n        <div class=\"dropdown-menu scrollable-menu\" aria-labelledby=\"dropdownDesaKel\">\n          <button class=\"dropdown-item px-2\" type=\"button\" (click)=\"setDesaKel(desaKel)\" *ngFor=\"let desaKel of objectValues(searchDesaKel)\">{{ desaKel }}</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Bidang Pengelolaan -->\n    <div *ngIf=\"selectedType == 'Pengelolaan'\">\n      <h6 class=\"d-inline-block my-1 mr-1\">Bidang Pengelolaan : </h6>\n      <div class=\"d-inline-block dropup m-1\">\n        <button class=\"btn btn-success btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownBidang\" data-toggle=\"dropdown\">\n          {{ selectedBidang }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownBidang\">\n          <button class=\"dropdown-item px-2\" type=\"button\" (click)=\"setBidang(bidang)\" *ngFor=\"let bidang of objectValues(searchBidang)\">{{ bidang }}</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Kemitraan -->\n    <div *ngIf=\"selectedType == 'Kemitraan'\">\n      <h6 class=\"d-inline-block my-1 mr-1\">Jenis Kemitraan : </h6>\n      <div class=\"d-inline-block dropup m-1\">\n        <button class=\"btn btn-success btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownKemitraan\" data-toggle=\"dropdown\">\n          {{ selectedKemitraan }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownKemitraan\">\n          <button class=\"dropdown-item px-2\" type=\"button\" (click)=\"setKemitraan(kemitraan)\" *ngFor=\"let kemitraan of objectValues(searchKemitraan)\">{{ kemitraan }}</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Luasan -->\n    <div *ngIf=\"selectedType == 'Luasan'\">\n      <h6 class=\"d-inline-block my-1 mr-1\">Luas Lahan : </h6>\n      <div class=\"d-inline-block dropup m-1\">\n        <button class=\"btn btn-success btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownLuas\" data-toggle=\"dropdown\">\n          {{ selectedLuas }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownLuas\">\n          <button class=\"dropdown-item px-2\" type=\"button\" (click)=\"setLuas(luas)\" *ngFor=\"let luas of objectValues(searchLuas)\">{{ luas }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-4\">\n      <div class=\"content-wrapper\">\n        <div class=\"content-title\">\n          Model pemanfaatan lahan non produktif\n        </div>\n        <div class=\"content-list\">\n          <ul class=\"leaf\">\n            <li><a routerLink=\"/\">Model 1</a></li>\n            <li><a routerLink=\"/\">Model 2</a></li>\n            <li><a routerLink=\"/\">Model 3</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-4\">\n      <div class=\"content-wrapper\">\n        <div class=\"content-title\">\n          Peluang usaha lahan non produktif\n        </div>\n        <div class=\"content-list\">\n          <ul class=\"leaf\">\n            <li><a routerLink=\"/\">Peluang 1</a></li>\n            <li><a routerLink=\"/\">Peluang 2</a></li>\n            <li><a routerLink=\"/\">Peluang 3</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-4\">\n      <div class=\"content-wrapper\">\n        <div class=\"content-title\">\n          Berita\n        </div>\n        <div class=\"content-list\">\n          <ul class=\"leaf\">\n            <li><a routerLink=\"/\">Berita 1</a></li>              \n            <li><a routerLink=\"/\">Berita 1</a></li>              \n            <li><a routerLink=\"/\">Berita 1</a></li>              \n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div class=\"jumbotron jumbotron-fluid m-0\">\n    <div class=\"bg-cover text-center pb-3\">\n      <h1 class=\"display-5\">\n        Selamat datang <span class=\"d-md-none\"><br /></span>di Bank Data<br />\n        Lahan Non Produktif <span class=\"d-md-none\"><br /></span>Kabupaten Bogor\n      </h1>\n      <a routerLink=\"/browse\" class=\"btn bg-green btn-lg\" role=\"button\">Cari Lahan</a>\n    </div>\n  </div>\n  <div id=\"over-cover\">\n    <h5 class=\"d-inline-block sponsor-label\">Disponsori oleh : </h5>\n    <div class=\"d-inline-block sponsor-logo\"><img [src]=\"'assets/img/ipb.png'\"></div>\n    <div class=\"d-inline-block sponsor-logo\"><img [src]=\"'assets/img/bappeda.png'\"></div>\n  </div>\n</div>"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<div class=\"justspace\"></div>\n<div class=\"container\">\n  <h3 class=\"text-center\">Dashboard Bank Data</h3>\n  <hr class=\"mb-4\">\n  <div class=\"card text-center\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-tabs nav-fill card-header-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#listlahan\">Daftar Lahan</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#veriflahan\">Verifikasi Lahan</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#listpublisher\">Daftar Publisher</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-body text-justify\">\n      <div class=\"tab-content\">\n        <div class=\"tab-pane fade show active\" id=\"listlahan\" role=\"tabpanel\">\n          <app-adminlahan></app-adminlahan>\n        </div>\n        <div class=\"tab-pane fade\" id=\"veriflahan\" role=\"tabpanel\">\n          <app-adminverif></app-adminverif>\n        </div>\n        <div class=\"tab-pane fade\" id=\"listpublisher\" role=\"tabpanel\">\n          <app-adminpublisher></app-adminpublisher>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"justspace\"></div>"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-dark\" style=\"max-height: 400px;\">\n  <div class=\"container\">\n    <!-- Foto Lahan -->\n    <div class=\"mb-3\">\n      <ngb-carousel>\n        <ng-template ngbSlide *ngFor=\"let foto of detailLahan.foto; let i = index\">\n          <a [attr.href]=\"foto\" data-lightbox=\"lahan-gallery\" data-title=\"Foto Lahan\">\n            <img class=\"d-block mx-auto\" [attr.src]=\"foto\" height=\"400px\">\n          </a>\n          <div class=\"carousel-caption\">\n            <h3>Foto lahan {{ valPlus(i) }}</h3>\n          </div>\n        </ng-template>\n      </ngb-carousel>\n    </div>\n  </div>\n</div>\n<div class=\"container\">    \n  <!-- Pemilik Lahan -->\n  <div class=\"row mb-2\">\n    <h3 class=\"subtitle\">Data Pemilik</h3>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 order-md-2 text-center\">\n      <img class=\"rounded-circle\" [src]=\"detailLahan.foto_pemilik\" alt=\"Foto Pemilik\" width=\"80%\">\n    </div>\n    <div class=\"col-md-9 order-1\">\n      <table class=\"table mt-3\">\n        <tr>\n          <td>Nama</td>\n          <td> : </td>\n          <td>{{ detailLahan.nama_pemilik }}</td>\n        </tr>\n        <tr>\n          <td>Alamat</td>\n          <td> : </td>\n          <td>{{ detailLahan.alamat_pemilik }}</td>\n        </tr>\n        <tr>\n          <td>Email</td>\n          <td> : </td>\n          <td>{{ detailLahan.email_pemilik }}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <div class=\"row\">\n    <h3 class=\"subtitle\">Deskripsi Lahan</h3><hr>\n  </div>\n  <div class=\"row\">\n    <table class=\"table align-top mt-3\">\n      <tr>\n        <td>Alamat</td>\n        <td> : </td>\n        <td>{{ detailLahan.alamat_lahan }}</td>\n      </tr>\n      <tr>\n        <td>Luasan</td>\n        <td> : </td>\n        <td>{{ detailLahan.luasan_lahan }} Ha</td>\n      </tr>\n      <tr>\n        <td>Potensi</td>\n        <td> : </td>\n        <td>{{ detailLahan.potensi_lahan }}</td>\n      </tr>\n      <tr>\n        <td>Pengelolaan sebelumnya</td>\n        <td> : </td>\n        <td>{{ detailLahan.lahan_sebelumnya }}</td>\n      </tr>\n      <tr>\n        <td>Bidang pengelolaan</td>\n        <td> : </td>\n        <td>{{ detailLahan.pengelolaan }}</td>\n      </tr>\n      <tr>\n        <td>Kemitraan</td>\n        <td> : </td>\n        <td>{{ detailLahan.kemitraan }}</td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"row mb-3\">\n    <h3 class=\"subtitle\">Lokasi Lahan</h3><hr>\n  </div>\n    <agm-map [latitude]=\"strToNum(detailLahan.latitude)\" \n             [longitude]=\"strToNum(detailLahan.longitude)\"\n             [zoom]=\"zoom\">\n      <agm-marker [latitude]=\"strToNum(detailLahan.latitude)\"\n                  [longitude]=\"strToNum(detailLahan.longitude)\">\n        <agm-info-window>\n          {{ detailLahan.alamat_lahan }}\n        </agm-info-window>\n      </agm-marker>\n    </agm-map>      \n  <div class=\"row mt-4\">\n    <h3 class=\"subtitle\">Aksesibilitas Lahan</h3><hr>\n  </div>\n  <div class=\"row\">\n    <table class=\"table table-responsive align-top mt-3\">\n      <tr>\n        <td>Jarak dengan air</td>\n        <td> : </td>\n        <td>{{ detailLahan.jarak_air_lahan }}</td>\n      </tr>\n      <tr>\n        <td>Jarak dengan jalan</td>\n        <td> : </td>\n        <td>{{ detailLahan.jarak_jalan_lahan }}</td>\n      </tr>\n      <tr>\n        <td>Keterangan jalan</td>\n        <td> : </td>\n        <td>{{ detailLahan.keterangan_jalan_lahan }}</td>\n      </tr>\n      <tr>\n        <td>Jarak dengan pasar</td>\n        <td> : </td>\n        <td>{{ detailLahan.jarak_pasar_lahan }}</td>\n      </tr>\n    </table>\n  </div>\n  <div *ngIf=\"status.role == 'admin' && detailLahan.status == 'unverif'\" class=\"row verif-button\">\n    <div (click)=\"onVerif()\" class=\"btn btn-success\">Verif</div>\n  </div>\n  <div class=\"justspace\"></div>\n</div>"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "<div class=\"justspace\"></div>\n<div class=\"container\">\n  <h3 class=\"text-center pt-2\">Perbarui Lahan</h3><hr>\n  <form [formGroup]=\"formLahan\" (ngSubmit)=\"DaftarkanLahan()\" class=\"mt-3\">\n    <div class=\"form-separator\">\n      <h5>Data Pemilik</h5>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"nama_pemilik\" class=\"col-sm-2 col-form-label\">Nama Pemilik</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.nama_pemilik}}\" type=\"text\" class=\"form-control\" id=\"nama_pemilik\" placeholder=\"Nama Lengkap\" formControlName=\"nama_pemilik\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"email_pemilik\" class=\"col-sm-2 col-form-label\">Email Pemilik</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.email_pemilik}}\" type=\"email\" class=\"form-control\" id=\"email_pemilik\" placeholder=\"contoh@gmail.com\" formControlName=\"email_pemilik\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"no_hp_pemilik\" class=\"col-sm-2 col-form-label\">No. HP Pemilik</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.no_hp_pemilik}}\" type=\"text\" class=\"form-control\" id=\"no_hp_pemilik\" placeholder=\"08xxxxxxxxxx\" formControlName=\"no_hp_pemilik\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"alamat_pemilik\" class=\"col-sm-2 col-form-label\">Alamat Pemilik</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.alamat_pemilik}}\" type=\"text\" class=\"form-control\" id=\"alamat_pemilik\" placeholder=\"Tempat Tinggal Saat Ini\" formControlName=\"alamat_pemilik\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"foto_pemilik\" class=\"col-sm-2 col-form-label\">Foto Pemilik</label>\n      <div class=\"col-sm-10\">\n        <label class=\"custom-file\">\n          <input type=\"file\" id=\"foto_pemilik\" class=\"custom-file-input\" (change)=\"inputfotopemilik($event)\">\n          <span class=\"custom-file-control\">{{fotopemilik}}</span>\n        </label>\n      </div>\n    </div>\n    <div class=\"form-separator\">\n      <h5>Deskripsi Lahan</h5>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"alamat_lahan\" class=\"col-sm-2 col-form-label\">Alamat Lahan</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.alamat_lahan}}\" type=\"text\" class=\"form-control\" id=\"alamat_lahan\" placeholder=\"Alamat Lengkap Lahan\" formControlName=\"alamat_lengkap_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"wilayah_lahan\" class=\"col-sm-2 col-form-label\">Wilayah Lahan</label>\n      <div class=\"col-sm-10\">\n        <select class=\"custom-select\" (change)=\"setKecamatan()\" formControlName=\"kecamatan_lahan\">\n          <option selected disabled>{{detailLahan.kecamatan_lahan}}</option>\n          <option [ngValue]=\"kecamatan\" *ngFor=\"let kecamatan of objectValues(searchKecamatan)\">{{ kecamatan }}</option>\n        </select>\n        <select class=\"custom-select\" (change)=\"setDesaKel()\" formControlName=\"desakelurahan_lahan\">\n          <option selected disabled>{{detailLahan.desa_lahan}}</option>\n          <option [ngValue]=\"desaKel\" *ngFor=\"let desaKel of objectValues(searchDesaKel)\">{{ desaKel }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"luas_lahan\" class=\"col-sm-2 col-form-label\">Luas Lahan</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.luasan_lahan}}\" type=\"text\" class=\"form-control\" id=\"luas_lahan\" placeholder=\"Luas Lahan (dalam hektare)\" formControlName=\"luasan_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"potensi\" class=\"col-sm-2 col-form-label\">Potensi</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.potensi_lahan}}\" type=\"text\" class=\"form-control\" id=\"potensi\" placeholder=\"Potensi Lahan\" formControlName=\"potensi_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"sebelumnya\" class=\"col-sm-2 col-form-label\">Pengelolaan Sebelumnya</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.lahan_sebelumnya}}\" type=\"text\" class=\"form-control\" id=\"sebelumnya\" placeholder=\"Bidang Pengelolaan Lahan Sebelumnya\" formControlName=\"pengelolaan_sebelumnya_lahan\">\n      </div>\n    </div>\n    <div *ngFor=\"let bidang of indexbidang; let i = index\" class=\"form-group row\">\n      <label for=\"bidang_pengelolaan\" class=\"col-sm-2 col-form-label\">Bidang Pengelolaan {{i+1}}</label>\n      <div class=\"col-sm-10\">\n        <select class=\"custom-select\" formControlName=\"nama_pengelolaanlahan\" (change)=\"setBidang(i)\">\n          <option selected disabled>{{detailLahan.pengelolaan}}</option>\n          <option [ngValue]=\"bidang\" *ngFor=\"let bidang of objectValues(searchBidang)\">{{ bidang }}</option>\n        </select>\n        <button *ngIf=\"showTambahBidang == i && booltambahbidang && showTambahBidang < 5\" class=\"btn btn-success\" (click)=\"tambahBidang()\">\n          <i class=\"fa fa-plus\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"detail_pengelolaan\" class=\"col-sm-2 col-form-label\">Detail Pengelolaan</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.no_hp_pemilik}}\" type=\"text\" class=\"form-control\" id=\"detail_pengelolaan\" placeholder=\"Detail Pengelolaan\" formControlName=\"detail_pengelolaanlahan\">\n      </div>\n    </div>\n    <div *ngFor=\"let kemitraan of indexkemitraan; let i = index\" class=\"form-group row\">\n      <label for=\"kemitraan\" class=\"col-sm-2 col-form-label\">Kemitraan {{i+1}}</label>\n      <div class=\"col-sm-10\">\n        <select class=\"custom-select\" formControlName=\"nama_kemitraanlahan\" (change)=\"setKemitraan(i)\" formControlName=\"nama_kemitraanlahan\">\n          <option selected disabled>{{detailLahan.kemitraan}}</option>\n          <option [ngValue]=\"kemitraan\" *ngFor=\"let kemitraan of objectValues(searchKemitraan)\">{{ kemitraan }}</option>\n        </select>\n        <button *ngIf=\"showTambahKemitraan == i && booltambahkemitraan &&showTambahKemitraan < 3\" class=\"btn btn-success\" (click)=\"tambahKemitraan()\">\n          <i class=\"fa fa-plus\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"detail_kemitraan\" class=\"col-sm-2 col-form-label\">Detail Kemitraan</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.no_hp_pemilik}}\" type=\"text\" class=\"form-control\" id=\"detail_kemitraan\" placeholder=\"Detail Kemitraan\" formControlName=\"detail_kemitraanlahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"foto_lahan\" class=\"col-sm-2 col-form-label\">Foto Lahan</label>\n      <div class=\"col-sm-10\">\n        <label class=\"custom-file\">\n          <input type=\"file\" id=\"foto_lahan\" class=\"custom-file-input\" (change)=\"inputfotolahan($event)\" multiple>\n          <span class=\"custom-file-control\">{{fotolahan}}</span>\n        </label>\n      </div>\n    </div>\n    <div class=\"form-separator\">\n      <h5>Lokasi Lahan</h5>\n    </div>\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" (mapClick)=\"mapClicked($event)\">\n      <agm-marker [latitude]=\"strToNum(pointLat)\"\n                  [longitude]=\"strToNum(pointLng)\">\n        <agm-info-window>\n          Lat: {{ pointLat}}<br />Lng: {{ pointLng }}\n        </agm-info-window>\n      </agm-marker>\n    </agm-map>\n    <div class=\"form-group row\">\n      <label for=\"latitude_lahan\" class=\"col-sm-2 col-form-label\">Latitude</label>\n      <div class=\"col-sm-10\">\n        <input [(ngModel)]=\"pointLat\" type=\"text\" class=\"form-control\" id=\"latitude_lahan\" placeholder=\"Latitude Lahan\" formControlName=\"latitude_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"longitude_lahan\" class=\"col-sm-2 col-form-label\">Longitude</label>\n      <div class=\"col-sm-10\">\n        <input [(ngModel)]=\"pointLng\" type=\"text\" class=\"form-control\" id=\"longitude_lahan\" placeholder=\"Longitude Lahan\" formControlName=\"longitude_lahan\">\n      </div>\n    </div>\n    <div class=\"form-separator\">\n      <h5>Aksesibilitas Lahan</h5>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"jarak_air\" class=\"col-sm-2 col-form-label\">Jarak Dengan Air</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.jarak_air_lahan}}\" type=\"text\" class=\"form-control\" id=\"jarak_air\" placeholder=\"Jarak Lahan Dengan Air\" formControlName=\"jarak_air_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"jarak_jalan\" class=\"col-sm-2 col-form-label\">Jarak Dengan Jalan</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.jarak_jalan_lahan}}\" type=\"text\" class=\"form-control\" id=\"jarak_jalan\" placeholder=\"Jarak Lahan Dengan Jalan\" formControlName=\"jarak_jalan_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"keterangan_jalan\" class=\"col-sm-2 col-form-label\">Keterangan Jalan</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.keterangan_jalan_lahan}}\" type=\"text\" class=\"form-control\" id=\"keterangan_jalan\" placeholder=\"Apakah jalan dapat dimasuki mobil, motor, atau hanya pejalan kaki?\" formControlName=\"keterangan_jalan_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"jarak_pasar\" class=\"col-sm-2 col-form-label\">Jarak Dengan Pasar</label>\n      <div class=\"col-sm-10\">\n        <input value=\"{{detailLahan.jarak_pasar_lahan}}\" type=\"text\" class=\"form-control\" id=\"jarak_pasar\" placeholder=\"Jarak Lahan dengan Pasar\" formControlName=\"jarak_pasar_lahan\">\n      </div>\n    </div>\n    <div class=\"form-button\">\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      <div class=\"justspace\"></div>\n    </div>\n  </form>\n</div>\n<div class=\"justspace\"></div>"

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-dark pt-2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"left-footer\">\n          <h3 class=\"text-center text-white\">Tentang Kami</h3><hr>\n          <p class=\"text-silver text-justify\" style=\"text-indent: 50px;\">\n              Direktorat Kajian Strategis dan Kebijakan Pertanian (KSKP – IPB) dibentuk oleh Rektor IPB pada Tahun 2013. Terbentuknya KSKP ini tidak terlepas dari keinginan untuk mewujudkan Visi IPB menjadi penggerak prima dalam pengarusutamaan pertanian. Pengarusutamaan pertanian adalah salah satu solusi bangsa IPB sebagai institusi pendidikan pertanian bertekad untuk menjawab berbagai permasalahan yang muncul, baik di bidang pangan, energi maupun lingkungan.\n          </p>\n        </div>\n      </div>\n      <div class=\"col offset-md-1\">\n        <div class=\"right-footer\">\n          <h3 class=\"text-center text-white\">Hubungi Kami</h3><hr>\n          <div class=\"text-silver\">\n            <p class=\"text-white m-0\"><strong><i class=\"fa fa-map-marker\"></i> Alamat :</strong></p>\n            <div class=\"row\">\n              <div class=\"col\">Andi Hakim Nasoetion Building 1st Floor Campus IPB Darmaga Bogor 16680 West Java Indonesia</div>\n            </div>\n            <p class=\"text-white m-0 mt-2\"><strong><i class=\"fa fa-envelope\"></i> Email :</strong></p>\n            <div class=\"row\">\n              <div class=\"col text-nowrap\">kskp@apps.ipb.ac.id | kskpipb@gmail.com</div>\n            </div>\n            <p class=\"text-white m-0 mt-2\"><strong><i class=\"fa fa-globe\"></i> Website :</strong></p>\n            <div class=\"row\">\n              <div class=\"col text-nowrap\">\n                <strong><a href=\"http://kskp.ipb.ac.id/\">Web KSKP</a></strong> | \n                <strong><a href=\"http://journal.ipb.ac.id/index.php/jkebijakan\">Jurnal KSKP</a></strong>\n              </div>\n            </div>\n            <p class=\"text-white m-0 mt-2\"><strong><i class=\"fa fa-phone\"></i> Telepon dan Fax :</strong></p>\n            <div class=\"row mb-2\">\n              <div class=\"col text-nowrap\">+62 251 8625350</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid bg-green mt-2\">\n        <p class=\"text-center m-0\"><i class=\"fa fa-copyright\"></i> 2017 - Bank Data Lahan Non Produktif</p>\n  </div>\n</footer>"

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-green fixed-top\">\n  <div class=\"container\">\n    <!-- Logo -->\n    <a class=\"navbar-brand\">\n      <img [src]=\"'assets/img/kskp.png'\" width=\"60\" height=\"50\" alt=\"Logo\">\n      <img [src]=\"'assets/img/bappeda.png'\" width=\"50\" height=\"50\" alt=\"Logo\">\n      <div class=\"navbar-title\">Bank Data <small>Lahan Non Produktif</small></div>\n    </a>\n    <!-- Toggle Button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navContent\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Navbar Content -->\n    <div class=\"collapse navbar-collapse\" id=\"navContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/\"><i class=\"fa fa-home\"></i> Beranda</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/browse\"><i class=\"fa fa-map\"></i> Peta</a>\n        </li>\n        <!-- Belum Login -->\n        <li *ngIf=\"!login\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\" data-toggle=\"modal\" data-target=\"#memberModal\">\n            <i class=\"fa fa-user\"></i> Member Area\n          </a>\n        </li>\n        <!-- Sudah Login -->\n        <li *ngIf=\"login\" class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navDropdown\" role=\"button\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-user\"></i> {{NamaUser}}\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right pt-3 px-3\">\n            <a *ngIf=\"status.role == 'admin'\"  class=\"dropdown-item\" routerLink=\"/dashboard\">dashboad</a>\n            <a *ngIf=\"status.role == 'publisher'\" class=\"dropdown-item\" routerLink=\"/profile\">Profile</a>\n            <a *ngIf=\"status.role == 'publisher'\" class=\"dropdown-item\" routerLink=\"/upload\">Tambah Lahan</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" (click)=\"onLogout()\" routerLink=\"/\">Logout</a>            \n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- Member Area Modal -->\n<div class=\"modal fade\" id=\"memberModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"memberModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <app-auth></app-auth>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<app-cover></app-cover>\n<app-content></app-content>\n"

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<div class=\"justspace\"></div>\n<div class=\"container\">\n  <img [src]=\"'assets/img/404.png'\">  \n</div>\n<div class=\"justspace\"></div>"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "<div class=\"justspace\"></div>\n<div class=\"container\">\n  <h3 class=\"text-center pt-2\">Create Post</h3><hr>\n  <form class=\"mt-3\">\n    <div class=\"form-group row\">\n      <label for=\"judul_post\" class=\"col-sm-2 col-form-label\">Judul</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"judul_post\" placeholder=\"Judul Post\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"kategori_post\" class=\"col-sm-2 col-form-label\">Kategori</label>\n      <div class=\"col-sm-10\">\n        <select class=\"custom-select\">\n          <option selected disabled>Pilih Kategori</option>\n          <option value=\"model\">Model Pemanfaatan Lahan Non Produktif</option>\n          <option value=\"peluang\">Peluang Usaha Lahan Non Produktif</option>\n          <option value=\"berita\">Berita</option>\n        </select>\n      </div>\n    </div>\n    <ckeditor \n      [config]=\"{extraPlugins: 'divarea'}\" \n      [(ngModel)]=\"ckeditorContent\" \n      debounce=\"500\" \n      name=\"post_content\">\n    </ckeditor>\n    <div class=\"form-button\">\n      <button type=\"submit\" class=\"btn btn-success\">Publish</button>\n    </div>\n  </form>\n</div>\n<div class=\"justspace\"></div>"

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<div class=\"just-space\"></div>\n<div class=\"container\">\n  <div class=\"profile-user\">\n    <h3 class=\"text-center pt-2\">Profil Publisher</h3><hr>\n    <div class=\"row\">\n      <div class=\"col-md-3 order-md-2 text-center mb-3\">\n        <img class=\"rounded-circle\" [src]=\"'assets/img/pemilik/avatar.png'\" alt=\"Foto Publisher\" width=\"70%\">\n      </div>\n      <div class=\"col-md-9 order-1\">\n        <table class=\"table table-profile\">\n          <tr><td>Nama</td><td> : </td><td>{{pemilik.nama_publisher}}</td></tr>\n          <tr><td>Alamat</td><td> : </td><td>{{pemilik.alamat_publisher}}</td></tr>\n          <tr><td>Email</td><td> : </td><td>{{pemilik.email_publisher}}</td></tr>\n          <tr><td>No. HP</td><td> : </td><td>{{pemilik.no_hp_publisher}}</td></tr>\n        </table>\n      </div>\n    </div>\n  </div> \n  <div class=\"daftar-lahan my-4\">\n    <table class=\"table table-striped table-hover table-responsive-md\">\n      <thead class=\"thead-green\">\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Pemilik</th>\n          <th scope=\"col\">Alamat Lahan</th>\n          <th scope=\"col\">Luas</th>\n          <th scope=\"col\">Bidang Pengelolaan</th>\n          <th scope=\"col\">Kemitraan</th>\n          <th scope=\"col\">Status</th>\n          <th scope=\"col\">Pegaturan</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let lahan of lahanTerdaftar\">\n          <th scope=\"row\">{{ lahan.no }}</th>\n          <td>{{ lahan.pemilik }}</td>\n          <td>{{ lahan.alamat }}</td>\n          <td>{{ lahan.luasan }} Ha</td>\n          <td>{{ lahan.pengelolaan }}</td>\n          <td>{{ lahan.kemitraan }}</td>\n          <td>{{ lahan.status }}</td>\n          <td class=\"text-center\">\n            <div class=\"btn-group\" role=\"group\">\n              <button *ngIf=\"lahan.status == 'Belum Terverifikasi'\" type=\"button\" class=\"btn btn-secondary\" title=\"Belum Terverifikasi\" disabled>\n                <i class=\"fa fa-eye\"></i>\n              </button>\n              <a *ngIf=\"lahan.status == 'Terverifikasi'\" href=\"/detail/{{ lahan.id }}\">\n                <button type=\"button\" class=\"btn btn-primary\" title=\"Lihat\">\n                  <i class=\"fa fa-eye\"></i>\n                </button>\n              </a>\n              <a routerLink=\"/edit/{{ lahan.id }}\">\n                <button type=\"button\" class=\"btn btn-warning\" title=\"Ubah\">\n                  <i class=\"fa fa-pencil\"></i>\n                </button>\n              </a>\n              <button (click)=\"ngDeleted(lahan.id)\" type=\"button\" class=\"btn btn-danger\" title=\"Hapus\">\n                <i class=\"fa fa-times\"></i>\n              </button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"tambah-lahan text-center\">\n    <a routerLink=\"/upload\" class=\"btn btn-success\">Tambah Lahan</a>\n  </div>\n</div>\n<div class=\"just-space\"></div>\n"

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "<div class=\"justspace\"></div>\n<div class=\"container\">\n  <h3 class=\"text-center pt-2\">Publish Lahan</h3><hr>\n  <form [formGroup]=\"formLahan\" (ngSubmit)=\"DaftarkanLahan()\" class=\"mt-3\">\n    <div class=\"form-separator\">\n      <h5>Data Pemilik</h5>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"nama_pemilik\" class=\"col-sm-2 col-form-label\">Nama Pemilik</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"nama_pemilik\" placeholder=\"Nama Lengkap\" formControlName=\"nama_pemilik\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"email_pemilik\" class=\"col-sm-2 col-form-label\">Email Pemilik</label>\n      <div class=\"col-sm-10\">\n        <input type=\"email\" class=\"form-control\" id=\"email_pemilik\" placeholder=\"contoh@gmail.com\" formControlName=\"email_pemilik\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"no_hp_pemilik\" class=\"col-sm-2 col-form-label\">No. HP Pemilik</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"no_hp_pemilik\" placeholder=\"08xxxxxxxxxx\" formControlName=\"no_hp_pemilik\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"alamat_pemilik\" class=\"col-sm-2 col-form-label\">Alamat Pemilik</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"alamat_pemilik\" placeholder=\"Tempat Tinggal Saat Ini\" formControlName=\"alamat_pemilik\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"foto_pemilik\" class=\"col-sm-2 col-form-label\">Foto Pemilik</label>\n      <div class=\"col-sm-10\">\n        <label class=\"custom-file\">\n          <input type=\"file\" id=\"foto_pemilik\" class=\"custom-file-input\" (change)=\"inputfotopemilik($event)\">\n          <span class=\"custom-file-control\">{{fotopemilik}}</span>\n        </label>\n      </div>\n    </div>\n    <div class=\"form-separator\">\n      <h5>Deskripsi Lahan</h5>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"alamat_lahan\" class=\"col-sm-2 col-form-label\">Alamat Lahan</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"alamat_lahan\" placeholder=\"Alamat Lengkap Lahan\" formControlName=\"alamat_lengkap_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"wilayah_lahan\" class=\"col-sm-2 col-form-label\">Wilayah Lahan</label>\n      <div class=\"col-sm-10\">\n        <select class=\"custom-select\" (change)=\"setKecamatan()\" formControlName=\"kecamatan_lahan\">\n          <option selected disabled>Pilih Kecamatan</option>\n          <option [ngValue]=\"kecamatan\" *ngFor=\"let kecamatan of objectValues(searchKecamatan)\">{{ kecamatan }}</option>\n        </select>\n        <select class=\"custom-select\" *ngIf=\"showDesaKel == 1\" (change)=\"setDesaKel()\" formControlName=\"desakelurahan_lahan\">\n          <option selected disabled>Pilih Desa/Kelurahan</option>\n          <option [ngValue]=\"desaKel\" *ngFor=\"let desaKel of objectValues(searchDesaKel)\">{{ desaKel }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"luas_lahan\" class=\"col-sm-2 col-form-label\">Luas Lahan</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"luas_lahan\" placeholder=\"Luas Lahan (dalam hektare)\" formControlName=\"luasan_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"potensi\" class=\"col-sm-2 col-form-label\">Potensi</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"potensi\" placeholder=\"Potensi Lahan\" formControlName=\"potensi_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"sebelumnya\" class=\"col-sm-2 col-form-label\">Pengelolaan Sebelumnya</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"sebelumnya\" placeholder=\"Bidang Pengelolaan Lahan Sebelumnya\" formControlName=\"pengelolaan_sebelumnya_lahan\">\n      </div>\n    </div>\n    <div *ngFor=\"let bidang of indexbidang; let i = index\" class=\"form-group row\">\n      <label for=\"bidang_pengelolaan\" class=\"col-sm-2 col-form-label\">Bidang Pengelolaan {{i+1}}</label>\n      <div class=\"col-sm-10\">\n        <select class=\"custom-select\" formControlName=\"nama_pengelolaanlahan\" (change)=\"setBidang(i)\">\n          <option selected disabled>Pilih Bidang Pengelolaan</option>\n          <option [ngValue]=\"bidang\" *ngFor=\"let bidang of objectValues(searchBidang)\">{{ bidang }}</option>\n        </select>\n        <button *ngIf=\"showTambahBidang == i && booltambahbidang && showTambahBidang < 5\" class=\"btn btn-success\" (click)=\"tambahBidang()\">\n          <i class=\"fa fa-plus\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"detail_pengelolaan\" class=\"col-sm-2 col-form-label\">Detail Pengelolaan</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"detail_pengelolaan\" placeholder=\"Detail Pengelolaan\" formControlName=\"detail_pengelolaanlahan\">\n      </div>\n    </div>\n    <div *ngFor=\"let kemitraan of indexkemitraan; let i = index\" class=\"form-group row\">\n      <label for=\"kemitraan\" class=\"col-sm-2 col-form-label\">Kemitraan {{i+1}}</label>\n      <div class=\"col-sm-10\">\n        <select class=\"custom-select\" formControlName=\"nama_kemitraanlahan\" (change)=\"setKemitraan(i)\" formControlName=\"nama_kemitraanlahan\">\n          <option selected disabled>Pilih Jenis Kemitraan</option>\n          <option [ngValue]=\"kemitraan\" *ngFor=\"let kemitraan of objectValues(searchKemitraan)\">{{ kemitraan }}</option>\n        </select>\n        <button *ngIf=\"showTambahKemitraan == i && booltambahkemitraan &&showTambahKemitraan < 3\" class=\"btn btn-success\" (click)=\"tambahKemitraan()\">\n          <i class=\"fa fa-plus\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"detail_kemitraan\" class=\"col-sm-2 col-form-label\">Detail Kemitraan</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"detail_kemitraan\" placeholder=\"Detail Kemitraan\" formControlName=\"detail_kemitraanlahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"foto_lahan\" class=\"col-sm-2 col-form-label\">Foto Lahan</label>\n      <div class=\"col-sm-10\">\n        <label class=\"custom-file\">\n          <input type=\"file\" id=\"foto_lahan\" class=\"custom-file-input\" (change)=\"inputfotolahan($event)\" multiple>\n          <span class=\"custom-file-control\">{{fotolahan}}</span>\n        </label>\n      </div>\n    </div>\n    <div class=\"form-separator\">\n      <h5>Lokasi Lahan</h5>\n    </div>\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" (mapClick)=\"mapClicked($event)\">\n      <agm-marker [latitude]=\"strToNum(pointLat)\"\n                  [longitude]=\"strToNum(pointLng)\">\n        <agm-info-window>\n          Lat: {{ pointLat}}<br />Lng: {{ pointLng }}\n        </agm-info-window>\n      </agm-marker>\n    </agm-map>\n    <div class=\"form-group row\">\n      <label for=\"latitude_lahan\" class=\"col-sm-2 col-form-label\">Latitude</label>\n      <div class=\"col-sm-10\">\n        <input [(ngModel)]=\"pointLat\" type=\"text\" class=\"form-control\" id=\"latitude_lahan\" placeholder=\"Latitude Lahan\" formControlName=\"latitude_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"longitude_lahan\" class=\"col-sm-2 col-form-label\">Longitude</label>\n      <div class=\"col-sm-10\">\n        <input [(ngModel)]=\"pointLng\" type=\"text\" class=\"form-control\" id=\"longitude_lahan\" placeholder=\"Longitude Lahan\" formControlName=\"longitude_lahan\">\n      </div>\n    </div>\n    <div class=\"form-separator\">\n      <h5>Aksesibilitas Lahan</h5>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"jarak_air\" class=\"col-sm-2 col-form-label\">Jarak Dengan Air</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"jarak_air\" placeholder=\"Jarak Lahan Dengan Air\" formControlName=\"jarak_air_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"jarak_jalan\" class=\"col-sm-2 col-form-label\">Jarak Dengan Jalan</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"jarak_jalan\" placeholder=\"Jarak Lahan Dengan Jalan\" formControlName=\"jarak_jalan_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"keterangan_jalan\" class=\"col-sm-2 col-form-label\">Keterangan Jalan</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"keterangan_jalan\" placeholder=\"Apakah jalan dapat dimasuki mobil, motor, atau hanya pejalan kaki?\" formControlName=\"keterangan_jalan_lahan\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"jarak_pasar\" class=\"col-sm-2 col-form-label\">Jarak Dengan Pasar</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"jarak_pasar\" placeholder=\"Jarak Lahan dengan Pasar\" formControlName=\"jarak_pasar_lahan\">\n      </div>\n    </div>\n    <div class=\"form-button\">\n      <button type=\"submit\" class=\"btn btn-success\">Publish</button>\n      <div class=\"justspace\"></div>\n    </div>\n  </form>\n</div>\n<div class=\"justspace\"></div>"

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bogorkab.9f883eab3eb8189877da.png";

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAMAAACTKxybAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACYVBMVEXx9+iTw1ajzXDe7cz////+/v7////+//z///////////////7O5LJ7tzF/uDV7tzG+3Jv////2+vH+//7////////////////G36V+tzSJvkeHvEN8tzGbyWJ+uDTN47L8/fr////////N47F/tzaEvD6VxFmLwEt/uDZ/uTmJvUb7/fj+/v3r9OCFuz+Euz6HvUOjzG+Euj6HvUKBuTnP5LPt9uT////+/v6mznSBujmHvUN/uDaax2Kgyml+uDOHvUSBujp+tzXe7cyCuj2DujyGvEGHvEGCujq32JCHvEOEuz2IvkV4tSus0X7K4q17ti+GvUKHvUJ+tzWfy2is0n18tzGHvkV/uTiYxl38/vux04V9tzSGvUKGvEGAuTi72ZWGvUOEvD2AuTqUxFf7/fn+/v2hyWqAuTiFvUGHvUJ8tzGlznSt0n98tzGDuzyUxFT7/fidyWZ6ti2KvkiGu0CDvD6FvEDJ4KqEuz5+uDSiy2/o8tuIvUV6tjCIvkKJvkd5tS642JCqz3husBy62pL9/vzw9+mjzG95tS19uDSAuTiVxFnH4aZ4tCvl8df///7+/vz+/v7//v/U57yiy22Euz99tzPZ6cGRw1Ly+Ov///3+//79/vz9/v3////0+e7q89+nznS21oz///7+///+/v7//v/9/vz+//7+/v3Y6cSHvET7/fn////////////////////+//7+/v3////9/vuGvUHF4Kb////////////////////////////9/vuw04ONwEv////////////////////9/vze7cyCuj34IdWYAAAAAWJLR0QEj2jZUQAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+EMBgMZEQKh5+kAAAECSURBVAjXAfcACP8AAAECAwQFBgcICQoLAAwNDg8QERITFBUWFwAYGRobHB0eHwQgISIAIyQlJicoKSorBCwEAC0uLzAxMjM0NTY3OAA5Ojs8PT4/QEFCQwQAREVGR0hJSktMTU4EAE9QUVJTVFVWV1hZWgAEW1xdXl9gYWJjZGUAZmdoaWprbG1ub3BxAARyc3R1dnd4eXp7BAAEfH1+f4CBgoOEhQQAhgSHiImKi4yNjo8EAJCRkpOUlZaXmJmaBACbnJ2eBJ+goQSiowQApKWmp6ipBKoEq6ytAK6vsLEEsrO0tba3uAC5uru8vQS+v8AEwcIAw8PEwwTFxsfIBMnKkDVR+mtgiXEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMTItMDZUMDM6MjU6MTctMDU6MDC25waoAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTEyLTA2VDAzOjI1OjE3LTA1OjAwx7q+FAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ })

},[401]);
//# sourceMappingURL=main.bundle.js.map