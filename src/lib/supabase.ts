import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseInstance: SupabaseClient | null = null;

export const getSupabase = () => {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a proxy or handle this in the UI. 
    // For now, we'll throw a descriptive error that can be caught.
    throw new Error('Supabase URL and Anon Key are required. Please configure them in the Settings menu.');
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
};

// Export a dummy for types if needed, but we'll use getSupabase() everywhere
export const supabase = {} as SupabaseClient; 
