import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { BoardCommitteeComponent } from '../board-committee/board-committee.component';
import { DirectorsComponent } from '../directors/directors.component';
import { ContactComponent } from '../contact/contact.component';
import { FINANCIALComponent } from '../financial/financial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    BoardCommitteeComponent,
    DirectorsComponent,
    ContactComponent,
    FINANCIALComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
