import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from '../player.service';
import { Player } from '../player.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: Player[];

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer: Player){
    this.router.navigate(['players', clickedPlayer.id]);
  }

}
