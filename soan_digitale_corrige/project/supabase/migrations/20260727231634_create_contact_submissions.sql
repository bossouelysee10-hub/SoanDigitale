/*
# Create contact_submissions table (single-tenant, no auth)

## Purpose
Stores messages submitted through the public contact form on the Soan Digitale
marketing website. There is no sign-in screen, so the frontend operates as the
anon role and needs write access for new submissions.

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — the sender's full name
  - `email` (text, not null) — the sender's email address
  - `company` (text, nullable) — optional company name
  - `budget` (text, nullable) — optional selected budget range
  - `message` (text, not null) — the message body
  - `status` (text, not null default 'new') — tracking label (new/read/answered)
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Row Level Security enabled on `contact_submissions`.
- INSERT policy scoped to `anon, authenticated` so the public form can submit.
  No SELECT/UPDATE/DELETE policy for anon — only the service role (server-side)
  can read or manage submissions, keeping visitor messages private.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  budget text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
