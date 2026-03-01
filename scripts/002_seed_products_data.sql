-- Insert DryOn Sensitive product
INSERT INTO public.products (slug, name, category, image_url, description, benefits, usage, warning, dermatologically_tested, hypoallergenic, no_alcohol)
VALUES (
  'dryon-sensitive',
  'DryOn Sensitive',
  'Antitranspirante',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0EYajlUIKnLV0zSK48H5E03V30IwZb.png',
  'DryOn Sensitive oferece 72 horas de proteção antitranspirante com cuidado extra para peles sensíveis. Sua fórmula hipoalergênica e dermatologicamente testada garante conforto durante todo o dia.',
  ARRAY['72h de proteção', 'Hipoalergênico', 'Sem álcool', 'Dermatologicamente testado'],
  'Agite antes de usar. Aplique nas axilas limpas e secas.',
  'Evite o contato com os olhos. Em caso de irritação, suspenda o uso.',
  true,
  true,
  true
) ON CONFLICT (slug) DO NOTHING;

-- Get the product ID
DO $$
DECLARE
  sensitive_id UUID;
BEGIN
  SELECT id INTO sensitive_id FROM public.products WHERE slug = 'dryon-sensitive';
  
  -- Insert ingredients for DryOn Sensitive
  INSERT INTO public.ingredients (product_id, name, description, icon_url)
  VALUES
    (sensitive_id, 'Vitamina E', 'Antioxidante que protege a pele', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vitaminaE2-oyHnx7VVE2LjjQn2FzNLyIJKXZrHAH.svg'),
    (sensitive_id, '0% Álcool', 'Fórmula suave sem álcool', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alcool-ejIlHZNBOHGY6yNjGKczaEgxKVb0Dd.svg')
  ON CONFLICT DO NOTHING;
  
  -- Insert claimings for DryOn Sensitive
  INSERT INTO public.claimings (product_id, icon_url, alt)
  VALUES
    (sensitive_id, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clam11-vCWqmOm6TQWtDxQq1vfAFz0WtC8jDB.svg', 'Sem Mancha Branca'),
    (sensitive_id, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claim12-ybKyJwMEAHtB44VO7e2JRJjy94J8KQ.svg', 'Dermatologicamente Testado')
  ON CONFLICT DO NOTHING;
END $$;

-- Insert DryOn Soft Care product
INSERT INTO public.products (slug, name, category, image_url, description, benefits, usage, warning, dermatologically_tested, hypoallergenic, no_alcohol)
VALUES (
  'dryon-soft-care',
  'DryOn Soft Care',
  'Antitranspirante',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cCEfhIPDVgdVkF4FgcNAOPfLbhZIvf.png',
  'DryOn Soft Care proporciona 72 horas de proteção com toque suave e hidratação avançada.',
  ARRAY['72h de proteção', 'Hidratação avançada', '0% Álcool', 'Enriquecido com Vitamina E'],
  'Agite antes de usar. Aplique nas axilas limpas e secas.',
  'Evite o contato com os olhos. Em caso de irritação, suspenda o uso.',
  true,
  false,
  true
) ON CONFLICT (slug) DO NOTHING;

DO $$
DECLARE
  softcare_id UUID;
BEGIN
  SELECT id INTO softcare_id FROM public.products WHERE slug = 'dryon-soft-care';
  
  INSERT INTO public.ingredients (product_id, name, description, icon_url)
  VALUES
    (softcare_id, 'Vitamina E', 'Antioxidante que protege a pele', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vitaminaE2-oyHnx7VVE2LjjQn2FzNLyIJKXZrHAH.svg'),
    (softcare_id, '0% Álcool', 'Fórmula suave sem álcool', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alcool-ejIlHZNBOHGY6yNjGKczaEgxKVb0Dd.svg')
  ON CONFLICT DO NOTHING;
  
  INSERT INTO public.claimings (product_id, icon_url, alt)
  VALUES
    (softcare_id, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clam11-vCWqmOm6TQWtDxQq1vfAFz0WtC8jDB.svg', 'Sem Mancha Branca'),
    (softcare_id, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claim12-ybKyJwMEAHtB44VO7e2JRJjy94J8KQ.svg', 'Dermatologicamente Testado')
  ON CONFLICT DO NOTHING;
END $$;

-- Insert DryOn Pink Powder product
INSERT INTO public.products (slug, name, category, image_url, description, benefits, usage, warning, dermatologically_tested, hypoallergenic, no_alcohol)
VALUES (
  'dryon-pink-powder',
  'DryOn Pink Powder',
  'Antitranspirante',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pAJVRiqCq9Zxz9VkdH3gNQMWySlh9i.png',
  'DryOn Pink Powder oferece 72 horas de proteção com fragrância delicada e toque aveludado.',
  ARRAY['72h de proteção', 'Fragrância delicada', 'Toque aveludado', 'Dermatologicamente testado'],
  'Agite antes de usar. Aplique nas axilas limpas e secas.',
  'Evite o contato com os olhos. Em caso de irritação, suspenda o uso.',
  true,
  false,
  false
) ON CONFLICT (slug) DO NOTHING;

DO $$
DECLARE
  pinkpowder_id UUID;
BEGIN
  SELECT id INTO pinkpowder_id FROM public.products WHERE slug = 'dryon-pink-powder';
  
  INSERT INTO public.claimings (product_id, icon_url, alt)
  VALUES
    (pinkpowder_id, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clam11-vCWqmOm6TQWtDxQq1vfAFz0WtC8jDB.svg', 'Sem Mancha Branca'),
    (pinkpowder_id, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claim12-ybKyJwMEAHtB44VO7e2JRJjy94J8KQ.svg', 'Dermatologicamente Testado')
  ON CONFLICT DO NOTHING;
END $$;

-- Insert remaining products with basic data
INSERT INTO public.products (slug, name, category, image_url, description, benefits, usage, dermatologically_tested)
VALUES
  ('dryon-golden', 'DryOn Golden', 'Antitranspirante', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VXA9sQZRi0VVcIMT4D8iI1qCXu7XWO.png', 'Proteção premium com fragrância sofisticada.', ARRAY['72h de proteção', 'Fragrância premium'], 'Agite antes de usar. Aplique nas axilas limpas e secas.', true),
  ('dryon-men-flow', 'DryOn Men Flow', 'Masculino', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tFOAOOHjkCo4vPHcv6Sz2Ml7QIfpOz.png', 'Proteção masculina de longa duração.', ARRAY['72h de proteção', 'Fragrância masculina'], 'Agite antes de usar. Aplique nas axilas limpas e secas.', true)
ON CONFLICT (slug) DO NOTHING;
