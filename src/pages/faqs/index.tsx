// src/pages/landing/components/FAQSection.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { getFAQs } from '@/lib/sanity'
import type { FAQ } from '@/types/sanity'

interface FAQItemProps {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="mb-3 faq-item">
      <motion.button
        onClick={onToggle}
        className="w-full text-left p-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] 
                   border border-white/[0.05] transition-all duration-300
                   group flex items-start justify-between gap-4 faq-title-container"
        initial={false}
        animate={{ backgroundColor: isOpen ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)' }}
        aria-expanded={isOpen}
      >
        <span className="text-lg text-white/90 font-medium leading-normal">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 mt-1 text-white/70 leading-relaxed">
              <PortableText 
                value={faq.answer}
                components={{
                  block: {
                    normal: ({children}) => <p className="mb-4 last:mb-0">{children}</p>,
                  },
                  marks: {
                    strong: ({children}) => <strong className="font-semibold text-white/90">{children}</strong>,
                    link: ({children, value}) => (
                      <a href={value.href} className="text-purple-300 hover:text-purple-200 underline underline-offset-2">{children}</a>
                    ),
                  },
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [openFAQs, setOpenFAQs] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const data = await getFAQs()
        setFaqs(data)
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFAQs()
  }, [])

  const toggleFAQ = (id: string) => {
    setOpenFAQs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    )
  }

  const categories = Array.from(new Set(faqs.map(faq => faq.category)))

  if (isLoading) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-white/[0.03] rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-40 pb-24 relative faq-section">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#150e60]">
  <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#473dc6]/40 rounded-full blur-3xl" />
  <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-[#caa3d6]/20 rounded-full blur-3xl" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#150e60]/30 rounded-full blur-3xl" />
</div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/60">
              Everything you need to know about CreateHER Fest
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12 faq-categories">
            {categories.map(category => (
              <div key={category} className='faq-category'>
                <h3 className="text-xl font-semibold text-white/80 mb-6 capitalize">
                  {category}
                </h3>
                <div className="space-y-3 faq-items">
                  {faqs
                    .filter(faq => faq.category === category)
                    .sort((a, b) => (a.order || 0) - (b.order || 0))
                    .map(faq => (
                      <FAQItem
                        key={faq._id}
                        faq={faq}
                        isOpen={openFAQs.includes(faq._id)}
                        onToggle={() => toggleFAQ(faq._id)}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}