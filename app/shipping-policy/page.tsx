import Link from "next/link";

const sections = [
  {
    id: "order-processing",
    title: "Order Processing",
    content: [
      {
        heading: "Processing Times",
        body: "UK domestic orders ship within 3–5 working days unless a pre-order shipping date is specified.",
      },
    ],
  },
  {
    id: "uk-shipping",
    title: "UK Shipping",
    content: [
      {
        heading: "Domestic Delivery",
        body: "Domestic deliveries typically arrive within 3–5 working days after dispatch.",
      },
    ],
  },
  {
    id: "international-shipping",
    title: "International Shipping",
    content: [
      {
        heading: "Delivery Times",
        body: "International orders typically arrive within 5–15 working days. Delivery times may vary depending on customs processing in the destination country.",
      },
      {
        heading: "Import Duties",
        body: "Customers are responsible for import duties, customs fees, and taxes. Regulations vary by country and Souljier cannot control these charges.",
      },
    ],
  },
  {
    id: "refused-shipments",
    title: "Refused Shipments",
    content: [
      {
        heading: "Customer Responsibility",
        body: null,
        list: ["The original shipping cost", "Return courier charges"],
        listPrefix: "If a shipment is refused by the customer, the customer is responsible for:",
        listNote: "These costs may be deducted from refunds.",
      },
    ],
  },
  {
    id: "shipping-delays",
    title: "Shipping Delays",
    content: [
      {
        heading: "International Delays",
        body: "International shipments may experience delays due to customs procedures. Souljier is not responsible for delays outside our control.",
      },
    ],
  },
];

const navLinks = [
  { href: "#order-processing", label: "Order Processing" },
  { href: "#uk-shipping", label: "UK Shipping" },
  { href: "#international-shipping", label: "International Shipping" },
  { href: "#refused-shipments", label: "Refused Shipments" },
  { href: "#shipping-delays", label: "Shipping Delays" },
];

interface SectionContent {
  heading: string;
  body?: string | null;
  list?: string[];
  listPrefix?: string;
  listNote?: string;
}

const ContentBlock = ({ item }: { item: SectionContent }) => (
  <div className="mb-6">
    <h3 className="font-primary font-bold text-black text-sm md:text-base uppercase tracking-widest mb-2">
      {item.heading}
    </h3>
    {item.listPrefix && (
      <p className="text-gray-600 text-sm mb-2 font-primary">{item.listPrefix}</p>
    )}
    {item.list && (
      <ul className="list-disc list-inside space-y-1 mb-2">
        {item.list.map((li, i) => (
          <li key={i} className="text-gray-600 text-sm font-primary">
            {li}
          </li>
        ))}
      </ul>
    )}
    {item.body && (
      <p className="text-gray-600 text-sm font-primary leading-relaxed">{item.body}</p>
    )}
    {item.listNote && (
      <p className="text-gray-500 text-xs font-primary mt-2 italic">{item.listNote}</p>
    )}
  </div>
);

const ShippingPolicyPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="border-b-2 border-secondary px-6 md:px-16 py-10">
        <p className="font-primary text-xs text-gray-400 uppercase tracking-widest mb-2">
          Legal
        </p>
        <h1 className="font-primary font-black text-2xl md:text-4xl text-black uppercase tracking-wide">
          Shipping Policy
        </h1>
        <p className="font-primary text-sm text-gray-500 mt-2">
          Last updated: 9th of March 2026
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sticky sidebar nav — desktop */}
        <aside className="md:w-56 shrink-0 md:sticky md:top-0 md:self-start md:h-screen md:overflow-y-auto border-r border-secondary/20 px-6 py-8 hidden md:block">
          <p className="font-primary text-[10px] uppercase tracking-widest text-gray-400 mb-4">
            Jump to
          </p>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-primary text-xs text-gray-500 hover:text-secondary transition-colors duration-150 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </aside>

        {/* Mobile nav */}
        <div className="md:hidden px-6 py-4 border-b border-secondary/20 overflow-x-auto">
          <div className="flex gap-4 w-max">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-primary text-[10px] text-gray-500 hover:text-secondary transition-colors uppercase tracking-wide whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 px-6 md:px-16 py-10">
          {sections.map((section, i) => (
            <div
              key={section.id}
              id={section.id}
              className={`pb-12 ${i !== sections.length - 1 ? "border-b-2 border-secondary/20 mb-12" : ""}`}
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-1">
                <h2 className="font-primary font-black text-xl md:text-2xl text-black uppercase tracking-wide">
                  {section.title}
                </h2>
              </div>

              <div className="border-l-2 border-secondary pl-6">
                {section.content.map((item, j) => (
                  <ContentBlock key={j} item={item} />
                ))}
              </div>
            </div>
          ))}

          {/* Bottom nav */}
          <div className="border-t-2 border-secondary pt-8 mt-4">
            <p className="font-primary text-xs text-gray-400 mb-4 uppercase tracking-widest">
              More from Souljier
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="font-primary text-xs text-secondary hover:underline uppercase tracking-wide"
              >
                Back to Store
              </Link>
              <Link
                href="/terms-of-sale"
                className="font-primary text-xs text-secondary hover:underline uppercase tracking-wide"
              >
                Terms of Sale
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;