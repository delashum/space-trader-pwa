import { Injectable } from '@angular/core';
import { DbObject } from 'src/app/models/db';
import { create_game, Game } from 'src/app/models/game';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _current_game: Game;
  constructor(private _db: DbService) {}

  new_game(name: string) {
    if (name) {
      const new_game = create_game(name);
      return this._db.put(DbObject.Game, new_game).then(game => {
        this._current_game = game;
      });
    }
  }

  load_game(id: string) {
    return this._db.getOne<Game>(DbObject.Game, id).then(game => {
      this._current_game = game;
    });
  }

  game_list() {
    return this._db.getAll<Game>(DbObject.Game);
  }

  update_game(updated_game: Game) {
    return this._db.put(DbObject.Game, updated_game).then(game => {
      this._current_game = game;
    });
  }

  delete_game(id: string) {
    return this._db.put(DbObject.Game, id).then(game_id => {
      if (this._current_game.id === game_id) {
        this._current_game = null;
      }
    });
  }
}
