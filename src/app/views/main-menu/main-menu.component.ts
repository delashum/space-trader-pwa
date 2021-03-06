import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services/db.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  constructor(private _db: DbService) {}

  ngOnInit() {}
}
