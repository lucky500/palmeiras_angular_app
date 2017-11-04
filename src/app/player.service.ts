import { Injectable } from '@angular/core';

import { Player } from './player.model';
import { PLAYERS } from './mock-player';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers(){
    return PLAYERS;
  }

}
