import { Component } from '@angular/core';
import { ChatMessage } from './model/chat-message';
import { NadiabotService } from './services/nadiabot.service';
import { UserChatMesasge } from './model/user-chat-mesasge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  messages: ChatMessage[] = [];

  constructor(private nadiabot: NadiabotService) {
    this.nadiabot.botMessage$.subscribe(message => {
      this.messages.push(message);
    });

    this.nadiabot.startChatting();
  }

  sendMessage(event: { message: string }) {
    this.messages.push(new UserChatMesasge(event.message));
    const botReply = this.nadiabot.reply(event.message);

    if (botReply) {
      setTimeout(() => {
        this.messages.push(botReply);
      }, 1500);
    }
  }
}
