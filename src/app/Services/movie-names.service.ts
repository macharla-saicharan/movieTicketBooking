import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieNamesService {

  constructor() { }

  
  movies:any[] = [
    {   movieName : 'Waltair_Veerayya',
        genres : 'Drama,Action', 
        ticketPrice : 150
    },
    {   movieName : 'kushi',
        genres : 'romance', 
        ticketPrice : 150
    },
    {   movieName : 'dhamaka',
        genres : 'Drama,comedy', 
        ticketPrice : 150
    },
    {   movieName : 'massoda',
        genres : 'horror', 
        ticketPrice : 100
    }
    // {Movie Name : Kushi Genres : Romantic/Musical Drama Ticket Price : Rs 150/-},
    // {Movie Name : Dhamaka Genres : Comedy/Action Ticket Price : Rs 120/-},
    // {Movie Name : HIT 2 Genres : Crime/Mystery/Thriller Ticket Price : Rs 100/-},
    // {Movie Name : Masooda Genres : Thriller/Horror Ticket Price : Rs 100/-},
    // {Movie Name : 18 Pages Genres : Romantic/Drama Ticket Price : Rs 100/-}
         
  ]
}
