import Collage1 from "./images/collage/collage1.png";
import Collage2 from "./images/collage/collage2.gif";
import Collage3 from "./images/collage/collage3.png";
import Collage4 from "./images/collage/collage4.gif";
import Collage5 from "./images/collage/collage5.gif";

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
    img: Collage1,
    href: "https://blogs.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=blogs",
  },
  {
    label: "Poetry",
    img: Collage2,
    href: "https://poetry.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=poetry",
  },
  {
    label: "Gallery",
    img: Collage3,
    href: "https://gallery.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=gallery",
  },
  {
    label: "Music",
    img: Collage4,
    href: "https://music.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=music",
  },
  {
    label: "Philosophy",
    img: Collage5,
    href: "https://philosophy.latifur.dev/?utm_source=portfolio&utm_medium=collage&utm_campaign=directory&utm_content=philosophy",
  },
];
