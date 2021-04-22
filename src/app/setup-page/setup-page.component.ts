import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  size: number = 0;
  constructor( private usersService: UsersService) { }

  ngOnInit() {
    this.size = this.usersService.size;
  }

  onChange(){
    this.usersService.setSize(+this.size)
  }
}
