'use client'

import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { Speaker } from '@/types/sanity'
import SpeakerCard from './SpeakerCard'
import SpeakerDialog from './SpeakerDialog'

interface SpeakersGridProps {
  initialSpeakers: Speaker[];
}

export default function SpeakersGrid({ initialSpeakers }: SpeakersGridProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  const filteredSpeakers = useMemo(() => {
    return initialSpeakers.filter(speaker => {
      const searchString = [
        speaker.name,
        speaker.title,
        speaker.company
      ].filter(Boolean).join(' ').toLowerCase()

      return searchString.includes(searchTerm.toLowerCase())
    })
  }, [searchTerm, initialSpeakers])

  return (
    <>
      {/* Search Section */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 
                         rounded-full blur-xl opacity-50 transition-opacity duration-300 
                         group-hover:opacity-75" />
          
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by name, title, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 px-6 bg-white/5 border-white/10 text-white placeholder:text-white/50
                         rounded-full backdrop-blur-xl focus:bg-white/10 transition-all duration-300"
              aria-label="Search speakers"
            />
            
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 
                          hover:text-white hover:bg-white/10 rounded-full p-2
                          transition-all duration-300"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </Button>
            )}
            
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {filteredSpeakers.map((speaker) => (
          <SpeakerCard
            key={speaker._id}
            speaker={speaker}
            onClick={setSelectedSpeaker}
          />
        ))}
      </div>

      {/* Dialog */}
      <SpeakerDialog
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </>
  )
}