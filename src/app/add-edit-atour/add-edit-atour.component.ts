import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {Tour}         from '../tour';
import {TourService}  from '../tour.service';
//import { Tours } from "../tours"

@Component({
  selector: 'app-add-edit-atour',
  templateUrl: 'add-edit-atour.component.html',
  styleUrls: ['add-edit-atour.component.css']
})
export class AddEditATour {
  @Input() tour: Tour;
  tours: Tour[] = [];



  constructor(
              private tourService: TourService,
              private location: Location,
              private router: Router) {
  }



  goBack(): void {
    this.location.back();
  }

  save(name, termin, location, resort,
       coordinators, schedule):
  void {
    this.tourService.updateTour(this.tour);

    console.log("zapisano wycieczke", name);

    let nextId = this.tourService.tours.length + 1;

    // let tempTour: Tour = {nextId, name, termin, location, resort,
    // coordinators, schedule};
    //
    // this.tourService.tours.push(tempTour);
    // localStorage.setItem('reservation', this.tourService.tours);

    let obj = { id: 7, name: 'Zima Turnus 1', termin: '01.01.2018-01.01.2018',
      location: 'Mikolajki', resort: 'Hotel Golebiewski',
      coordinators: 'Adam Kowalski', schedule: 'sniadanie, obiad, kolacja' };

    this.tourService.addTour(obj as Tour)
      .subscribe(obj => {
        this.tours.push(obj)
      });

    this.router.navigateByUrl('/tours');

  }

}
