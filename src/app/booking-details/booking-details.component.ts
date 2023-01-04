import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  allProducts!:any[]

  ngOnInit(): void {
    this.http.get<{[key:string]:any}>('https://ticketbooking-a20f1-default-rtdb.firebaseio.com/booking.json')
    .pipe(map((response)=>{
      const products = [];
      for(const key in response){
        if(response.hasOwnProperty(key) ){
          products.push({...response[key],id:key});
          // products.push({response})
        }
      }
      return products;
    })) .subscribe({
      next:(data)=>{
        this.allProducts = data;
        console.log(data);

        
      }
    })
  }

}
