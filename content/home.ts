// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "JiraBolt is here",
    titleBefore: "Supercharge Your",
    titleHighlight: "Team’s Project Management",
    titleAfter: "",
    subtitle: "JiraBolt brings powerful issue tracking and collaboration to your team, without the complexity.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "See How It Works", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "JiraBolt dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Trusted by productive teams",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why JiraBolt",
    heading: "Powerful, intuitive project management",
    description: "Empower your team to stay organized, track issues, and move fast—without the bloat of legacy tools.",
    items: [
      {
        icon: "Zap",
        title: "Lightning-Fast Issue Tracking",
        description: "Create, assign, and manage issues with ease using our modern interface.",
      },
      {
        icon: "LayoutDashboard",
        title: "Collaborative Boards",
        description: "Visualize your work, organize tasks, and keep everyone on the same page.",
      },
      {
        icon: "Users",
        title: "Seamless Team Integration",
        description: "Invite your team, set permissions, and start collaborating instantly.",
      },
      {
        icon: "Workflow",
        title: "Customizable Workflows",
        description: "Adapt JiraBolt to fit your team’s unique processes and project needs.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Why JiraBolt?",
    heading: "Feature highlights",
    subtitle: "JiraBolt gives your team the best of project management—no training required.",
    items: [
      { icon: "Zap", title: "Lightning-Fast Issue Tracking", description: "Create, assign, and manage issues with ease using our modern interface." },
      { icon: "LayoutDashboard", title: "Collaborative Boards", description: "Visualize your work, organize tasks, and keep everyone on the same page." },
      { icon: "Users", title: "Seamless Team Integration", description: "Invite your team, set permissions, and start collaborating instantly." },
      { icon: "Workflow", title: "Customizable Workflows", description: "Adapt JiraBolt to fit your team’s unique processes and project needs." }
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Foundational tools for better teamwork",
    subtitle: "Essential building blocks for modern SaaS teams.",
    items: [
      { title: "Real-time Collaboration", description: "Work alongside teammates and stay aligned on next steps.", pro: false },
      { title: "Flexible Boards", description: "Kanban, Scrum, or custom—work how your team works best.", pro: true },
      { title: "Robust Permissions", description: "Keep control of your data with project-based user roles.", pro: true },
      { title: "Integrations Galore", description: "Plug in Slack, GitHub, and more to supercharge your workflow.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Loved by Productive Teams",
    heading: "What teams are saying",
    reviews: [
      { image: "/demo-img.jpg", name: "Alex Devon", role: "Product Manager", comment: "JiraBolt makes project tracking effortless and keeps our team aligned every sprint.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Meet JiraBolt",
    heading: "Meet the JiraBolt team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple plans for every team",
    subtitle: "Start free. Scale as your team grows.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: false,
        price: 0,
        description: "Get started with unlimited boards and issues.",
        buttonText: "Start Free",
        benefits: ["Up to 5 teammates", "Unlimited issues", "Basic workflow", "Simple board management"],
      },
      {
        title: "Pro",
        popular: true,
        price: 49,
        description: "For teams that need advanced reporting and collaboration.",
        buttonText: "Start Pro Trial",
        benefits: ["Unlimited teammates", "Advanced filters", "Role permissions", "Priority support"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "For large organizations and enterprises.",
        buttonText: "Contact Sales",
        benefits: ["Dedicated onboarding", "SSO/SCIM", "Security reviews", "Unlimited integrations"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to JiraBolt",
    description: "Need help getting started? Reach out and our team will respond as quickly as possible.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote worldwide" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Product Demo", "Pricing & Plans", "Integrations", "Enterprise Inquiry"],
    formSubmitLabel: "Send message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "What is JiraBolt?", answer: "JiraBolt is a modern platform for managing projects, tasks, and team collaboration." },
      { question: "Is JiraBolt free to use?", answer: "Yes! Our Free plan lets you manage projects and issues at no cost." },
      { question: "Can I invite teammates?", answer: "Absolutely. JiraBolt was built for team collaboration from day one." },
      { question: "How can I track different projects?", answer: "Separate your work by project—each project has its own boards and issues." },
      { question: "Does JiraBolt integrate with other tools?", answer: "Yes, integrations for Slack, GitHub, and more are planned." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "JiraBolt",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "https://github.com/chiragdodiya" }
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" }
        ],
      },
    ],
    copyright: "\u00a9 2026 JiraBolt.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "JiraBolt",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Why JiraBolt?",
    featureImage: { src: "/demo-img.jpg", alt: "JiraBolt preview" },
    features: [
      { title: "Lightning-Fast Issue Tracking", description: "Create, assign, and manage issues with ease using our modern interface." },
      { title: "Collaborative Boards", description: "Visualize your work, organize tasks, and keep everyone on the same page." },
      { title: "Seamless Team Integration", description: "Invite your team, set permissions, and start collaborating instantly." },
      { title: "Customizable Workflows", description: "Adapt JiraBolt to fit your team’s unique processes and project needs." }
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View JiraBolt on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}