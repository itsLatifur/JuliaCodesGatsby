import BlogsGif from "./images/collage/blogs.gif";
import PoetryGif from "./images/collage/poetry.gif";
import GalleryGif from "./images/collage/gallery.gif";
import MusicGif from "./images/collage/music.gif";
import PhilosophyGif from "./images/collage/philosophy.gif";

export const personalData = {
  name: "Latifur Rahman",
  role: ["Software Engineer"],
  description:
    "I build accessible, performant web apps with React and MySQL — currently exploring Node/Express.",
  // About section text (independent from hero description)
  about:
    "I build responsive, accessible web interfaces with React and Tailwind/Bootstrap, and implement data‑backed features with MySQL. I care about performance, accessibility, and maintainable design systems. I’m also exploring Node/Express and researching low‑resource Bangla sentiment classification using BanglaBERT.",
  // Education and location (used to render a meta line under About)
  education: {
    status: "Final‑year CSE student (12th semester)",
    institution: "IUBAT",
    url: "https://iubat.edu",
  },
  location: "Dhaka, Bangladesh",

  showProfileImage: true, // can be toggled to show(true)/hide(false) profile image
  profileImage: "/profile.jpg",
  // Navbar logo (public path like "/my-logo.svg" or imported asset). Leave empty to use default SVG mark.
  navLogo: "/favicon.png",
  linkedIn: "https://www.linkedin.com/in/latifur/",
  github: "https://github.com/itsLatifur",
  email: "itslatifur@gmail.com",
  resumeLink: "/Latifur_Rahman_Resume.pdf",
  showExperiences: false, // can be toggled to show(true)/hide(false) experience section
  showCollage: false, // toggle entire collage section on/off
  showSkills: true, // toggle skills chips section
  showCertifications: true, // toggle certifications section
  showResearch: true, // toggle research section
  // Projects visibility on the homepage (always visible on /projects route)
  showProjectsOnHome: true,

  // Analytics configuration (set your GA4 ID here to enable analytics)
  analytics: {
    gaMeasurementId: "", // e.g., "G-XXXXXXX"; leave empty to disable
  },

  // Skills & tooling chips (shown under the hero)
  // Objects kept for potential future metadata (order only)
  skills: [
    { label: "React", order: 1 },
    { label: "JavaScript", order: 2 },
    { label: "Bootstrap", order: 3 },
    { label: "Tailwind CSS", order: 4 },
    { label: "MySQL", order: 5 },
  ],

  // Certifications / Achievements (shown under About)
  certifications: [
    {
      name: "Web Development Essentials (80 hours)",
      issuer:
        "Department of CSE, Jagannath University • EDGE Project, Bangladesh Computer Council (ICT Division)",
      year: "2025",
      url: "https://training.edge.gov.bd/certificate-validation?certificate_no=EDGE-DSTS-106-2619-00006",
      // Optional metadata for future UI
      credentialId: "EDGE-DSTS-106-2619-00006",
      order: 1,
    },
  ],

  // Research / Thesis work (shown next to Certifications)
  research: [
    {
      title:
        "Low-Resource Sentiment Classification for Regional Bangla Dialects Using BanglaBERT",
      status: "Ongoing",
      year: "2025",
      institution:
        "IUBAT — International University of Business Agriculture and Technology",
      // Optional link to paper/preprint or repo when available
      url: "",
      order: 1,
    },
  ],
};

export const experiencesData = [
  {
    years: "2024 - now",
    title: "Senior Product Designer at Atmosphere TV",
    description: "Lead designer for tv for bars & restaurants",
  },
  {
    years: "2023 - 2024",
    title: "Product Designer at Atmosphere TV",
    description: "Led design & research for customer tooling",
  },
];

// Collage configuration
// Each item supports:
// - label: string (shown under the tile)
// - href: string (optional; opens in a new tab if provided)
// - img: imported asset (preferred for local src images)
// - src: string URL or public path (e.g., "/my-image.jpg")

// Collage tiles (directory) — control count, labels, links, and images here
// Tip: replace the img with your own imported asset, or set `src: "/public-path.png"`
export const collageItems = [
  {
    label: "Blogs",
    img: BlogsGif,
    href: "https://blogs.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=blogs",
    visible: true,
  },
  {
    label: "Poetry",
    img: PoetryGif,
    href: "https://poetry.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=poetry",
    visible: true,
  },
  {
    label: "Gallery",
    img: GalleryGif,
    href: "https://gallery.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=gallery",
    visible: true,
  },
  {
    label: "Music",
    img: MusicGif,
    href: "https://music.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=music",
    visible: true,
  },
  {
    label: "Philosophy",
    img: PhilosophyGif,
    href: "https://philosophy.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=philosophy",
    visible: true,
  },
];
