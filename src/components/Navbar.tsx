import { SunIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  function toggleDarkMode() {
    const darkClass = "ctp-machhiato";
    const lightClass = "ctp-latte";

    const element = document.body;

    const isLight = element.classList.contains(lightClass);

    if (isLight) {
      document.body.classList.add(darkClass);
      document.body.classList.remove(lightClass);
    } else {
      document.body.classList.add(lightClass);
      document.body.classList.remove(darkClass);
    }

    localStorage.setItem("theme", isLight ? darkClass : lightClass);
  }

  return (
    <nav className="flex justify-between items-center px-4 py-4 border-b border-b-ctp-surface0">
      <div className="inline-flex items-center">
        <BookOpenIcon className="size-8 mr-1 text-ctp-text" />

        <span className="text-xl font-bold text-ctp-text">Book Notes</span>
      </div>

      <button onClick={toggleDarkMode}>
        <SunIcon className="text-ctp-overlay1 size-9" />
      </button>
    </nav>
  );
}
