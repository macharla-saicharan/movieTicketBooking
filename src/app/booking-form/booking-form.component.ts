import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor(private http:HttpClient,private fb:FormBuilder,private router:Router) { }
  successMessage!:string;
  errorMessage!:string;

  validBooking : boolean = true;
  seatsSelection:boolean = true;


  bookingForm! : FormGroup;

  seatsDiv : boolean = false;
  classNames!:string;
  count:number = 0;

  namePattern = /^[a-zA-z]{3,}/g;
  mobPattern = /^[0-9]{10}$/g;

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      customerName : ['', {updateOn : 'blur', validators : [Validators.required,Validators.pattern(this.namePattern)]}],
      mobileNumber : ['', [Validators.required, Validators.pattern(this.mobPattern)]],
      noOfTickets :  ['', [Validators.required,Validators.max(4)]]
    })
  }

  submitted(val:FormGroup){
    console.log(val);
    this.postMethod(val.value);
    
}


// below method will post the data into the database

  postMethod(val:any) {
    this.http.post('https://ticketbooking-a20f1-default-rtdb.firebaseio.com/booking.json',val).subscribe({
      next:(data)=>{
        console.log(data);
        this.successMessage = 'Your booking is successfully completed';
        this.errorMessage = '';
        this.bookingForm.reset();
      },
      error:(err)=>{
        console.log(err);
        this.successMessage = '';
        this.errorMessage = 'Sorry unable to process your request';
        
      }
    })
  }

  // navigating programatically to the booking details component
    navigate():void {
      this.router.navigate(['/booking'])
    }

    showSeats() {
      this.seatsDiv = true;
    }


    seatColor(e:any){
      console.log(this.bookingForm.controls['noOfTickets'].value)
      console.log('count --'+this.count);
      
      if(this.bookingForm.controls['noOfTickets'].value > this.count) {
              e.target.className = 'seat selected';
              this.count++;
              if(this.bookingForm.controls['noOfTickets'].value == this.count) {
                     this.seatsSelection = false;
 
              }

      }
      console.log(e.target.className);
      
    }

    bookingBtn(){
      this.seatsDiv = false;
      // this.bookingForm.reset();
    }

}
