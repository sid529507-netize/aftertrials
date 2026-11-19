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
    title: "New reimagined Siri",
    target: "highlights-gallery-item-1",
    image: "highlights_siri_endframe__bd109g1f3l4y_large.jpg",
    description: "Introducing Siri AI. Incredible new capabilities to be your most helpful and trusted AI assistant.",
  },
  {
    title: "Siri AI",
    target: "highlights-gallery-item-2",
    image: "siri_conversations__cb4puu6g56uq_large.jpg",
    description: "Type or talk naturally with Siri AI to find what you need and get more done.",
  },
  {
    title: "Apple Intelligence in apps",
    target: "highlights-gallery-item-3",
    image: "features__lts2awuq62i6_large.jpg",
    description: "Next-generation Apple Intelligence enhances the apps you use the most.",
  },
  {
    title: "Visual Intelligence",
    target: "highlights-gallery-item-4",
    image: "visual_intelligence__f0ybhtxs0pea_large.jpg",
    description: "Search and take action with Visual Intelligence, now on even more devices.",
  },
  {
    title: "Photo editing",
    target: "highlights-gallery-item-5",
    image: "reframe_endframe__ergd5itul8sy_large.jpg",
    description: "Transform your photos with Spatial Reframing, Extend and Clean Up.",
  },
  {
    title: "Write with Siri",
    target: "highlights-gallery-item-6",
    image: "proofread__eekr5hm333e6_large.jpg",
    description: "Write with Siri virtually anywhere you type — compose, edit and send messages.",
  },
];

