// src/pages/speakers/components/SpeakersGridSkeleton.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SpeakersGridSkeleton() {
  return (
    <>
      {/* Search Skeleton */}
      <div className="max-w-4xl mx-auto mb-12 space-y-6">
        <Skeleton className="h-12 w-full bg-white/10" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="bg-white/10 border-white/20">
            <CardContent className="p-6">
              {/* Avatar Skeleton */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 
                              to-blue-400/30 rounded-full blur-xl opacity-50" />
                <Skeleton className="w-full aspect-square rounded-full bg-white/10" />
              </div>

              {/* Content Skeletons */}
              <div className="space-y-3">
                <Skeleton className="h-6 w-3/4 mx-auto bg-white/10" />
                <Skeleton className="h-4 w-2/3 mx-auto bg-white/10" />
                <Skeleton className="h-4 w-1/2 mx-auto bg-white/10" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}