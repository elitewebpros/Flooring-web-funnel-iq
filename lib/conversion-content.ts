// Shared types + data-driven coach content for the Flooring Website Conversion Tool.
// Keeping this in one place lets the demo, the desktop coach panel, and the
// mobile coach drawer all stay in sync and makes it easy to re-target the tool
// for other industries (attorney, salon, etc.).

export type PageType = "home" | "about" | "services" | "specials" | "blog" | "contact"

export type SectionType =
  | "banner"
  | "header"
  | "hero"
  | "service-buttons"
  | "body-content"
  | "testimonials"
  | "map"
  | "blog-posts"
  | "footer"
  | "about-intro"
  | "team"
  | "mission"
  | "services-list"
  | "cta"
  | "specials-grid"
  | "blog-list"
  | "contact-form"
  | "contact-info"

export interface CoachEntry {
  /** Human readable name shown in the coach panel header + section button label. */
  label: string
  /** What job this section does in the conversion flow. */
  role: string
  /** The buyer question this section answers. */
  buyerQuestion: string
  /** Why this section drives conversions. */
  whyItConverts: string
  /** What a high-converting version of this section should say. */
  whatToSay: string
  /** The common mistake businesses make here. */
  commonMistake: string
  /** How the business owner should apply this to their own site. */
  applyToYourSite: string
  /** Owner-facing call to action label. */
  cta: string
}

/** Owner-facing CTA destination on the parent SEO landing page. */
export const COACH_CTA_URL =
  "https://www.advertisingbusiness.org/flooring-website-conversion-tool/#website-review"

/** Number of sections a user should study before we surface the strategy offer. */
export const STUDY_GOAL = 3

/** Ordered list of studyable sections per page (drives progress totals). */
export const pageSections: Record<PageType, SectionType[]> = {
  home: [
    "banner",
    "header",
    "hero",
    "service-buttons",
    "body-content",
    "testimonials",
    "map",
    "blog-posts",
    "footer",
  ],
  about: ["banner", "header", "about-intro", "team", "footer"],
  services: ["banner", "header", "services-list", "cta", "footer"],
  specials: ["banner", "header", "specials-grid", "cta", "footer"],
  blog: ["banner", "header", "blog-list", "cta", "footer"],
  contact: ["banner", "header", "contact-form", "contact-info", "footer"],
}

