import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Menu,
  Pause,
  Play,
  Search,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import "@/styles/pages/apple-intelligence.css";

const asset = (file: string) => `/site-assets/apple-intelligence/${file}`;
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aftertrials — Your community in medicine" },
      {
        name: "description",
        content:
          "Meet Aftertrials: a welcoming professional network for people in medicine. Build your identity, connect globally, share ideas and explore what’s next.",
      },
      { property: "og:title", content: "Aftertrials — Your community in medicine" },
      {
        property: "og:description",
        content: "Build your professional identity, meet peers around the world and find your next opportunity with Aftertrials.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AftertrialsPage,
});

const primaryLinks = [
  { name: "Community", href: "#community" },
  { name: "Profiles", href: "#professional-identity" },
  { name: "Careers", href: "#careers" },
  { name: "Insights", href: "#insights" },
  { name: "About", href: "#about" },
];

const menuCollections: Record<string, { title: string; items: string[] }[]> = {
  Community: [
    { title: "Find your people", items: ["Meet peers across specialties", "Connect around the world", "Join a peer circle"] },
    { title: "Make it yours", items: ["Build your professional profile", "Share what you’re working on"] },
  ],
  Profiles: [
    { title: "Your story, in medicine", items: ["Build your professional profile", "Show your experience", "Share what’s next"] },
    { title: "Every path belongs", items: ["For clinicians", "For researchers and educators", "For students and trainees"] },
  ],
  Careers: [
    { title: "Your next chapter", items: ["Explore roles and opportunities", "Find mentors and collaborators", "Make your next move"] },
    { title: "Grow together", items: ["Discover new specialties", "Meet future colleagues"] },
  ],
  Insights: [
    { title: "Ideas worth sharing", items: ["Share what you’re learning", "Trade perspectives", "Start a conversation"] },
    { title: "Stay curious", items: ["Explore research and ideas", "Learn across disciplines"] },
  ],
  About: [
    { title: "About Aftertrials", items: ["A community for medicine", "Made for medical professionals", "Meet Aftertrials"] },
    { title: "A place for everyone in the field", items: ["Connect across borders", "Find your next chapter"] },
  ],
};

const menuItemHrefs: Record<string, string> = {
  "Meet peers across specialties": "#community",
  "Connect around the world": "#global-community",
  "Join a peer circle": "#global-community",
  "Build your professional profile": "#professional-identity",
  "Share what you’re working on": "#insights",
  "Show your experience": "#professional-identity",
  "Share what’s next": "#careers",
  "For clinicians": "#community",
  "For researchers and educators": "#insights",
  "For students and trainees": "#careers",
  "Explore roles and opportunities": "#careers",
  "Find mentors and collaborators": "#collaboration",
  "Make your next move": "#careers",
  "Discover new specialties": "#community",
  "Meet future colleagues": "#global-community",
  "Share what you’re learning": "#insights",
  "Trade perspectives": "#collaboration",
  "Start a conversation": "#collaboration",
  "Explore research and ideas": "#insights",
  "Learn across disciplines": "#insights",
  "A community for medicine": "#about",
  "Made for medical professionals": "#about",
  "Meet Aftertrials": "#about",
  "Connect across borders": "#global-community",
  "Find your next chapter": "#careers",
};

const highlightItems = [
  {
    title: "A professional identity that feels like you",
    target: "highlights-gallery-item-1",
    image: "highlights_siri_endframe__bd109g1f3l4y_large.jpg",
    description: "Bring your experience, interests and next steps together in one profile built around your path in medicine.",
  },
  {
    title: "Good people, great conversations",
    target: "highlights-gallery-item-2",
    image: "siri_conversations__cb4puu6g56uq_large.jpg",
    description: "Meet colleagues who get your world, swap ideas and make the day a little less solo.",
  },
  {
    title: "A worldwide medical community",
    target: "highlights-gallery-item-3",
    image: "features__lts2awuq62i6_large.jpg",
    description: "Connect across specialties, workplaces and borders. Medicine is a bigger conversation here.",
  },
  {
    title: "Fresh perspectives, shared freely",
    target: "highlights-gallery-item-4",
    image: "visual_intelligence__f0ybhtxs0pea_large.jpg",
    description: "Share what you’re learning and discover how others are thinking about the field.",
  },
  {
    title: "Your next chapter could be closer",
    target: "highlights-gallery-item-5",
    image: "reframe_endframe__ergd5itul8sy_large.jpg",
    description: "Explore career directions, find collaborators and let new possibilities find you.",
  },
  {
    title: "Make room for every path",
    target: "highlights-gallery-item-6",
    image: "proofread__eekr5hm333e6_large.jpg",
    description: "From first placements to years in practice, there’s more than one way to belong in medicine.",
  },
];

const featureSections = [
  {
    id: "professional-identity",
    eyebrow: "Your professional identity",
    title: "More than a title.\nYour whole story in medicine.",
    intro:
      "Bring your experience, interests and ambitions together in a profile that feels like you. Show people what you care about, what you’ve learned and where you’d like to go next.",
    note: "For everyone building a life in medicine.",
    cards: [
      { title: "A profile with personality.", description: "Give your work a home and your professional story a little more room. Add the parts of your journey you want people to know.", image: "conversation__dohjgpuxnd26_large.jpg", alt: "A smartphone displaying a conversational interface" },
      { title: "Show the path you’ve taken.", description: "Training, practice, research, teaching, leadership — the details that make your experience yours belong here.", image: "personal_context__f6ufkgjb8y2q_large.jpg", alt: "A collection of travel and everyday photography on a phone" },
      { title: "Let your interests lead.", description: "Make it easier for people with shared specialties, questions and ideas to find their way to you.", image: "app_actions__dq6gu53zifyq_large.jpg", alt: "A phone displaying a collection of app actions" },
      { title: "More than what’s on your CV.", description: "Share what you’re curious about, what you’re working towards and what kind of conversations you’d love to have.", image: "world_knowledge__ff45byjw8zu6_large.jpg", alt: "A digital interface beneath a starry sky" },
      { title: "A profile that grows with you.", description: "Your next role, new research interest or unexpected collaboration can become part of the story as it happens.", image: "siri_app__dqe6k2qnjii6_large.jpg", alt: "A professional digital profile on a tablet screen" },
      { title: "Make it sound like you.", description: "Keep your profile warm, clear and unmistakably yours — no buzzword bingo required.", image: "voices__ek24o8fxc1me_large.jpg", alt: "A digital interface with voice and tone options" },
      { title: "Every route belongs.", description: "Medicine is shaped by many people: clinicians, researchers, educators, students and the teams around them.", image: "carplay__fyausk62ykii_large.jpg", alt: "A connected interface with messages and maps" },
    ],
  },
  {
    id: "global-community",
    eyebrow: "A world of peers",
    title: "Medicine is global.\nYour community can be, too.",
    intro: "Get to know people working across places, specialties and perspectives. Start with one conversation and see where it takes you.",
    note: "A professional community for people in medicine — not patients seeking care.",
    cards: [
      { title: "Across specialties.", description: "Find a fresh perspective from someone whose work is different from yours — or surprisingly close.", image: "siri__cssan0ayqb2a_large.jpg", alt: "A camera interface on a smartphone" },
      { title: "Across borders.", description: "Medicine has no single centre. Meet colleagues bringing local insight and global curiosity to the same conversation.", image: "visual_intelligence_gallery__f0ybhtxs0pea_large.jpg", alt: "A smartphone displaying a food and nutrition interface" },
      { title: "Across the whole screen.", description: "From a quick introduction to a thoughtful exchange, good connections can start in all sorts of ways.", image: "image__ntmbstiqrv2q_large.jpg", alt: "A digital interface displaying an article" },
      { title: "Make the world feel smaller.", description: "Meet peers beyond the people already in your inbox, department or daily rounds.", image: "mac__c41vndv7wyaa_large.jpg", alt: "A computer displaying a search interface" },
      { title: "New faces, shared field.", description: "Students, educators, clinicians and researchers all bring something valuable to the table.", image: "ipad__e6zvt1cs1m6a_large.jpg", alt: "A tablet displaying a digital workspace" },
    ],
  },
  {
    id: "collaboration",
    eyebrow: "Good work happens together",
    title: "Find your people.\nMake something meaningful.",
    intro: "A colleague can become a sounding board, a co-author, a mentor or simply someone who gets it. Make space for the connections that help good ideas move.",
    note: "Professional conversations, shared learning and collaboration — all welcome.",
    cards: [
      { title: "A better kind of brainstorm.", description: "Bring a question, a half-formed idea or a new point of view. The best conversations don’t need a perfect opening line.", image: "editing__e8p7zayv2wia_large.jpg", alt: "A creative editing workspace on a phone" },
      { title: "Find your sounding board.", description: "Talk through a next step with people who understand the work and can offer a different angle.", image: "reframe__co4c3eamsdpy_large.jpg", alt: "A photo reframing tool on a smartphone" },
      { title: "Turn ideas into collaborations.", description: "A shared interest can be the start of a project, a new friendship or a conversation that keeps going.", image: "playground__eu864jn0rwk2_large.jpg", alt: "A gallery of creative images on a device" },
      { title: "Learn in good company.", description: "Trade notes across disciplines and make learning feel a little more like a team sport.", image: "image_wand__62o3ok1pw766_large.jpg", alt: "A digital sketch and image workspace" },
    ],
  },
  {
    id: "careers",
    eyebrow: "Careers, without the awkward networking",
    title: "Your next chapter\nlooks good from here.",
    intro: "Explore roles, meet mentors and find collaborators who can help you think bigger about what comes next. Your career is a journey, not a single job title.",
    note: "For early-career explorers and seasoned path-makers alike.",
    cards: [
      { title: "Make your next move.", description: "Meet people in the places and specialties you’re curious about. Sometimes the best opportunity starts with a conversation.", image: "write__db0ol0bbmr0i_large.jpg", alt: "A writing interface on a tablet" },
      { title: "Find a mentor, or be one.", description: "Good advice travels both ways. Share what you know and learn from someone a few steps along a different path.", image: "suggestions__di3h038yi5g2_large.jpg", alt: "A messaging interface with conversation options" },
      { title: "Let your work speak for itself.", description: "Make your interests and experience easy to discover — without turning every introduction into a pitch.", image: "proofreading__bklctck3ysqa_large.jpg", alt: "An email and writing interface on a device" },
      { title: "Open doors through people.", description: "Build real professional relationships with people who can share context, ideas and possibilities.", image: "context__b6796b46oppy_large.jpg", alt: "A call interface on a smartphone" },
      { title: "A career with a wider view.", description: "Explore directions across roles, disciplines and geographies. You never have to follow just one script.", image: "live_translation__fl16rj2ln1qy_large.jpg", alt: "A translation interface on a phone" },
    ],
  },
  {
    id: "insights",
    eyebrow: "Ideas travel further together",
    title: "Stay curious.\nKeep the conversation going.",
    intro: "Medicine keeps moving, and so do the people in it. Share a perspective, discover what others are thinking about and bring a little more curiosity to your feed.",
    note: "A place for professional exchange and shared learning.",
    cards: [
      { title: "Share what you’re learning.", description: "A useful insight, a new question or a small win can spark a conversation that reaches further than you expect.", image: "safari__dcdzxxz48k6e_large.jpg", alt: "A colourful website displayed on a phone" },
      { title: "Keep good ideas close.", description: "Follow the topics and conversations that make you think, and come back whenever you have something to add.", image: "passwords__fdi3imn0gci2_large.jpg", alt: "A password management interface on a phone" },
      { title: "Curiosity has no specialty.", description: "Follow a thread outside your usual lane. The most interesting perspective might come from somewhere unexpected.", image: "shortcut__fw6auyd2sj6u_large.jpg", alt: "A shortcut creation screen on a device" },
      { title: "Add your voice.", description: "Ask a thoughtful question, share what’s on your mind and help make the community richer for everyone.", image: "dictation__fq3q57e7ds66_large.jpg", alt: "A dictation microphone interface" },
      { title: "Stay in the loop.", description: "Keep up with ideas and people that matter to your professional world, on your own terms.", image: "calendar__gf9yuwpdy4a6_large.jpg", alt: "A calendar interface on a smartphone" },
    ],
  },
];

