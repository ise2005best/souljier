"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/app/lib/interfaces/product.interface";
import ProductInformation from "./product-information";
import { InfoPanelProps } from "./product-information";
import CartModal from "@/app/components/cart-modal";

import useEmblaCarousel from "embla-carousel-react";

const ProductDetailPage = ({ product }: Product) => {
  // the selected variant id, is the first variant
  const [selectedVariantId, setselectedVariantId] = useState<string>(product.variants.edges[0].node.id);
  const [openSection, setOpenSection] = useState<string | null>(null);

  
  const images = product?.media?.edges ?? [];
  const variants = product?.variants;
  const price = parseFloat(
    variants.edges[0]?.node?.price.amount ?? "0",
  ).toFixed(2);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    let autoplayInterval: NodeJS.Timeout;

    const startAutoplay = setTimeout(() => {
      autoplayInterval = setInterval(() => emblaApi.scrollNext(), 5000);
    }, 3000);

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      clearTimeout(startAutoplay);
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  }, [emblaApi]);
  const parseMetafield = (value: string | null): string | string[] => {
    if (!value) return "";
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : value;
    } catch {
      return value;
    }
  };


  const sections = [
    {
      id: "details",
      label: "PRODUCT DETAILS",
      content: parseMetafield(product?.metafields[0].value),
    },
    {
      id: "care",
      label: "PRODUCT CARE",
      content: [
        "⁠Do not machine wash",
        "⁠Spot clean gently with a soft damp cloth",
        "⁠⁠Do not wash",
        "⁠⁠Do not bleach",
        "⁠⁠Do not tumble dry",
        "⁠⁠⁠Do not dry clean",
        "⁠Do not iron directly on embroidery or crystals",
        "⁠Store in a cool, dry place to maintain shape and embellishment quality",
      ],
    },
    {
      id: "shipping",
      label: "SHIPPING",
      content:  [
        "UK DOMESTIC ORDERS SHIP WITHIN 3-5 WORKING DAYS",
        "INTERNATIONAL ORDERS 5-15 WORKING DAYS",
        "UNLESS A PRE-ORDER SHIP DATE IS GIVEN",
        "IT'S THE CUSTOMER'S RESPONSIBILITY TO PAY IMPORT TAXES",
        "REGULATIONS FOR IMPORT DUTIES AND TAXES MAY VARY AND WE ARE UNABLE TO CONTROL NOR PREDICT THEIR AMOUNT",
        "IF YOU REFUSE A SHIPMENT FROM US, YOU ARE RESPONSIBLE FOR THE ORIGINAL SHIPPING CHARGES AND THE COURIER COST",
        "PLEASE REFER TO OUR TERMS OF SALE FOR FURTHER INFORMATION",
        "Please note that international shipments may take longer to be delivered due to the customs process in your country"
      ]
    },
  ];

  const sharedProps: InfoPanelProps = {
    product,
    price,
    variants,
    sections,
    selectedVariantId,
    openSection,
    onToggleSection: (id) =>
      setOpenSection((prev) => (prev === id ? null : id)),
  };

  return (
    <div className="bg-white">
      <div></div>
      {/* ── MOBILE only ── */}
      <div className="md:hidden flex flex-col">
        <div
          className="relative overflow-hidden w-full"
          style={{ aspectRatio: "4/5" }}
        >
          <div className="embla h-full w-full" ref={emblaRef}>
            <div className="embla__container flex h-full">
              {images.map((image, index) => (
                <div
                  className="embla__slide flex-[0_0_100%] relative h-full"
                  key={image.node.id ?? index}
                >
                  <Image
                    src={image.node.image?.url ?? "/placeholder.jpg"}
                    alt={`Product image ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-secondary w-8"
                    : "bg-white/75 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="px-5 py-8">
          <ProductInformation {...sharedProps} />
        </div>
      </div>

      {/* ── DESKTOP only ── */}
      <div className="hidden md:flex flex-col">
        <div className="flex items-start">
          <div className="flex-1 min-w-0">
            {images.length > 0 ? (
              images.map(({ node }, index) => (
                <div
                  key={index}
                  className="relative w-full"
                  style={{ aspectRatio: "5/4" }}
                >
                  <Image
                    src={node.image?.url ?? "/placeholder.jpg"}
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="60vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))
            ) : (
              <div className="relative w-full" style={{ aspectRatio: "5/4" }}>
                <Image
                  src="/placeholder.jpg"
                  alt="Product"
                  fill
                  sizes="60vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <div className="w-[2px] bg-secondary self-stretch shrink-0" />

          <div className="w-[40%] shrink-0 sticky top-6 self-start max-h-[calc(100vh-3rem)] overflow-y-auto">
            <div className="p-8 m-4">
              <ProductInformation {...sharedProps} />
            </div>
          </div>
        </div>

        {/* Horizontal bottom line */}
        <div className="h-[2px] bg-secondary w-full" />
      </div>
      <CartModal/>
    </div>
  );
};

export default ProductDetailPage;
