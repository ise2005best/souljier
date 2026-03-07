"use client"

import { useState } from "react"
import Image from "next/image"
import { Product } from "@/app/lib/interfaces/product.interface"
import { FaAngleDown } from "react-icons/fa"

const ProductDetailPage = ({ product }: Product) => {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
  const [openSection, setOpenSection] = useState<string | null>(null)

  const images = product?.media?.edges ?? []
  const variants = product?.variants?.edges ?? []
  const price = parseFloat(variants[0]?.node?.price ?? "0").toFixed(2)

  const sections = [
    {
      id: "details",
      label: "PRODUCT DETAILS",
      content: product?.description ?? "No details available.",
    },
    {
      id: "care",
      label: "PRODUCT CARE",
      content: "Dry clean or hand wash in cold water. Do not tumble dry. Iron on low heat.",
    },
    {
      id: "shipping",
      label: "SHIPPING",
      content: "Standard delivery 3–5 business days. Express delivery available at checkout.",
    },
  ]

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id))
  }

  return (
    <div className="flex flex-col md:flex-row bg-white items-start">

      {/* LEFT — Scrolling Image Stack */}
      <div className="flex-1 min-w-0">
        {images.length > 0 ? (
          images.map(({ node }, index) => (
            <div key={node.image?.url ?? index} className="relative w-full aspect-5/4">
              <Image
                src={node.image?.url ?? "/placeholder.jpg"}
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))
        ) : (
          <div className="relative w-full aspect-5/4">
            <Image
              src="/placeholder.jpg"
              alt="Product"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* DIVIDER */}
      <div className="hidden md:block w-[2px] bg-secondary self-stretch shrink-0" />

      {/* RIGHT — Sticky Info Panel */}
      <div className="w-full md:w-[40%] shrink-0 md:sticky md:top-0 md:h-screen">
        <div className="h-full flex items-start justify-center overflow-y-auto px-6 md:px-10 py-12 md:py-16 bg-white">
          <div className="w-full max-w-md font-primary text-center">

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-black text-black tracking-wide leading-snug mb-4">
              {product?.title}
            </h1>

            {/* Price */}
            <p className="text-lg md:text-xl font-black text-black mb-3 tracking-wide">
              £{price}
            </p>

            <p className="text-base md:text-lg font-semibold text-black mb-10 tracking-wide">
              {product?.description}
            </p>

            {/* Variants */}
            {variants.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-7">
                {variants.map(({ node }) => (
                  <button
                    key={node.id}
                    onClick={() => setSelectedVariant(node.id)}
                    className={[
                      "px-16 py-3 border font-primary text-xs rounded-md uppercase transition-all duration-150",
                      selectedVariant === node.id
                        ? "bg-[#1a1108] text-white border-[#1a1108]"
                        : "bg-black text-white hover:bg-white hover:border-[#1a1108] hover:text-black",
                    ].join(" ")}
                  >
                    {node.title}
                  </button>
                ))}
              </div>
            )}

            {/* Add to Bag */}
            <button className="w-full py-3 bg-black rounded-md text-white text-sm font-primary font-semibold uppercase mb-9 hover:bg-secondary transition-colors duration-200">
              ADD TO BAG
            </button>

            {/* Accordion */}
            <div className="border-t-2 mt-20 border-secondary font-primary">
              {sections.map((section) => (
                <div key={section.id} className="border-b-2 border-secondary">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex justify-between items-center py-3 text-md text-[#1a1108] font-medium uppercase"
                  >
                    <span>{section.label}</span>
                    <FaAngleDown
                      className={`w-4 h-4 text-secondary transition-transform duration-200 ${
                        openSection === section.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSection === section.id && (
                    <p className="pb-5 text-[13px] text-gray-500 leading-relaxed tracking-wide">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetailPage