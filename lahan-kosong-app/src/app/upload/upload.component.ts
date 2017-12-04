import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';
declare const google: any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [AppService]
})
export class UploadComponent implements OnInit {
  public map: any;
  public inputLat: any;
  public inputLng: any;

  constructor(
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(!this.AppService.CheckStatus()) {
      this.router.navigate(['']);
    } else {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(-6.5971469, 106.8060388),
          scrollwheel: false,
          zoom: 10
        });
    
        google.maps.event.addListener(this.map, 'click', function(event){
          // this.addMarker(event.latLng.lat(), event.latLng.lng());
          alert('Latitude : ' + event.latLng.lat() + ', Longitude : ' + event.latLng.lng());
        });
    }
  }

  addMarker(lat: number, lng: number) {
    console.log(lat, lng);
  }

}
