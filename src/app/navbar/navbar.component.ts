import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from './../services/auth/auth.service';
import { Recipe } from './../recipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onSearch = new EventEmitter<String>();

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  handleSearch(query: string): void {
    this.onSearch.emit(query);
  }

}
