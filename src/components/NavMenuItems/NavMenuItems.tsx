export type NavMenu = {
  name: any;
  slug?: string;
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
      { name: "Core Team", slug: "coreteam" },
      { name: "Volunteers", slug: "volunteers" },
      { name: "CFP Review Panel", slug: "reviewpanel" },
      { name: "Mentors", slug: "mentors" },
      { name: "Code of Conduct", slug: "codeofconduct" },
      { name: "FAQ", slug: "faq" },
    ],
  },
  {
    name: "SCHEDULE",
    slug: "/schedule",
    children: [
      { name: "Trainings", slug: "trainings" },
      { name: "Speakers", slug: "speakers" },
      { name: "CTF", slug: "ctf" },
      { name: "Live Event Hacking", slug: "" },
      { name: "Career Carnival", slug: "" },
    ],
  },
  {
    name: "SPONSORS",
    slug: "/sponsors",
    children: [{ name: "Community Partnership", slug: "" }],
  },
  {
    name: "Register",
    slug: "/register",
    children: [],
  },
  {
    name: "Contact us",
    slug: "/contactus",
    children: [],
  },
];
