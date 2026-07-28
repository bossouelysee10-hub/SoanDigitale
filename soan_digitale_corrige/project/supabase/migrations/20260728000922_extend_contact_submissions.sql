/*
# Extend contact_submissions with quote-oriented fields

## Purpose
The Soan Digitale contact form now collects company name, service sought and
country alongside the existing fields. This migration adds those columns to
the existing `contact_submissions` table without touching existing rows.

1. Modified Tables
- `contact_submissions`
  - `company` (text, nullable) — already exists, left untouched
  - `service` (text, nullable) — NEW, the service the visitor is interested in
  - `country` (text, nullable) — NEW, the visitor's country

2. Security
- No policy changes. The existing anon INSERT policy already allows inserts;
  adding nullable columns does not require new policies.
*/

ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS service text,
  ADD COLUMN IF NOT EXISTS country text;
