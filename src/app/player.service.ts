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

  addPlayer(newPlayer: Player){
    this.players.push(newPlayer);
  }

  getPlayerById(playerId: string){
    return this.database.object('players/' + playerId);
  }

  updatePlayer(localUpdatedPlayer){
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({
      image: localUpdatedPlayer.image,
      name: localUpdatedPlayer.name,
      age: localUpdatedPlayer.age,
      position: localUpdatedPlayer.position,
      numberOfGames: localUpdatedPlayer.numberOfGames,
      description: localUpdatedPlayer.descriptionr
    });
  }

  deletePlayer(localPlayerToDelete){
    var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    playerEntryInFirebase.remove();
  }

}
