import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for the entire app
export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and anon key must be defined');
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Helper to check if user is authenticated
export async function isAuthenticated() {
  const supabase = getSupabaseClient();
  const { data } = await supabase.auth.getSession();
  return !!data.session;
}