import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppService]
})
export class HeaderComponent implements OnInit {
  private login:boolean;
  constructor(
    private AppService: AppService
  ) { }

  ngOnInit() {
    this.login = this.AppService.CheckStatus();
  }

}
