import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { tripOptions } from '../../interfaces/trip-options';


@Component({
  selector: "app-add-trip",
  templateUrl: "./add-trip.page.html",
  styleUrls: ["./add-trip.page.scss"],
})

export class AddTripPage implements OnInit {

  constructor(
    public router: Router
  ) {}

  tripOptions: tripOptions = {
    description: "",
    locationStart: {
      address: "",
      location: { latitude: "", longitude: "" },
      dateTime: "",
    },
    locationEnd: {
      address: "",
      location: { latitude: "", longitude: "" },
      dateTime: "",
    },
    driverCurrentLocation: { latitude: '', longitude: ''},
    companyName: ''
  };

  submitted = false;

  ngOnInit() {}

  addTrip() {
    console.log('add Trip')
  }

  cancel() {
    console.log('cancel')

    this.router.navigate(['/app', 'tabs', 'schedule']);
  }
}
