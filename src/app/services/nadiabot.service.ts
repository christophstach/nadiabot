import { Injectable } from '@angular/core';
import { ChatMessage } from '../model/chat-message';
import { BotChatMessage } from '../model/bot-chat-message';
import { Subject } from 'rxjs';
import { sample } from 'lodash';
import { DogsApiService } from './dogs.api.service';

@Injectable({
  providedIn: 'root'
})
export class NadiabotService {
  public botMessage$: Subject<ChatMessage> = new Subject();


  private currentMessage = 0;
  private chatMessages: string[] = [
    'Hallo, mein Name ist Nadiabot.',
    'Ich bin zwar noch nicht so ausgereift, jedoch kannst du bereits mit mir chatten.',
    'Ich werde versuchen dir möglichst akurate Antworten auf Basis der realen, effizienten Nadia zu geben.',
    'PS: Meld dich bei deinem König, er benötigt deine Hilfe um sich besser zu konzentrieren und möchte einen Termin ausmachen.',
    'Alles gute und herzlichen Glückwunsch zum Geburtstag! Das alle deine Träume in Erfüllung gehen. :-)',
    'Ich gelte auch als Einladung auf eine leckere italienische Pizza.'
  ];

  private defaultMessages = [
    'NEIN!',
    'Ich habe keine Zeit',
    '...',
    'Em',
    '*ignorieren*'
  ];

  constructor(private dogsApi: DogsApiService) {


  }

  startChatting() {
    setInterval(() => {
      if (this.chatMessages.length > this.currentMessage) {
        const message = this.chatMessages[this.currentMessage];
        this.currentMessage++;

        this.botMessage$.next(new BotChatMessage(message));
      }
    }, 2000);
  }

  async reply(text: string): Promise<ChatMessage> {
    switch (text.trim()) {
      case 'westie':
        return new BotChatMessage(
          'Guck mal! Dein Lieblingshund!',
          await this.dogsApi.fetchRandomDog()
        );

      default:
        return new BotChatMessage(sample(this.defaultMessages));
    }
  }
}
