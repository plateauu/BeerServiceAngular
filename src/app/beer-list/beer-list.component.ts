import {Component, OnInit} from '@angular/core';
import {BeerService} from '../beer/beer.service';
import {GiphyService} from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  private beers: Array<any>;
  private name: any;

  constructor(private beerService: BeerService, private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.beerService.getAll().subscribe(
      data => {
        this.beers = data;
        this.showBeers();
      },
      error => console.error(error)
    );
  }

  showBeers(): void {
    for (const beer of this.beers) {
      this.giphyService.get(beer.name).subscribe(url => beer.giphyUrl = url);
    }
  }

  addBeer(): void {
    const beersLenght = this.beers.length;
    const newItem = {id: beersLenght + 1, name: this.name};
    this.beers.push(newItem);
    this.beerService.save(newItem);
    this.showBeers();
  }
}

