import Image from 'next/image'
import { ImageIcon, Mail, Phone } from 'lucide-react'

type Member = {
  name: string
  role: string
  bio: string
  email: string
  phone: string
  /* Drop a photo in /public (e.g. /public/team/alex.webp) and set the path here.
     Leave undefined to show the "photo coming soon" placeholder. */
  image?: string
}

const team: Member[] = [
  {
    name: 'Quay Brown',
    role: 'Founder',
    bio: "Quay started Kyro & Bros with one goal: take the stress out of throwing a great party. He keeps every event running on schedule and makes sure each setup looks exactly the way you pictured it.",
    email: 'kyrobros34@gmail.com',
    phone: '(612) 200-6350',
  },
  {
    name: 'Meagan Navarro',
    role: 'Co-Founder',
    bio: "Meagan keeps the whole operation moving — from delivery routes to inventory — so your rentals show up on time, every time. If something needs solving on the day of your event, she's the one already on it.",
    email: 'kyrobros34@gmail.com',
    phone: '(651) 315-9485',
  },
  {
    name: 'Chance Brown',
    role: 'Managing Partner',
    bio: "Chance oversees the crew on-site from setup to takedown, handling the heavy lifting and the small details alike — leaving you free to enjoy your own party instead of working it.",
    email: 'cdemikols@gmail.com',
    phone: '(952) 381-5937',
  },
]

export default function AboutTeam() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container px-3 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-0.5 w-8 bg-red-800/40 shrink-0" />
          <p className="type-title text-xs lg:text-sm font-bold tracking-widest text-red-800">Meet the Team</p>
          <span className="h-0.5 w-8 bg-red-800/40 shrink-0" />
        </div>
        <h2 className="title is-2 type-title font-black! text-3xl! lg:text-5xl! mt-3">
          The People Behind the Party
        </h2>
        <p className="mt-3 text-sm lg:text-base opacity-70 max-w-xl mx-auto">
          A family-run crew that treats every event like our own.
        </p>
      </div>

      <div className="mt-10 lg:mt-16">
        {team.map((member, i) => {
          const reversed = i % 2 === 1
          return (
            <div
              key={member.name}
              className={i % 2 === 1 ? 'bg-foreground/3' : undefined}
            >
              <div className="container px-3 py-10 lg:py-24">
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  {/* photo */}
                  <div className={reversed ? 'lg:order-2' : undefined}>
                    <div className="relative aspect-4/5 sm:aspect-3/2 lg:aspect-4/5 overflow-hidden rounded-lg">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-blue-700/20 bg-foreground/5">
                          <div className="text-center opacity-40">
                            <ImageIcon className="mx-auto" size={32} />
                            <p className="type-title mt-2 text-xs font-bold tracking-wide">Photo coming soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* description */}
                  <div className={reversed ? 'lg:order-1' : undefined}>
                    <p className="type-title text-xs lg:text-sm font-bold tracking-widest text-red-800">
                      {member.role}
                    </p>
                    <h3 className="title is-3 type-title font-black! text-2xl! lg:text-4xl! mt-2">
                      {member.name}
                    </h3>
                    <p className="mt-4 text-sm lg:text-base opacity-75 max-w-prose">
                      {member.bio}
                    </p>
                    <div className="mt-5 flex flex-col gap-2 text-sm">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 w-fit hover:text-red-800 transition-colors"
                      >
                        <Mail size={16} className="text-red-800 shrink-0" />
                        {member.email}
                      </a>
                      <a
                        href={`tel:+1${member.phone.replace(/\D/g, '')}`}
                        className="inline-flex items-center gap-2 w-fit hover:text-red-800 transition-colors"
                      >
                        <Phone size={16} className="text-red-800 shrink-0" />
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
