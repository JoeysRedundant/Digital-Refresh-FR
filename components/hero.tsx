import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"

export function Hero() {
  const buttonNew = (
    <Button asChild className="group relative overflow-hidden rounded-full bg-lime-400 px-8 py-4 text-black font-semibold text-lg transition-all duration-300 hover:bg-lime-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/25 animate-pulse hover:animate-none">
      <a href="/contact" className="relative z-10">
        <span className="relative">
          Start Your Project
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-lime-300 via-lime-400 to-lime-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-lime-300 to-lime-400 rounded-full opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-300"></div>
        <div className="absolute -inset-2 bg-gradient-to-r from-lime-400/20 via-lime-300/30 to-lime-400/20 rounded-full opacity-50 blur-md animate-ping"></div>
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/skitbit-white.svg" alt="Digital Edge logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">digital edge</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">WEBSITES THAT</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
              CONVERT & CAPTIVATE
            </span>
            <span className="block">YOUR AUDIENCE</span>
          </h1>
          <div className="mt-6">{buttonNew}</div>

          {/* Phone grid with videos */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard 
                    title={p.title} 
                    sub={p.sub} 
                    tone={p.tone} 
                    gradient={p.gradient} 
                    videoSrc={p.videoSrc} 
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2 shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        {/* Always show gradient background as fallback */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        
        {/* Video overlay */}
        {videoSrc && (
          <LazyVideo
            src={videoSrc}
            className="absolute inset-0 h-full w-full object-cover"
            autoplay={true}
            loop={true}
            muted={true}
            playsInline={true}
            aria-label={`${title} - ${sub}`}
          />
        )}

        {/* Overlay content */}
        <div className="relative z-10 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-full flex flex-col justify-end">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white drop-shadow-lg">{title}</div>
            <p className="text-xs text-white/90 drop-shadow-md">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/50 backdrop-blur-sm px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300 border border-lime-300/30">
              {tone === "calm" ? "digital edge" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Phone data with working video sources and fallback gradients
const phoneData = [
  {
    title: "Results",
    sub: "Websites that drive conversions.",
    tone: "results",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    // Using a working video URL - you can replace with your own videos
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    title: "Speed",
    sub: "Lightning-fast load times.",
    tone: "speed",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    title: "Social",
    sub: "Optimized for sharing & engagement.",
    tone: "social",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    title: "Standout",
    sub: "Designs that demand attention.",
    tone: "standout",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    title: "Premium",
    sub: "Enterprise-grade quality.",
    tone: "premium",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
]
