import Link from "next/link";

const sections = [
  {
    id: "terms-of-sale",
    title: "Terms of Sale",
    content: [
      {
        heading: "1. Company Information",
        body: 'The Website is operated by Souljier. References to "we", "our", and "us" refer to Souljier.',
      },
      {
        heading: "2. Order Acceptance",
        body: "Orders placed through the Website are subject to acceptance by Souljier. A contract is formed only when we send confirmation that your order has been accepted. We reserve the right to cancel orders prior to dispatch.",
      },
      {
        heading: "3. Pricing",
        body: "Prices are displayed in GBP (£) unless otherwise stated. Souljier reserves the right to adjust prices at any time before purchase. If pricing errors occur we may cancel affected orders and issue a refund.",
      },
      {
        heading: "4. Payment",
        body: "Payment is taken at the time of checkout. Ownership of products transfers once payment has been received in full. Orders suspected of fraudulent activity may be cancelled.",
      },
      {
        heading: "5. Product Availability",
        body: "Products may be produced in limited quantities. Souljier reserves the right to discontinue or withdraw products at any time.",
      },
      {
        heading: "6. Import Duties",
        body: "Customers ordering outside the UK may be required to pay import duties or taxes. These charges are the responsibility of the customer.",
      },
      {
        heading: "7. Delivery",
        body: "Delivery timelines are estimates and may vary due to courier services or customs procedures. Souljier is not responsible for delays outside our control.",
      },
      {
        heading: "8. Limitation of Liability",
        body: "To the fullest extent permitted by law, Souljier shall not be liable for indirect losses including loss of profits or business opportunities. Our liability shall not exceed the purchase price of the product.",
      },
      {
        heading: "9. Governing Law",
        body: "These Terms are governed by the laws of England and Wales.",
      },
    ],
  },
  {
    id: "terms-of-service",
    title: "Terms of Service",
    updated: "9th of March 2026",
    content: [
      {
        heading: "Acceptable Use",
        body: null,
        list: [
          "Use automated purchasing tools or bots",
          "Scrape or reproduce Website content",
          "Attempt to disrupt Website functionality",
          "Submit false information",
        ],
        listPrefix: "Users may not:",
        listNote: "Violation may result in restriction or termination of access.",
      },
      {
        heading: "Intellectual Property",
        body: "All content displayed on the Website including product designs, images, graphics, text, and logos are the exclusive property of Souljier. These materials are protected by copyright and trademark laws. No content may be reproduced or distributed without written permission.",
      },
      {
        heading: "Website Availability",
        body: "Souljier does not guarantee uninterrupted access to the Website. We reserve the right to modify or suspend Website functionality at any time.",
      },
      {
        heading: "Liability",
        body: "Use of the Website is at your own risk. Souljier shall not be liable for damages arising from Website use.",
      },
    ],
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    updated: "9th of March 2026",
    content: [
      {
        heading: "Information We Collect",
        body: null,
        list: ["Name", "Email address", "Billing and shipping address", "Payment information", "IP address", "Browsing behaviour"],
      },
      {
        heading: "How We Use Data",
        body: null,
        list: ["Process orders", "Provide customer support", "Detect fraud", "Improve Website functionality", "Comply with legal obligations"],
        listPrefix: "Personal data may be used to:",
      },
      {
        heading: "Legal Basis for Processing",
        body: null,
        list: ["Contractual necessity", "Legitimate business interests", "Legal compliance", "Customer consent"],
        listPrefix: "Data is processed on the basis of:",
      },
      {
        heading: "Data Security",
        body: "Souljier uses secure systems and payment processors to protect personal information.",
      },
      {
        heading: "Customer Rights",
        body: null,
        list: ["Access your personal data", "Request corrections", "Request deletion", "Withdraw consent"],
        listPrefix: "Under GDPR you have the right to:",
        listNote: "Requests may be submitted via our customer support contact.",
      },
      {
        heading: "Data Retention",
        body: "Personal data will be retained only for as long as necessary for legal and operational purposes.",
      },
    ],
  },
  {
    id: "refund-policy",
    title: "Refund Policy",
    updated: "9th of March 2026",
    content: [
      {
        heading: "Return Window",
        body: "Returns must be requested within 14 days of delivery.",
      },
      {
        heading: "Return Conditions",
        body: null,
        list: ["Unworn", "Unused", "In original packaging", "With tags attached"],
        listPrefix: "Items must be returned:",
      },
      {
        heading: "Non-Returnable Items",
        body: null,
        list: ["Customised items", "Limited releases", "Final sale products", "Gift cards"],
        listPrefix: "The following items are not eligible for return:",
      },
      {
        heading: "Refund Processing",
        body: "Refunds will be processed within 14 days after returned items are received and inspected. Refunds will be issued to the original payment method.",
      },
      {
        heading: "Return Shipping",
        body: "Return shipping costs are the responsibility of the customer unless the product is faulty.",
      },
    ],
  },
  {
    id: "anti-bot-policy",
    title: "Anti-Bot & Product Drop Policy",
    updated: "9th of March 2026",
    content: [
      {
        heading: "Fair Purchase Policy",
        body: null,
        list: ["Automated purchasing systems are prohibited", "Bots and scripts are prohibited", "Purchase limits may apply"],
        listPrefix: "To ensure fair access to products:",
      },
      {
        heading: "Order Cancellation",
        body: null,
        list: ["Bot usage", "Automated purchasing", "Fraudulent activity", "Bulk purchases intended for resale"],
        listPrefix: "Souljier reserves the right to cancel orders suspected of:",
      },
      {
        heading: "Resale Restrictions",
        body: "Products purchased from www.souljier.com are intended for personal use only. Souljier reserves the right to cancel orders suspected of being placed for commercial resale.",
      },
      {
        heading: "Enforcement",
        body: null,
        list: ["Order cancellation", "Refund issuance", "Restriction from future purchases"],
        listPrefix: "Violations of this policy may result in:",
      },
    ],
  },
  {
    id: "cookie-policy",
    title: "Cookie Policy",
    updated: "9th of March 2026",
    content: [
      {
        heading: "What Are Cookies",
        body: "Cookies are small text files placed on your device when you visit a website. They allow websites to recognise your device and store certain information about your preferences or actions. Cookies may be session-based (deleted after you close your browser) or persistent (stored for a longer period).",
      },
      {
        heading: "How We Use Cookies",
        body: null,
        list: ["Enable core website functionality", "Process transactions", "Remember user preferences", "Improve website performance", "Analyse website traffic", "Detect fraudulent activity"],
        listPrefix: "Souljier uses cookies to:",
      },
      {
        heading: "Essential Cookies",
        body: "These cookies are necessary for the operation of the Website. They enable core features such as shopping cart functionality, account login, payment processing, and security measures.",
      },
      {
        heading: "Performance and Analytics Cookies",
        body: "These cookies help us understand how visitors interact with the Website by collecting anonymous information such as pages visited, time spent on the Website, and error messages encountered.",
      },
      {
        heading: "Functional Cookies",
        body: "These cookies allow the Website to remember choices you make, such as language preferences or location settings.",
      },
      {
        heading: "Marketing Cookies",
        body: "These cookies may be used to deliver advertising relevant to your interests and help measure advertising campaign effectiveness.",
      },
      {
        heading: "Managing Cookies",
        body: "Most web browsers allow users to control cookies through browser settings. You may choose to block cookies, delete stored cookies, or receive alerts when cookies are used. Please note that disabling cookies may affect the functionality of the Website.",
      },
    ],
  },
  {
    id: "ip-policy",
    title: "Intellectual Property & Brand Protection",
    updated: "9th of March 2026",
    content: [
      {
        heading: "Ownership of Intellectual Property",
        body: null,
        list: ["Trademarks", "Logos", "Brand names", "Product designs", "Graphics and artwork", "Product photography", "Marketing materials", "Website design and layout", "Written content"],
        listPrefix: "All intellectual property displayed on the Website is the exclusive property of Souljier, including:",
        listNote: "These materials are protected by applicable copyright, trademark, and intellectual property laws.",
      },
      {
        heading: "Prohibited Use",
        body: null,
        list: [
          "Reproducing or copying Souljier designs",
          "Manufacturing products that imitate Souljier products",
          "Using Souljier trademarks or logos",
          "Using Souljier product imagery for commercial purposes",
          "Distributing or modifying any brand assets",
          "Creating derivative works based on Souljier designs",
        ],
        listPrefix: "Without prior written permission, the following actions are strictly prohibited:",
        listNote: "Unauthorised use of Souljier intellectual property may result in legal action.",
      },
      {
        heading: "Counterfeit Products",
        body: "Souljier actively monitors the market for counterfeit products. Any manufacture, distribution, or sale of counterfeit Souljier products is strictly prohibited.",
      },
      {
        heading: "Reporting Infringement",
        body: "If you believe that intellectual property belonging to Souljier is being used without authorisation, please contact us with details of the alleged infringement, the location of the infringing content, and supporting evidence.",
      },
    ],
  },
];

const navLinks = [
  { href: "#terms-of-sale", label: "Terms of Sale" },
  { href: "#terms-of-service", label: "Terms of Service" },
  { href: "#privacy-policy", label: "Privacy Policy" },
  { href: "#refund-policy", label: "Refund Policy" },
  { href: "#anti-bot-policy", label: "Anti-Bot Policy" },
  { href: "#cookie-policy", label: "Cookie Policy" },
  { href: "#ip-policy", label: "IP & Brand Protection" },
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

const TermsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="border-b-2 border-secondary px-6 md:px-16 py-10">
        <p className="font-primary text-xs text-gray-400 uppercase tracking-widest mb-2">
          Legal
        </p>
        <h1 className="font-primary font-black text-2xl md:text-4xl text-black uppercase tracking-wide">
          Terms & Policies
        </h1>
        <p className="font-primary text-sm text-gray-500 mt-2">
          Please read these policies carefully before using our Website or placing an order.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sticky sidebar nav */}
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

              <div className="border-secondary pl-6">
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
              <Link href="/" className="font-primary text-xs text-secondary hover:underline uppercase tracking-wide">
                Back to Store
              </Link>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TermsPage;