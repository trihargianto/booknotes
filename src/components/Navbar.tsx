import {
  SunIcon,
  BookOpenIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

interface NavbarProps {
  pageTitle?: string;
  isBackButtonVisible?: boolean;
}

export default function Navbar({
  pageTitle,
  isBackButtonVisible,
}: NavbarProps) {
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

  function goPreviousPage() {
    window.history.back();
  }

  return (
    <nav className="flex justify-between items-center px-4 py-4 border-b border-b-ctp-surface0 gap-6">
      <a href="/" className="inline-flex items-center">
        {!isBackButtonVisible ? (
          <>
            <BookOpenIcon className="size-8 mr-1 text-ctp-text" />
            <span className="text-xl font-bold text-ctp-text">Book Notes</span>
          </>
        ) : (
          <button type="button" onClick={goPreviousPage}>
            <ArrowLeftIcon className="size-8 text-ctp-overlay1" />
          </button>
        )}
      </a>

      {pageTitle && (
        <h1 className="text-xl font-bold text-ctp-text truncate">
          {pageTitle}
        </h1>
      )}

      <button onClick={toggleDarkMode}>
        <SunIcon className="text-ctp-overlay1 size-9" />
      </button>
    </nav>
  );
}
