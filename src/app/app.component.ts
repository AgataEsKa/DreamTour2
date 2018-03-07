import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {TourService} from "./tour.service";
import {InMemoryDataService} from "./in-memory-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginServce: LoginService, private router: Router, private loginService: LoginService, private tourService: TourService, private getTours: InMemoryDataService) {}
  title = 'Dream Tour';

  logout(): void {
    this.router.navigateByUrl('home');
    this.loginService.logout();
  }

  logged = false;

  ngOnInit() {
    // this.tourService.saveTours(this.getTours.createDb());
    this.loginServce.logged.subscribe((data) => {
      this.logged = data;
    });
  }

}