const featureSections = [
  {
    id: "siri-ai",
    eyebrow: "Siri AI",
    title: "Your AI assistant.\nMore personal. More powerful.",
    intro:
      "Siri AI is powered by Apple Intelligence, and is more helpful than ever. Get more done every day with richer answers, natural conversations and a new, dedicated app.",
    note: "Siri AI is available in English. · Usage limits may apply.",
    cards: [
      { title: "Just ask Siri.", description: "Powered by Apple Intelligence, Siri AI is your conversational AI assistant with entirely new capabilities. Ask open-ended questions, brainstorm ideas for work or creative projects, and engage in natural, back-and-forth conversations.", image: "conversation__dohjgpuxnd26_large.jpg", alt: "iPhone screen with a conversational Siri AI request" },
      { title: "Siri understands your personal context.", description: "Siri AI can find relevant answers to what you’re looking for just by asking. Search for a photo from years ago, easily locate an email buried in your inbox or pull up the details from a note you saved.", image: "personal_context__f6ufkgjb8y2q_large.jpg", alt: "Photos from a trip, with a search request for Spain" },
      { title: "Take action in more apps.", description: "Siri AI can take actions in apps like Messages, Music, Reminders and more based on what you’re doing in the moment. Quickly edit a message you just sent or add a song you hear in the car to your workout playlist.", image: "app_actions__dq6gu53zifyq_large.jpg", alt: "Siri AI app actions" },
      { title: "Tap into broad world knowledge.", description: "Ask about virtually any topic that’s on your mind, from important facts to recipes and travel recommendations. Siri AI can reference information online to give you detailed, up-to-date insights.", image: "world_knowledge__ff45byjw8zu6_large.jpg", alt: "A question to Siri AI beneath a starry sky" },
      { title: "Introducing the Siri app.", description: "A dedicated app brings together all your conversations in one place, so you can ask a question on your iPhone and pick up where you left off on your iPad. Pin conversations or start a new one.", image: "siri_app__dqe6k2qnjii6_large.jpg", alt: "The Siri app on iPad" },
      { title: "Customise how Siri sounds.", description: "Pick a voice, then customise expressivity and pace until it clicks for you.", image: "voices__ek24o8fxc1me_large.jpg", alt: "Voice characteristics: pitch, speed, tone and accent" },
      { title: "Siri AI in CarPlay.", description: "On the road, ask Siri which trail your friend suggested and get the answer instantly. Siri in CarPlay keeps you informed without taking your hands off the wheel.", image: "carplay__fyausk62ykii_large.jpg", alt: "CarPlay showing Messages and Maps" },
    ],
  },
  {
    id: "visual-intelligence",
    eyebrow: "Visual Intelligence",
    title: "Learn about what’s in front of you and on your screen.",
    intro: "Visual Intelligence is even more helpful in the moment, now in the camera and coming to Mac and iPad.",
    note: "Usage limits may apply.",
    cards: [
      { title: "Siri mode in Camera.", description: "Siri mode and Visual Intelligence let you search, ask questions and take action based on what’s around you with just a tap.", image: "siri__cssan0ayqb2a_large.jpg", alt: "Siri mode in the iPhone Camera app" },
      { title: "New smart actions.", description: "Visual Intelligence makes it easy to get nutritional information on a dish in front of you, turn a photo of a loyalty or membership card into a Wallet pass and more.", image: "visual_intelligence_gallery__f0ybhtxs0pea_large.jpg", alt: "Visual Intelligence identifying a dish" },
      { title: "Ask Siri about what’s in front of you.", description: "Get information, take action and search visually using the content on your screen.", image: "image__ntmbstiqrv2q_large.jpg", alt: "Image Search summarising an article" },
      { title: "Visual Intelligence with Siri on Mac.", description: "Take a screenshot of what’s on your display, like an image or a PDF, and Visual Intelligence lets you search and take action.", image: "mac__c41vndv7wyaa_large.jpg", alt: "Siri searching a picture on Mac" },
      { title: "Visual Intelligence with Siri on iPad.", description: "Ask Siri AI about virtually anything on your display with a screenshot. Tap the item with your finger or circle it with Apple Pencil to find out more.", image: "ipad__e6zvt1cs1m6a_large.jpg", alt: "Visual Intelligence on iPad" },
    ],
  },
  {
    id: "photos-and-images",
    eyebrow: "Photos and images",
    title: "Perfect your photos. Power your creativity.",
    intro: "Improve your compositions with intuitive and intelligent editing tools in the Photos app. Reframe your shot, extend its edges and remove distractions. In Image Playground, create and modify images in virtually any style, including photorealistic.",
    note: "Usage limits may apply.",
    cards: [
      { title: "Next-level intelligent photo editing.", description: "Reframe a photo after it’s been taken with Spatial Reframing. Expand your shots with the Extend tool. And remove even larger objects with the enhanced Clean Up tool.", image: "editing__e8p7zayv2wia_large.jpg", alt: "Photo editing tools in Photos" },
      { title: "Reframe your photo even after it’s taken.", description: "Move the viewpoint, adjust the angle or zoom in as if you were repositioning the camera in the moment with Spatial Reframing.", image: "reframe__co4c3eamsdpy_large.jpg", alt: "Photo being reframed" },
      { title: "Express more with Image Playground.", description: "Create unique, high-quality images in just about any style. Modify and transform your images with a description or using touch.", image: "playground__eu864jn0rwk2_large.jpg", alt: "A gallery of Image Playground creations" },
      { title: "Image Wand.", description: "Transform rough sketches into images in virtually any style right in Notes.", image: "image_wand__62o3ok1pw766_large.jpg", alt: "Image Wand turning a sketch into an image" },
    ],
  },
  {
    id: "communication",
    eyebrow: "Communication",
    title: "A powerful way with words.",
    intro: "Apple Intelligence makes everyday communication effortless — helping you strike the right tone, proofread your work, provide relevant info during calls and translate languages.",
    note: "Available in English · Usage limits may apply.",
    cards: [
      { title: "Write with Siri virtually anywhere you type.", description: "Siri AI can now generate a draft from scratch or provide feedback on what you’ve written. In Messages and Mail, it can match your writing style, punctuation and tone.", image: "write__db0ol0bbmr0i_large.jpg", alt: "Writing with Siri on iPad" },
      { title: "Get things done with Suggestions.", description: "Messages and Mail offer suggestions to take quick actions based on a conversation — add a calendar event or search for a photo with just a tap.", image: "suggestions__di3h038yi5g2_large.jpg", alt: "Suggested actions in Messages" },
      { title: "Proofread as you type.", description: "Apple Intelligence automatically checks your grammar and spelling and offers suggestions virtually anywhere you type.", image: "proofreading__bklctck3ysqa_large.jpg", alt: "Siri AI proofreading an email" },
      { title: "Get relevant information while on a call.", description: "Call Context can proactively surface relevant information from across apps when you’re calling a business — like a confirmation code from Mail when you call an airline.", image: "context__b6796b46oppy_large.jpg", alt: "Call Context on iPhone" },
      { title: "Communicate across languages.", description: "Live Translation can translate texts in Messages, show live translated captions in FaceTime and provide spoken translations for calls and conversations on AirPods.", image: "live_translation__fl16rj2ln1qy_large.jpg", alt: "Live Translation in Messages" },
    ],
  },
  {
    id: "productivity",
    eyebrow: "Productivity",
    title: "Quick wins. All day.",
    intro: "Keep your browsing more organised and timely with Safari enhancements. Create useful shortcuts with ease, update passwords with just a tap and find relevant emails faster than ever.",
    note: "Available in English · Usage limits may apply.",
    cards: [
      { title: "Safari works smarter for you.", description: "Tabs can be automatically grouped into topics. Safari Notify Me monitors pages for changes and alerts you when it’s time to act. You can also create an extension to personalise or automate websites.", image: "safari__dcdzxxz48k6e_large.jpg", alt: "Safari tabs grouped by topic" },
      { title: "Fix passwords with a tap.", description: "The Passwords app alerts you to weak or compromised passwords and can update them on your behalf.", image: "passwords__fdi3imn0gci2_large.jpg", alt: "Password security recommendations" },
      { title: "Describe a shortcut.", description: "Automate daily tasks with a simple description. Just describe what you need, and Shortcuts creates an automation that connects actions across apps.", image: "shortcut__fw6auyd2sj6u_large.jpg", alt: "Creating a Shortcut with a description" },
      { title: "Improved accuracy in Dictation.", description: "A powerful new on-device model allows Dictation to understand you even better as you speak.", image: "dictation__fq3q57e7ds66_large.jpg", alt: "Dictation microphone" },
      { title: "Describe a calendar event.", description: "Add and edit events on your calendar with just a description. Change a lunch meeting to a coffee chat and Calendar adjusts the details.", image: "calendar__gf9yuwpdy4a6_large.jpg", alt: "Creating a Calendar event by describing it" },
    ],
  },
];

