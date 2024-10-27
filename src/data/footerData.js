import logo from "@/images/resources/footer-logo.png";

const social = [
  // { icon: "fa-twitter", link: "" },
  // { icon: "fa-facebook-square", link: "" },
  // { icon: "fa-pinterest-p", link: "" },
  // { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Tevily",
  about:
    "Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "98670 32377",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "varunm0011@gmail.com",
      subHref: "mailto",
    },

  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "/contact", title: "Contact" },
    { id: 3, link: "#", title: "Why Choose Us" },
    { id: 4, link: "#", title: "Gallery" },
    { id: 5, link: "#", title: "Popular Tours" },
  ],
  explore: [
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
