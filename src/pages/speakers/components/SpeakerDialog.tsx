// src/pages/speakers/components/SpeakerDialog.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import type { Speaker } from '@/types/sanity'

interface SpeakerDialogProps {
  speaker: Speaker | null
  onClose: () => void
}

export default function SpeakerDialog({ speaker, onClose }: SpeakerDialogProps) {
  if (!speaker) return null

  return (
    <Dialog open={!!speaker} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-gradient-to-br from-indigo-900 to-purple-900 border-white/20 
                               text-white max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {speaker.name}
            {speaker.pronouns && (
              <span className="text-white/60 text-lg">
                ({speaker.pronouns})
              </span>
            )}
          </DialogTitle>
          {(speaker.title || speaker.company) && (
            <DialogDescription className="text-purple-300">
              {[speaker.title, speaker.company]
                .filter(Boolean)
                .join(' @ ')}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Speaker Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 
                          to-blue-400/30 rounded-full blur-xl" />
            <Avatar className="w-full h-auto aspect-square">
              {speaker.image ? (
                <AvatarImage 
                  src={urlFor(speaker.image).width(400).height(400).url()} 
                  alt={speaker.name} 
                />
              ) : (
                <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
          </div>

          {/* Speaker Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Bio */}
            {speaker.bio && (
              <div className="text-white/80 leading-relaxed prose prose-invert">
                {typeof speaker.bio === 'string' ? (
                  <p>{speaker.bio}</p>
                ) : (
                  <PortableText value={speaker.bio} />
                )}
              </div>
            )}

            {/* Workshop Info - If you decide to add this later */}
            {/* {speaker.workshop && (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Workshop</h3>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <h4 className="text-white font-medium mb-2">
                      {speaker.workshop.title}
                    </h4>
                    <p className="text-white/80">
                      {speaker.workshop.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )} */}

            {/* LinkedIn Profile - If you decide to add this later */}
            {/* {speaker.linkedIn && (
              <Button
                className="gap-2"
                onClick={() => window.open(speaker.linkedIn, '_blank')}
              >
                <Linkedin className="w-4 h-4" />
                View LinkedIn Profile
              </Button>
            )} */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}