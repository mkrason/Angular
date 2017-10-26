import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist.interface';

@Component({
  selector: 'playlists',
  template: `
  <div class="row">
  <div class="col">
  <playlists-list [playlists]="playlists" [(selected)]="selected"></playlists-list>
  </div>
  <div class="col">
  <playlists-details [playlist]="selected"></playlists-details>
  </div>
  </div>    
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  selected: Playlist;

  playlists:Playlist[] = [{
    id: 1, name: 'Angular Hitss', favourite: true, color: '#FF0000'  
  },
  {
    id: 100, name: 'Angula', favourite: false, color: '#FF0099'  
  },
  {
    id: 99, name: 'NGGGG', favourite: true, color: '#FF1111'  
  },
  {
    id: 99, name: 'kkkkkk', favourite: true, color: '#FF1111'  
  }]

  constructor() { }

  ngOnInit() {

    this.selected = this.playlists[2]

  }

}
