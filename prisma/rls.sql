-- Blog RLS + privilege hardening
--
-- IMPORTANT:
-- RLS only protects you if your app connects with a non-owner, non-superuser DB role.
-- If you connect as the table owner (often "postgres"), RLS is bypassed unless you FORCE it.
-- Recommended: create a dedicated runtime role and use it via DATABASE_URL_APP.

-- 1) Enable RLS on Blog
ALTER TABLE "Blog" ENABLE ROW LEVEL SECURITY;

-- Lock down User table: runtime role can read only the single admin user.
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;

-- Optional (stricter): uncomment to force RLS even for table owner.
-- WARNING: this can break seed/migrations/admin scripts if they don't set context.
-- ALTER TABLE "Blog" FORCE ROW LEVEL SECURITY;

-- 2) Policies
-- Public can read published posts
DROP POLICY IF EXISTS blog_select_published ON "Blog";
CREATE POLICY blog_select_published
  ON "Blog"
  FOR SELECT
  USING (published = true);

-- Authenticated/admin context can read everything (set by app code via set_config)
DROP POLICY IF EXISTS blog_select_admin ON "Blog";
CREATE POLICY blog_select_admin
  ON "Blog"
  FOR SELECT
  USING (
    current_setting('app.role', true) = 'ADMIN'
    AND current_setting('app.user_email', true) = 'admin@lakhotiaeyecentre.com'
  );

-- Only authenticated users can insert (authorId must match current user)
DROP POLICY IF EXISTS blog_insert_author ON "Blog";
CREATE POLICY blog_insert_author
  ON "Blog"
  FOR INSERT
  WITH CHECK (
    current_setting('app.user_id', true) IS NOT NULL
    AND current_setting('app.role', true) = 'ADMIN'
    AND current_setting('app.user_email', true) = 'admin@lakhotiaeyecentre.com'
    AND "Blog"."authorId" = current_setting('app.user_id', true)
  );

-- Only author (or admin) can update
DROP POLICY IF EXISTS blog_update_author ON "Blog";
CREATE POLICY blog_update_author
  ON "Blog"
  FOR UPDATE
  USING (
    current_setting('app.user_id', true) IS NOT NULL
    AND current_setting('app.role', true) = 'ADMIN'
    AND current_setting('app.user_email', true) = 'admin@lakhotiaeyecentre.com'
    AND "Blog"."authorId" = current_setting('app.user_id', true)
  )
  WITH CHECK (
    current_setting('app.user_id', true) IS NOT NULL
    AND current_setting('app.role', true) = 'ADMIN'
    AND current_setting('app.user_email', true) = 'admin@lakhotiaeyecentre.com'
    AND "Blog"."authorId" = current_setting('app.user_id', true)
  );

-- Only author (or admin) can delete
DROP POLICY IF EXISTS blog_delete_author ON "Blog";
CREATE POLICY blog_delete_author
  ON "Blog"
  FOR DELETE
  USING (
    current_setting('app.user_id', true) IS NOT NULL
    AND current_setting('app.role', true) = 'ADMIN'
    AND current_setting('app.user_email', true) = 'admin@lakhotiaeyecentre.com'
    AND "Blog"."authorId" = current_setting('app.user_id', true)
  );

-- User: only allow the single admin email to be selected (used during credential login)
DROP POLICY IF EXISTS user_select_admin_only ON "User";
CREATE POLICY user_select_admin_only
  ON "User"
  FOR SELECT
  USING (
    email = 'admin@lakhotiaeyecentre.com'
    AND current_setting('app.user_email', true) = 'admin@lakhotiaeyecentre.com'
  );

-- 3) Privilege hardening (optional but recommended)
--
-- Create a dedicated runtime role (run once, choose a strong password)
-- CREATE ROLE app_runtime LOGIN PASSWORD 'REPLACE_ME_STRONG_PASSWORD';
-- GRANT CONNECT ON DATABASE postgres TO app_runtime;
-- GRANT USAGE ON SCHEMA public TO app_runtime;
--
-- Allow runtime role to work with Blog (RLS will still apply)
-- GRANT SELECT, INSERT, UPDATE, DELETE ON "Blog" TO app_runtime;
--
-- Protect User table: runtime can only read
-- REVOKE ALL ON "User" FROM app_runtime;
-- GRANT SELECT ON "User" TO app_runtime;
--
-- Also remove accidental broad access
-- REVOKE ALL ON "User" FROM PUBLIC;
-- REVOKE ALL ON "Blog" FROM PUBLIC;
