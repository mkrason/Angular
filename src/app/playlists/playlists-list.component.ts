import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist.interface';

@Component({
  selector: 'playlists-list',
  template: `
 <div class="list-group">
 <div class="list-group-item" *ngFor="let playlist of playlists let i=index">
 {{playlist.name}}
 {{i+1}} 
 </div>
 </div>
  `,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  playlists:Playlist[] = [{
    id: 1, name: 'Angular Hits', favourite: true, color: '#FF0000'  
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
  }

}
