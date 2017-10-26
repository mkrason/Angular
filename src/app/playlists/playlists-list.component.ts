import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from './playlist.interface';

@Component({
  selector: 'playlists-list',
  template: `
 <div class="list-group">
 <div class="list-group-item"
 *ngFor="let playlist of playlists"
 (click)="selected = playlist"
 [class.active] = "selected == playlist">
 {{playlist.name}} 
 </div>
 </div>
  `,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  // @Input('playlists')
  selected:Playlist;

  @Input('playlists')
  playlists:Playlist[] = []

  constructor() { }

  ngOnInit() {
  }

}
