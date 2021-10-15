import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  APIKEY = `00092bafb0b472793f63ad94d309f81b`
  pagenum = 1;
  url = ''
  detailurl = '';
  detailTitle = '';
  detailOverview = '';
  movies = []
  trailerurl = ''
  trailerLink = []

  constructor() { }

  ngOnInit(): void {
    this.nowplayingmovies()
  }

  nowplayingmovies(){
    this.url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.APIKEY}&language=en-US&page=${this.pagenum}`
    this.getMovies()
  }

  getMovies(){
    fetch(this.url)
    .then(response => response.json())
    .then(res => this.movies = res.results)
  }  

  nextPage(){
    if(this.pagenum < 1000){
      this.pagenum++;
      this.nowplayingmovies()
    }
  }

  prevPage(){
    if(this.pagenum > 1){
      this.pagenum--;
      this.nowplayingmovies()
    }
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

  sortpopdesc(){
    this.url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.APIKEY}&language=en-US&sort_by=popularity.desc&${this.pagenum}`
    this.getMovies()
  }

  sortpopasc(){
    this.url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.APIKEY}&language=en-US&sort_by=popularity.asc&${this.pagenum}`
    this.getMovies()
  }

  voteavrdesc(){
    this.url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.APIKEY}&language=en-US&sort_by=vote_average.desc&${this.pagenum}`
    this.getMovies()
  }

  voteavrasc(){
    this.url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.APIKEY}&language=en-US&sort_by=vote_average.asc&${this.pagenum}`
    this.getMovies()
  }
}
