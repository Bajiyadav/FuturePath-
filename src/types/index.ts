export type UserRole =
  | "STUDENT"
  | "MENTOR"
  | "ADMIN";

export interface DashboardStats {
  students: number;
  mentors: number;
  bookings: number;
  assessments: number;
}

export interface CareerDomain {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface MentorCard {
  id: string;
  name: string;
  role: string;
  company: string;
  experience: number;
  rating: number;
}