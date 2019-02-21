import { ChatMessage } from './chat-message';

export class UserChatMesasge implements ChatMessage {
  date: Date;
  reply: boolean;
  text: string;
  type: 'file' | 'text';
  user: { name: string; avatar: string };


  constructor(text: string) {
    this.date = new Date();
    this.reply = true;
    this.text = text;
    this.type = 'text';
    this.user = {name: 'Nadia', avatar: ''};
  }
}
