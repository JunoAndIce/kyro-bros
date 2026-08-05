import Image from 'next/image'
import confetti from '@/public/confetti.webp'

export default function AboutStory() {
  return (
    <section>
      {/* Our Story */}
      <div className="relative overflow-hidden bg-red-800 text-white">
        <Image src={confetti} alt="" fill sizes="100vw" className="object-cover opacity-20 pointer-events-none select-none" />
        <div className="relative container px-3 py-21 lg:py-24 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
            <p className="type-title text-xs lg:text-sm font-bold tracking-widest text-white/80">Kyro &amp; Bros</p>
            <span className="h-0.5 w-8 bg-white/70 shrink-0" />
          </div>
          <h2 className="title is-2 type-title has-text-white font-black! text-4xl! lg:text-6xl! mt-3! mb-0!">
            Learn About Us
          </h2>
          <p className="mt-4! text-sm lg:text-base text-white/85 max-w-xl mx-auto!">
            Discover the story behind our company and what makes us different.
          </p>
        </div>
      </div>

      <div className="container py-12 lg:py-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-red-800/40 shrink-0" />
            <p className="type-title text-xs lg:text-sm font-bold tracking-widest text-red-800">Our Story</p>
            <span className="h-0.5 w-8 bg-red-800/40 shrink-0" />
          </div>
          <h2 className="title is-2 type-title font-black! text-3xl! lg:text-5xl! mt-3!">
            Built on Family, Driven by Community
          </h2>
        </div>

        <div className="mx-auto mt-6 lg:mt-8 max-w-3xl flex flex-col gap-4 text-sm lg:text-base opacity-75">
          <p>
            At <strong>Kyro &amp; Bros</strong>, we believe that life&apos;s best memories are made around shared
            tables, under strong tents, and surrounded by the people who matter most.
          </p>
          <p>
            Our story didn&apos;t start in a corporate office—it started right in our own backyard. Coming from a
            large, close-knit family, our calendar was always filled with reasons to gather: birthday milestones,
            graduation parties, holiday reunions, and spontaneous weekend celebrations. We know firsthand how much
            heart, planning, and preparation go into hosting an event, as well as the pure joy that comes from seeing
            family and friends relaxed, laughing, and enjoying each other&apos;s company.
          </p>
          <p>
            That deep passion for bringing people together is why we started this business. We wanted to build
            something authentic that truly resonated with our family values, while giving back to the community that
            means so much to us.
          </p>
        </div>
      </div>

      {/* Our Mission — tinted band, same treatment as the alternating team rows */}
      <div className="bg-foreground/3">
        <div className="container px-3 py-12 lg:py-20 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
            <h2 className="title is-5 type-title mb-0! uppercase">Our Mission</h2>
            <span className="h-0.5 w-8 bg-red-800 shrink-0" />
          </div>

          <p className="mt-8! text-sm lg:text-base opacity-70 max-w-2xl mx-auto">
            Hosting an event should be as enjoyable for you as it is for your guests. Our mission is simple:
          </p>
          <p className="mt-4 text-lg lg:text-2xl font-bold max-w-3xl mx-auto">
            To help our neighbors celebrate life&apos;s most memorable moments by delivering dependable, stress-free
            party rental solutions.
          </p>
          <p className="mt-6 text-sm lg:text-base opacity-70 max-w-2xl mx-auto">
            When you rent from us, you aren&apos;t just hiring an equipment vendor—you are partnering with a local
            family who cares about making your event special. We bring the same dedication, attention to detail, and
            warmth to your event as we do to our own family gatherings.
          </p>
        </div>
      </div>
    </section>
  )
}
