"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, MessageCircle } from "lucide-react"
import type { PageType, SectionType } from "./website-demo"

const educationalContent = {
  home: {
    title: "Homepage: Your Conversion Foundation",
    content: `The homepage is your most critical conversion tool for flooring companies. It must immediately communicate trust, showcase your work, and capture leads.

**Key Conversion Elements:**
• Hero section with compelling value proposition
• Lead capture form above the fold
• Service buttons for easy navigation
• Social proof through testimonials
• Local presence with map integration
• Fresh content via blog posts

**Conversion Rate Impact:**
Well-optimized flooring homepages see 15-25% lead capture rates compared to 2-5% for poorly designed sites.`,
  },
  about: {
    title: "Building Trust with Your About Page",
    content: `The About page is where potential customers decide if they trust you with their flooring investment.

**Best Practices:**
• Highlight your mission and core values
• Include real photos of your team/founder
• Show trust badges/certifications
• Place a lead form to capture interest
• Add customer testimonials or awards for social proof`,
  },
  services: {
    title: "Converting Visitors into Customers",
    content: `The Services page should clearly communicate your flooring expertise while guiding visitors toward requesting estimates.

**Best Practices:**
• Use icons and concise copy for each service
• Include badges/guarantees for reassurance
• Add FAQs to answer objections
• Feature testimonials from happy customers
• Always provide an easy way to request a quote`,
  },
  specials: {
    title: "Using Specials to Drive Urgency",
    content: `The Specials page drives immediate action through limited-time offers and seasonal promotions.

**Best Practices:**
• Highlight current deals with eye-catching banners
• Use clear, urgent language
• Make it easy to claim offers with simple forms
• Show success stories from customers`,
  },
  blog: {
    title: "Turning Content into Conversions",
    content: `A blog builds authority, keeps your site fresh, and creates more entry points from Google.

**Best Practices:**
• Share valuable info and answer common questions
• Link blog posts to your main service pages
• Add Subscribe or Contact Us CTAs within posts
• Feature related posts to increase time on site`,
  },
  contact: {
    title: "Contact Page: Converting Interest to Action",
    content: `The Contact page is where interest becomes business. Remove all friction from the conversion process.

**Essential Elements:**
• Multiple contact methods
• Clear business hours
• Service area information
• Response time expectations
• Easy-to-use contact form`,
  },
  banner: {
    title: "Financing Banner: Removing Price Objections",
    content: `The financing banner addresses the biggest objection in flooring sales - cost.

**Why It Works:**
• Flooring is a significant investment
• Many customers assume they cannot afford quality flooring
• Financing options make projects accessible
• Creates immediate value proposition`,
  },
  header: {
    title: "Header: Professional First Impression",
    content: `The header establishes credibility and provides essential contact information.

**Key Elements:**
• Professional logo design
• Prominent phone number
• Social media presence
• Clear navigation structure`,
  },
  hero: {
    title: "Hero Section: Immediate Impact & Lead Capture",
    content: `The hero section has 3 seconds to communicate value and capture attention.

**Critical Components:**
• Stunning flooring photography
• Clear value proposition
• Prominent lead capture form
• Trust indicators`,
  },
  "service-buttons": {
    title: "Service Buttons: Guided Navigation",
    content: `Service buttons help visitors quickly find relevant flooring options.

**Design Principles:**
• Use clear, descriptive icons
• Maintain visual consistency
• Include brief descriptions
• Ensure mobile-friendly sizing`,
  },
  "body-content": {
    title: "Body Content: Authority & Trust Building",
    content: `Body content establishes your expertise while addressing common customer concerns.

**Content Strategy:**
• Highlight years of experience
• Mention satisfied customer count
• Include service area coverage
• Address quality and warranty`,
  },
  testimonials: {
    title: "Testimonials: Social Proof & Credibility",
    content: `Testimonials provide crucial social proof for high-investment flooring decisions.

**Effective Elements:**
• Specific project details
• Before/after mentions
• Customer photos with permission
• Star ratings and reviews
• Local customer references`,
  },
  map: {
    title: "Location Map: Local Trust & Accessibility",
    content: `The map section builds local credibility and helps customers understand your service area.

**Benefits:**
• Reinforces Atlanta location
• Supports Google My Business
• Improves local search rankings
• Shows service area coverage`,
  },
  "blog-posts": {
    title: "Blog Posts: Content Marketing & SEO",
    content: `Recent blog posts demonstrate ongoing expertise while supporting SEO efforts.

**Content Categories:**
• Flooring care and maintenance tips
• Design trends and inspiration
• Project showcases and case studies
• Seasonal flooring advice`,
  },
  footer: {
    title: "Footer: Final Conversion Opportunities",
    content: `The footer provides final conversion opportunities while building trust.

**Essential Elements:**
• Complete contact information
• Service area coverage
• Business hours and availability
• Legal compliance links`,
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
              <p className="text-[#2596ff]">Conversion Insights & Strategy</p>
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
            <h3 className="text-white text-lg font-bold mb-4 text-center">Ready to Optimize Your Website?</h3>
            <a
              href="https://www.advertisingbusiness.org/want-more-leads-from-your-website/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#2596ff] to-[#1479e5] hover:from-white hover:to-gray-100 hover:text-black text-white border-4 border-white text-lg shadow-2xl transition-all duration-300 h-16 rounded-2xl font-bold flex items-center justify-center transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Get Professional Help
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
