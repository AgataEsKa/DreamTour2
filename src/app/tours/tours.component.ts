import { Component, OnInit } from '@angular/core';

import { Tour } from '../tour';
import { TourService } from '../tour.service';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-tours',
  templateUrl: 'tours.component.html',
  styleUrls: ['tours.component.css']
})
export class ToursComponent implements OnInit {
  tours: Tour[] = [];
  loginService: LoginService;
  logged = false;

  constructor(private tourService: TourService) {
  }

  ngOnInit() {
    this.tours = this.getTours();
  }

  getTours(): Tour[] {
    return JSON.parse(localStorage.getItem('reservation'));
  }

  getTours(): void {
    this.tourService.getTours()
        .subscribe(tours => this.tours = tours);
    // }

    // add(name: string): void {
    //   name = name.trim();
    //   if (!name) { return; }
    //   this.tourService.addTour({ name } as Tour)
    //     .subscribe(tour => {
    //       this.tours.push(tour);
    //     });
    // }
    //
    // delete(tour: Tour): void {
    //   this.tours = this.tours.filter(h => h !== tour);
    //   this.tourService.deleteTour(tour).subscribe();
    // }

  }
}
