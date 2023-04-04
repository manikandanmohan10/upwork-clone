import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent, DialogData } from '../login/login.component';
import { UpworkServiceService } from '../upwork-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  username: any
  password: any
  toggleValue = false
  defaultVal = false
  constructor(public dialog: MatDialog, public navbar: UpworkServiceService){}

  openDialog(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      height: '500px',
      data: {username: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.username = result;
    })
  }

  toggleOpen(){
    this.toggleValue = !this.toggleValue
    this.navbar.toggleOption(this.toggleValue)
  }

  signUpButton(){
    this.defaultVal = !this.defaultVal
  }
}
