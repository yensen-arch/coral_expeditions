// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mgnukohpqhojqatjoftn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbnVrb2hwcWhvanFhdGpvZnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1OTU4MzUsImV4cCI6MjA2MjE3MTgzNX0.Q8sGjEuOK1YiSSH2BnMJ4LG2hVNSPimU5XtUecd3Jf8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);