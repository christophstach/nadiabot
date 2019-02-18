import {Injectable} from '@angular/core';
import {ChatMessage} from '../model/chat-message';

@Injectable({
  providedIn: 'root'
})
export class NadiabotService {
  private currentMessage = 0;
  private chatMessages: ChatMessage[] = [
    {
      text: 'NEIN!',
      reply: false,
      type: 'text',
      user: {
        name: 'Nadiabot',
        avatar: 'assets/nadia.jpg'
      }
    }
  ];

  constructor() {
  }

  reply(text: string): ChatMessage {
    if (this.chatMessages.length > this.currentMessage) {
      const msg = this.chatMessages[this.currentMessage];
      this.currentMessage++;

      msg.date = new Date();

      return msg;
    } else {
      return {
        text: 'NEIN!',
        date: new Date(),
        reply: false,
        type: 'text',
        user: {
          name: 'Nadiabot',
          avatar: 'https://i.gifer.com/no.gif'
        }
      };
    }
  }
}
