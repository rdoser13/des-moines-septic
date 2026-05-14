// Blog post metadata. Actual post content lives in src/pages/blog/[slug].astro files.
// Order = newest first (controls display order on /blog/ index).

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishDate: string; // YYYY-MM-DD
  readMinutes: number;
  image?: string;
  imageAlt?: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "septic-tank-pumping-cost-iowa",
    title: "How Much Does Septic Tank Pumping Cost in Iowa? (2026 Prices)",
    description: "Septic tank pumping in Iowa typically runs $300 to $650 in 2026. Here's what affects price, average tank sizes, and how to avoid surprise charges.",
    excerpt: "Septic tank pumping in Iowa typically runs $300 to $650 in 2026. Here's what affects price and how to avoid surprise charges.",
    publishDate: "2026-05-13",
    readMinutes: 6,
    image: "/images/septic-tank-pumping-des-moines.webp",
    imageAlt: "Septic tank pumping service in Iowa"
  },
  {
    slug: "how-often-pump-septic-tank-iowa",
    title: "How Often Should You Pump Your Septic Tank in Iowa?",
    description: "Most Iowa homes need septic pumping every 3 to 5 years. Here's how household size, tank size, and Iowa's freeze cycle change that schedule.",
    excerpt: "Most Iowa homes need septic pumping every 3 to 5 years. Here's how household size, tank size, and Iowa winters change that schedule.",
    publishDate: "2026-05-13",
    readMinutes: 5,
    image: "/images/septic-tank-cleaning-des-moines.webp",
    imageAlt: "Septic tank pumping schedule in Iowa"
  },
  {
    slug: "signs-septic-tank-needs-pumping-iowa",
    title: "Signs Your Septic Tank Needs Pumping (Iowa Homeowner's Guide)",
    description: "Slow drains, sewage smell, gurgling pipes, and lush grass over the drain field are all warning signs. Here's how Iowa homeowners can spot a full septic tank before backup.",
    excerpt: "Slow drains, sewage smell, and gurgling pipes are warning signs. Here's how Iowa homeowners can spot a full tank before backup.",
    publishDate: "2026-05-13",
    readMinutes: 6,
    image: "/images/septic-pumping-hose-connection.webp",
    imageAlt: "Signs of a full septic tank"
  },
  {
    slug: "iowa-time-of-transfer-septic-inspection",
    title: "Iowa Time of Transfer Septic Inspection: What Sellers & Buyers Need to Know",
    description: "Iowa law requires a Time of Transfer septic inspection before most property sales. Here's the timeline, who can inspect, what passes, and what happens if your system fails.",
    excerpt: "Iowa law requires a Time of Transfer septic inspection before most property sales. Here's the timeline, who can inspect, and what happens if your system fails.",
    publishDate: "2026-05-13",
    readMinutes: 8,
    image: "/images/septic-tank-inspection-camera-iowa.webp",
    imageAlt: "Iowa Time of Transfer septic inspection"
  },
  {
    slug: "polk-county-iowa-septic-permit",
    title: "Septic System Permits in Polk County, Iowa: Step-by-Step",
    description: "Installing or replacing a septic system in Polk County, Iowa requires a permit, soil evaluation, and certified installer. Here's the process step by step.",
    excerpt: "Installing or replacing a septic system in Polk County, Iowa requires a permit and soil evaluation. Here's the process step by step.",
    publishDate: "2026-05-13",
    readMinutes: 7,
    image: "/images/septic-tank-repair-des-moines.webp",
    imageAlt: "Polk County Iowa septic permit process"
  }
];
