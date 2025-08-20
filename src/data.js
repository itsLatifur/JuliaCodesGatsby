import BlogsGif from "./images/collage/blogs.gif";
import PoetryGif from "./images/collage/poetry.gif";
import GalleryGif from "./images/collage/gallery.gif";
import MusicGif from "./images/collage/music.gif";
import PhilosophyGif from "./images/collage/philosophy.gif";

export const personalData = {
  name: "Latifur Rahman",
  role: ["Software Engineer"],
  description:
    "I craft solid and scalable frontend products with great user experiences. Highly skilled at progressive enhancement, design systems & UI Engineering.",

  showProfileImage: true, // can be toggled to show(true)/hide(false) profile image
  profileImage: "/profile.jpg",
  // Navbar logo (public path like "/my-logo.svg" or imported asset). Leave empty to use default SVG mark.
  navLogo: "/favicon.png",
  linkedIn: "https://www.linkedin.com/in/latifur/",
  github: "https://github.com/itsLatifur",
  email: "itslatifur@gmail.com",
  resumeLink: "/resume.pdf",
  showExperiences: false, // can be toggled to show(true)/hide(false) experience section
  showCollage: false, // toggle entire collage section on/off
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
