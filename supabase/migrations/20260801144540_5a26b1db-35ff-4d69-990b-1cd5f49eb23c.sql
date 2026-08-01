DROP POLICY "Authenticated users can insert posts" ON public.posts;
DROP POLICY "Authenticated users can update posts" ON public.posts;
DROP POLICY "Authenticated users can delete posts" ON public.posts;
REVOKE INSERT, UPDATE, DELETE ON public.posts FROM authenticated;