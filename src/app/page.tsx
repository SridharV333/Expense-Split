import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

// FIX for https://github.com/vercel/next.js/issues/58615
// export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container flex max-w-screen-md flex-col items-center gap-4 text-center">
        <h1 className="!leading-none font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl landing-header py-2">
            EXPENSE <strong>TRACKER</strong> 
          </h1>
          <h4 className="!leading-none font-bold text-3xl sm:text-5xl md:text-2xl lg:text-3xl landing-header py-2">
            Share Expenses with Friends and Family
          </h4>
          
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/groups">Go to Groups</Link>
            </Button>
            
          </div>
        </div>
      </section>
    </main>
  )
}
