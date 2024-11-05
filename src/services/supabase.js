const supabase_url = 'https://zkednmbvbromevbvfjks.supabase.co';

const supabase_api_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprZWRubWJ2YnJvbWV2YnZmamtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0MTMwNTksImV4cCI6MjA0NTk4OTA1OX0.Tzp25OL4Yad57OWY6YLFZsigGC1Q5WIsscD8F2vh858';


import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabase_url, supabase_api_key);

export default supabase