const highlightCards = [
  { title: "A profile that feels like you.", description: "Your experience, your interests and the next thing you’re curious about — all in one place.", image: "siri_conversations__cb4puu6g56uq_large.jpg", alt: "A smartphone displaying a conversational interface" },
  { title: "Better together, by design.", description: "Meet peers, trade ideas and find the people who make your work feel more connected.", image: "features__lts2awuq62i6_large.jpg", alt: "A messaging interface on a mobile device" },
  { title: "A wider world of medicine.", description: "Connect across borders and specialties with a community that gets the field.", image: "visual_intelligence__f0ybhtxs0pea_large.jpg", alt: "A visual search interface on a computer" },
  { title: "Career paths with possibility.", description: "Explore different directions and build relationships along the way.", image: "reframe_endframe__ergd5itul8sy_large.jpg", alt: "A photo editing interface on a smartphone" },
  { title: "Ideas worth passing on.", description: "Share what you know and pick up a new perspective from someone else.", image: "proofread__eekr5hm333e6_large.jpg", alt: "A writing interface on a tablet" },
];

const extraFeatures = [
  { title: "Every route in.", description: "Clinical practice, research, education, leadership and everything in between — your perspective belongs.", image: "icon_accessibility__fhs81b6p1cy2_large.png" },
  { title: "A little more perspective.", description: "A peer’s experience can help you see a familiar challenge in a whole new way.", image: "icon_home__cmfniow6wxn6_large.png" },
  { title: "Ideas have their own language.", description: "Find people who share your curiosity, even when your day jobs look different.", image: "icon_genmoji__eoi79eimohoy_large.png" },
  { title: "Grow at your own pace.", description: "Build meaningful relationships and discover what feels like a good next step for you.", image: "icon_workout_buddy__oml91bjk896e_large.png" },
];

const productCategories = ["Clinicians", "Researchers", "Students", "Educators"] as const;
type ProductCategory = (typeof productCategories)[number];

