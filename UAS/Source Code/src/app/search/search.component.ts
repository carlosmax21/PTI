import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  APIKEY = `00092bafb0b472793f63ad94d309f81b`
  url = ''
  detailurl = '';
  detailTitle = '';
  detailOverview = '';
  trailerurl = ''
  trailerLink = []
  query = ''
  found = []
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.url = `https://api.themoviedb.org/3/search/movie?api_key=${this.APIKEY}&language=en-US&query=`
    this.url += this.query
    fetch(this.url)
    .then(response => response.json())
    .then(res => this.found = res.results);
  }

  getDetails(idFilm){
    this.detailurl = `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${this.APIKEY}&language=en-US`
    fetch(this.detailurl)
    .then(response => response.json())
    .then(res => this.detailTitle = res.title)
    fetch(this.detailurl)
    .then(response => response.json())
    .then(res => this.detailOverview = res.overview)
    this.trailerurl = `https://api.themoviedb.org/3/movie/${idFilm}/videos?api_key=00092bafb0b472793f63ad94d309f81b&language=en-US`
    fetch(this.trailerurl)
    .then(response => response.json())
    .then(res => this.trailerLink = res.results)
  }

  
  watchTrailer(){
    if(this.trailerLink[0] !== undefined){
      window.location.href = `https://youtube.com/watch?v=${this.trailerLink[0].key}`
    }
    else{
      alert("Trailer tidak tersedia")
    }
  }
}
