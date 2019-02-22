import { ChatMessage } from './chat-message';

export class BotChatMessage implements ChatMessage {
  date: Date;
  reply: boolean;
  text: string;
  type: 'file' | 'text';
  user: { name: string; avatar: string };
  files: { url: string; type: 'image/jpeg' | 'image/gif ' }[];


  constructor(text: string, image?: string) {
    this.date = new Date();
    this.reply = false;
    this.text = text;
    this.type = image ? 'file' : 'text';

    if (image) {
      this.files = [{url: image, type: 'image/jpeg'}];
    }

    this.user = {name: 'Nadiabot', avatar: 'assets/nadia.jpg'};
  }
}
