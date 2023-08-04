import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTopNavComponent } from './main-top-nav/main-top-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';
import { MainViewComponent } from './main-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    MainTopNavComponent,
    MainSidenavComponent,
    MainContentComponent,
    MainFooterComponent,
    MainHeaderComponent,
    MainViewComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MainViewModule { }
