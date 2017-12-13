import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-adminpublisher',
  templateUrl: './adminpublisher.component.html',
  styleUrls: ['./adminpublisher.component.css'],
  providers: [AppService]
})
export class AdminpublisherComponent implements OnInit {
  public Arr = Array;
  public publisher: any;
  public enum: number;
  
  constructor(
    private AppService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.publisher = [];
    this.AppService.publisherdata()
      .subscribe(data => {
        this.enum = 1;
        data.forEach(item => {
          var _publisher = {
            nama: item.nama_publisher,
            email: item.email_publisher,
            nohp: item.no_hp_publisher,
            ttl: item.TTL_publisher,
            alamat: item.alamat_publisher,
            id: item.id,
            no: this.enum
          };
          this.publisher.push(_publisher);
          this.enum++;
        })
      })
  }

  ngDelete(id: any) {
    this.AppService.deletepublisher(id)
      .subscribe(data => {
        console.log(data);
      })
  }

}
