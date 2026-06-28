"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  HelpCircle,
  Lightbulb,
  PenLine,
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight,
  MousePointerClick,
} from "lucide-react"
import {
  conversionContent,
  COACH_CTA_URL,
  STUDY_GOAL,
  type SectionType,
  type CoachEntry,
} from "@/lib/conversion-content"

interface CoachPanelProps {
  selectedSection: SectionType | null
  studiedCount: number
  totalSections: number
}

function CoachCtaButton({ label }: { label: string }) {
  return (
    <a
      href={COACH_CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-center text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      {label}
      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}

function DetailRow({
  icon,
  label,
  children,
  accent,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
  accent?: "warning" | "success"
}) {
  const tone =
    accent === "warning"
      ? "border-amber-200 bg-amber-50"
      : accent === "success"
        ? "border-emerald-200 bg-emerald-50"
        : "border-slate-200 bg-white"
  return (
    <div className={`rounded-xl border p-4 ${tone}`}>
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-slate-500" aria-hidden="true">
          {icon}
        </span>
        <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</h4>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">{children}</p>
    </div>
  )
}

function SectionDetail({ entry }: { entry: CoachEntry }) {
  return (
    <div className="space-y-3">
      <DetailRow icon={<TrendingUp className="h-4 w-4" />} label="Conversion role">
        {entry.role}
      </DetailRow>
      <DetailRow icon={<HelpCircle className="h-4 w-4" />} label="Buyer question it answers">
        <span className="italic">“{entry.buyerQuestion}”</span>
      </DetailRow>
      <DetailRow icon={<Lightbulb className="h-4 w-4" />} label="Why it converts">
        {entry.whyItConverts}
      </DetailRow>
      <DetailRow icon={<PenLine className="h-4 w-4" />} label="What this section should say">
        {entry.whatToSay}
      </DetailRow>
      <DetailRow icon={<AlertTriangle className="h-4 w-4" />} label="Common mistake" accent="warning">
        {entry.commonMistake}
      </DetailRow>
      <DetailRow icon={<CheckCircle2 className="h-4 w-4" />} label="Apply this to your website" accent="success">
        {entry.applyToYourSite}
      </DetailRow>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
        <MousePointerClick className="h-6 w-6 text-blue-600" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-base font-semibold text-slate-900">Pick a section to study</h3>
      <p className="max-w-xs text-sm leading-relaxed text-slate-600">
        Use the <span className="font-medium text-slate-900">Study this section</span> buttons on the example flooring
        website to learn why each part converts visitors into estimate requests.
      </p>
    </div>
  )
}

export default function CoachPanel({ selectedSection, studiedCount, totalSections }: CoachPanelProps) {
  const entry = selectedSection ? conversionContent[selectedSection] : null
  const goalReached = studiedCount >= STUDY_GOAL
  const progressValue = totalSections > 0 ? Math.min(100, (studiedCount / totalSections) * 100) : 0

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-slate-200 bg-slate-900 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
            <TrendingUp className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">Conversion Coach</h2>
            <p className="text-sm text-blue-300">Why each section converts</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex-shrink-0 border-b border-slate-200 bg-white px-5 py-3">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">Sections studied</span>
          <span className="font-semibold text-slate-900">
            {studiedCount} / {totalSections}
          </span>
        </div>
        <Progress value={progressValue} className="h-2" aria-label="Sections studied on this page" />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto bg-slate-50 px-5 py-5">
        {entry ? (
          <div className="space-y-4">
            <div>
              <Badge className="mb-2 border-0 bg-blue-100 text-blue-700">{entry.label}</Badge>
              <SectionDetail entry={entry} />
            </div>

            <Card className="border-2 border-slate-900 bg-slate-900 shadow-xl">
              <CardContent className="space-y-3 p-5 text-center">
                <h3 className="text-base font-bold text-white">Want this on your flooring website?</h3>
                <CoachCtaButton label={entry.cta} />
              </CardContent>
            </Card>
          </div>
        ) : (
          <EmptyState />
        )}

        {/* Strategy offer after the study goal is reached */}
        {goalReached && (
          <Card className="mt-4 border-2 border-blue-200 bg-blue-50 shadow-md">
            <CardContent className="space-y-3 p-5 text-center">
              <h3 className="text-base font-bold text-slate-900">
                Want this strategy applied to your flooring website?
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                You&apos;ve studied {studiedCount} sections. Get a professional review of your own site.
              </p>
              <CoachCtaButton label="Get My Flooring Website Reviewed" />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
