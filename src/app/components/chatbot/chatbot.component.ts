import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  messages: { user: string, text: string }[] = [];
  inputMessage: string = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    this.messages.push({ user: 'User', text: this.inputMessage });
    this.http.post('YOUR_DIALOGFLOW_WEBHOOK_URL', { query: this.inputMessage }).subscribe((response: any) => {
      const reply = response.fulfillmentText;
      this.messages.push({ user: 'Bot', text: reply });
    });
    this.inputMessage = '';
  }
}
