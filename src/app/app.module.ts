import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { GeneralInfoCardsComponent } from './main_dashboard_components/info_cards/general-info-cards/general-info-cards.component';
import { RecentTasksComponent } from './main_dashboard_components/recent-tasks/recent-tasks.component';
import { LeaderBoardComponent } from './main_dashboard_components/leader-board/leader-board.component';
import { TaskComponent } from './main_dashboard_components/recent-tasks/tasks/task/task.component';
import { MemberComponent } from './main_dashboard_components/leader-board/member/member/member.component';
import { MatDialogModule} from '@angular/material/dialog';
import { ScorecardPopupComponent } from './main_dashboard_components/pop_ups/scorecard-popup/scorecard-popup.component';
import { SignoutPopupComponent } from './main_dashboard_components/pop_ups/signout-popup/signout-popup.component';
import { ContentComponent } from './fix/content/content.component';
import { AlltasksComponent } from './fix/alltasks/alltasks.component';
import { PasswordPopupComponent } from './main_dashboard_components/password-popup/password-popup.component';
import { SharedComponentComponent } from './fix/shared_components/shared-component/shared-component.component';
import { AddPopupComponent } from './fix/shared_components/shared_popups/add-popup/add-popup.component';
import { DeletePopupComponent } from './fix/shared_components/shared_popups/delete-popup/delete-popup.component';
import { ModifyPopupComponent } from './fix/shared_components/shared_popups/modify-popup/modify-popup.component';
import { DetailsPopupComponent } from './fix/shared_components/shared_popups/details-popup/details-popup.component';
import { MemberCardComponent } from './fix/navbar/members/member-card/member-card.component';
import { EventsComponent } from './fix/events/events/events.component';
import { AddMemberPopupComponent } from './fix/navbar/members/add-member-popup/add-member-popup.component';
import { DashboardComponent } from './fix/navbar/dashboard.component';


const appRoute: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'content', component: ContentComponent},
  {path: 'tasks', component: AlltasksComponent},
  {path: 'events', component: EventsComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GeneralInfoCardsComponent,
    RecentTasksComponent,
    LeaderBoardComponent,
    TaskComponent,
    MemberComponent,
    PasswordPopupComponent,
    ScorecardPopupComponent,
    SignoutPopupComponent,
    ContentComponent,
    AlltasksComponent,
    SharedComponentComponent,
    AddPopupComponent,
    DeletePopupComponent,
    ModifyPopupComponent,
    DetailsPopupComponent,
    MemberCardComponent,
    EventsComponent,
    AddMemberPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
