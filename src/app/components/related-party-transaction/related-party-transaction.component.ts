import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-related-party-transaction',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './related-party-transaction.component.html',
  styleUrl: './related-party-transaction.component.css'
})
export class RelatedPartyTransactionComponent {
  transactions: Array<{ date: string, partyName: string, amount: number, type: string }> = [];
onSubmit(){
  
}
}
