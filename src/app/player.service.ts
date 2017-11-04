import { Injectable } from '@angular/core';

import { Player } from './player.model';
import { PLAYERS } from './mock-player';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.players = database.list('players');
  }

  getPlayers(){
    return this.players;
  }

  getPlayerById(playerId: number){
    for(var i = 0; i <= PLAYERS.length - 1; i++){
      if(PLAYERS[i].id === playerId){
        return PLAYERS[i];
      }
    }
  }

}
