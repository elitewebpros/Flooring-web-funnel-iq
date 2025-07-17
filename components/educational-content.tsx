"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, MessageCircle, Lightbulb } from "lucide-react"
import type { PageType, SectionType } from "./website-demo"

const educationalContent = {
  header: {
    title: "Header: Professional First Impression",
    content: `The header establishes credibility and provides essential contact information for immediate bookings.

**Key Elements:**
• Salon logo positioned prominently (top left) for brand recognition
• Click-to-call phone number (top right) for immediate contact
• "Book Appointment" button always visible and styled to stand out
• Complete navigation menu for easy site exploration
• Social media icons (Instagram, Facebook) for trust and social proof
• Optional Gift Cards button for additional revenue

**Pro Tip:**
A visible phone number and prominent booking button in the header can increase conversions by 25-40%. Make sure the "Book Appointment" button uses contrasting colors to stand out.`,
  },
  hero: {
    title: "Hero Section: Immediate Impact & Lead Capture",
    content: `The hero section has 3 seconds to communicate value and capture attention with stunning visuals.

**Critical Components:**
• Beautiful, real hair transformation or salon interior photo as background
• Large H1 headline: "Atlanta's Hair Color & Style Experts"
• Clear subheadline: "Cuts, Hair Color, Extensions, Blowouts, and More"
• Prominent booking form with essential fields (Name, Phone/Email, Service, Stylist, Date/Time)
• Quick-link buttons for "View Services", "Meet Our Stylists", "See Gallery"

**Pro Tip:**
Using real, beautiful photos to inspire trust and showcase your expertise in hair color and styles. A "Book Now" form above the fold drives 3x more conversions than forms below the fold.`,
  },
  "top-services": {
    title: "Top Services: Visual Service Selection",
    content: `Visual service cards help clients self-select and encourage click-throughs to detailed service pages.

**Best Practices:**
• Focus on top-requested services: Hair Color, Haircut, Extensions, Blowouts
• Include starting prices to set expectations and qualify leads
• Use clear icons and compelling descriptions
• Add "Learn More" buttons for detailed service information
• Emphasize your most profitable services (like Hair Color and Extensions)

**Pro Tip:**
Visual service cards with pricing increase conversion rates by 35%. Clients can quickly identify what they want and understand investment levels upfront.`,
  },
  "stylist-highlights": {
    title: "Stylist Highlights: Humanizing Your Brand",
    content: `Introduce the team to humanize the brand and drive direct bookings with specific stylists.

**Essential Elements:**
• Smiling team photos to build trust and connection
• Short bios highlighting specialties and experience
• Instagram handles to showcase ongoing work
• "Book with Me" buttons for each stylist to drive direct bookings
• Specialty callouts (Color Specialist, Cut Expert, Extension Specialist)

**Pro Tip:**
Clients who book with specific stylists have 60% higher retention rates. Personal connections drive loyalty and repeat business.`,
  },
  gallery: {
    title: "Before & After Gallery: Social Proof Power",
    content: `Before/after photos are the strongest social proof for hair salons—real results attract new clients.

**Effective Strategy:**
• Grid of real client hair transformations
• High-quality, well-lit photos showing dramatic changes
• Variety of services represented (color, cuts, extensions)
• "View Full Gallery" button to encourage deeper engagement
• Regular updates to keep content fresh

**Pro Tip:**
Before/after galleries increase booking rates by 45%. Visual proof of your skills is more powerful than any written testimonial.`,
  },
  "special-offers": {
    title: "Special Offers: Creating Urgency",
    content: `Limited-time deals and promotions drive immediate action and help convert price-sensitive prospects.

**Conversion Elements:**
• Visual promo banners with clear value propositions
• "20% Off for New Clients" to attract first-time visitors
• "Refer a Friend, Get $20 Off" for word-of-mouth marketing
• Clear CTA buttons to claim offers
• Urgency language to encourage immediate action

**Pro Tip:**
Special offers can increase new client bookings by 50%. Make claiming an offer fast and simple with one-click processes.`,
  },
  reviews: {
    title: "Featured Reviews: Building Trust",
    content: `Client testimonials and star ratings build instant trust and credibility for your salon.

**Trust-Building Elements:**
• Rotating testimonial cards with client photos (when available)
• 5-star ratings prominently displayed
• Specific service mentions in reviews
• Local client references (neighborhood mentions)
• Recent reviews to show ongoing satisfaction

**Pro Tip:**
Displaying 5-star Google reviews increases booking confidence by 70%. Rotate recent reviews to keep content fresh and relevant.`,
  },
  "salon-experience": {
    title: "Salon Experience: Atmosphere & Values",
    content: `Brief descriptions of your salon atmosphere help clients understand what to expect and feel comfortable.

**Key Messaging:**
• "Relaxing" - spa-like atmosphere for stress relief
• "Inclusive" - welcoming space for all hair types and clients
• "Eco-Friendly" - sustainable practices appeal to conscious consumers
• Visual icons to quickly communicate values
• Emotional connection beyond just services

**Pro Tip:**
Clearly communicating your salon's atmosphere and values can increase booking rates by 25%, especially among clients seeking specific experiences.`,
  },
  footer: {
    title: "Footer: Final Conversion Opportunities",
    content: `The footer provides final conversion opportunities while building trust and reducing friction.

**Essential Elements:**
• Salon location linked to Google Maps for easy directions
• Business hours and parking information
• Quick links (Book Now, Gift Cards, Policies)
• Social media icons with Instagram feed preview
• Email signup form for specials and updates
• Salon licenses/certifications for credibility
• "We can't wait to help you love your hair!" for emotional connection

**Pro Tip:**
Repeating "Book Now" CTA in the footer helps capture last-minute conversions. Location and hours in the footer reduce friction for walk-ins.`,
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
    return educationalContent.header
  }

  const content = getCurrentContent()

  return (
    <div className="flex flex-col h-full">
      {/* Header - Fixed */}
      <div className="bg-black border-b-4 border-blue-600 shadow-xl mb-4 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{content?.title}</h2>
              <p className="text-blue-400">Conversion Insights & Strategy</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedSection && (
              <Badge className="bg-black text-white border-2 border-white shadow-lg px-3 py-1 font-semibold">
                Section: {selectedSection.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Badge>
            )}
            <Badge className="bg-black text-white border-2 border-blue-600 px-3 py-1 font-semibold">
              Hair Salon Homepage
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
                    className="flex items-start gap-4 mb-6 p-5 bg-blue-50 rounded-xl border-2 border-black shadow-lg"
                  >
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 flex-shrink-0 border border-black"></div>
                    <p className="text-black text-sm leading-relaxed font-medium">{paragraph.substring(1).trim()}</p>
                  </div>
                )
              }

              if (paragraph.includes("**")) {
                const parts = paragraph.split("**")
                return (
                  <div key={index} className="mb-6 p-5 bg-blue-600 rounded-xl border-3 border-black shadow-xl">
                    <h4 className="font-bold text-white mb-3 text-base">{parts[1]}</h4>
                    <p className="text-white text-sm leading-relaxed font-medium">{parts[2] || ""}</p>
                  </div>
                )
              }

              if (paragraph.includes("Pro Tip:")) {
                return (
                  <div key={index} className="mb-6 p-5 bg-blue-600 rounded-xl border-4 border-black shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-5 h-5 text-yellow-300" />
                      <h4 className="font-bold text-white text-base">Pro Tip</h4>
                    </div>
                    <p className="text-white text-sm leading-relaxed font-medium">
                      {paragraph.replace("Pro Tip:", "").trim()}
                    </p>
                  </div>
                )
              }

              return (
                <div key={index} className="mb-4">
                  <p className="text-black text-sm leading-relaxed p-4 hover:bg-blue-50/50 rounded-lg transition-colors border-l-4 border-blue-600">
                    {paragraph}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-6 bg-black rounded-2xl border-4 border-blue-600 shadow-2xl">
            <h3 className="text-white text-lg font-bold mb-4 text-center">
              Ready to Optimize Your Hair Salon Website?
            </h3>
            <a
              href="https://www.advertisingbusiness.org/want-more-leads-from-your-website/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-white hover:to-gray-100 hover:text-black text-white border-4 border-white text-lg shadow-2xl transition-all duration-300 h-16 rounded-2xl font-bold flex items-center justify-center transform hover:scale-105"
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
