import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../recipe';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
