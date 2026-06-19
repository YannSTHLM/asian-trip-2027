export interface DayData {
  date: string;
  title: string;
  notes?: string;
  activities: {
    time?: string;
    title: string;
    description?: string;
    location?: string;
    lat?: number;
    lng?: number;
    category?: string;
  }[];
}