const products: Record<ProductCategory, { name: string; description: string; image: string; href: string; buy: string; chip?: string }[]> = {
  Clinicians: [
    { name: "Build your profile", description: "Bring your practice, interests and ambitions into one professional story.", image: "iphone_duo__zm08xa6bkwia_large.jpg", href: "#professional-identity", buy: "#community", chip: "Your professional identity" },
    { name: "Meet your peers", description: "Find colleagues who understand the work and the world around it.", image: "iphone_18_pro__c5v4somshweq_large.jpg", href: "#global-community", buy: "#collaboration", chip: "Your community" },
    { name: "Explore what’s next", description: "Make connections that can open up new directions in your career.", image: "iphone_air__e8qmj2yg0le2_large.jpg", href: "#careers", buy: "#insights", chip: "Your next chapter" },
  ],
  Researchers: [
    { name: "Find collaborators", description: "Meet people who share your questions, methods or big-picture curiosity.", image: "ipad_pro__gb651uthimem_large.jpg", href: "#collaboration", buy: "#global-community", chip: "Your people" },
    { name: "Share what you’re learning", description: "Trade ideas and perspectives with a community that loves a good question.", image: "ipad_air__b4x98wt3b0z6_large.jpg", href: "#insights", buy: "#community", chip: "Your ideas" },
    { name: "Connect beyond your field", description: "The next useful perspective may come from a discipline you didn’t expect.", image: "ipad_mini__cd2l3x53f1si_large.jpg", href: "#global-community", buy: "#collaboration", chip: "Your wider world" },
  ],
  Students: [
    { name: "Make your introduction", description: "Share what you’re studying, what you’re drawn to and where you hope to go.", image: "macbook_neo__glt765salomm_large.jpg", href: "#professional-identity", buy: "#global-community", chip: "Your first hello" },
    { name: "Meet people a few steps ahead", description: "Learn from peers, mentors and professionals with different paths to share.", image: "macbook_air__etsrhzxcaemq_large.jpg", href: "#careers", buy: "#collaboration", chip: "Your next connection" },
    { name: "Keep exploring", description: "Discover specialties, ideas and career directions you may not have considered.", image: "macbook_pro__bvrsjgbo1r42_large.jpg", href: "#insights", buy: "#careers", chip: "Your possibilities" },
  ],
  Educators: [
    { name: "Share your perspective", description: "Bring your experience and teaching ideas into the wider conversation.", image: "imac__f937rgcno5ym_large.jpg", href: "#insights", buy: "#community", chip: "Your experience" },
    { name: "Connect with colleagues", description: "Meet fellow educators and professionals who care about how medicine grows.", image: "mac_mini__ehfboc6zrvyq_large.jpg", href: "#global-community", buy: "#collaboration", chip: "Your community" },
    { name: "Inspire what’s next", description: "Help the next generation find its feet, its people and its own way forward.", image: "mac_studio__bsbp6frrj1zm_large.jpg", href: "#careers", buy: "#professional-identity", chip: "Your impact" },
  ],
};

const compatibleDevices = [
  ["Your identity", "Experience that tells your story", "Interests that help people find you", "Space to share what’s next"],
  ["Your community", "Peers across medical specialties", "Connections across countries and cultures", "People who understand the field"],
  ["Your next chapter", "Career ideas and new directions", "Mentors, peers and collaborators", "A wider view of what’s possible"],
];

