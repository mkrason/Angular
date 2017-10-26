import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistsListComponent } from './playlists/playlists-list.component';
import { PlaylistsDetailsComponent } from './playlists/playlists-details.component';
import { PlaylistsItemComponent } from './playlists/playlists-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistsListComponent,
    PlaylistsDetailsComponent,
    PlaylistsItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
