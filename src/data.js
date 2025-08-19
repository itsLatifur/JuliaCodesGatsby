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

export const collageItems = [
  { label: "Content Scheduling", img: Collage1, href: "" },
  { label: "Trivia Game Design", img: Collage2, href: "" },
  { label: "Email Onboarding", img: Collage3, href: "" },
  { label: "Paywall Popup", img: Collage4, href: "" },
  { label: "Navigation Collapse", img: Collage5, href: "" },
];
