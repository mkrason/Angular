import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist.interface';



enum MODES { show, edit}

@Component({
  selector: 'playlists-details',
  templateUrl: `./playlist-details.component.html`,
})
export class PlaylistsDetailsComponent implements OnInit {

  playlist:Playlist = {
    id: 1, name: 'Angular Hits', favourite: true, color: '#FF0000'
  }

  MODES = MODES

  save(){
    console.log('save!!', this.playlist)
  }

  mode = MODES.show

  cancel(){
    this.mode = MODES.show
  }

  edit(){
    this.mode = MODES.edit
  }

  constructor() { }

  ngOnInit() {
  }

}
