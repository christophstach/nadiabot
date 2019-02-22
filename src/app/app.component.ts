import { Component } from '@angular/core';
import { ChatMessage } from './model/chat-message';
import { NadiabotService } from './services/nadiabot.service';
import { UserChatMessage } from './model/user-chat-message';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: ChatMessage[] = [];
  chatSize: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

  constructor(private nadiabot: NadiabotService, private breakpointObserver: BreakpointObserver) {
    this.chatSize = this.breakpointObserver.isMatched([
      Breakpoints.Handset
    ]) ? 'large' : 'xlarge';

    this.nadiabot.botMessage$.subscribe(message => {
      this.messages.push(message);
    });

    this.nadiabot.startChatting();
  }

  async sendMessage(event: { message: string }) {
    this.messages.push(new UserChatMessage(event.message));
    const botReply = await this.nadiabot.reply(event.message);

    if (botReply) {
      setTimeout(() => {
        this.messages.push(botReply);
      }, 1500);
    }
  }
}
