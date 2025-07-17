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
  TreePine,
  Layers,
  Grid3X3,
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
  Percent,
  Shield,
  Users,
  Zap,
  Heart,
  MessageCircle,
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
  { id: "services" as PageType, label: "Services", icon: Briefcase },
  { id: "specials" as PageType, label: "Specials", icon: Percent },
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
          isHovered && "ring-2 ring-amber-400 shadow-xl scale-[1.01]",
          isSelected && "ring-2 ring-amber-600 bg-gradient-to-r from-amber-50 to-orange-50",
          className,
        )}
        onMouseEnter={() => setHoveredSection(id)}
        onMouseLeave={() => setHoveredSection(null)}
        onClick={() => setSelectedSection(selectedSection === id ? null : id)}
      >
        {children}
        {isHovered && !isSelected && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-amber-600 text-white shadow-lg animate-pulse">Click to learn</Badge>
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
            backgroundImage: `url('/placeholder.svg?height=600&width=1200&text=Beautiful+Hardwood+Living+Room')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <Badge className="bg-amber-600 text-white px-4 py-2 text-sm font-semibold">#1 Rated in Atlanta</Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Premium
                  <br />
                  <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Flooring
                  </span>
                  <br />
                  Solutions
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                  Transform your Atlanta home with expert hardwood, carpet, and tile installation. 20+ years of
                  craftsmanship you can trust.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium">20+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Users className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium">5000+ Happy Customers</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardContent className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Get Your Free Estimate</h3>
                    <p className="text-gray-600">No obligation • Response in 24 hours</p>
                  </div>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="h-12 border-gray-300" />
                    <Input placeholder="Phone Number" type="tel" className="h-12 border-gray-300" />
                    <Input placeholder="Email Address" type="email" className="h-12 border-gray-300" />
                    <Button className="w-full h-12 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg shadow-lg">
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
                icon: TreePine,
                title: "Hardwood Flooring",
                desc: "Premium installation & refinishing",
                features: ["Solid & Engineered", "Refinishing", "Repair Services"],
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: Layers,
                title: "Luxury Carpet",
                desc: "High-end carpet solutions",
                features: ["Residential", "Commercial", "Custom Installation"],
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: Grid3X3,
                title: "Tile & Stone",
                desc: "Ceramic & natural stone",
                features: ["Ceramic & Porcelain", "Natural Stone", "Custom Patterns"],
                color: "from-green-500 to-emerald-500",
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
              <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-6">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Atlanta's Most Trusted
                <br />
                <span className="text-amber-600">Flooring Experts</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                For over two decades, we've been transforming Atlanta homes with premium flooring solutions. Our expert
                team combines traditional craftsmanship with modern techniques to deliver exceptional results that stand
                the test of time.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">5000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">98%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">A+</div>
                  <div className="text-gray-600">BBB Rating</div>
                </div>
              </div>
              <Button className="w-full md:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3">
                Schedule Consultation
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Beautiful+Flooring+Installation"
                alt="Flooring Installation"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 md:p-6 shadow-xl border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm md:text-base">100% Satisfaction</div>
                    <div className="text-xs md:text-sm text-gray-600">Guaranteed Quality</div>
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Customer Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg md:text-xl text-gray-600">Real reviews from real Atlanta homeowners</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Absolutely incredible work! The hardwood floors transformed our entire home. The team was professional, clean, and finished ahead of schedule.",
                name: "Sarah Johnson",
                location: "Buckhead, Atlanta",
                rating: 5,
                project: "Hardwood Installation",
              },
              {
                quote:
                  "Best flooring company in Atlanta! They helped us choose the perfect tile for our kitchen and the installation was flawless. Highly recommend!",
                name: "Mike Chen",
                location: "Midtown, Atlanta",
                rating: 5,
                project: "Tile Installation",
              },
              {
                quote:
                  "Professional service from start to finish. Our new carpet looks amazing and they cleaned up everything perfectly. Will definitely use again!",
                name: "Lisa Rodriguez",
                location: "Decatur, Atlanta",
                rating: 5,
                project: "Carpet Installation",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-sm md:text-base">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Atlanta Showroom</h2>
            <p className="text-lg md:text-xl text-gray-600">See our flooring samples in person</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Atlanta+Map+with+Showroom+Location"
                  alt="Atlanta Showroom Location"
                  className="w-full h-60 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
                    <span className="font-semibold text-sm md:text-base">Atlanta Floors Showroom</span>
                  </div>
                  <p className="text-gray-200 text-xs md:text-sm">123 Peachtree Street, Atlanta, GA 30309</p>
                </div>
              </div>
            </Card>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Showroom Location</h3>
                  <p className="text-gray-600 text-sm md:text-base">123 Peachtree Street, Atlanta, GA 30309</p>
                  <p className="text-xs md:text-sm text-gray-500">Free parking available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Business Hours</h3>
                  <p className="text-gray-600 text-sm md:text-base">Mon-Fri: 8AM-6PM</p>
                  <p className="text-gray-600 text-sm md:text-base">Sat: 9AM-4PM, Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">Service Areas</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Atlanta Metro, Buckhead, Midtown, Decatur, Sandy Springs, and surrounding areas
                  </p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Latest Insights</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flooring Tips & Trends</h2>
            <p className="text-lg md:text-xl text-gray-600">Expert advice from Atlanta's flooring professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Benefits of Hardwood Flooring for Atlanta Homes",
                excerpt:
                  "Discover why hardwood flooring is perfect for Georgia's climate and adds lasting value to your home...",
                date: "March 15, 2024",
                readTime: "5 min read",
                category: "Hardwood",
                image: "Hardwood+Benefits+Guide",
              },
              {
                title: "2024 Flooring Trends: What's Hot in Atlanta",
                excerpt:
                  "From luxury vinyl to exotic hardwoods, explore the flooring trends taking Atlanta by storm this year...",
                date: "March 10, 2024",
                readTime: "7 min read",
                category: "Trends",
                image: "2024+Flooring+Trends",
              },
              {
                title: "Tile vs. Hardwood: Making the Right Choice",
                excerpt:
                  "Compare durability, maintenance, and style to choose the perfect flooring for your Atlanta home...",
                date: "March 5, 2024",
                readTime: "6 min read",
                category: "Comparison",
                image: "Tile+vs+Hardwood",
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
                    <Badge className="bg-amber-600 text-white">{post.category}</Badge>
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
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all bg-transparent"
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
                <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Atlanta Floors</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium flooring solutions for Atlanta homes and businesses since 2003.
              </p>
              <div className="flex gap-3 mt-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Hardwood Installation</li>
                <li className="hover:text-white cursor-pointer transition-colors">Carpet Installation</li>
                <li className="hover:text-white cursor-pointer transition-colors">Tile Installation</li>
                <li className="hover:text-white cursor-pointer transition-colors">Floor Refinishing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">(770) 874-6085</li>
                <li className="hover:text-white cursor-pointer transition-colors">info@atlantafloors.com</li>
                <li className="hover:text-white cursor-pointer transition-colors">123 Peachtree Street</li>
                <li className="hover:text-white cursor-pointer transition-colors">Atlanta, GA 30309</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Legal</h4>
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
              © 2024 Atlanta Floors. All rights reserved. |{" "}
              <span className="text-amber-400">Powered by Elite Web Professionals</span>
            </p>
          </div>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderAboutPage = () => (
    <div className="min-h-screen bg-white">
      <InteractiveSection id="about-intro" className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-6">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Atlanta Floors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting beautiful floors and building lasting relationships since 2003.
            </p>
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Expert Team</h2>
          <p className="text-gray-600 mb-12">Professional flooring specialists with decades of combined experience.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Team Member {i}</h3>
                  <p className="text-gray-600 text-sm">Flooring Specialist</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Floors. All rights reserved.</p>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderServicesPage = () => (
    <div className="min-h-screen bg-white">
      <InteractiveSection id="services-list" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-amber-600 text-white px-4 py-2 mb-6">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Flooring Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hardwood to carpet to tile, we deliver exceptional craftsmanship for every flooring need.
          </p>
        </div>
      </InteractiveSection>

      <InteractiveSection id="cta" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Transform Your Space?</h2>
          <Button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3">
            Get Free Consultation
          </Button>
        </div>
      </InteractiveSection>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Floors. All rights reserved.</p>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderSpecialsPage = () => (
    <div className="min-h-screen bg-white">
      <InteractiveSection id="specials-grid" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-red-600 text-white px-4 py-2 mb-6 animate-pulse">Limited Time</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Special Offers & Deals</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save big on premium flooring with our exclusive seasonal promotions.
          </p>
        </div>
      </InteractiveSection>

      <InteractiveSection id="cta" className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Don't Miss These Savings!</h2>
          <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">Claim Your Deal</Button>
        </div>
      </InteractiveSection>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Floors. All rights reserved.</p>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderBlogPage = () => (
    <div className="min-h-screen bg-white">
      <InteractiveSection id="blog-list" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-amber-600 text-white px-4 py-2 mb-6">Expert Insights</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Flooring Tips & Trends</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest flooring advice from Atlanta's premier professionals.
          </p>
        </div>
      </InteractiveSection>

      <InteractiveSection id="cta" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Subscribe to Our Newsletter</h2>
          <div className="max-w-md mx-auto flex gap-4">
            <Input placeholder="Your email address" className="flex-1" />
            <Button className="bg-amber-600 text-white">Subscribe</Button>
          </div>
        </div>
      </InteractiveSection>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Floors. All rights reserved.</p>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderContactPage = () => (
    <div className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 gap-0">
        <InteractiveSection
          id="contact-form"
          className="py-20 px-4 md:px-8 bg-gradient-to-br from-amber-50 to-orange-50"
        >
          <div className="max-w-lg mx-auto">
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-6">Get Started</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Free Estimate</h1>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Ready to transform your space? Fill out the form below and we'll provide a detailed estimate within 24
              hours.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="h-12 border-gray-300" />
                <Input placeholder="Last Name" className="h-12 border-gray-300" />
              </div>
              <Input placeholder="Phone Number" type="tel" className="h-12 border-gray-300" />
              <Input placeholder="Email Address" type="email" className="h-12 border-gray-300" />
              <Textarea placeholder="Project Details & Questions" rows={4} className="border-gray-300" />
              <Button className="w-full h-12 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Send My Request
              </Button>
            </form>
          </div>
        </InteractiveSection>

        <InteractiveSection id="contact-info" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-lg text-amber-600 font-semibold">(770) 874-6085</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@atlantafloors.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Showroom</h3>
                  <p className="text-gray-600">123 Peachtree Street</p>
                  <p className="text-gray-600">Atlanta, GA 30309</p>
                </div>
              </div>
            </div>
          </div>
        </InteractiveSection>
      </div>

      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Atlanta Floors. All rights reserved.</p>
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
          <Zap className="w-5 h-5 text-amber-400" />
          Financing Available - 0% APR for Qualified Customers
          <Zap className="w-5 h-5 text-amber-400" />
        </div>
      </InteractiveSection>

      {/* Header */}
      <InteractiveSection id="header" className="bg-white shadow-lg border-b relative">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Atlanta Floors</h1>
                <p className="text-sm text-gray-600">Premium Flooring Solutions Since 2003</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-900">
                <Phone className="w-5 h-5 text-amber-600" />
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
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg"
                      : "hover:bg-amber-50 hover:text-amber-700",
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
