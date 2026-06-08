const SUPABASE_URL =
"https://euyjsoduzlnwrxjppwdn.supabase.co";

const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1eWpzb2R1emxud3J4anBwd2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3ODM4MTcsImV4cCI6MjA5NjM1OTgxN30.l9jIdObtyVgux7HaNT9U6HWYJd-fm50Wms8UDFFIP7Q";

const supabaseClient =
window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase conectado");