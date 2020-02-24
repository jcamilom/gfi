import { Component, OnInit, Input } from '@angular/core';
import { SearchResultItem } from '../../core/models/models';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss']
})
export class SearchResultCardComponent implements OnInit {

  @Input() item: SearchResultItem;

  constructor() { }

  ngOnInit(): void {
  }

}
