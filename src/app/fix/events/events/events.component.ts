import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PasswordPopupComponent } from 'src/app/main_dashboard_components/password-popup/password-popup.component';
import { ScorecardPopupComponent } from 'src/app/main_dashboard_components/pop_ups/scorecard-popup/scorecard-popup.component';
import { SignoutPopupComponent } from 'src/app/main_dashboard_components/pop_ups/signout-popup/signout-popup.component';
import { AddPopupComponent } from '../../shared_components/shared_popups/add-popup/add-popup.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(private dialogRef: MatDialog){

  }
  openPasswordPopup(){
    this.dialogRef.open(PasswordPopupComponent);
  }
  openScorecardPopup(){
    this.dialogRef.open(ScorecardPopupComponent);
  }
  openSignoutPopup(){
    this.dialogRef.open(SignoutPopupComponent);
  }
  openAddPopup(){
    this.dialogRef.open(AddPopupComponent);
  }
}
