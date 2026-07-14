export type Trip = {
  name: string;
  region: string;
  level: "Gentle" | "Moderate";
  tagColor: string;
  date: string;
  distance: string;
  duration: string;
  note: string;
  image: string;
  imageAlt: string;
};

export const TRIPS: Trip[] = [
  {
    name: "Lauenen Lake Loop",
    region: "Gstaad · Bernese Oberland",
    level: "Gentle",
    tagColor: "#879375",
    date: "Jul 12",
    distance: "8 km",
    duration: "3 hrs",
    note: "A storybook turquoise lake ringed by meadows and waterfalls. Flat, flowery, and made for dogs to splash.",
    image: "/images/hikes/lauenen.png",
    imageAlt: "Turquoise Lauenen lake ringed by alpine meadows",
  },
  {
    name: "Five Lakes Walk",
    region: "Zermatt · Valais",
    level: "Moderate",
    tagColor: "#9a7f4f",
    date: "Aug 9",
    distance: "9.3 km",
    duration: "4 hrs",
    note: "Five alpine lakes, each mirroring the Matterhorn. The classic — and worth every step for the views.",
    image: "/images/hikes/fivelakes.png",
    imageAlt: "The Matterhorn mirrored in an alpine lake near Zermatt",
  },
  {
    name: "Wispile Ridge & Picnic",
    region: "Gstaad · Bernese Oberland",
    level: "Moderate",
    tagColor: "#9a7f4f",
    date: "Aug 23",
    distance: "11 km",
    duration: "4.5 hrs",
    note: "A breezy ridge walk with 360° peaks, ending in a long alpine picnic in the grass. Blankets provided.",
    image: "/images/hikes/wispile.png",
    imageAlt: "Grassy Wispile ridge with panoramic alpine peaks",
  },
  {
    name: "Salève Sunrise Stroll",
    region: "Around Geneva",
    level: "Gentle",
    tagColor: "#879375",
    date: "Monthly",
    distance: "5 km",
    duration: "2 hrs",
    note: "Our home mountain. We meet at dawn, climb gently, and watch the city wake up over coffee and croissants.",
    image: "/images/hikes/geneva.png",
    imageAlt: "Sunrise over Geneva seen from the Salève",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  initial: string;
  color: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I came alone and nervous and left with a dozen friends and a standing Sunday plan. My spaniel agrees.",
    name: "Camille",
    detail: "Member since 2024",
    initial: "C",
    color: "#879375",
  },
  {
    quote:
      "No one cares how fast you go. We stop for every view, every flower, and every dog that wants saying hello to.",
    name: "Marie",
    detail: "Member since 2023",
    initial: "M",
    color: "#c4a199",
  },
  {
    quote:
      "The Zermatt walk genuinely changed my year. These women feel like the sisters I chose.",
    name: "Sofia",
    detail: "Member since 2025",
    initial: "S",
    color: "#97a6b3",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "Do I need to be a fit or experienced hiker?",
    a: "Not at all. We grade every walk from gentle strolls to bigger summits, and someone always hangs back at a relaxed pace. If you can walk to the shops, you can walk with us.",
  },
  {
    q: "Is it really free to join?",
    a: "Yes — membership is completely free and always will be. You only ever cover your own transport, snacks, and the occasional celebratory slice of cake.",
  },
  {
    q: "Can I bring my dog?",
    a: "Please do — dogs are half the point. We just ask that they're sociable, kept on a lead near livestock, and ready for a good day out. Sisi herself wouldn't have walked without one.",
  },
  {
    q: "Is the club really women only?",
    a: "It is. Sisi Club is a space for women and girlfriends to wander, talk, and breathe. Dogs of every gender are very much welcome.",
  },
  {
    q: "How often do you meet, and where?",
    a: "Roughly twice a month, plus our easy weekly lakeside promenade. Walks rotate between trails around Geneva and weekend trips to the Alps — Gstaad and Zermatt are favourites.",
  },
  {
    q: "How do I find out about the next walk?",
    a: "Once you sign up, we'll add you to the circle and email you the details — meeting point, carpools, and dog plan — about a week before each walk.",
  },
];

export const PACE_OPTIONS = [
  "Gentle stroller — happy to amble",
  "Day hiker — a few hours is lovely",
  "Summit seeker — take me high",
] as const;

export const DEFAULT_PACE = PACE_OPTIONS[0];

// TODO: confirm the correct contact address with the client before shipping —
// the domain is sisi.club, but the handoff prototype showed hello@sisiclub.ch.
export const CONTACT_EMAIL = "hello@sisiclub.ch";
