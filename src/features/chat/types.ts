export enum MessageType {
  table = "table",
  chart = "chart",
  text = "text",
}

export interface TableMessage {
  type: MessageType.table;
  data: { influencer: string; performance: string }[];
  columns: { title: string; dataIndex: string; key: string }[];
}
export interface ChartMessage {
  type: MessageType.chart;
  data: { category: string; performance: number }[];
}
export interface TextMessage {
  type: MessageType.text;
  data: string;
}
export type PossibleMessages = TableMessage | ChartMessage | TextMessage;

export type MessageChain = PossibleMessages[];

export enum Sender {
  bot = "bot",
  user = "user",
}
export interface Message {
  sender: Sender;
  messages: MessageChain;
}
