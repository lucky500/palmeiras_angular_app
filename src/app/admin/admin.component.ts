import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(image: string, name: string, age: string, position: string, numberOfGames: string, description: string){
    var newPlayer: Player = new Player(image, name, age, position, numberOfGames, description);
    this.playerService.addPlayer(newPlayer);
  }

}
