-- Creates a least-privilege runtime role for the Supabase pooler connection
-- and restricts access so the app can ONLY read User and CRUD Blog.
--
-- NOTE: Because this project uses the Supabase pooler, the login role must include
-- the project ref suffix when connecting (username like: <role>.<project_ref>),
-- but Postgres will see the base role (<role>) internally.

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'app_runtime') THEN
    -- Set the password before running this script.
    -- Example:
    --   CREATE ROLE app_runtime LOGIN PASSWORD 'REPLACE_ME_STRONG_PASSWORD';
    CREATE ROLE app_runtime LOGIN PASSWORD 'REPLACE_ME_STRONG_PASSWORD';
  END IF;
END
$$;

-- Schema access
GRANT USAGE ON SCHEMA public TO app_runtime;

-- Default: no access
REVOKE ALL ON TABLE "User" FROM app_runtime;
REVOKE ALL ON TABLE "Blog" FROM app_runtime;

-- App needs Blog CRUD (RLS will further restrict)
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE "Blog" TO app_runtime;

-- App needs to read User for credential login
GRANT SELECT ON TABLE "User" TO app_runtime;

-- Remove accidental broad access
REVOKE ALL ON TABLE "User" FROM PUBLIC;
REVOKE ALL ON TABLE "Blog" FROM PUBLIC;