export const conversionContent: Record<SectionType, CoachEntry> = {
  hero: {
    label: "Hero / First Screen",
    role: "The hero section confirms the visitor is in the right place, explains the flooring services offered, builds trust quickly, and gives a clear next step.",
    buyerQuestion: "Can this flooring company help with my project, and should I request an estimate?",
    whyItConverts:
      "Flooring buyers do not want to dig. They want to know what you install, where you work, whether you look credible, and how to get pricing or an estimate.",
    whatToSay:
      "A strong flooring hero should include the main service promise, local relevance, trust proof, and a clear estimate CTA above the fold.",
    commonMistake:
      "Vague headlines like “Quality Flooring Solutions” that never say what you offer, where you work, or why to act now.",
    applyToYourSite:
      "Make sure your homepage explains what you do, where you work, why buyers should trust you, and how to request an estimate within the first few seconds.",
    cta: "Get My Flooring Website Reviewed",
  },
  header: {
    label: "Header Phone CTA",
    role: "The phone CTA gives high-intent visitors a fast path to contact the business without hunting through the page.",
    buyerQuestion: "How do I quickly talk to someone or schedule an estimate?",
    whyItConverts:
      "Many flooring buyers browse on mobile while comparing companies. A visible click-to-call path reduces friction and captures people who are ready to act.",
    whatToSay: "Use direct language like “Call for a Free Flooring Estimate” or “Speak With a Flooring Specialist.”",
    commonMistake: "Hiding the phone number in the footer or using a tiny phone link that is hard to tap on mobile.",
    applyToYourSite: "Make your phone number visible in the header and use click-to-call on mobile.",
    cta: "Check My Website CTA Path",
  },
  "service-buttons": {
    label: "Services Section",
    role: "The services section helps visitors quickly find the type of flooring project they care about.",
    buyerQuestion: "Do they offer the exact flooring service I need?",
    whyItConverts:
      "A homeowner looking for hardwood refinishing, luxury vinyl plank, carpet, or tile wants fast confirmation. Clear service cards reduce confusion and move the visitor toward an estimate.",
    whatToSay: "Each service should include the service name, a short benefit-driven description, and a next step.",
    commonMistake: "Listing services as plain words without explaining the value, process, or reason to choose you.",
    applyToYourSite: "Create clear service sections for your main flooring categories and connect each one to an estimate CTA.",
    cta: "Review My Service Sections",
  },
  "body-content": {
    label: "Trust Signals",
    role: "Trust signals reduce risk and make the visitor feel safer contacting the company.",
    buyerQuestion: "Can I trust this company in my home?",
    whyItConverts:
      "Flooring projects are expensive, visible, and personal. Buyers want proof that the company is reliable, experienced, clean, and professional.",
    whatToSay:
      "Show years of experience, licensed/insured language, warranties, guarantees, financing, review counts, or certifications when true.",
    commonMistake: "Making trust claims without proof, or hiding credibility indicators too far down the page.",
    applyToYourSite: "Place your strongest trust signals near the top of the page and repeat them near major CTAs.",
    cta: "Check My Trust Signals",
  },
  testimonials: {
    label: "Reviews / Testimonials",
    role: "Reviews provide social proof and help buyers feel more confident before they request an estimate.",
    buyerQuestion: "What did other customers experience?",
    whyItConverts:
      "Specific reviews answer concerns about quality, pricing, timelines, cleanup, communication, and reliability.",
    whatToSay: "Feature reviews that mention the service type, project result, city or neighborhood, and a specific outcome.",
    commonMistake: "Using generic testimonials that sound fake, or burying reviews where visitors never see them.",
    applyToYourSite: "Use detailed reviews near the sections where buyers are making decisions.",
    cta: "Review My Website Proof",
  },
  "blog-posts": {
    label: "Project Gallery",
    role: "The gallery proves quality visually and helps visitors imagine the result in their own home.",
    buyerQuestion: "Can this company deliver the look and quality I want?",
    whyItConverts:
      "Flooring is visual. Before-and-after photos, room examples, and material-specific projects help buyers trust the craftsmanship.",
    whatToSay: "Show real project photos with short captions that mention flooring type, project goal, and outcome.",
    commonMistake: "Using generic stock photos or hiding project photos behind a weak gallery page.",
    applyToYourSite: "Add project photos to the homepage and service pages, not only a separate gallery page.",
    cta: "Review My Project Gallery",
  },
  map: {
    label: "Service Area / Local Relevance",
    role: "Local relevance confirms whether the company serves the visitor's area and understands the local market.",
    buyerQuestion: "Do they work near me?",
    whyItConverts:
      "Visitors leave quickly when they cannot confirm service-area fit. Local signals also make the company feel more established and relevant.",
    whatToSay: "Mention the primary city, nearby service areas, showroom availability if true, and in-home estimate options.",
    commonMistake: "Using broad “we serve everyone” language without clear city or service-area details.",
    applyToYourSite: "Add service-area content that helps real buyers confirm you serve their location.",
    cta: "Check My Local Signals",
  },
  "contact-form": {
    label: "Estimate Form",
    role: "The estimate form captures lead information without creating unnecessary friction.",
    buyerQuestion: "How easy is it to get pricing or schedule a consultation?",
    whyItConverts: "The easier the form feels, the more likely a mobile visitor is to complete it.",
    whatToSay: "Ask only for essential first-step details: name, phone/email, service type, city/ZIP, and optional notes.",
    commonMistake: "Asking for too much information before the visitor trusts the company.",
    applyToYourSite: "Shorten your form and make the first step easy to complete from a phone.",
    cta: "Review My Estimate Form",
  },
  "contact-info": {
    label: "Contact Information",
    role: "Clear contact information gives high-intent buyers multiple low-friction ways to reach you.",
    buyerQuestion: "How do I reach a real person, and how fast will they respond?",
    whyItConverts:
      "Some buyers prefer to call or email instead of filling out a form. Visible contact details and hours capture those leads.",
    whatToSay: "Show phone, email, showroom address, business hours, and expected response time.",
    commonMistake: "Listing only a form with no phone number, hours, or response expectation.",
    applyToYourSite: "Pair every contact form with a visible phone number, hours, and a clear response promise.",
    cta: "Check My Contact Options",
  },
  footer: {
    label: "Footer / Final CTA",
    role: "The footer gives visitors one more clear path to act after they finish reviewing the page.",
    buyerQuestion: "What is the next step if I am interested?",
    whyItConverts:
      "Some visitors scroll before deciding. A strong final CTA captures people who needed more proof before taking action.",
    whatToSay: "Repeat the estimate offer, phone number, service area, trust proof, and simple contact options.",
    commonMistake: "Using a generic footer with no persuasive final action.",
    applyToYourSite: "Turn your footer into a conversion safety net with contact info, service links, trust proof, and a final estimate CTA.",
    cta: "Review My Final CTA",
  },
  banner: {
    label: "Financing / Offer Banner",
    role: "The top banner removes the biggest objection in flooring sales — cost — before the buyer even scrolls.",
    buyerQuestion: "Can I actually afford this project right now?",
    whyItConverts:
      "Flooring is a major purchase. Highlighting financing or a current offer makes the project feel attainable and keeps buyers reading.",
    whatToSay: "State the financing or offer clearly, e.g. “0% APR financing for qualified customers.”",
    commonMistake: "Burying financing details deep in the site where motivated buyers never see them.",
    applyToYourSite: "Surface financing or your strongest offer near the top of the page where everyone sees it.",
    cta: "Review My Offer Strategy",
  },
  "about-intro": {
    label: "About Intro",
    role: "The about intro builds the human trust buyers need before inviting a company into their home.",
    buyerQuestion: "Who is this company, and are they established and trustworthy?",
    whyItConverts: "A clear story with history and local roots makes a flooring company feel safe and credible.",
    whatToSay: "Share how long you've been in business, your local roots, and what makes your work different.",
    commonMistake: "Generic “we are passionate about flooring” copy that says nothing specific or provable.",
    applyToYourSite: "Tell a specific, local, provable story that connects your experience to the buyer's project.",
    cta: "Review My About Page",
  },
  team: {
    label: "Team Section",
    role: "The team section puts real faces to the company and reassures buyers about who enters their home.",
    buyerQuestion: "Who will actually be working in my home?",
    whyItConverts: "Real team photos and roles humanize the company and reduce the risk buyers feel.",
    whatToSay: "Show real team members with names, roles, and a line about their experience.",
    commonMistake: "Using stocky fake team photos that feel impersonal and erode trust.",
    applyToYourSite: "Use authentic team photos and short bios that highlight relevant experience.",
    cta: "Review My Team Section",
  },
  mission: {
    label: "Mission / Values",
    role: "The mission section communicates the standards and values behind your work.",
    buyerQuestion: "Do this company's values match how I want my project handled?",
    whyItConverts: "Shared values and clear standards make buyers feel understood and respected.",
    whatToSay: "State your core commitments around quality, communication, cleanliness, and timelines.",
    commonMistake: "Vague mission statements that could belong to any company in any industry.",
    applyToYourSite: "Tie your values to concrete promises a flooring buyer actually cares about.",
    cta: "Review My Messaging",
  },
  "services-list": {
    label: "Services Overview",
    role: "The services overview confirms the full range of flooring work you handle.",
    buyerQuestion: "Do they handle my specific type of flooring project?",
    whyItConverts: "A complete, clear service list reassures buyers that you can handle their exact need.",
    whatToSay: "List each flooring category with a benefit-driven description and an estimate CTA.",
    commonMistake: "A wall of service names with no detail, value, or next step.",
    applyToYourSite: "Give each core service real detail and connect it to a clear estimate path.",
    cta: "Review My Service Sections",
  },
  cta: {
    label: "Estimate Request CTA",
    role: "The estimate CTA moves the visitor from browsing to action.",
    buyerQuestion: "What should I do next?",
    whyItConverts:
      "A high-converting flooring website does not make visitors guess. It uses clear CTA language tied to the buyer's desired outcome.",
    whatToSay:
      "Use direct copy like “Schedule Your Free Flooring Estimate,” “Request an In-Home Consultation,” or “Get My Flooring Project Quote.”",
    commonMistake: "Weak CTAs like “Learn More,” “Submit,” or “Contact Us” that never explain the value of acting.",
    applyToYourSite: "Replace vague CTAs with estimate-focused action language.",
    cta: "Fix My Website CTAs",
  },
  "specials-grid": {
    label: "Specials & Offers",
    role: "The specials section drives immediate action through limited-time offers and seasonal promotions.",
    buyerQuestion: "Is there a reason to act now instead of later?",
    whyItConverts: "Clear, urgent offers give hesitant buyers a reason to request an estimate today.",
    whatToSay: "Highlight current deals with clear value, simple claim steps, and an expiration or urgency cue.",
    commonMistake: "Stale offers with no urgency, or deals that are hard to understand or claim.",
    applyToYourSite: "Feature a clear, current offer with simple steps to claim it.",
    cta: "Review My Offers",
  },
  "blog-list": {
    label: "Blog / Content",
    role: "Content builds authority, keeps the site fresh, and creates more entry points from search.",
    buyerQuestion: "Does this company actually know flooring?",
    whyItConverts: "Helpful articles demonstrate expertise and answer the questions buyers have before they commit.",
    whatToSay: "Answer common buyer questions and link each post toward your service and estimate pages.",
    commonMistake: "Publishing thin content with no link back to services or any call to action.",
    applyToYourSite: "Write helpful, buyer-focused posts that route readers toward an estimate.",
    cta: "Review My Content Strategy",
  },
}
