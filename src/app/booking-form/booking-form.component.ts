import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor(private http:HttpClient) { }
  @ViewChild('myForm') form!:NgForm;
  successMessage!:string;
  errorMessage!:string;

  ngOnInit(): void {
  }

  submitted(val:any){
    console.log(val);
    this.postMethod(val.value);
    
}


// below method will post the data into the database

  postMethod(val:any) {
    this.http.post('https://ticketbooking-a20f1-default-rtdb.firebaseio.com/booking.json',val).subscribe({
      next:(data)=>{
        console.log(data);
        this.successMessage = 'Your booking is successfully';
        this.errorMessage = '';
      },
      error:(err)=>{
        console.log(err);
        this.successMessage = '';
        this.errorMessage = 'Sorry unable to process your request';
        
      }
    })
  }
}
