import { PRODUCTS } from "@/data/products";
import { PackageSearch } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — INAL Electric`,
    description: `${product.name} — ${product.category}. Pogledajte specifikacije i zatražite ponudu.`,
  };
}

export default function ProductDetailPage({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <main className="bg-light">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-wrap items-center gap-1.5 text-[12.5px] sm:text-[13px] text-[#5C6B76] mb-6 sm:mb-8">
          <Link href="/shop">Shop</Link>
          <ChevronRight size={14} />
          <Link href={`/shop?kategorija=${encodeURIComponent(product.category)}`}>
            {product.category}
          </Link>
          <ChevronRight size={14} />
          <span className="text-text-dark line-clamp-1">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white border border-[#E4E8EA] rounded-2xl h-[280px] sm:h-[340px] relative flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain p-8"
              />
            ) : (
              <>
                <div className="absolute inset-0 blueprint-grid opacity-10 rounded-2xl" />
                <PackageSearch size={64} className="relative text-instrument" />
              </>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono-data text-[12px] text-[#8C9BA6]">{product.sku}</span>
              {product.brand && (
                <span className="text-[11px] font-semibold text-steel bg-[#EEF0F1] px-2 py-0.5 rounded">
                  {product.brand}
                </span>
              )}
            </div>
            <div className="text-[12px] text-accent-dim font-semibold uppercase tracking-wide mb-3">
              {product.category}
            </div>
            <h1 className="font-display text-[22px] sm:text-[28px] font-bold mb-6 leading-snug">
              {product.name}
            </h1>

            <div className="flex items-center gap-5 mb-7">
              {product.quote ? (
                <span className="text-lg text-[#5C6B76]">Cijena na upit</span>
              ) : (
                <span className="font-display text-[26px] sm:text-[28px] font-bold">{product.price} KM</span>
              )}
            </div>

            <AddToCartButton product={product} />

            {product.specs && product.specs.length > 0 && (
              <div className="mt-10 border-t border-[#E4E8EA] pt-7">
                <div className="font-display font-semibold text-[15px] mb-4">
                  Tehničke specifikacije
                </div>
                <div className="space-y-0">
                  {product.specs.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-4 py-3 border-b border-[#EEF1F2] text-[13.5px]"
                    >
                      <span className="text-[#5C6B76]">{label}</span>
                      <span className="font-mono-data font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
