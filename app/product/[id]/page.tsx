import { getAProduct } from "@/app/lib/shopify-queries/getAProduct";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import ProductDetailPage from "./product-client";
import { Product } from "@/app/lib/interfaces/product.interface";
import { getAllShopifyProducts } from "@/app/lib/shopify-queries/getAllProducts";
import YouMayAlsoLike from "./youMayAlsoLike";
export const dynamic = "force-dynamic";
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // read user country from cookies set in middleware
  const cookieStore = await cookies();
  const userLocationId = cookieStore.get("locationId")?.value || "";


  const data: Product | undefined = await getAProduct(
    id,
    userLocationId,
  );
  const allProductsData = await getAllShopifyProducts();
  const product = data?.product;

  const related = allProductsData?.edges.find(({ node }) => node.handle !== id);

  if (!product || !related) {
    notFound();
  }

  return (
    <div className="bg-white">
      <ProductDetailPage product={product} />
      <YouMayAlsoLike products={related}/>
    </div>
  );
}

// Metadata generation for SEO

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const userLocationId = cookieStore.get("locationId")?.value || "";
  const product = await getAProduct(id, userLocationId).then(
    (res) => res?.product,
  );

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} Souljier Store`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.media?.edges[0]?.node?.image?.url],
    },
    alternatives: {
      canonical: `https://souljier.com/product/${id}`,
    }
  };
}
