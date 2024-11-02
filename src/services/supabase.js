import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sbjzwxgkhobybufulssx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNianp3eGdraG9ieWJ1ZnVsc3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4ODM1NjYsImV4cCI6MjA0NTQ1OTU2Nn0.8HH6NyUFzjD9hP9hd5fdVKNL3763WLp7ANeIHVjHY8o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
