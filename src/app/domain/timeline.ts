export interface Timeline {
  day: number;
  description: string;
  agenda?: {
    event: string;
    hour: string;
    location: string;
  }[];
}
