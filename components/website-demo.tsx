"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Phone,
  Facebook,
  Instagram,
  Star,
  MapPin,
  Calendar,
  ArrowRight,
  Clock,
  Shield,
  Users,
  Zap,
  Heart,
  Scissors,
  Palette,
  Crown,
  Gift,
  Camera,
} from "lucide-react"

export type PageType =
  | "home"
  | "about"
  | "services"
  | "specials"
  | "blog"
  | "contact"
  | "stylists"
  | "gallery"
  | "reviews"
export type SectionType =
  | "header"
  | "hero"
  | "top-services"
  | "stylist-highlights"
  | "gallery"
  | "special-offers"
  | "reviews"
  | "salon-experience"
  | "footer"
  | "salon-story"
  | "meet-team"
  | "awards"
  | "salon-culture"
  | "about-booking"
  | "services-header"
  | "service-categories"
  | "services-faq"
  | "stylists-header"
  | "stylist-profiles"
  | "gallery-header"
  | "gallery-filters"
  | "gallery-grid"
  | "specials-header"
  | "current-deals"
  | "claim-form"
  | "reviews-header"
  | "review-stats"
  | "featured-reviews"
  | "leave-review"
  | "blog-header"
  | "featured-post"
  | "blog-posts"
  | "newsletter"
  | "popular-posts"
  | "contact-form"
  | "contact-info"

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
          isHovered && "ring-2 ring-blue-400 shadow-xl scale-[1.01]",
          isSelected && "ring-2 ring-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50",
          className,
        )}
        onMouseEnter={() => setHoveredSection(id)}
        onMouseLeave={() => setHoveredSection(null)}
        onClick={() => setSelectedSection(selectedSection === id ? null : id)}
      >
        {children}
        {isHovered && !isSelected && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-blue-600 text-white shadow-lg animate-pulse">Click to learn</Badge>
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
      {/* Header */}
      <InteractiveSection id="header" className="bg-white shadow-lg border-b relative sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Bella Hair Studio</h1>
                <p className="text-sm text-gray-600">Atlanta's Hair Experts</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-900">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-lg">(404) 555-HAIR</span>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 font-semibold">
                Book Appointment
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="p-2 hover:bg-blue-50 border-blue-200 bg-transparent">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </Button>
                <Button variant="outline" size="sm" className="p-2 hover:bg-blue-50 border-blue-200 bg-transparent">
                  <Facebook className="w-4 h-4 text-blue-600" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="px-3 py-2 hover:bg-blue-50 border-blue-200 bg-transparent"
                >
                  <Gift className="w-4 h-4 text-blue-600 mr-1" />
                  <span className="text-sm">Gift Cards</span>
                </Button>
              </div>
            </div>
          </div>
          <nav className="mt-6 flex gap-2">
            {["Home", "About", "Services", "Stylists", "Gallery", "Specials", "Reviews", "Blog", "Contact"].map(
              (item) => (
                <Button
                  key={item}
                  variant="ghost"
                  size="sm"
                  className="hover:bg-blue-50 hover:text-blue-700 text-gray-700"
                  onClick={() => {
                    const pageId = item.toLowerCase() as PageType
                    setCurrentPage(pageId)
                  }}
                >
                  {item}
                </Button>
              ),
            )}
          </nav>
        </div>
      </InteractiveSection>

      {/* Hero Section */}
      <InteractiveSection id="hero" className="relative min-h-[600px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1200&text=Beautiful+Hair+Salon+Interior')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Atlanta's Hair
                  <br />
                  <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Color & Style
                  </span>
                  <br />
                  Experts
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                  Cuts, Hair Color, Extensions, Blowouts, and More
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                  onClick={() => setCurrentPage("services")}
                >
                  View Services
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 bg-transparent"
                  onClick={() => setCurrentPage("stylists")}
                >
                  Meet Our Stylists
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 bg-transparent"
                  onClick={() => setCurrentPage("gallery")}
                >
                  See Gallery
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardContent className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Book Your Appointment</h3>
                    <p className="text-gray-600">Easy online booking • Available 24/7</p>
                  </div>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="h-12 border-gray-300" />
                    <Input placeholder="Phone Number" type="tel" className="h-12 border-gray-300" />
                    <Input placeholder="Email Address" type="email" className="h-12 border-gray-300" />
                    <Select>
                      <SelectTrigger className="h-12 border-gray-300">
                        <SelectValue placeholder="Preferred Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="haircut">Haircut</SelectItem>
                        <SelectItem value="color">Hair Color</SelectItem>
                        <SelectItem value="extensions">Extensions</SelectItem>
                        <SelectItem value="blowout">Blowout</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="h-12 border-gray-300">
                        <SelectValue placeholder="Preferred Stylist" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sarah">Sarah Johnson</SelectItem>
                        <SelectItem value="mike">Mike Chen</SelectItem>
                        <SelectItem value="lisa">Lisa Rodriguez</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Preferred Date/Time" className="h-12 border-gray-300" />
                    <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg shadow-lg">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Now
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to receive calls and text messages from us regarding your inquiry.
                      Message/data rates may apply. Opt out anytime.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </InteractiveSection>

      {/* Top Services */}
      <InteractiveSection id="top-services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Top Services</h2>
            <p className="text-lg md:text-xl text-gray-600">Expert styling and coloring for every hair need</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: "Hair Color",
                desc: "Vibrant color transformations",
                price: "Starting at $85",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: Scissors,
                title: "Haircut",
                desc: "Precision cuts & styling",
                price: "Starting at $45",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Crown,
                title: "Extensions",
                desc: "Length & volume solutions",
                price: "Starting at $150",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Zap,
                title: "Blowouts",
                desc: "Professional styling",
                price: "Starting at $35",
                color: "from-pink-500 to-red-500",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 shadow-lg bg-white overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <p className="text-blue-600 font-semibold mb-4">{service.price}</p>
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

      {/* Stylist Highlights */}
      <InteractiveSection id="stylist-highlights" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Stylists</h2>
            <p className="text-lg md:text-xl text-gray-600">Talented professionals ready to transform your look</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                specialty: "Color Specialist",
                bio: "15+ years of experience in hair coloring and color correction",
                instagram: "@sarahhair_atl",
                image: "/placeholder.svg?height=200&width=200&text=Sarah+Johnson",
              },
              {
                name: "Mike Chen",
                specialty: "Cut & Style Expert",
                bio: "Master of modern cuts and precision styling techniques",
                instagram: "@mikecutsatl",
                image: "/placeholder.svg?height=200&width=200&text=Mike+Chen",
              },
              {
                name: "Lisa Rodriguez",
                specialty: "Extension Specialist",
                bio: "Expert in all extension methods and hair transformations",
                instagram: "@lisaextensions",
                image: "/placeholder.svg?height=200&width=200&text=Lisa+Rodriguez",
              },
            ].map((stylist, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={stylist.image || "/placeholder.svg"}
                    alt={stylist.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stylist.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{stylist.specialty}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{stylist.bio}</p>
                  <p className="text-pink-600 text-sm mb-4">{stylist.instagram}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book with Me</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </InteractiveSection>

      {/* Before & After Gallery */}
      <InteractiveSection id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Before & After Gallery</h2>
            <p className="text-lg md:text-xl text-gray-600">Real transformations from our talented team</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/placeholder.svg?height=300&width=400&text=Hair+Color+Transformation",
                alt: "Beautiful Color Transformation",
              },
              {
                image: "/placeholder.svg?height=300&width=400&text=Hair+Highlights",
                alt: "Stunning Hair Highlights",
              },
              {
                image: "/placeholder.svg?height=300&width=400&text=Dramatic+Color+Change",
                alt: "Dramatic Color Change",
              },
              {
                image: "/placeholder.svg?height=300&width=400&text=Modern+Cut+Style",
                alt: "Modern Cut & Style",
              },
              {
                image: "/placeholder.svg?height=300&width=400&text=Hair+Extensions",
                alt: "Length & Volume Addition",
              },
              {
                image: "/placeholder.svg?height=300&width=400&text=Hair+Makeover",
                alt: "Complete Hair Makeover",
              },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img src={item.image || "/placeholder.svg"} alt={item.alt} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Before & After</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Camera className="w-5 h-5 mr-2" />
              View Full Gallery
            </Button>
          </div>
        </div>
      </InteractiveSection>

      {/* Special Offers */}
      <InteractiveSection id="special-offers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
            <p className="text-lg md:text-xl text-gray-600">Limited time deals for new and returning clients</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">20% Off for New Clients</h3>
                <p className="mb-6">First-time clients save 20% on any service over $50</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100">Claim Offer</Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-pink-600 to-purple-600 text-white overflow-hidden">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Refer a Friend, Get $20 Off</h3>
                <p className="mb-6">Both you and your friend save when they book their first appointment</p>
                <Button className="bg-white text-pink-600 hover:bg-gray-100">Refer Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </InteractiveSection>

      {/* Featured Reviews */}
      <InteractiveSection id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-gray-600">Real reviews from real Atlanta clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Sarah transformed my hair with the most beautiful color! I've never felt more confident. The whole team is amazing!",
                name: "Jessica Williams",
                location: "Buckhead, Atlanta",
                rating: 5,
                service: "Hair Color",
              },
              {
                quote:
                  "Best haircut I've ever had! Mike really listened to what I wanted and delivered exactly that. Will definitely be back!",
                name: "David Thompson",
                location: "Midtown, Atlanta",
                rating: 5,
                service: "Haircut",
              },
              {
                quote:
                  "Lisa's extension work is incredible! My hair looks so natural and full. The salon atmosphere is so welcoming too.",
                name: "Maria Garcia",
                location: "Decatur, Atlanta",
                rating: 5,
                service: "Extensions",
              },
            ].map((review, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{review.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {review.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </InteractiveSection>

      {/* Salon Experience */}
      <InteractiveSection id="salon-experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Bella Experience</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Step into our welcoming, inclusive salon where relaxation meets expertise. We're committed to eco-friendly
              practices and creating a space where everyone feels beautiful.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Relaxing</h3>
              <p className="text-gray-600">Unwind in our peaceful, spa-like atmosphere</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusive</h3>
              <p className="text-gray-600">Welcoming space for all hair types and styles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable products and practices</p>
            </div>
          </div>
        </div>
      </InteractiveSection>

      {/* Footer */}
      <InteractiveSection id="footer" className="bg-gradient-to-r from-gray-900 to-black text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Bella Hair Studio</span>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <a href="#" className="hover:text-white transition-colors">
                    123 Haircut Lane, Atlanta, GA 30309
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Tue-Fri: 9AM-7PM, Sat: 9AM-5PM</span>
                </div>
                <p>Free parking available</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Book Now
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Policies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Follow Us</h4>
              <div className="flex gap-3 mb-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
              <p className="text-sm text-gray-400">See our latest work on Instagram!</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Stay Updated</h4>
              <div className="space-y-3">
                <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Subscribe for Specials</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2024 Bella Hair Studio. All rights reserved. |
                  <span className="text-blue-400"> Powered by Elite Web Professionals</span>
                </p>
                <p className="text-blue-400 text-sm mt-1">We can't wait to help you love your hair!</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Licensed & Certified Salon</p>
                <Button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </InteractiveSection>
    </div>
  )

  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return renderHomePage()
      default:
        return renderHomePage()
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto">{renderPageContent()}</div>
    </div>
  )
}
