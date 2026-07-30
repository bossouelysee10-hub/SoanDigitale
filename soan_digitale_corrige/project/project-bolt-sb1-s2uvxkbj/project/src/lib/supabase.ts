import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type QuoteRequest = {
  id: string;
  full_name: string;
  company?: string | null;
  phone: string;
  email: string;
  country?: string | null;
  service: string;
  budget?: string | null;
  project_description: string;
  status: string;
  created_at: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company?: string | null;
  service?: string | null;
  country?: string | null;
  message: string;
  status: string;
  created_at: string;
};
