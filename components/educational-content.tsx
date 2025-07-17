"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, MessageCircle } from "lucide-react"
import type { PageType, SectionType } from "./website-demo"

const educationalContent = {
  home: {
    title: "Homepage: Converting Visitors to High-Value Clients",
    content: `The homepage is your most critical tool for converting website visitors into billable hours. Personal injury cases can generate $50,000-$500,000+ in fees per case.

**Key Conversion Elements for Attorneys:**
• Hero section emphasizing "No Win, No Fee" to remove barriers
• Immediate case evaluation form above the fold
• Trust indicators (years of experience, cases won, money recovered)
• Client testimonials with specific case outcomes
• Clear practice area navigation
• Emergency contact information prominently displayed

**Billable Hour Impact:**
Well-optimized attorney websites convert 8-15% of visitors into consultations, compared to 1-3% for poorly designed sites. Each additional consultation can represent $25,000-$100,000+ in potential billable hours.`,
  },
  about: {
    title: "Building Client Trust = Higher Case Values",
    content: `The About page is where potential clients decide if they trust you with their life-changing case. Higher trust = willingness to pursue larger settlements.

**Best Practices for Attorney Websites:**
• Highlight your track record with specific case results
• Include professional headshots and credentials
• Show bar admissions and certifications
• Feature awards and recognition from legal organizations
• Add client testimonials with permission and case outcomes
• Emphasize your commitment to maximizing client compensation

**Revenue Impact:**
Attorneys with strong About pages see 40% higher average case values because clients trust them to handle more complex, higher-value cases.`,
  },
  services: {
    title: "Practice Areas: Qualifying High-Value Cases",
    content: `The Practice Areas page should attract your most profitable case types while filtering out low-value inquiries.

**Revenue Optimization Strategies:**
• Highlight your most profitable practice areas first
• Include average settlement ranges where appropriate
• Use case studies to demonstrate your success
• Add FAQ sections to pre-qualify potential clients
• Emphasize complex cases that generate more billable hours
• Include clear next steps for case evaluation

**Billable Hour Strategy:**
Focus on practice areas with highest hourly potential: Medical malpractice ($300-800/hr), Complex personal injury ($250-600/hr), Wrongful death ($400-1000/hr).`,
  },
  specials: {
    title: "Case Results: Building Credibility & Trust",
    content: `The Case Results page showcases your track record and builds confidence in potential clients about your ability to win their case.

**Strategic Case Result Presentation:**
• Display recent settlements and verdicts with permission
• Show variety of case types and outcomes
• Include case complexity and challenges overcome
• Highlight total amount recovered for all clients
• Use before/after client impact stories
• Emphasize your success rate and experience

**Revenue Impact:**
Strong case results pages increase consultation booking rates by 70% and attract higher-value cases because clients see proof of your ability to secure substantial compensation.`,
  },
  blog: {
    title: "Content Marketing for Legal Authority",
    content: `A legal blog establishes expertise, improves SEO for high-value keywords, and educates potential clients about case values.

**High-Value Content Strategy:**
• Write about recent case victories and settlements
• Explain complex legal processes to build trust
• Address common client concerns and objections
• Target high-value keywords (personal injury lawyer, medical malpractice attorney)
• Include calls-to-action in every post
• Share insights on maximizing case compensation

**SEO & Revenue Benefits:**
Legal blogs can increase organic traffic by 300%+ and attract higher-value cases through educational content that positions you as the expert.`,
  },
  contact: {
    title: "Contact Page: Converting Inquiries to Retainers",
    content: `The Contact page is where potential clients become paying clients. Remove all friction from the consultation process.

**Essential Elements for Attorneys:**
• Multiple contact methods (phone, email, chat, form)
• 24/7 availability messaging for emergencies
• Clear response time expectations (within 1 hour)
• Office location and parking information
• What to expect during consultation
• Emphasis on confidentiality and no-obligation review

**Conversion Optimization:**
Optimized contact pages convert 25-40% of visitors into consultations, compared to 5-10% for generic contact forms.`,
  },
  banner: {
    title: "No Win, No Fee: Removing Financial Barriers",
    content: `The contingency fee banner addresses the biggest objection in personal injury cases - upfront legal costs.

**Why It Maximizes Billable Hours:**
• Removes financial barriers for potential clients
• Attracts clients who might otherwise not pursue legal action
• Allows you to take on higher-value cases with confidence
• Builds trust by aligning your interests with the client's
• Differentiates you from hourly-fee competitors

**Revenue Psychology:**
Clients are 5x more likely to pursue legal action when they know there are no upfront costs, leading to more cases and higher total billable hours.`,
  },
  header: {
    title: "Header: Professional Credibility & Immediate Contact",
    content: `The header establishes legal authority and provides immediate access for urgent legal matters.

**Critical Elements for Attorneys:**
• Professional law firm branding
• Prominent phone number for immediate contact
• "Available 24/7" messaging for emergencies
• Bar association memberships displayed
• Awards and recognition badges
• Clear navigation to high-value practice areas

**First Impression Impact:**
Professional headers increase consultation booking rates by 35% and attract higher-quality clients willing to pay premium rates.`,
  },
  hero: {
    title: "Hero Section: Immediate Case Value Communication",
    content: `The hero section has seconds to communicate your ability to maximize client compensation.

**High-Converting Elements:**
• Compelling headline about maximum compensation
• Specific settlement amounts or ranges
• Professional attorney photography
• Immediate case evaluation form
• Trust indicators (cases won, money recovered)
• Emergency contact information

**Revenue Optimization:**
Hero sections that emphasize compensation amounts see 50% higher consultation rates and attract clients with higher case values.`,
  },
  "service-buttons": {
    title: "Practice Area Navigation: Qualifying Case Types",
    content: `Service buttons help visitors quickly identify if you handle their specific case type while highlighting your most profitable areas.

**Strategic Design for Attorneys:**
• Prioritize highest-value practice areas
• Use clear, legal-specific terminology
• Include brief descriptions of case types
• Highlight your success rates or settlements
• Ensure mobile-friendly for on-the-go clients
• Link to detailed practice area pages

**Case Qualification Benefits:**
Clear practice area navigation increases qualified leads by 40% and reduces time spent on non-viable cases.`,
  },
  "body-content": {
    title: "Authority Building: Justifying Premium Rates",
    content: `Body content establishes your expertise and track record, justifying higher contingency percentages and attracting complex cases.

**Authority Building Strategy:**
• Highlight years of experience and specialization
• Display total compensation recovered for clients
• Show success rates and case outcomes
• Mention complex cases you've handled
• Include professional achievements and recognition
• Emphasize your commitment to maximum compensation

**Premium Positioning:**
Strong authority content allows you to command higher contingency fees (40% vs. 33%) and attract more complex, higher-value cases.`,
  },
  testimonials: {
    title: "Social Proof: Case Results Drive Referrals",
    content: `Client testimonials provide crucial social proof for high-stakes legal decisions and generate referral business.

**Effective Legal Testimonials:**
• Include specific settlement amounts (with permission)
• Mention case complexity and challenges overcome
• Show before/after impact on client's life
• Include client photos and full names when possible
• Highlight your communication and dedication
• Feature diverse case types and outcomes

**Referral Revenue:**
Strong testimonials increase referral rates by 60%, and referred clients typically have 30% higher case values due to pre-established trust.`,
  },
  map: {
    title: "Local Presence: Capturing Regional Cases",
    content: `The location section builds local credibility and helps capture cases in your geographic service area.

**Local SEO Benefits for Attorneys:**
• Improves Google My Business rankings
• Captures "near me" searches for legal services
• Builds trust with local community
• Shows accessibility for client meetings
• Supports local bar association credibility
• Helps with courthouse proximity messaging

**Geographic Revenue:**
Strong local presence can increase case volume by 25% and helps establish referral relationships with local medical providers and other professionals.`,
  },
  "blog-posts": {
    title: "Legal Content: SEO & Client Education",
    content: `Recent blog posts demonstrate ongoing expertise while supporting SEO for high-value legal keywords.

**High-Value Legal Content:**
• Case study breakdowns and settlement explanations
• Legal process education to build trust
• Recent law changes affecting client cases
• Tips for maximizing case compensation
• Common mistakes that reduce case value
• Industry insights and legal trends

**SEO Revenue Impact:**
Legal blogs targeting high-value keywords can generate 200-500% ROI through organic case acquisition, with each blog-generated case worth $25,000-$100,000+ in fees.`,
  },
  footer: {
    title: "Footer: Final Conversion & Trust Signals",
    content: `The footer provides final opportunities to convert visitors while reinforcing your legal credentials.

**Essential Legal Footer Elements:**
• Complete contact information and hours
• All practice areas and specializations
• Bar admissions and professional memberships
• Disclaimer and attorney advertising compliance
• Links to case results and testimonials
• Emergency contact information

**Compliance & Conversion:**
Proper legal footers ensure bar compliance while providing multiple conversion paths, increasing overall consultation rates by 15-20%.`,
  },
}

