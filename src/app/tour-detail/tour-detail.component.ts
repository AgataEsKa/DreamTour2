import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

import { Tour }         from '../tour';
import { TourService }  from '../tour.service';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-tour-detail',
  templateUrl: 'tour-detail.component.html',
  styleUrls: [ 'tour-detail.component.css' ]
})
export class TourDetailComponent implements OnInit {
  logged = true;
  @Input() tour: Tour;


  constructor(private route: ActivatedRoute,
              private tourService: TourService,
              private location: Location,
              private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getTour();
  }

  getTour(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id)
        .subscribe(tour => this.tour = tour);
  }

  goBack(): void {
    this.location.back();
  }

  updateTour(): void {
    this.router.navigateByUrl('add-edit-atour');
    this.loginService.login();
    console.log("mozna edytowac wpis");


    // updateTour(): void {
    //   this.tourService.updateTour(this.tour)
    //     .subscribe(),
    //   this.router.navigateByUrl('/add-edit-atour');
    // }
  }

}