const highlightCards = [
  { title: "Siri AI in your apps.", description: "A more personal assistant that understands context and helps you get things done.", image: "siri_conversations__cb4puu6g56uq_large.jpg", alt: "A conversational request to Siri AI" },
  { title: "Apple Intelligence in apps.", description: "Helpful new capabilities in the apps you use every day.", image: "features__lts2awuq62i6_large.jpg", alt: "Apple Intelligence in Messages" },
  { title: "Visual Intelligence.", description: "Search and take action based on what you see around you.", image: "visual_intelligence__f0ybhtxs0pea_large.jpg", alt: "Visual Intelligence on Mac" },
  { title: "Photo editing.", description: "Reframe and refine your favourite photos with intuitive tools.", image: "reframe_endframe__ergd5itul8sy_large.jpg", alt: "Spatial Reframing in Photos" },
  { title: "Write with Siri.", description: "Compose, edit and send messages wherever you type.", image: "proofread__eekr5hm333e6_large.jpg", alt: "Writing with Siri on iPad" },
];

const extraFeatures = [
  { title: "Accessibility.", description: "VoiceOver describes your surroundings and onscreen content in richer detail. Magnifier lets you ask about what’s in frame. Accessibility Reader cleans up text, and Voice Control responds to your words.", image: "icon_accessibility__fhs81b6p1cy2_large.png" },
  { title: "Smarter Home.", description: "Apple Intelligence in the Home app can combine activity notifications, describe HomeKit Secure Video footage and help search for clips.", image: "icon_home__cmfniow6wxn6_large.png" },
  { title: "Genmoji.", description: "Create high-quality Genmoji to match the moment.", image: "icon_genmoji__eoi79eimohoy_large.png" },
  { title: "Workout Buddy.", description: "Get deeper insights and more data-rich motivation. Train without your iPhone nearby, and enjoy Workout Buddy in Spanish.", image: "icon_workout_buddy__oml91bjk896e_large.png" },
];

const productCategories = ["iPhone", "iPad", "Laptops", "Desktops"] as const;
type ProductCategory = (typeof productCategories)[number];

