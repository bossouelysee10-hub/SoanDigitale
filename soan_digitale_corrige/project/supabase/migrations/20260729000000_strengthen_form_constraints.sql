-- Renforcement des contraintes des formulaires publics.
-- Cette migration complète les tables existantes sans modifier les politiques RLS.

ALTER TABLE IF EXISTS public.contact_submissions
  DROP CONSTRAINT IF EXISTS contact_name_length,
  DROP CONSTRAINT IF EXISTS contact_message_length,
  DROP CONSTRAINT IF EXISTS contact_status_valid;

ALTER TABLE IF EXISTS public.contact_submissions
  ADD CONSTRAINT contact_name_length
    CHECK (char_length(trim(name)) BETWEEN 2 AND 100),
  ADD CONSTRAINT contact_message_length
    CHECK (char_length(trim(message)) BETWEEN 5 AND 5000),
  ADD CONSTRAINT contact_status_valid
    CHECK (status IN ('new', 'read', 'answered'));

ALTER TABLE IF EXISTS public.quote_requests
  DROP CONSTRAINT IF EXISTS quote_full_name_length,
  DROP CONSTRAINT IF EXISTS quote_description_length,
  DROP CONSTRAINT IF EXISTS quote_status_valid;

ALTER TABLE IF EXISTS public.quote_requests
  ADD CONSTRAINT quote_full_name_length
    CHECK (char_length(trim(full_name)) BETWEEN 2 AND 100),
  ADD CONSTRAINT quote_description_length
    CHECK (char_length(trim(project_description)) BETWEEN 10 AND 5000),
  ADD CONSTRAINT quote_status_valid
    CHECK (status IN ('new', 'answered'));
