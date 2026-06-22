/**
 * Shared API types for consistent client/server contracts.
 */

/** Standard API success response */
export interface ApiResponse<T = unknown> {
  success: true;
  data: T;
}

/** Standard API error response */
export interface ApiError {
  success: false;
  error: string;
  details?: Record<string, string[]>;
}

/** Paginated response */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/** Pagination query params */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// ============================================
// Domain types
// ============================================

export interface MentorCard {
  id: string;
  name: string;
  currentRole: string;
  company: string;
  bio: string;
  expertise: string[];
  domains: string[];
  hourlyRate: number;
  rating: number;
  totalReviews: number;
  totalSessions: number;
  image: string | null;
}

export interface BookingSummary {
  id: string;
  scheduledAt: string;
  duration: number;
  status: string;
  amount: number;
  meetLink: string | null;
  mentor: {
    id: string;
    name: string;
    image: string | null;
  };
  student: {
    id: string;
    name: string;
    image: string | null;
  };
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: string;
}

export interface RoadmapMilestone {
  title: string;
  description: string;
  duration: string;
  resources: string[];
  completed?: boolean;
}