const products: Record<ProductCategory, { name: string; description: string; image: string; href: string; buy: string; chip?: string }[]> = {
  iPhone: [
    { name: "iPhone Duo", description: "The largest display of any iPhone. Foldable. Posable. And durable.", image: "iphone_duo__zm08xa6bkwia_large.jpg", href: "/in/iphone-duo/", buy: "/in/shop/goto/buy_iphone/iphone_duo", chip: "A20 Pro" },
    { name: "iPhone 18 Pro", description: "The ultimate performance and camera, with exceptional battery life.", image: "iphone_18_pro__c5v4somshweq_large.jpg", href: "/in/iphone-18-pro/", buy: "/in/shop/goto/buy_iphone/iphone_18_pro", chip: "A20 Pro" },
    { name: "iPhone Air", description: "Incredibly light and thin with pro performance.", image: "iphone_air__e8qmj2yg0le2_large.jpg", href: "/in/iphone-air/", buy: "/in/shop/goto/buy_iphone/iphone_air", chip: "A19 Pro" },
    { name: "iPhone 17", description: "Powerful, durable and delightful.", image: "iphone_17__blt6ol28ofma_large.jpg", href: "/in/iphone-17/", buy: "/in/shop/goto/buy_iphone/iphone_17", chip: "A19" },
    { name: "iPhone 17e", description: "Feature stacked. Value packed.", image: "iphone_17e__dpneq88xyjqu_large.jpg", href: "/in/iphone-17e/", buy: "/in/shop/goto/buy_iphone/iphone_17e", chip: "A19" },
    { name: "iPhone 16", description: "Amazing performance. Durable design.", image: "iphone_16__c21r43p8pvu6_large.jpg", href: "/in/iphone-16/specs/", buy: "/in/shop/goto/buy_iphone/iphone_16", chip: "A18" },
  ],
  iPad: [
    { name: "iPad Pro", description: "The ultimate iPad experience with the most advanced technology.", image: "ipad_pro__gb651uthimem_large.jpg", href: "/in/ipad-pro/", buy: "/in/shop/goto/ipad_pro/select", chip: "M1 and later" },
    { name: "iPad Air", description: "Serious performance in a thin and light design.", image: "ipad_air__b4x98wt3b0z6_large.jpg", href: "/in/ipad-air/", buy: "/in/shop/goto/buy_ipad/ipad_air", chip: "M1 and later" },
    { name: "iPad mini", description: "The full iPad experience in an ultra-portable design.", image: "ipad_mini__cd2l3x53f1si_large.jpg", href: "/in/ipad-mini/", buy: "/in/shop/goto/buy_ipad/ipad_mini", chip: "A17 Pro and later" },
  ],
  Laptops: [
    { name: "MacBook Neo", description: "The magic of Mac at a surprising price.", image: "macbook_neo__glt765salomm_large.jpg", href: "/in/macbook-neo/", buy: "/in/shop/goto/buy_mac/macbook_neo", chip: "A18 Pro" },
    { name: "MacBook Air", description: "Thin. Fast. Powerful and portable.", image: "macbook_air__etsrhzxcaemq_large.jpg", href: "/in/macbook-air/", buy: "/in/shop/goto/buy_mac/macbook_air", chip: "M1 and later" },
    { name: "MacBook Pro", description: "A powerful laptop for every kind of pro.", image: "macbook_pro__bvrsjgbo1r42_large.jpg", href: "/in/macbook-pro/liquid-retina-xdr-display/", buy: "/in/shop/goto/buy_mac/macbook_pro", chip: "M1 and later" },
    { name: "MacBook Pro with PROLED XDR Display", description: "The most advanced MacBook Pro with the world’s best laptop display.", image: "macbook_pro_proled_xdr__flsc5omlyeuu_large.jpg", href: "/in/macbook-pro/proled-xdr-display/", buy: "/in/shop/goto/buy_mac/macbook_pro_proled_xdr", chip: "M5 Pro and later" },
  ],
  Desktops: [
    { name: "iMac", description: "An all-in-one desktop for creativity and productivity.", image: "imac__f937rgcno5ym_large.jpg", href: "/in/imac/", buy: "/in/shop/goto/buy_mac/imac", chip: "M1 and later" },
    { name: "Mac mini", description: "The mini-est, most affordable Mac desktop.", image: "mac_mini__ehfboc6zrvyq_large.jpg", href: "/in/mac-mini/", buy: "/in/shop/goto/buy_mac/mac_mini", chip: "M1 and later" },
    { name: "Mac Studio", description: "Powerful performance and connectivity for pros.", image: "mac_studio__bsbp6frrj1zm_large.jpg", href: "/in/mac-studio/", buy: "/in/shop/goto/buy_mac/mac_studio", chip: "M1 Max and later" },
  ],
};

const compatibleDevices = [
  ["iPhone", "iPhone Duo (A20 Pro)", "iPhone 18 Pro Max (A20 Pro)", "iPhone 18 Pro (A20 Pro)", "iPhone 17 Pro Max (A19 Pro)", "iPhone 17 Pro (A19 Pro)", "iPhone Air (A19 Pro)", "iPhone 17 (A19)", "iPhone 17e (A19)", "iPhone 16 Pro Max (A18 Pro)", "iPhone 16 Pro (A18 Pro)", "iPhone 16 Plus (A18)", "iPhone 16 (A18)", "iPhone 16e (A18)", "iPhone 15 Pro Max (A17 Pro)", "iPhone 15 Pro (A17 Pro)"],
  ["iPad", "iPad Pro (M1 and later)", "iPad Air (M1 and later)", "iPad mini (A17 Pro and later)"],
  ["Mac", "MacBook Neo (A18 Pro)", "MacBook Air (M1 and later)", "MacBook Pro (M1 and later)", "MacBook Pro with PROLED XDR Display (M5 Pro and later)", "iMac (M1 and later)", "Mac mini (M1 and later)", "Mac Studio (M1 Max and later)", "Mac Pro (M2 Ultra)"],
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