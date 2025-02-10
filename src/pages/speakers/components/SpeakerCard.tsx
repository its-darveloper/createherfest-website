// src/pages/speakers/components/SpeakerCard.tsx
import { Info } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { urlFor } from '@/lib/sanity'
import type { Speaker } from '@/types/sanity'

interface SpeakerCardProps {
  speaker: Speaker
  onClick: (speaker: Speaker) => void
}

export default function SpeakerCard({ speaker, onClick }: SpeakerCardProps) {
  return (
    <Card
      onClick={() => onClick(speaker)}
      className="group relative overflow-hidden bg-white/10 hover:bg-white/15 
           border-white/15 backdrop-blur-lg transition-all duration-300 
           hover:translate-y-[-6px] hover:shadow-2xl hover:shadow-purple-500/20 
           cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(speaker)
        }
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardContent className="p-8 relative z-10">
        {/* Avatar Container */}
        <div className="relative mb-8 aspect-square"> 
          {/* Avatar Background Effect */}
          <div className="absolute inset-[-2px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                        rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          
          {/* Avatar Image */}
          <Avatar className="w-full h-full ring-2 ring-white/10 group-hover:ring-white/20 
                         transition-all duration-300">
            {speaker.image ? (
              <AvatarImage 
                src={urlFor(speaker.image).width(400).height(400).url()} 
                alt={`${speaker.name}'s profile picture`}
                className="object-cover"
              />
            ) : (
              <AvatarFallback className="text-2xl">
                {speaker.name.charAt(0)}
              </AvatarFallback>
            )}
          </Avatar>

          {/* Info Icon */}
          <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/20 
                       backdrop-blur-sm opacity-0 group-hover:opacity-100 
                       transition-all duration-300">
            <Info className="w-4 h-4 text-white/70" />
          </div>
        </div>

        {/* Speaker Info */}
        <div className="space-y-3 text-center">
        <h3 className="text-2xl font-bold text-white group-hover:text-white 
             transition-colors duration-300">
            {speaker.name}
          </h3>
          
          {speaker.pronouns && (
            <p className="text-sm text-white/60">
              ({speaker.pronouns})
            </p>
          )}
          
          {speaker.title && (
            <p className="text-purple-300/90 font-medium">
              {speaker.title}
            </p>
          )}
          
          {speaker.company && (
            <p className="text-sm text-white/70">
              {speaker.company}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}