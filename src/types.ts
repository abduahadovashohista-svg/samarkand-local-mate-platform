export interface Mate {
  id: string;
  name: string;
  age: number;
  avatar: string;
  rating: number;
  ratingCount: number;
  pricePerHour: number;
  specialtyKey: string;
  languages: string[];
  bio: Record<string, string>;
  subtitle: Record<string, string>;
  details: {
    experience: Record<string, string>;
    transport: Record<string, string>;
    itinerary: Record<string, string[]>;
    achievements: string[];
  };
}

export interface Review {
  id: string;
  userInitials: string;
  userName: string;
  country: Record<string, string>;
  mateName: string;
  rating: number;
  comment: Record<string, string>;
}
