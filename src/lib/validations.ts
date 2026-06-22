/**
 * Zod validation schemas for forms and API routes.
 * Centralized to keep validation logic consistent across the app.
 */
import { z } from "zod";

// ============================================
// AUTH
// ============================================

export const studentSignupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password is too long"),
  phone: z.string().optional(),
  educationLevel: z
    .enum([
      "HIGH_SCHOOL",
      "UNDERGRADUATE",
      "GRADUATE",
      "POSTGRADUATE",
      "WORKING_PROFESSIONAL",
      
    ])
    .optional(),
  referralCode: z.string().optional(),
});

export const mentorSignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
  expertise: z.string().min(2, "Add at least one skill"),
  domains: z.string().min(2, "Add at least one domain"),
  experience: z.coerce.number().int().min(0).max(70),
  currentRole: z.string().min(2, "Current role is required"),
  company: z.string().min(2, "Company is required"),
  bio: z
    .string()
    .min(50, "Bio should be at least 50 characters")
    .max(2000, "Bio is too long"),
  linkedinUrl: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  hourlyRate: z.coerce.number().min(0).max(10000),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ============================================
// STUDENT FEATURES
// ============================================

export const assessmentSchema = z.object({
  answers: z.record(z.string(), z.number().int().min(0).max(4)),
});

export const roadmapRequestSchema = z.object({
  domain: z.string().min(2, "Domain is required"),
  currentLevel: z.enum(["beginner", "intermediate", "advanced"]).optional(),
});

export const chatMessageSchema = z.object({
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(2000, "Message is too long"),
  sessionId: z.string().optional(),
});

export const profileUpdateSchema = z.object({
  name: z.string().min(2).optional(),
  phone: z.string().optional(),
  bio: z.string().max(500).optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  githubUrl: z.string().url().optional().or(z.literal("")),
  portfolioUrl: z.string().url().optional().or(z.literal("")),
  skills: z.array(z.string()).optional(),
  interests: z.array(z.string()).optional(),
  educationLevel: z
    .enum([
      "HIGH_SCHOOL",
      "UNDERGRADUATE",
      "GRADUATE",
      "POSTGRADUATE",
      "WORKING_PROFESSIONAL",
      
    ])
    .optional(),
  institution: z.string().optional(),
  degree: z.string().optional(),
  graduationYear: z.coerce.number().int().min(1950).max(2050).optional(),
  currentDomain: z.string().optional(),
  targetDomain: z.string().optional(),
});

// ============================================
// MENTOR FEATURES
// ============================================

export const availabilitySchema = z.object({
  slots: z
    .array(
      z.object({
        dayOfWeek: z.number().int().min(0).max(6),
        startTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Invalid time"),
        endTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Invalid time"),
      })
    )
    .min(1, "Add at least one availability slot"),
});

export const mentorProfileSchema = z.object({
  expertise: z.array(z.string()).min(1, "Add at least one skill"),
  domains: z.array(z.string()).min(1, "Add at least one domain"),
  experience: z.coerce.number().int().min(0),
  currentRole: z.string().min(2),
  company: z.string().min(2),
  bio: z.string().min(50).max(2000),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  hourlyRate: z.coerce.number().min(0),
});

// ============================================
// BOOKINGS
// ============================================

export const bookingSchema = z.object({
  mentorId: z.string().cuid("Invalid mentor"),
  scheduledAt: z.string().refine(
    (val) => !isNaN(Date.parse(val)),
    "Invalid date"
  ),
  duration: z.number().int().min(15).max(180).default(60),
  notes: z.string().max(500).optional(),
});

export const reviewSchema = z.object({
  bookingId: z.string().cuid(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().max(1000).optional(),
});

// ============================================
// CONTENT
// ============================================

export const blogSchema = z.object({
  title: z.string().min(3).max(200),
  excerpt: z.string().max(300).optional(),
  content: z.string().min(100, "Content must be at least 100 characters"),
  coverImage: z.string().url().optional().or(z.literal("")),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(2000),
  type: z
    .enum(["contact", "partnership", "support", "press"])
    .default("contact"),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
});

// ============================================
// ADMIN
// ============================================

export const inquiryReplySchema = z.object({
  inquiryId: z.string().cuid(),
  reply: z.string().min(10),
});

// ============================================
// EXPORTED TYPES
// ============================================

export type StudentSignupInput = z.infer<typeof studentSignupSchema>;
export type MentorSignupInput = z.infer<typeof mentorSignupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type AssessmentInput = z.infer<typeof assessmentSchema>;
export type RoadmapRequestInput = z.infer<typeof roadmapRequestSchema>;
export type ChatMessageInput = z.infer<typeof chatMessageSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
export type AvailabilityInput = z.infer<typeof availabilitySchema>;
export type MentorProfileInput = z.infer<typeof mentorProfileSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;
export type BlogInput = z.infer<typeof blogSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type InquiryReplyInput = z.infer<typeof inquiryReplySchema>;
