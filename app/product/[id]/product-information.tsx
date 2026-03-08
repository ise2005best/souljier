import { ProductInfo, Variant } from "@/app/lib/interfaces/product.interface";
import { FaAngleDown } from "react-icons/fa";

export interface InfoPanelProps {
  product: ProductInfo;
  price: string;
  variants: Variant;
  sections: { id: string; label: string; content: string| string[] }[];
  selectedVariant: string | null;
  openSection: string | null;
  onSelectVariant: (id: string) => void;
  onToggleSection: (id: string) => void;
}

const ProductInformation = ({
  product,
  price,
  variants,
  sections,
  selectedVariant,
  openSection,
  onSelectVariant,
  onToggleSection,
}: InfoPanelProps) => (
  <div className="w-full font-primary text-center">
    <h1 className="text-lg md:text-2xl font-black text-black tracking-wide leading-snug md:mb-4 mb-2">
      {product?.title}
    </h1>

    <p className="text-base md:text-xl font-black text-black mb-3 tracking-wide">
      £{price}
    </p>

    <p className="text-xs md:text-base font-semibold text-black md:mb-8 mb-3 tracking-wide">
      {product?.description}
    </p>

    {variants.edges.length > 0 && (
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {variants.edges.map(({ node }) => (
          <button
            key={node.id}
            onClick={() => onSelectVariant(node.id)}
            className={[
              "px-10 py-3 border font-primary text-xs rounded-md uppercase transition-all duration-150",
              selectedVariant === node.id
                ? "bg-[#1a1108] text-white border-[#1a1108]"
                : "bg-white border-[#1a1108] text-black",
            ].join(" ")}
          >
            {node.title}
          </button>
        ))}
      </div>
    )}

    <button className="w-full py-3 bg-black rounded-md text-white md:text-sm text-xs font-primary font-semibold uppercase md:mb-8 mb-4 hover:bg-secondary transition-colors duration-200">
      ADD TO BAG
    </button>

    <div className="border-t-2 border-secondary">
      {sections.map((section) => (
        <div key={section.id} className="border-b-2 border-secondary">
          <button
            onClick={() => onToggleSection(section.id)}
            className="w-full flex justify-between items-center py-3 text-sm text-[#1a1108] font-medium uppercase"
          >
            <span>{section.label}</span>
            <FaAngleDown
              className={`w-4 h-4 text-secondary transition-transform duration-200 ${
                openSection === section.id ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSection === section.id && (
            <div className="pb-5 text-[13px] text-gray-500 leading-relaxed tracking-wide text-left">
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-1">
                  {section.content.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ProductInformation;
