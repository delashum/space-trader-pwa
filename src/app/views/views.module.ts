import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MapComponent } from './map/map.component';
import { MarketComponent } from './market/market.component';
import { NewGameComponent } from './new-game/new-game.component';
import { SavedGamesComponent } from './saved-games/saved-games.component';
import { ShipyardComponent } from './shipyard/shipyard.component';

@NgModule({
  declarations: [
    MarketComponent,
    ShipyardComponent,
    BattleComponent,
    MainMenuComponent,
    MapComponent,
    SavedGamesComponent,
    NewGameComponent,
  ],
  exports: [MarketComponent, ShipyardComponent, BattleComponent, MainMenuComponent, MapComponent, SavedGamesComponent, NewGameComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ViewsModule {}
