import { Component } from '@angular/core';
import { UpworkServiceService } from '../upwork-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public toggleValue: any
  constructor(public navbar: UpworkServiceService){}  
  ngOnInit(){
    this.navbar.getToggleValue().subscribe(value => {
      this.toggleValue = value;
    });
  }
}
