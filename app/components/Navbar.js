const menu = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "PROJECT", id: "project" },
  { label: "EDUCATION", id: "education" },
  { label: "CERTIFICATE", id: "certificate" },
  { label: "CONTACT", id: "contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 px-4 py-3 sm:justify-between">
        <span className="text-lg font-semibold">Farah</span>
        <ul className="flex flex-wrap justify-center gap-2">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}