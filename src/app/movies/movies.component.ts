import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieNamesService } from '../Services/movie-names.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService:MovieNamesService,private router:Router) { }
  movies!:any[];
  oneMovie!:object | undefined;
  ngOnInit(): void {
    this.movies = this.moviesService.movies;
      console.log(this.movies);
      this.oneMovie = this.movies[1]
      console.log(this.oneMovie);
    }

    booking(val:string){
      this.router.navigate(['/bookingForm']);
      console.log(val);
      
    }
}
