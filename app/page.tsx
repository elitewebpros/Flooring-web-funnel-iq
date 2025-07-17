"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, ChevronDown, ChevronUp } from "lucide-react"

import WebsiteDemo, { type PageType, type SectionType } from "@/components/website-demo"
import EducationalContent from "@/components/educational-content"

export default function FlooringConversionTool() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")
  const [selectedSection, setSelectedSection] = useState<SectionType | null>(null)
  const [hoveredSection, setHoveredSection] = useState<SectionType | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEducationalPanelOpen, setIsEducationalPanelOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Content */}
        <div className="flex-1">
          <WebsiteDemo
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            hoveredSection={hoveredSection}
            setHoveredSection={setHoveredSection}
            currentTestimonial={currentTestimonial}
            setCurrentTestimonial={setCurrentTestimonial}
          />
        </div>

        {/* Mobile Educational Panel Toggle */}
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            onClick={() => setIsEducationalPanelOpen(!isEducationalPanelOpen)}
            className="bg-[#2596ff] hover:bg-[#1479e5] text-white rounded-full w-14 h-14 shadow-2xl"
          >
            {isEducationalPanelOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronUp className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Educational Panel */}
        {isEducationalPanelOpen && (
          <div className="fixed inset-x-0 bottom-0 z-40 bg-white border-t-4 border-[#2596ff] shadow-2xl max-h-[70vh] overflow-hidden">
            <div className="bg-black p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#2596ff] to-[#1479e5] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Conversion Insights</h2>
                  <p className="text-[#2596ff] text-sm">Educational Content</p>
                </div>
              </div>
            </div>

            <div className="p-4 overflow-y-auto max-h-[50vh]">
              <EducationalContent currentPage={currentPage} selectedSection={selectedSection} />
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen gap-6 p-6">
        {/* Left Panel - Website Demo (65%) */}
        <div className="w-[65%] bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-screen">
          <div className="flex-1 overflow-y-auto">
            <WebsiteDemo
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
              hoveredSection={hoveredSection}
              setHoveredSection={setHoveredSection}
              currentTestimonial={currentTestimonial}
              setCurrentTestimonial={setCurrentTestimonial}
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 shadow-sm"></div>

        {/* Right Panel - Educational Content (35%) */}
        <div className="w-[35%] flex flex-col max-h-screen">
          <EducationalContent currentPage={currentPage} selectedSection={selectedSection} />
        </div>
      </div>
    </div>
  )
}
