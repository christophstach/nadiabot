import {Component} from '@angular/core';
import {ChatMessage} from './model/chat-message';
import {NadiabotService} from './services/nadiabot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  messages: ChatMessage[] = [];

  constructor(private nadiabot: NadiabotService) {
  }

  sendMessage(event: any) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: 'text',
      user: {
        name: 'Nadia',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });

    const botReply = this.nadiabot.reply(event.message);

    if (botReply) {
      setTimeout(() => {
        this.messages.push(botReply);
      }, 1500);
    }
  }
}