interface EducationalContentProps {
  currentPage: PageType
  selectedSection: SectionType | null
}

export default function EducationalContent({ currentPage, selectedSection }: EducationalContentProps) {
  const getCurrentContent = () => {
    if (selectedSection && educationalContent[selectedSection as keyof typeof educationalContent]) {
      return educationalContent[selectedSection as keyof typeof educationalContent]
    }
    return educationalContent[currentPage as keyof typeof educationalContent] || educationalContent.home
  }

  const content = getCurrentContent()

  return (
    <div className="flex flex-col h-full">
      {/* Header - Fixed */}
      <div className="bg-black border-b-4 border-[#2596ff] shadow-xl mb-4 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2596ff] to-[#1479e5] rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{content?.title}</h2>
              <p className="text-[#2596ff]">Attorney Revenue Optimization</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedSection && (
              <Badge className="bg-black text-white border-2 border-white shadow-lg px-3 py-1 font-semibold">
                Section: {selectedSection.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Badge>
            )}
            <Badge className="bg-black text-white border-2 border-[#2596ff] px-3 py-1 font-semibold">
              {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Page
            </Badge>
          </div>
        </div>
      </div>

      {/* Content Card - Scrollable */}
      <Card className="flex-1 bg-white border-2 border-black shadow-2xl overflow-hidden min-h-0">
        <CardContent className="p-8 h-full overflow-y-auto">
          <div className="prose prose-gray max-w-none">
            {content?.content.split("\n").map((paragraph, index) => {
              if (paragraph.trim() === "") return null

              if (paragraph.startsWith("•")) {
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 mb-6 p-5 bg-[#e6f2ff] rounded-xl border-2 border-black shadow-lg"
                  >
                    <div className="w-3 h-3 bg-[#2596ff] rounded-full mt-1 flex-shrink-0 border border-black"></div>
                    <p className="text-black text-sm leading-relaxed font-medium">{paragraph.substring(1).trim()}</p>
                  </div>
                )
              }

              if (paragraph.includes("**")) {
                const parts = paragraph.split("**")
                return (
                  <div key={index} className="mb-6 p-5 bg-[#2596ff] rounded-xl border-3 border-black shadow-xl">
                    <h4 className="font-bold text-white mb-3 text-base">{parts[1]}</h4>
                    <p className="text-white text-sm leading-relaxed font-medium">{parts[2] || ""}</p>
                  </div>
                )
              }

              return (
                <div key={index} className="mb-4">
                  <p className="text-black text-sm leading-relaxed p-4 hover:bg-blue-50/50 rounded-lg transition-colors border-l-4 border-[#2596ff]">
                    {paragraph}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-6 bg-black rounded-2xl border-4 border-[#2596ff] shadow-2xl">
            <h3 className="text-white text-lg font-bold mb-4 text-center">
              Ready to Maximize Your Legal Practice Revenue?
            </h3>
            <a
              href="https://www.advertisingbusiness.org/want-more-leads-from-your-website/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#2596ff] to-[#1479e5] hover:from-white hover:to-gray-100 hover:text-black text-white border-4 border-white text-lg shadow-2xl transition-all duration-300 h-16 rounded-2xl font-bold flex items-center justify-center transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Get Professional Marketing Help
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
