import navbar-menu from "@/components/ui/navbar-menu";

export default function Navbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Resume", link: "/resume" },
  ];

  return (
    <nav className="hidden lg:flex">
      <FloatingNav navItems={navItems} />
    </nav>
  );
}
