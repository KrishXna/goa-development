export type NavMenu = {
  name: any;
  slug: string;
  external?: boolean;
  children?: NavMenu[];
};

export const NavMenuItems: NavMenu[] = [
  {
    name: "Home",
    slug: "/",
    children: [],
  },
  {
    name: "About",
    slug: "/about",
    children: [
      { name: "BSides Goa", slug: "/" },
      { name: "Core Team", slug: "core-team" },
      { name: "Volunteers", slug: "volunteers" },
      { name: "CFP Review Panel", slug: "cfp" },
      { name: "Mentors", slug: "mentors" },
      { name: "Code of Conduct", slug: "code-of-conduct" },
      { name: "FAQ", slug: "faq" },
    ],
  },
  {
    name: "SCHEDULE",
    slug: "/schedule",
    children: [
      { name: "Trainings", slug: "trainings" },
      { name: "Speakers", slug: "mentors" },
      { name: "CTF", slug: "ctf" },
      { name: "Live Event Hacking", slug: "/live-event-hacking" },
      { name: "Career Carnival", slug: "/career-carnival" },
    ],
  },
  {
    name: "SPONSORS",
    slug: "/sponsors",
    children: [
      // { name: "Community Partnership", slug: "/community-partnership" },
    ],
  },
  {
    name: "CFP",
    slug: "/cfp",
    children: [],
  },
  {
    name: "Register",
    slug: "register",
    children: [],
  },
  {
    name: "Contact us",
    slug: "/contact-us",
    children: [],
  },
];