function FeatureRail({
  id,
  cards,
  anchorIds,
  registerTrack,
  active,
  onScroll,
  onMove,
}: {
  id: string;
  cards: { title: string; description: string; image: string; alt: string }[];
  anchorIds?: string[];
  registerTrack: (id: string, node: HTMLDivElement | null) => void;
  active: number;
  onScroll: (id: string, node: HTMLDivElement) => void;
  onMove: (id: string, direction: number, count: number) => void;
}) {
  return (
    <div className="apple-rail-wrap">
      <div
        className="apple-card-rail"
        ref={(node) => registerTrack(id, node)}
        onScroll={(event) => onScroll(id, event.currentTarget)}
        aria-label={`${id.replaceAll("-", " ")} gallery`}
      >
        {cards.map((card, index) => (
          <article className="apple-feature-card" id={anchorIds?.[index]} key={`${id}-${card.title}`}>
            <img src={asset(card.image)} alt={card.alt} loading={index > 1 ? "lazy" : "eager"} />
            <div className="apple-card-copy">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="apple-rail-controls" aria-label={`${id.replaceAll("-", " ")} gallery controls`}>
        <span className="apple-rail-position">{String(active + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}</span>
        <Button
          variant="ghost"
          size="icon"
          className="apple-icon-button"
          aria-label={`Previous item in ${id.replaceAll("-", " ")} gallery`}
          disabled={active === 0}
          onClick={() => onMove(id, -1, cards.length)}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="apple-icon-button"
          aria-label={`Next item in ${id.replaceAll("-", " ")} gallery`}
          disabled={active >= cards.length - 1}
          onClick={() => onMove(id, 1, cards.length)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

function AppleIntelligencePage() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRail, setActiveRail] = useState<Record<string, number>>({});
  const [activeProduct, setActiveProduct] = useState<ProductCategory>("iPhone");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const activeNavTriggerRef = useRef<HTMLButtonElement>(null);
  const siteHeaderRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const railRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!activeMenu && !mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileMenuOpen(false);
        (activeNavTriggerRef.current ?? menuButtonRef.current)?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        activeMenu &&
        siteHeaderRef.current &&
        event.target instanceof Node &&
        !siteHeaderRef.current.contains(event.target)
      ) {
        setActiveMenu(null);
      }
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        event.target instanceof Node &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [activeMenu, mobileMenuOpen]);

  useEffect(() => {
    const video = videoRef.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      if (media.matches && video) {
        video.pause();
        setIsVideoPlaying(false);
      }
    };
    syncMotionPreference();
    media.addEventListener("change", syncMotionPreference);
    return () => media.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const revealTargets = document.querySelectorAll<HTMLElement>(
      ".apple-section-heading, .apple-feature-header, .apple-highlight-feature, .apple-feature-card, .apple-feature-card > img, .apple-hero-art img, .apple-hero-summary, .apple-more-item, .apple-privacy-card, .apple-privacy-copy, .apple-privacy-promise, .apple-product-card, .apple-product-image-link img, .apple-compatible-heading, .apple-compatible-column, .apple-developer-card",
    );

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("apple-scroll-reveal--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("apple-scroll-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.04, rootMargin: "180px 0px 180px 0px" },
    );

    const zoomTargets = ".apple-feature-card > img, .apple-product-image-link img";

    revealTargets.forEach((target) => {
      target.classList.add("apple-scroll-reveal");
      if (target.matches(zoomTargets)) target.classList.add("apple-scroll-zoom");
      if (target.matches(".apple-hero-art img")) {
        target.classList.add("apple-motion-hero-image");
        if (target.matches(".apple-hero-side-left, .apple-hero-panel-left")) {
          target.classList.add("apple-motion-enter-left");
        } else if (target.matches(".apple-hero-side-right, .apple-hero-panel-right")) {
          target.classList.add("apple-motion-enter-right");
        } else {
          target.classList.add("apple-motion-enter-center");
        }
      }
      if (target.matches(".apple-highlight-feature")) target.classList.add("apple-motion-cinematic");
      if (target.matches(".apple-feature-card")) {
        const cardIndex = Array.from(target.parentElement?.children ?? []).indexOf(target);
        const featured = target.closest(".apple-highlights");
        target.classList.add(featured ? "apple-motion-gallery-card" : "apple-motion-feature-card");
        if (cardIndex % 2 === 0) target.classList.add("apple-motion-enter-left");
        else target.classList.add("apple-motion-enter-right");
      }
      if (target.matches(".apple-more-item")) target.classList.add("apple-motion-stagger");
      if (target.matches(".apple-product-card")) target.classList.add("apple-motion-product");
      if (target.matches(".apple-privacy-copy")) target.classList.add("apple-motion-enter-left");
      if (target.matches(".apple-privacy-promise")) target.classList.add("apple-motion-enter-right");
      if (target.matches(".apple-compatible-column")) target.classList.add("apple-motion-detail");
      if (target.matches(".apple-developer-card")) target.classList.add("apple-motion-developer");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  const registerTrack = (id: string, node: HTMLDivElement | null) => {
    railRefs.current[id] = node;
  };

  const updateRailPosition = (id: string, node: HTMLDivElement) => {
    const card = node.firstElementChild;
    if (!(card instanceof HTMLElement)) return;
    const gap = Number.parseFloat(getComputedStyle(node).columnGap || "0");
    const step = card.getBoundingClientRect().width + gap;
    const nextIndex = Math.max(0, Math.round(node.scrollLeft / step));
    setActiveRail((current) => (current[id] === nextIndex ? current : { ...current, [id]: nextIndex }));
  };

  const moveRail = (id: string, direction: number, count: number) => {
    const node = railRefs.current[id];
    const card = node?.firstElementChild;
    if (!node || !(card instanceof HTMLElement)) return;
    const gap = Number.parseFloat(getComputedStyle(node).columnGap || "0");
    const nextIndex = Math.max(0, Math.min(count - 1, (activeRail[id] ?? 0) + direction));
    node.scrollTo({ left: nextIndex * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
    setActiveRail((current) => ({ ...current, [id]: nextIndex }));
  };

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setIsVideoPlaying(true);
      } catch {
        setIsVideoPlaying(false);
      }
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  const activeProducts = products[activeProduct];

  return (
    <div className="apple-page">
      <a className="apple-skip-link" href="#main-content">Skip to content</a>
      <header className={`apple-site-header${mobileMenuOpen ? " is-mobile-menu-open" : ""}`} ref={siteHeaderRef}>
        <nav className="apple-global-nav" aria-label="Apple">
          <a className="apple-wordmark" href="/in/" aria-label="Apple home">Apple</a>
          <div className="apple-desktop-links">
            {primaryLinks.map((link) => (
              <button
                key={link.name}
                className={`apple-nav-item${activeMenu === link.name ? " is-open" : ""}`}
                aria-expanded={activeMenu === link.name}
                aria-controls="apple-mega-menu"
                onClick={(event) => {
                  activeNavTriggerRef.current = event.currentTarget;
                  setActiveMenu(link.name);
                }}
                onMouseEnter={(event) => {
                  activeNavTriggerRef.current = event.currentTarget;
                  setActiveMenu(link.name);
                }}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="apple-nav-actions">
            <Button
              variant="ghost"
              size="icon"
              className="apple-nav-icon"
              aria-label={searchOpen ? "Close search" : "Search Apple"}
              aria-expanded={searchOpen}
              aria-controls="apple-search-panel"
              onClick={() => {
                setSearchOpen((open) => !open);
                setActiveMenu(null);
                setMobileMenuOpen(false);
              }}
            >
              {searchOpen ? <X /> : <Search />}
            </Button>
            <a className="apple-bag-link" href="/in/shop/goto/bag" aria-label="Shopping bag">
              <ShoppingBag aria-hidden="true" />
            </a>
            <Button
              ref={menuButtonRef}
              variant="ghost"
              size="icon"
              className="apple-mobile-menu-button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="apple-mobile-menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
        {activeMenu && (
          <div className="apple-mega-menu" id="apple-mega-menu">
            <div className="apple-mega-inner">
              {(menuCollections[activeMenu] ?? []).map((collection) => (
                <div className="apple-mega-column" key={collection.title}>
                  <p>{collection.title}</p>
                  {collection.items.map((item, index) => (
                    <a
                      key={item}
                      className={index === 0 ? "apple-mega-featured" : ""}
                      href={menuItemHrefs[item] ?? primaryLinks.find((entry) => entry.name === activeMenu)?.href ?? "/in/"}
                      onClick={() => setActiveMenu(null)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        {searchOpen && (
          <form
            className="apple-search-panel"
            id="apple-search-panel"
            action="/in/search"
            method="get"
            role="search"
            onSubmit={() => setSearchOpen(false)}
          >
            <Search aria-hidden="true" />
            <input
              autoFocus
              type="search"
              name="query"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search apple.com"
              aria-label="Search apple.com"
            />
            {searchQuery && (
              <Button variant="ghost" size="icon" className="apple-icon-button" type="button" aria-label="Clear search" onClick={() => setSearchQuery("")}>
                <X />
              </Button>
            )}
          </form>
        )}
        {mobileMenuOpen && (
          <div className="apple-mobile-menu" id="apple-mobile-menu" ref={mobileMenuRef}>
            <div className="apple-mobile-menu-search">
              <Search aria-hidden="true" />
              <span>Search apple.com</span>
            </div>
            <nav aria-label="Apple products">
              {primaryLinks.map((link) => (
                <a href={link.href} key={link.name} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <nav className="apple-product-nav" aria-label="Apple Intelligence navigation">
        <div className="apple-product-nav-inner">
          <a className="apple-product-overview" href="#overview">Overview</a>
          <a href="/in/ios/">iOS</a>
          <a href="/in/macos/">macOS</a>
          <a href="/in/ipados/">iPadOS</a>
          <a href="/in/watchos/">watchOS</a>
          <a className="apple-product-current" href="#overview"><Sparkles aria-hidden="true" /> Apple Intelligence</a>
        </div>
      </nav>

      <main id="main-content">
        <section className="apple-hero" id="overview">
          <div className="apple-hero-copy">
            <p className="apple-eyebrow">Apple Intelligence and Siri</p>
            <h1>Introducing Siri AI.<br />Truly helpful. Truly yours.</h1>
            <p className="apple-availability">Siri AI is available in English.</p>
          </div>
          <div className="apple-hero-art" aria-label="Apple Intelligence working across iPhone apps">
            <img className="apple-hero-side apple-hero-side-left" src={asset("hero_1__d292ly28a14y_large.jpg")} alt="Visual Intelligence searching the natural world" />
            <img className="apple-hero-panel apple-hero-panel-left" src={asset("hero_2__fdo5vcs9icii_large.jpg")} alt="Apple Intelligence in iPhone apps" />
            <img className="apple-hero-panel apple-hero-panel-right" src={asset("hero_3__btr849knn1xy_large.jpg")} alt="Photo editing tools on iPhone" />
            <img className="apple-hero-side apple-hero-side-right" src={asset("hero_4__cs76gaw0f2ie_large.jpg")} alt="Visual Intelligence identifying food" />
            <img className="apple-hero-screen" src={asset("hero_middle_screen__bcird3cws1ia_large.jpg")} alt="Siri AI composing a message on iPhone" />
            <img className="apple-hero-device" src={asset("hero_middle_hw__1uolfadni02u_large.png")} alt="" aria-hidden="true" />
          </div>
          <p className="apple-hero-summary">
            Introducing the next generation of Apple Intelligence and Siri. Truly helpful AI that’s centred around you and your needs. Integrated into your apps, grounded in your context and private at every step.
          </p>
        </section>

        <section className="apple-highlights apple-band" aria-labelledby="highlights-title">
          <div className="apple-section-heading apple-wide-wrap">
            <div>
              <p className="apple-eyebrow">What’s new</p>
              <h2 id="highlights-title">Explore what’s new for<br className="apple-desktop-break" /> Apple Intelligence.</h2>
            </div>
            <div className="apple-highlight-links" aria-label="Explore new features">
              {highlightItems.map((item) => (
                <a href={`#${item.target}`} key={item.title}>{item.title}<ArrowRight aria-hidden="true" /></a>
              ))}
            </div>
          </div>
          <div className="apple-highlight-showcase apple-wide-wrap">
            <div className="apple-highlight-feature" id="highlights-gallery-item-1">
              <div className="apple-highlight-title">
                <p>Apple Intelligence</p>
                <h3>Introducing Siri AI. Incredible new capabilities to be your most helpful and trusted AI assistant.</h3>
              </div>
              <video
                ref={videoRef}
                className="apple-highlight-video"
                src={asset("siri-highlights.mp4")}
                poster={asset("highlights_siri_endframe__bd109g1f3l4y_large.jpg")}
                autoPlay
                muted
                loop
                playsInline
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                aria-label="Siri AI animation"
              />
              <Button
                variant="ghost"
                size="icon"
                className="apple-video-button"
                onClick={toggleVideo}
                aria-label={isVideoPlaying ? "Pause Siri AI animation" : "Play Siri AI animation"}
              >
                {isVideoPlaying ? <Pause /> : <Play />}
              </Button>
            </div>
            <FeatureRail
              id="highlights"
              cards={highlightCards}
              anchorIds={highlightItems.slice(1).map((item) => item.target)}
              registerTrack={registerTrack}
              active={activeRail["highlights"] ?? 0}
              onScroll={updateRailPosition}
              onMove={moveRail}
            />
          </div>
        </section>

        {featureSections.map((section) => (
          <section className="apple-feature-section apple-band" id={section.id} key={section.id}>
            <div className="apple-wide-wrap">
              <header className="apple-feature-header">
                <p className="apple-eyebrow">{section.eyebrow}</p>
                <h2>{section.title.split("\n").map((line, index) => <span key={line}>{line}{index < section.title.split("\n").length - 1 && <br />}</span>)}</h2>
                <p className="apple-section-intro">{section.intro}</p>
                {section.note && <p className="apple-note">{section.note}</p>}
              </header>
              <FeatureRail
                id={section.id}
                cards={section.cards}
                registerTrack={registerTrack}
                active={activeRail[section.id] ?? 0}
                onScroll={updateRailPosition}
                onMove={moveRail}
              />
            </div>
          </section>
        ))}

        <section className="apple-more-section" aria-labelledby="more-title">
          <div className="apple-wide-wrap">
            <p className="apple-eyebrow">Apple Intelligence and Siri AI features</p>
            <h2 id="more-title">And so much more.</h2>
            <div className="apple-more-grid">
              {extraFeatures.map((feature) => (
                <article className="apple-more-item" key={feature.title}>
                  <img src={asset(feature.image)} alt="" loading="lazy" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="apple-privacy-section apple-band" aria-labelledby="privacy-title">
          <div className="apple-privacy-card apple-wide-wrap">
            <div className="apple-privacy-copy">
              <p className="apple-eyebrow">Privacy</p>
              <h2 id="privacy-title">Great powers come<br className="apple-desktop-break" /> with great privacy.</h2>
              <p>Apple Intelligence and Siri AI are designed to protect your privacy at every step. With powerful on-device processing, Apple Intelligence is aware of your personal information without collecting it. And with groundbreaking Private Cloud Compute, Apple Intelligence can draw on larger server-based models, without making your data accessible to Apple or anyone else.</p>
            </div>
            <div className="apple-privacy-promise">
              <img src={asset("icon_apple__b0t9csy8tuj6_large.jpg")} alt="Apple" loading="lazy" />
              <h3>Private Cloud Compute</h3>
              <ul>
                <li><ShieldCheck aria-hidden="true" /> Your data is never stored</li>
                <li><ShieldCheck aria-hidden="true" /> Used only for your requests</li>
                <li><ShieldCheck aria-hidden="true" /> Verifiable privacy promise</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="apple-products-section apple-band" id="experience" aria-labelledby="products-title">
          <div className="apple-wide-wrap">
            <header className="apple-products-heading">
              <div>
                <p className="apple-eyebrow">Made for Apple Intelligence</p>
                <h2 id="products-title">Experience Apple Intelligence.</h2>
                <p>Find the right iPhone, iPad or Mac for you.</p>
              </div>
              <div className="apple-product-tabs" role="tablist" aria-label="Browse compatible products">
                {productCategories.map((category) => (
                  <Button
                    variant="ghost"
                    className={`apple-product-tab${activeProduct === category ? " is-active" : ""}`}
                    role="tab"
                    aria-selected={activeProduct === category}
                    aria-controls="apple-product-grid"
                    key={category}
                    onClick={() => setActiveProduct(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </header>
            <div className="apple-product-grid" id="apple-product-grid" role="tabpanel" aria-label={`${activeProduct} products`}>
              {activeProducts.map((product) => (
                <article className="apple-product-card" key={product.name}>
                  <a href={product.href} className="apple-product-image-link" aria-label={`Learn more, ${product.name}`}>
                    <img src={asset(product.image)} alt={product.name} loading="lazy" />
                  </a>
                  <div className="apple-product-info">
                    {product.chip && <p className="apple-product-chip">{product.chip}</p>}
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="apple-product-links">
                      <a href={product.href}>Learn more <ArrowRight aria-hidden="true" /></a>
                      <a href={product.buy}>Buy</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="apple-compatible-section" aria-labelledby="compatible-title">
          <div className="apple-wide-wrap">
            <div className="apple-compatible-heading">
              <p className="apple-eyebrow">Apple Intelligence</p>
              <h2 id="compatible-title">Compatible with these devices.</h2>
            </div>
            <div className="apple-compatible-grid">
              {compatibleDevices.map(([category, ...devices]) => (
                <div className="apple-compatible-column" key={category}>
                  <h3>{category}</h3>
                  <ul>{devices.map((device) => <li key={device}>{device}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="apple-developer-section apple-band" aria-labelledby="developer-title">
          <div className="apple-developer-card apple-wide-wrap">
            <div className="apple-developer-icon">
              <img src={asset("icon_sdk__f683jtx3txua_large.png")} alt="Apple Software Developers Kit" loading="lazy" />
            </div>
            <div>
              <p className="apple-eyebrow">For developers</p>
              <h2 id="developer-title">New possibilities for your favourite apps.</h2>
              <p>The Foundation Models framework, along with App Intents, APIs and frameworks, is built with privacy at the centre. Any app can tap into the on-device models that power Apple Intelligence, and the features you build work offline. And it’s all at no cost per request.</p>
              <a className="apple-developer-link" href="https://developer.apple.com/apple-intelligence/" target="_blank" rel="noreferrer">Learn more about developing for Apple Intelligence <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="apple-footer">
        <div className="apple-wide-wrap">
          <p>Apple Intelligence is available in English. Feature availability and capabilities may vary by language, region and device. Usage limits may apply.</p>
          <div className="apple-footnote-list">
            <a id="footnote-1" href="#overview">1. Apple Intelligence is available with Siri and device language set to a supported language. Feature availability varies by region, language and device. Siri AI is available in beta on supported operating systems. Daily usage limits may apply to certain features.</a>
            <a id="footnote-2" href="#communication">2. Suggestions in Messages conversations are coming in a future software update.</a>
            <a id="footnote-3" href="#visual-intelligence">3. Available on compatible iPhone, iPad and Mac models with device language set to a supported English variant.</a>
            <a id="footnote-4" href="#siri-ai">4. Available on iPhone 18 Pro, iPhone 18 Pro Max, iPhone Duo, iPhone 17 Pro, iPhone 17 Pro Max, iPhone Air, supported iPad models and supported Mac models.</a>
            <a id="footnote-5" href="#siri-ai">5. CarPlay support is either standard or available as an option on many new 2016 cars and later. Support varies by vehicle and region.</a>
            <a id="footnote-6" href="#productivity">6. Dictation availability varies by language and supported device.</a>
            <a id="footnote-7" href="#siri-ai">7. Requires an Apple Intelligence-enabled iPhone or iPad and a home hub such as HomePod or Apple TV 4K with the latest software.</a>
            <a id="footnote-8" href="#siri-ai">8. Requires a home hub, an Apple Intelligence-enabled iPhone and an eligible iCloud+ plan.</a>
            <a id="footnote-9" href="#siri-ai">9. Natural-language search requires an Apple Intelligence-enabled device and compatible HomeKit Secure Video setup.</a>
            <a id="footnote-10" href="#siri-ai">10. Requires a paired Apple Intelligence-enabled iPhone and Bluetooth headphones, with device and Siri language set to English or Spanish.</a>
          </div>
          <div className="apple-footer-bottom">
            <a href="/in/">Apple</a>
            <span>India</span>
            <span>© 2026 Apple Inc. All rights reserved.</span>
            <a href="/in/legal/privacy/">Privacy</a>
            <a href="/in/legal/terms/site.html">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}