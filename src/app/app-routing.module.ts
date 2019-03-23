import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './views/main-menu/main-menu.component';
import { NewGameComponent } from './views/new-game/new-game.component';
import { SavedGamesComponent } from './views/saved-games/saved-games.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'new-game', component: NewGameComponent },
  { path: 'saved-games', component: SavedGamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
