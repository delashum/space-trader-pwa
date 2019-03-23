import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  name = '';

  constructor(private _game: GameService) {}

  ngOnInit() {}

  start() {
    this._game.new_game(this.name);
  }
}
