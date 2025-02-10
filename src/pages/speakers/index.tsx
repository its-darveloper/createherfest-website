// src/pages/speakers/index.tsx
import { useEffect, useState } from 'react'
import { SpeakersGrid, SpeakersGridSkeleton } from './components' // This import statement is now correct
import { getSpeakers } from '@/lib/sanity'
import type { Speaker } from '@/types/sanity'

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState<Speaker[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const data = await getSpeakers()
        setSpeakers(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch speakers')
      } finally {
        setIsLoading(false)
      }
    }
    fetchSpeakers()
  }, [])

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
          <p className="text-white/80">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Meet the LeadHERs
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover an exceptional community of facilitators driving innovation and inclusivity.
          </p>
        </div>

        {isLoading ? (
          <SpeakersGridSkeleton />
        ) : (
          <SpeakersGrid initialSpeakers={speakers} />
        )}
      </div>
    </div>
  )
}