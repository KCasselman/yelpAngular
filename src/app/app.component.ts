import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  _price: string = '';
  _city: string = '';
  _state: string = '';
  restaurants: [];
  random: [];
  randomBusiness: [];
  randomBusinesses: any[];
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3'

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
  }

    onEnter(state: string, city: string, price: string) {
      this._price = price.valueOf();
      this._city = city;
      this._state = state;
      return (this.http.get<any>(`${this.baseUrl}/businesses/search?location=${this._state} ${this._city}&price=${this._price}&open_now=true`))
      .pipe(map(res => {
        console.log(res.businesses)
        console.log(res)
        this.restaurants = res
        this.random = res.businesses
        this.randomBusinesses = new Array(this.random[Math.floor(Math.random() * res.businesses.length)])
        console.log(this.randomBusinesses)
      }))
      .subscribe()
    }
}