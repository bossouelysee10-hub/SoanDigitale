/*
# Create quote_requests table (single-tenant, no auth)

## Purpose
Stores quote requests submitted through the public "Demander un devis" form on
the Soan Digitale marketing website. There is no sign-in screen, so the
frontend operates as the anon role and needs write access for new submissions.

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key, auto-generated)
  - `full_name` (text, not null) — the requester's full name
  - `company` (text, nullable) — optional company name
  - `phone` (text, not null) — phone number
  - `email` (text, not null) — email address
  - `country` (text, nullable) — country of residence
  - `service` (text, not null) — the requested service
  - `budget` (text, nullable) — estimated budget range
  - `project_description` (text, not null) — project details
  - `status` (text, not null default 'new') — tracking label (new/answered)
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Row Level Security enabled on `quote_requests`.
- INSERT policy scoped to `anon, authenticated` so the public form can submit.
  No SELECT/UPDATE/DELETE policy for anon — only the service role (server-side)
  can read or manage submissions, keeping visitor quotes private.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text,
  phone text NOT NULL,
  email text NOT NULL,
  country text,
  service text NOT NULL,
  budget text,
  project_description text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote" ON quote_requests;
CREATE POLICY "anon_insert_quote"
  ON quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
