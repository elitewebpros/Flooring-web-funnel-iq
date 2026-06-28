"use client"

import { useCallback, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { TrendingUp, ClipboardList } from "lucide-react"

import WebsiteDemo from "@/components/website-demo"
import CoachPanel from "@/components/coach-panel"
import { pageSections, type PageType, type SectionType } from "@/lib/conversion-content"

export default function FlooringConversionTool() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")
  const [selectedSection, setSelectedSection] = useState<SectionType | null>(null)
  const [studiedSections, setStudiedSections] = useState<SectionType[]>([])
  const [isCoachOpen, setIsCoachOpen] = useState(false)

  const handleSetPage = useCallback((page: PageType) => {
    setCurrentPage(page)
    setSelectedSection(null)
  }, [])

  const handleStudy = useCallback((section: SectionType) => {
    setSelectedSection(section)
    setStudiedSections((prev) => (prev.includes(section) ? prev : [...prev, section]))
    // Only auto-open the drawer on mobile; the desktop coach panel is always visible.
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
      setIsCoachOpen(true)
    }
  }, [])

  // Progress is scoped to the sections available on the current page.
  const { studiedCount, totalSections } = useMemo(() => {
    const sections = pageSections[currentPage] ?? []
    return {
      studiedCount: sections.filter((s) => studiedSections.includes(s)).length,
      totalSections: sections.length,
    }
  }, [currentPage, studiedSections])

  const demo = (
    <WebsiteDemo
      currentPage={currentPage}
      setCurrentPage={handleSetPage}
      selectedSection={selectedSection}
      onStudy={handleStudy}
      studiedSections={studiedSections}
    />
  )

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      {/* Tool header (tool chrome — separate from the example website) */}
      <header className="flex-shrink-0 border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
              <TrendingUp className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-sm font-bold leading-tight text-slate-900 sm:text-base">
                Flooring Website Conversion Tool
              </h1>
              <p className="text-xs leading-tight text-slate-500 sm:text-sm">
                Study a high-converting flooring website and click each section to learn why it converts.
              </p>
            </div>
          </div>
          <Badge variant="outline" className="hidden border-slate-300 text-slate-600 sm:inline-flex">
            Interactive Demo
          </Badge>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Example website (rendered once, shared across breakpoints) */}
        <main className="flex-1 overflow-y-auto lg:border-r lg:border-slate-200" aria-label="Example flooring website">
          <div className="bg-white">{demo}</div>
        </main>

        {/* Desktop coach panel */}
        <aside className="hidden w-[380px] flex-shrink-0 overflow-hidden bg-white lg:flex xl:w-[420px]">
          <CoachPanel
            selectedSection={selectedSection}
            studiedCount={studiedCount}
            totalSections={totalSections}
          />
        </aside>
      </div>

      {/* Mobile coach trigger */}
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <Button
          onClick={() => setIsCoachOpen(true)}
          aria-expanded={isCoachOpen}
          aria-haspopup="dialog"
          className="h-12 rounded-full bg-blue-600 px-5 text-white shadow-2xl hover:bg-blue-700"
        >
          <ClipboardList className="mr-2 h-5 w-5" aria-hidden="true" />
          View Coach Notes
          {studiedCount > 0 && (
            <span className="ml-2 rounded-full bg-white/25 px-2 py-0.5 text-xs font-semibold">{studiedCount}</span>
          )}
        </Button>
      </div>

      {/* Mobile coach drawer */}
      <Sheet open={isCoachOpen} onOpenChange={setIsCoachOpen}>
        <SheetContent side="bottom" className="h-[85vh] p-0 lg:hidden">
          <SheetHeader className="sr-only">
            <SheetTitle>Conversion Coach</SheetTitle>
          </SheetHeader>
          <CoachPanel
            selectedSection={selectedSection}
            studiedCount={studiedCount}
            totalSections={totalSections}
          />
        </SheetContent>
      </Sheet>
    </div>
  )
}
