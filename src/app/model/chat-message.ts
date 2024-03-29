export interface ChatMessage {
  text: string;
  date?: Date;
  reply: boolean;
  type: 'file' | 'text';
  user: {
    name: string,
    avatar: string;
  };
  files?: { url: string; type: 'image/jpeg' | 'image/gif ' }[];
}
