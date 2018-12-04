import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {User} from '../user'
import { from } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public Users = [];
  userModel = new User("", "", "");
  constructor(private _TestService:TestService) { }

  ngOnInit() {
    this._TestService.getUsers().subscribe(data=>this.Users=data);
  }
}
