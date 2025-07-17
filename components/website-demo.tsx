"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Facebook,
  Instagram,
  Star,
  MapPin,
  Calendar,
  ArrowRight,
  Mail,
  Clock,
  Award,
  CheckCircle,
  HomeIcon,
  User,
  Briefcase,
  BookOpen,
  Shield,
  Users,
  Zap,
  Heart,
  MessageCircle,
  Scale,
  Building,
} from "lucide-react"

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

const pages = [
  { id: "home" as PageType, label: "Home", icon: HomeIcon },
  { id: "about" as PageType, label: "About", icon: User },
  { id: "services" as PageType, label: "Practice Areas", icon: Briefcase },
  { id: "specials" as PageType, label: "Case Results", icon: Award },
  { id: "blog" as PageType, label: "Blog", icon: BookOpen },
  { id: "contact" as PageType, label: "Contact", icon: Mail },
]

interface WebsiteDemoProps {
  currentPage: PageType
  setCurrentPage: (page: PageType) => void
  selectedSection: SectionType | null
  setSelectedSection: (section: SectionType | null) => void
  hoveredSection: SectionType | null
  setHoveredSection: (section: SectionType | null) => void
  currentTestimonial: number
  setCurrentTestimonial: (index: number) => void
}

export default function WebsiteDemo({
  currentPage,
  setCurrentPage,
  selectedSection,
  setSelectedSection,
  hoveredSection,
  setHoveredSection,
  currentTestimonial,
  setCurrentTestimonial,
}: WebsiteDemoProps) {
  const InteractiveSection = ({
    id,
    children,
    className = "",
  }: {
    id: SectionType
    children: React.ReactNode
    className?: string
  }) => {
    const isHovered = hoveredSection === id
    const isSelected = selectedSection === id

    return (
      <div
        className={cn(
          "cursor-pointer transition-all duration-300 relative",
          isHovered && "ring-2 ring-blue-600 shadow-xl scale-[1.01]",
          isSelected && "ring-2 ring-blue-800 bg-gradient-to-r from-blue-50 to-slate-50",
          className,
        )}
        onMouseEnter={() => setHoveredSection(id)}
        onMouseLeave={() => setHoveredSection(null)}
        onClick={() => setSelectedSection(selectedSection === id ? null : id)}
      >
        {children}
        {isHovered && !isSelected && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-blue-900 text-white shadow-lg animate-pulse">Click to learn</Badge>
          </div>
        )}
        {isSelected && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-green-600 text-white shadow-lg">Selected</Badge>
          </div>
        )}
      </div>
    )
  }

  const renderHomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <InteractiveSection id="hero" className="relative min-h-[600px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1200&text=Personal+Injury+Law+Firm')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-900 text-white px-4 py-2 text-sm font-semibold">
                  #1 Personal Injury Firm
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Maximum
                  <br />
                  <span className="text-blue-600 bg-gradient-to-r from-blue-500 to-slate-500 bg-clip-text text-transparent">
                    Compensation
                  </span>
                  <br />
                  for Your Injuries
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                  Experienced Atlanta personal injury attorneys fighting for the compensation you deserve. No fees
                  unless we win your case.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">No Win, No Fee</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Millions Recovered</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardContent className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Get Your Free Case Evaluation</h3>
                    <p className="text-gray-600">No obligation • Response in 24 hours</p>
                  </div>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="h-12 border-gray-300" />
                    <Input placeholder="Phone Number" type="tel" className="h-12 border-gray-300" />
                    <Input placeholder="Email Address" type="email" className="h-12 border-gray-300" />
                    <Button className="w-full h-12 bg-gradient-to-r from-blue-900 to-slate-700 hover:from-blue-800 hover:to-slate-800 text-white font-semibold text-lg shadow-lg">
                      <Zap className="w-5 h-5 mr-2" />
                      Get Free Estimate
                    </Button>
                  </form>
                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>Your information is secure and protected</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </InteractiveSection>

      {/* Service Buttons */}
      <InteractiveSection id="service-buttons" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Expert installation and refinishing for every flooring need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Car Accidents",
                desc: "Maximum compensation for vehicle collisions",
                features: ["Auto Accidents", "Truck Accidents", "Motorcycle Crashes"],
                color: "from-blue-600 to-blue-800",
              },
              {
                icon: Heart,
                title: "Medical Malpractice",
                desc: "Holding healthcare providers accountable",
                features: ["Hospital Negligence", "Surgical Errors", "Misdiagnosis"],
                color: "from-slate-600 to-slate-800",
              },
              {
                icon: Building,
                title: "Slip & Fall",
                desc: "Premises liability claims",
                features: ["Store Accidents", "Workplace Injuries", "Property Negligence"],
                color: "from-gray-600 to-gray-800",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 shadow-lg bg-white overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardContent className="p-6 md:p-8 text-center">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </InteractiveSection>

      {/* Body Content */}
      <InteractiveSection id="body-content" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Atlanta's Most Trusted
                <br />
                <span className="text-blue-900">Personal Injury Attorneys</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                For over two decades, we've been fighting for Atlanta accident victims and their families. Our
                experienced legal team combines aggressive advocacy with compassionate client service to deliver maximum
                compensation for your injuries.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$50M+</div>
                  <div className="text-gray-600">Recovered for Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">A+</div>
                  <div className="text-gray-600">BBB Rating</div>
                </div>
              </div>
              <Button className="w-full md:w-auto bg-gradient-to-r from-blue-900 to-slate-700 hover:from-blue-800 hover:to-slate-800 text-white px-8 py-3">
                Free Case Consultation
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Professional+Attorney+Team+Meeting"
                alt="Attorney Consultation"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 md:p-6 shadow-xl border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm md:text-base">No Win, No Fee</div>
                    <div className="text-xs md:text-sm text-gray-600">Guaranteed Promise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InteractiveSection>

      {/* Testimonials */}
      <InteractiveSection id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Client Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-gray-600">Real reviews from real Atlanta accident victims</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "After my car accident, I didn't know where to turn. This firm fought hard for me and got me a settlement that covered all my medical bills and more. Couldn't be happier!",
                name: "Sarah Johnson",
                location: "Buckhead, Atlanta",
                rating: 5,
                project: "Car Accident Case",
              },
              {
                quote:
                  "Professional, caring, and results-driven. They handled my slip and fall case with expertise and got me the compensation I deserved. Highly recommend!",
                name: "Mike Chen",
                location: "Midtown, Atlanta",
                rating: 5,
                project: "Slip & Fall Case",
              },
              {
                quote:
                  "The medical malpractice case seemed impossible, but they never gave up. Their dedication and legal expertise made all the difference. Thank you!",
                name: "Lisa Rodriguez",
                location: "Decatur, Atlanta",
                rating: 5,
                project: "Medical Malpractice",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-sm md:text-base">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-700 to-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-base md:text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-gray-600">{testimonial.location}</div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {testimonial.project}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </InteractiveSection>

      {/* Map Section */}
      <InteractiveSection id="map" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Atlanta Law Office</h2>
            <p className="text-lg md:text-xl text-gray-600">Schedule your free consultation today</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Atlanta+Map+with+Law+Office+Location"
                  alt="Atlanta Showroom Location"
                  className="w-full h-60 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    <span className="font-semibold text-sm md:text-base">Atlanta Injury Law Office</span>
                  </div>
                  <p className="text-gray-200 text-xs md:text-sm">123 Peachtree Street, Atlanta, GA 30309</p>
                </div>
              </div>
            </Card>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Office Location</h3>
                  <p className="text-gray-600 text-sm md:text-base">123 Peachtree Street, Atlanta, GA 30309</p>
                  <p className="text-xs md:text-sm text-gray-500">Free parking available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Business Hours</h3>
                  <p className="text-gray-600 text-sm md:text-base">Mon-Fri: 8AM-6PM</p>
                  <p className="text-gray-600 text-sm md:text-base">Sat: 9AM-4PM, Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Service Areas</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Atlanta Metro, Buckhead, Midtown, Decatur, Sandy Springs, and surrounding areas
                  </p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-900 to-slate-700 hover:from-blue-800 hover:to-slate-800 text-white">
                Schedule Showroom Visit
              </Button>
            </div>
          </div>
        </div>
      </InteractiveSection>

      {/* Blog Posts */}
      <InteractiveSection id="blog-posts" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Legal Insights</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Tips & Case Updates</h2>
            <p className="text-lg md:text-xl text-gray-600">Expert advice from Atlanta's personal injury attorneys</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Steps to Take After a Car Accident in Atlanta",
                excerpt:
                  "Learn the crucial steps to protect your rights and maximize your compensation after a vehicle collision...",
                date: "March 15, 2024",
                readTime: "5 min read",
                category: "Car Accidents",
                image: "Car+Accident+Legal+Guide",
              },
              {
                title: "Understanding Medical Malpractice in Georgia",
                excerpt:
                  "Know your rights when healthcare providers fail to meet the standard of care, causing injury or harm...",
                date: "March 10, 2024",
                readTime: "7 min read",
                category: "Medical Malpractice",
                image: "Medical+Malpractice+Law",
              },
              {
                title: "Slip and Fall Claims: What You Need to Know",
                excerpt:
                  "Property owners have a duty to maintain safe premises. Learn when you have a valid slip and fall claim...",
                date: "March 5, 2024",
                readTime: "6 min read",
                category: "Premises Liability",
                image: "Slip+Fall+Legal+Rights",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=250&width=400&text=${post.image}`}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-900 text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-blue-900 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition-all bg-transparent"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </InteractiveSection>

      {/* Footer */}
      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12 relative">
        <div className="px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-900 to-slate-700 rounded-lg flex items-center justify-center mr-3">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Atlanta Injury Law</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fighting for Atlanta accident victims and their families since 1999.
              </p>
              <div className="flex gap-3 mt-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Practice Areas</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Car Accidents</li>
                <li className="hover:text-white cursor-pointer transition-colors">Medical Malpractice</li>
                <li className="hover:text-white cursor-pointer transition-colors">Slip & Fall</li>
                <li className="hover:text-white cursor-pointer transition-colors">Wrongful Death</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">(404) 555-LAW1</li>
                <li className="hover:text-white cursor-pointer transition-colors">info@atlantainjurylaw.com</li>
                <li className="hover:text-white cursor-pointer transition-colors">123 Peachtree Street</li>
                <li className="hover:text-white cursor-pointer transition-colors">Atlanta, GA 30309</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Atlanta Injury Law. All rights reserved. |{" "}
              <span className="text-blue-600">Powered by Elite Web Professionals</span>
            </p>
          </div>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderAboutPage = () => (
    <div className="min-h-screen bg-white">
      <InteractiveSection id="about-intro" className="relative py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-blue-900 text-white px-4 py-2 mb-6">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Atlanta Injury Law</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fighting for justice and maximum compensation for Atlanta accident victims since 1999.
            </p>
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Legal Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced personal injury attorneys with a proven track record of success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith, Esq.",
                title: "Managing Partner",
                experience: "25+ Years Experience",
                specialties: ["Car Accidents", "Medical Malpractice", "Wrongful Death"],
                education: "Harvard Law School, J.D.",
                bar: "Georgia State Bar, Federal Court",
              },
              {
                name: "Sarah Johnson, Esq.",
                title: "Senior Associate",
                experience: "15+ Years Experience",
                specialties: ["Slip & Fall", "Premises Liability", "Product Liability"],
                education: "Emory University Law, J.D.",
                bar: "Georgia State Bar",
              },
              {
                name: "Michael Chen, Esq.",
                title: "Associate Attorney",
                experience: "8+ Years Experience",
                specialties: ["Personal Injury", "Insurance Claims", "Negotiations"],
                education: "Georgia State Law, J.D.",
                bar: "Georgia State Bar",
              },
            ].map((attorney, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-900 to-slate-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{attorney.name}</h3>
                  <p className="text-blue-900 font-semibold mb-2">{attorney.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{attorney.experience}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {attorney.specialties.map((specialty, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>{attorney.education}</p>
                    <p>{attorney.bar}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="mission" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Atlanta Injury Law, we believe every accident victim deserves aggressive representation and maximum
                compensation. Our mission is to level the playing field against insurance companies and corporate
                defendants.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Scale className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Justice for All</h3>
                    <p className="text-gray-600">
                      We fight tirelessly to ensure every client receives fair compensation for their injuries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">No Win, No Fee</h3>
                    <p className="text-gray-600">
                      We only get paid when you do, ensuring our interests are aligned with yours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Compassionate Care</h3>
                    <p className="text-gray-600">
                      We understand the physical and emotional toll of accidents and provide supportive guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Law+Firm+Office+Interior"
                alt="Law Firm Office"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900 mb-1">$50M+</div>
                  <div className="text-sm text-gray-600">Recovered for Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Injury Law. All rights reserved.</p>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderServicesPage = () => (
    <div className="min-h-screen bg-white">
      <InteractiveSection id="services-list" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-blue-900 text-white px-4 py-2 mb-6">Practice Areas</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Legal Services We Provide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive personal injury representation across all major practice areas in Georgia.
          </p>
        </div>
      </InteractiveSection>

      <InteractiveSection id="services-list" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Car Accidents",
                description: "Comprehensive representation for all vehicle collision cases",
                details: ["Rear-end collisions", "Head-on crashes", "Intersection accidents", "Hit and run cases"],
                color: "from-blue-600 to-blue-800",
              },
              {
                icon: Heart,
                title: "Medical Malpractice",
                description: "Holding healthcare providers accountable for negligence",
                details: ["Surgical errors", "Misdiagnosis", "Birth injuries", "Hospital negligence"],
                color: "from-slate-600 to-slate-800",
              },
              {
                icon: Building,
                title: "Slip & Fall",
                description: "Premises liability claims for property-related injuries",
                details: ["Store accidents", "Wet floor incidents", "Inadequate lighting", "Defective stairs"],
                color: "from-gray-600 to-gray-800",
              },
              {
                icon: Zap,
                title: "Truck Accidents",
                description: "Specialized representation for commercial vehicle crashes",
                details: [
                  "18-wheeler accidents",
                  "Delivery truck crashes",
                  "Commercial vehicle liability",
                  "Federal regulations",
                ],
                color: "from-blue-700 to-slate-700",
              },
              {
                icon: Shield,
                title: "Wrongful Death",
                description: "Compassionate representation for families who have lost loved ones",
                details: ["Fatal accidents", "Medical negligence", "Product liability deaths", "Workplace fatalities"],
                color: "from-slate-700 to-gray-700",
              },
              {
                icon: Users,
                title: "Product Liability",
                description: "Cases involving defective or dangerous products",
                details: ["Defective medical devices", "Dangerous drugs", "Automotive defects", "Consumer products"],
                color: "from-gray-700 to-slate-800",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="shadow-xl border-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-900 to-slate-700 hover:from-blue-800 hover:to-slate-800 text-white">
                      Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="cta" className="py-20 bg-gradient-to-r from-blue-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Case Type?</h2>
          <p className="text-xl mb-8 text-blue-100">
            We handle all types of personal injury cases. Contact us for a free consultation.
          </p>
          <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Discuss Your Case
          </Button>
        </div>
      </InteractiveSection>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Injury Law. All rights reserved.</p>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderSpecialsPage = () => (
    <div className="min-h-screen bg-white">
      <InteractiveSection id="specials-grid" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-green-600 text-white px-4 py-2 mb-6">Recent Victories</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Case Results & Settlements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. Here are some of our recent successful case outcomes.
          </p>
        </div>
      </InteractiveSection>

      <InteractiveSection id="specials-grid" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                amount: "$2.3M",
                type: "Car Accident",
                description: "Rear-end collision resulting in spinal injuries",
                outcome: "Settlement",
                year: "2024",
              },
              {
                amount: "$1.8M",
                type: "Medical Malpractice",
                description: "Surgical error leading to permanent disability",
                outcome: "Jury Verdict",
                year: "2024",
              },
              {
                amount: "$950K",
                type: "Slip & Fall",
                description: "Store negligence causing hip fracture",
                outcome: "Settlement",
                year: "2023",
              },
              {
                amount: "$1.2M",
                type: "Truck Accident",
                description: "Commercial vehicle collision with multiple injuries",
                outcome: "Settlement",
                year: "2023",
              },
              {
                amount: "$3.1M",
                type: "Wrongful Death",
                description: "Fatal accident due to negligent security",
                outcome: "Settlement",
                year: "2023",
              },
              {
                amount: "$750K",
                type: "Product Liability",
                description: "Defective medical device causing complications",
                outcome: "Settlement",
                year: "2024",
              },
            ].map((result, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">{result.amount}</div>
                  <div className="text-green-100">
                    {result.outcome} • {result.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{result.type}</h3>
                  <p className="text-gray-600 mb-4">{result.description}</p>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">Successful {result.outcome}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-4">
              *Past results do not guarantee future outcomes. Each case is unique and results depend on specific
              circumstances.
            </p>
            <div className="bg-blue-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Recovered for Clients</h3>
              <div className="text-5xl font-bold text-blue-900 mb-2">$50M+</div>
              <p className="text-gray-600">Over 25 years of successful representation</p>
            </div>
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="cta" className="py-20 bg-gradient-to-r from-blue-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Could Your Case Be Next?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free case evaluation to learn about your potential compensation.
          </p>
          <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Get Free Case Review
          </Button>
        </div>
      </InteractiveSection>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Injury Law. All rights reserved.</p>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderBlogPage = () => (
    <div className="min-h-screen bg-white">
      <InteractiveSection id="blog-list" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-blue-900 text-white px-4 py-2 mb-6">Legal Resources</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Legal Blog & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest legal insights, case updates, and personal injury law guidance from our
            experienced attorneys.
          </p>
        </div>
      </InteractiveSection>

      <InteractiveSection id="blog-list" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "What to Do Immediately After a Car Accident in Georgia",
                excerpt:
                  "Essential steps to protect your rights and strengthen your personal injury claim after a vehicle collision...",
                date: "March 15, 2024",
                readTime: "8 min read",
                category: "Car Accidents",
                image: "Car+Accident+Legal+Steps",
                featured: true,
              },
              {
                title: "Understanding Georgia's Statute of Limitations for Personal Injury",
                excerpt:
                  "Time limits for filing personal injury lawsuits in Georgia and why acting quickly is crucial...",
                date: "March 12, 2024",
                readTime: "6 min read",
                category: "Legal Process",
                image: "Georgia+Statute+Limitations",
              },
              {
                title: "Medical Malpractice: When Healthcare Goes Wrong",
                excerpt:
                  "Recognizing medical negligence and understanding your rights when healthcare providers fail to meet standards...",
                date: "March 10, 2024",
                readTime: "10 min read",
                category: "Medical Malpractice",
                image: "Medical+Malpractice+Rights",
              },
              {
                title: "Slip and Fall Accidents: Proving Property Owner Negligence",
                excerpt:
                  "Key elements needed to establish liability in premises liability cases and maximize compensation...",
                date: "March 8, 2024",
                readTime: "7 min read",
                category: "Premises Liability",
                image: "Slip+Fall+Negligence",
              },
              {
                title: "Dealing with Insurance Companies After an Accident",
                excerpt:
                  "Common tactics used by insurance adjusters and how to protect yourself during claim negotiations...",
                date: "March 5, 2024",
                readTime: "9 min read",
                category: "Insurance Claims",
                image: "Insurance+Company+Tactics",
              },
              {
                title: "Wrongful Death Claims: Seeking Justice for Families",
                excerpt:
                  "Understanding wrongful death laws in Georgia and how families can pursue compensation for their loss...",
                date: "March 1, 2024",
                readTime: "12 min read",
                category: "Wrongful Death",
                image: "Wrongful+Death+Claims",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden ${post.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=250&width=400&text=${post.image}`}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${post.featured ? "bg-green-600" : "bg-blue-900"} text-white`}>
                      {post.featured ? "Featured" : post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-blue-900 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition-all bg-transparent"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="cta" className="py-20 bg-gradient-to-r from-blue-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Advice?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't let legal questions go unanswered. Get personalized guidance from our experienced attorneys.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input placeholder="Your email address" className="flex-1 bg-white text-gray-900" />
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-6">Subscribe</Button>
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Injury Law. All rights reserved.</p>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderContactPage = () => (
    <div className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 gap-0">
        <InteractiveSection id="contact-form" className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-lg mx-auto">
            <Badge className="bg-blue-900 text-white px-4 py-2 mb-6">Free Consultation</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Free Case Evaluation</h1>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Tell us about your accident and injuries. We'll review your case for free and explain your legal options
              within 24 hours.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="h-12 border-gray-300" />
                <Input placeholder="Last Name" className="h-12 border-gray-300" />
              </div>
              <Input placeholder="Phone Number" type="tel" className="h-12 border-gray-300" />
              <Input placeholder="Email Address" type="email" className="h-12 border-gray-300" />
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Type of Case</label>
                <select className="w-full h-12 border border-gray-300 rounded-md px-3 bg-white">
                  <option>Select case type...</option>
                  <option>Car Accident</option>
                  <option>Medical Malpractice</option>
                  <option>Slip & Fall</option>
                  <option>Truck Accident</option>
                  <option>Wrongful Death</option>
                  <option>Other</option>
                </select>
              </div>
              <Textarea placeholder="Describe your accident and injuries..." rows={4} className="border-gray-300" />
              <Button className="w-full h-12 bg-gradient-to-r from-blue-900 to-slate-700 hover:from-blue-800 hover:to-slate-800 text-white font-semibold text-lg shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Case Review
              </Button>
            </form>
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 text-green-800 text-sm">
                <Shield className="w-4 h-4" />
                <span className="font-semibold">100% Confidential</span>
              </div>
              <p className="text-green-700 text-xs mt-1">
                All information shared is protected by attorney-client privilege
              </p>
            </div>
          </div>
        </InteractiveSection>

        <InteractiveSection id="contact-info" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Contact Our Legal Team</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">24/7 Legal Hotline</h3>
                  <p className="text-lg text-blue-900 font-semibold">(404) 555-LAW1</p>
                  <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@atlantainjurylaw.com</p>
                  <p className="text-sm text-gray-600">Response within 2 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Law Office</h3>
                  <p className="text-gray-600">123 Peachtree Street</p>
                  <p className="text-gray-600">Atlanta, GA 30309</p>
                  <p className="text-sm text-gray-600">Free parking • Wheelchair accessible</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 8AM-6PM</p>
                  <p className="text-gray-600">Sat: 9AM-2PM</p>
                  <p className="text-sm text-gray-600">Evening appointments available</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  No fees unless we win your case
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  25+ years of experience
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  $50M+ recovered for clients
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Free case evaluation
                </li>
              </ul>
            </div>
          </div>
        </InteractiveSection>
      </div>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Injury Law. All rights reserved.</p>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "about":
        return renderAboutPage()
      case "services":
        return renderServicesPage()
      case "specials":
        return renderSpecialsPage()
      case "blog":
        return renderBlogPage()
      case "contact":
        return renderContactPage()
      default:
        return renderHomePage()
    }
  }

  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <InteractiveSection id="banner" className="bg-gradient-to-r from-black to-gray-900 py-4 relative">
        <div className="text-white font-bold text-center text-lg flex items-center justify-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" />
          Free Consultation - No Fees Unless We Win Your Case
          <Zap className="w-5 h-5 text-blue-600" />
        </div>
      </InteractiveSection>

      {/* Header */}
      <InteractiveSection id="header" className="bg-white shadow-lg border-b relative">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-slate-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Atlanta Injury Law</h1>
                <p className="text-sm text-gray-600">Personal Injury Attorneys Since 1999</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-900">
                <Phone className="w-5 h-5 text-blue-900" />
                <span className="font-bold text-lg">(770) 874-6085</span>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="p-2 hover:bg-blue-50 border-blue-200 bg-transparent">
                  <Facebook className="w-4 h-4 text-blue-600" />
                </Button>
                <Button variant="outline" size="sm" className="p-2 hover:bg-pink-50 border-pink-200 bg-transparent">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </Button>
              </div>
            </div>
          </div>
          <nav className="mt-6 flex gap-2">
            {pages.map((page) => {
              const Icon = page.icon
              return (
                <Button
                  key={page.id}
                  variant={currentPage === page.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    setCurrentPage(page.id)
                    setSelectedSection(null)
                  }}
                  className={cn(
                    "flex items-center gap-2 transition-all duration-300",
                    currentPage === page.id
                      ? "bg-gradient-to-r from-blue-900 to-slate-700 hover:from-blue-800 hover:to-slate-800 text-white shadow-lg"
                      : "hover:bg-blue-50 hover:text-blue-900",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {page.label}
                </Button>
              )
            })}
          </nav>
        </div>
      </InteractiveSection>

      {/* Page Content - Scrollable area */}
      <div className="flex-1 overflow-y-auto">{renderCurrentPage()}</div>
    </div>
  )
}
