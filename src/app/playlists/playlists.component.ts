import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlists',
  template: `
  <div class="row">
  <div class="col">
  <playlists-list></playlists-list>
  </div>
  <div class="col">
  <playlists-details></playlists-details>
  </div>
  </div>    
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
