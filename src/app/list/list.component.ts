import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [PlayerService]
})
export class ListComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService) { }


  goToDetailPage(clickedPlayer){
    this.router.navigate(['players', clickedPlayer.$key]);
  }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

}
