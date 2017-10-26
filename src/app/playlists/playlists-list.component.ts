import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Playlist } from './playlist.interface';

@Component({
  selector: 'playlists-list',
  template: `
 <div class="list-group">
 <div class="list-group-item"
 *ngFor="let playlist of playlists; let i = index"
 [class.active]="selected == playlist"
 (click)="select(playlist)">
 {{i+1}}.
 {{playlist.name}} 
 </div>
 </div>
  `,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  // select(playlist:Playlist){
  //   this.selected = playlist
  // }
  @Output()
  selectedChange = new EventEmitter<Playlist>
  ()

  @Input()
  selected:Playlist;

  @Input('playlists')
  playlists:Playlist[] = []

select(playlist:Playlist){
  this.selectedChange.emit(playlist)
}

  constructor() { }

  ngOnInit() {
  }

}
