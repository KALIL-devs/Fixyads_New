export interface PageContent {
  id: string;
  type: "service" | "course";
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    imageSrc?: string;
    imageAlt?: string;
  };
  curriculum?: {
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    subtitle: string;
    btnText: string;
    btnLink: string;
  };
}

export const siteContent: Record<string, PageContent> = {
  // Services
  "web-development": {
    id: "web-development",
    type: "service",
    metadata: {
      canonical: "/services/web-development",
      title: "Web Development Services | High-Performance Websites & Apps",
      description: "Custom web development services to build fast, secure, and scalable websites using modern technologies.",
      keywords: ["web development", "website development", "frontend development", "backend development", "full stack development", "next.js development"],
    },
    hero: {
      title: "Web Development That Powers Growth",
      subtitle: "We build high-performance, scalable, and user-friendly websites that convert visitors into customers.",
      ctaText: "Start Your Project",
      ctaLink: "/contact",
      imageSrc: "/services/webdev.png",
      imageAlt: "Web Development Illustration",
    },
    curriculum: {
      title: "What you get",
      items: [
        "Custom websites, web apps, and landing pages",
        "Modern frontends with React and Next.js",
        "Secure APIs, authentication, and integrations",
        "Performance tuning, Core Web Vitals, and SEO-ready builds",
      ],
    },
    cta: {
      title: "Ready to Build Something Powerful?",
      subtitle: "Let our developers turn your idea into a high-performing digital product.",
      btnText: "Talk to a Developer",
      btnLink: "/contact",
    },
  },
  "social-media-marketing": {
    id: "social-media-marketing",
    type: "service",
    metadata: {
      canonical: "/services/social-media-marketing",
      title: "Social Media Marketing Services | Grow Your Brand Online",
      description: "Professional social media marketing services to increase brand awareness, engagement, and sales across Instagram, Facebook, LinkedIn, and more.",
      keywords: ["social media marketing", "SMM services", "instagram marketing", "facebook ads", "linkedin marketing", "brand growth"],
    },
    hero: {
      title: "Social Media Marketing That Builds Brands",
      subtitle: "Engage your audience, grow your followers, and turn social media into a powerful revenue channel with data-driven strategies.",
      ctaText: "Get Free Strategy Call",
      ctaLink: "/contact",
      imageSrc: "/services/smm.png",
      imageAlt: "Social media marketing dashboard and engagement",
    },
    curriculum: {
      title: "What you get",
      items: [
        "Platform-specific strategy and content calendars",
        "Creative production for feed, reels, and stories",
        "Paid social campaigns with testing and scaling",
        "Community care, reporting, and ongoing optimization",
      ],
    },
    cta: {
      title: "Ready to Grow on Social Media?",
      subtitle: "Let our social media experts turn your followers into loyal customers.",
      btnText: "Talk to a Social Media Expert",
      btnLink: "/contact",
    },
  },
  "search-engine-optimization": {
    id: "search-engine-optimization",
    type: "service",
    metadata: {
      canonical: "/services/search-engine-optimization",
      title: "SEO Services | Rank Higher & Grow Organic Traffic",
      description: "Professional SEO services to boost your website rankings, increase organic traffic, and drive quality leads. On-page, off-page & technical SEO.",
      keywords: ["SEO services", "search engine optimization", "on page seo", "off page seo", "technical seo", "local seo"],
    },
    hero: {
      title: "Leading Search Engine Optimization Company",
      subtitle: "We help businesses attract the right audience and convert traffic into real customer inquiries. Our SEO services strengthen your search visibility, improve rankings, and drive consistent, high-intent visitors to your website.",
      ctaText: "Get Free SEO Audit",
      ctaLink: "/contact",
      imageSrc: "/services/seo.png",
      imageAlt: "SEO analytics and growth dashboard",
    },
    cta: {
      title: "Turn Searches into Sales",
      subtitle: "Professional SEO services that deliver measurable results.",
      btnText: "Request a Strategy Call",
      btnLink: "/contact",
    },
  },
  "content-branding": {
    id: "content-branding",
    type: "service",
    metadata: {
      canonical: "/services/content-branding",
      title: "Content & Branding Services | Build a Powerful Brand Identity",
      description: "Strategic content and branding services to create a strong brand voice, compelling visuals, and consistent messaging that connects with your audience.",
      keywords: ["content marketing", "branding services", "brand identity", "content strategy", "copywriting", "visual branding"],
    },
    hero: {
      title: "Content & Branding That Builds Trust",
      subtitle: "Create a memorable brand identity with impactful content, consistent messaging, and visuals that connect with your audience.",
      ctaText: "Get Free Brand Consultation",
      ctaLink: "/contact",
    },
    curriculum: {
      title: "What you get",
      items: [
        "Brand positioning, voice, and messaging frameworks",
        "High-converting copy for web, ads, and campaigns",
        "Visual identity, guidelines, and creative direction",
        "Editorial planning aligned with SEO and social goals",
      ],
    },
    cta: {
      title: "Ready to Build a Strong Brand?",
      subtitle: "Let our branding experts help you stand out and create lasting connections.",
      btnText: "Talk to a Branding Expert",
      btnLink: "/contact",
    },
  },
  "influencer-marketing": {
    id: "influencer-marketing",
    type: "service",
    metadata: {
      canonical: "/services/influencer-marketing",
      title: "Influencer Marketing Services | Build Trust & Drive Sales",
      description: "Strategic influencer marketing campaigns to increase brand trust, reach the right audience, and drive real conversions.",
      keywords: ["influencer marketing", "creator marketing", "brand collaborations", "instagram influencers", "youtube influencers"],
    },
    hero: {
      title: "Influencer Marketing That Feels Authentic",
      subtitle: "Collaborate with trusted creators to amplify your brand message and connect with audiences that truly care.",
      ctaText: "Launch a Campaign",
      ctaLink: "/contact",
    },
    curriculum: {
      title: "What you get",
      items: [
        "Creator discovery aligned with audience and values",
        "Campaign briefs, contracts, and deliverable management",
        "Reporting on reach, engagement, and attributable outcomes",
        "Amplification tactics such as whitelisting where appropriate",
      ],
    },
    cta: {
      title: "Ready to Work With Influencers?",
      subtitle: "Let us connect your brand with creators who truly influence buying decisions.",
      btnText: "Talk to Our Team",
      btnLink: "/contact",
    },
  },

  // Courses
  "digital-marketing-course": {
    id: "digital-marketing-course",
    type: "course",
    metadata: {
      canonical: "/courses/digital-marketing",
      title: "Digital Marketing Course | SEO, Ads, Social & Analytics | Fixyads",
      description: "Master SEO, social media, paid media, and analytics with live projects, mentor feedback, and portfolio-ready outcomes.",
      keywords: ["digital marketing course", "seo course", "social media marketing course", "google ads course"],
    },
    hero: {
      title: "Digital Marketing Course",
      subtitle: "Master SEO, Social Media, Ads & Analytics with live projects and real-world training.",
      ctaText: "Enroll Now",
      ctaLink: "/contact",
      imageSrc: "/Courses/Digital-marketing.png",
      imageAlt: "Digital Marketing Course",
    },
    curriculum: {
      title: "What You’ll Learn",
      items: [
        "SEO & Content Marketing",
        "Google Ads & Meta Ads",
        "Social Media Marketing",
        "Email Marketing & Automation",
        "Analytics & Conversion Optimization",
      ],
    },
    cta: {
      title: "Ready to Start Learning?",
      subtitle: "Join our Digital Marketing Course today.",
      btnText: "Contact us",
      btnLink: "/contact",
    },
  },
  "web-development-course": {
    id: "web-development-course",
    type: "course",
    metadata: {
      canonical: "/courses/web-development",
      title: "Web Development Course | Full-Stack Training | Fixyads",
      description: "Become a full-stack developer by building real websites and applications—from HTML and CSS through React, Next.js, APIs, and deployment.",
      keywords: ["web development course", "frontend course", "backend course", "full stack course", "react course"],
    },
    hero: {
      title: "Web Development Course",
      subtitle: "Become a full-stack developer by building real websites and applications from scratch.",
      ctaText: "Start Learning",
      ctaLink: "/contact",
      imageSrc: "/Courses/web-development.png",
      imageAlt: "Web Development Course",
    },
    curriculum: {
      title: "What You’ll Learn",
      items: [
        "HTML, CSS, JavaScript",
        "React & Next.js",
        "Backend with Node / APIs",
        "Database & Auth",
        "Deployment & Performance",
      ],
    },
    cta: {
      title: "Start Building Today",
      subtitle: "Join our Web Development Course today.",
      btnText: "Contact us",
      btnLink: "/contact",
    },
  },
  "placement-support": {
    id: "placement-support",
    type: "course",
    metadata: {
      canonical: "/courses/placement-support",
      title: "Placement Support & Career Guidance | Fixyads",
      description: "Structured placement support: resumes, portfolios, mock interviews, referrals, and mentorship so you are ready to interview with confidence.",
      keywords: ["placement support", "resume building", "mock interviews", "hiring support"],
    },
    hero: {
      title: "Placement Support",
      subtitle: "We don’t just teach skills — we help you land your first job with structured placement support.",
      ctaText: "Get Career Guidance",
      ctaLink: "/contact",
    },
    curriculum: {
      title: "What You’ll Learn",
      items: [
        "Resume & Portfolio Building",
        "Interview Preparation",
        "Mock Interviews",
        "Job Referrals",
        "Career Mentorship",
      ],
    },
    cta: {
      title: "Need Placement Support?",
      subtitle: "Get in touch with us for career guidance.",
      btnText: "Contact us",
      btnLink: "/contact",
    },
  },
};

export function generateSiteMetadata(id: string) {
  const content = siteContent[id];
  if (!content) return { title: "Page Not Found" };

  const path = content.metadata.canonical;

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: content.metadata.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: path,
      type: "website",
      siteName: "Fixyads",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
    },
  };
}
