import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from './playlist.interface';



enum MODES { show, edit}

@Component({
  selector: 'playlists-details',
  templateUrl: `./playlist-details.component.html`,
})
export class PlaylistsDetailsComponent implements OnInit {
  @Input('playlist')
  playlist:Playlist = {
    id: 1, name: 'Angular Hits', favourite: true, color: '#FF0000'
  }

  // selected: Playlist

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
