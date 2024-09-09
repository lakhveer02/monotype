import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoardCommitteeComponent } from './components/board-committee/board-committee.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AboutComponent } from './components/about/about.component';
import { DirectorsComponent } from './components/directors/directors.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { FINANCIALComponent } from './components/financial/financial.component';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    BoardCommitteeComponent,
    TopBarComponent,
    AboutComponent,
    DirectorsComponent,
    NavBarComponent,
    ContactComponent,
    FINANCIALComponent,
    HighchartsChartModule,
    HttpClientModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'monotype-clone';
  Highcharts: typeof Highcharts = Highcharts;

}
