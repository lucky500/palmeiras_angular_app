import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [PlayerService]
})
export class DetailComponent implements OnInit {
  playerId: string;
  playerToDisplay;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.playerId = urlParameters['id'];
    });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

}
