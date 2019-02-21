import { ChatMessage } from './chat-message';

export class BotChatMessage implements ChatMessage {
  date: Date;
  reply: boolean;
  text: string;
  type: 'file' | 'text';
  user: { name: string; avatar: string };


  constructor(text: string, image?: string) {
    this.date = new Date();
    this.reply = false;
    this.text = text;
    this.type = 'text';
    this.user = {name: 'Nadia', avatar: 'https://i.gifer.com/no.gif'};
  }
}
