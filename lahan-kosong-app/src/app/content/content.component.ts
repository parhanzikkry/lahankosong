import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [AppService]
})
export class ContentComponent implements OnInit {
  constructor(private AppService: AppService) { }

  ngOnInit() {
  }

}
