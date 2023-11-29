import { createClient } from '@supabase/supabase-js'
const publicKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFibXRhaW9jcmJhbWlhbGptaHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzNjkwNjQsImV4cCI6MjAxNTk0NTA2NH0.4gWpW08byBqCnvceKYDEL4kISNATD_54Mz3VSh_hvas'
// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://qbmtaiocrbamialjmhxc.supabase.co',
  process.env.SUPABASEKEY == null ? publicKey : process.env.SUPABASEKEY
)

export default supabase
