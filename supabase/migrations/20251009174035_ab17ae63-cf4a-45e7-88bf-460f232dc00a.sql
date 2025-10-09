-- Remove the overly permissive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;

-- Contact submissions should only be accessible via service role (admin dashboard)
-- No SELECT policy means regular users cannot read submissions