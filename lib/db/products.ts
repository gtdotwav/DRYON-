import { createClient } from "@/lib/supabase/server"

export type Product = {
  id: string
  slug: string
  name: string
  category: string
  image_url: string
  description: string
  benefits: string[]
  usage: string
  warning?: string
  dermatologically_tested: boolean
  hypoallergenic: boolean
  no_alcohol: boolean
  created_at: string
  updated_at: string
}

export type Ingredient = {
  id: string
  product_id: string
  name: string
  description: string
  icon_url: string
  created_at: string
}

export type Claiming = {
  id: string
  product_id: string
  icon_url: string
  alt: string
  created_at: string
}

export type ProductWithDetails = Product & {
  ingredients: Ingredient[]
  claimings: Claiming[]
}

export async function getAllProducts(): Promise<ProductWithDetails[]> {
  const supabase = await createClient()

  const { data: products, error: productsError } = await supabase.from("products").select("*").order("name")

  if (productsError) {
    console.error("[v0] Error fetching products:", productsError)
    return []
  }

  // Fetch related data for all products
  const productsWithDetails = await Promise.all(
    (products || []).map(async (product) => {
      const [{ data: ingredients }, { data: claimings }] = await Promise.all([
        supabase.from("ingredients").select("*").eq("product_id", product.id).order("created_at"),
        supabase.from("claimings").select("*").eq("product_id", product.id).order("created_at"),
      ])

      return {
        ...product,
        ingredients: ingredients || [],
        claimings: claimings || [],
      }
    }),
  )

  return productsWithDetails
}

export async function getProductBySlug(slug: string): Promise<ProductWithDetails | null> {
  const supabase = await createClient()

  const { data: product, error: productError } = await supabase.from("products").select("*").eq("slug", slug).single()

  if (productError || !product) {
    console.error("[v0] Error fetching product:", productError)
    return null
  }

  const [{ data: ingredients }, { data: claimings }] = await Promise.all([
    supabase.from("ingredients").select("*").eq("product_id", product.id).order("created_at"),
    supabase.from("claimings").select("*").eq("product_id", product.id).order("created_at"),
  ])

  return {
    ...product,
    ingredients: ingredients || [],
    claimings: claimings || [],
  }
}
