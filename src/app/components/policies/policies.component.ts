import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css'
})
export class PoliciesComponent {
  policies = [
    { title: 'Whistle Blower Policy' },
    { title: 'Criteria for Making Payment to Non-Executive Directors' },
    { title: 'Policy for Determination of Materiality' },
    { title: 'Preservation of Documents Policy' },
    { title: 'Related Party Policy' },
    { title: 'Code of Conduct for Board of Directors and Senior Management Personnel' },
    { title: 'Terms and Conditions of Appointment of Independent Directors' },
    { title: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id labore deserunt ipsam rem quia' }
  ];
}
