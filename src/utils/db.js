import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_DB_URL;
const supabaseKey = import.meta.env.VITE_DB_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
