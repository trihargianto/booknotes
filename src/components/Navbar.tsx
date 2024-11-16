import React from "react";

import { SunIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-4 border-b border-b-ctp-surface0">
      <div className="inline-flex items-center">
        <BookOpenIcon className="size-8 mr-1 text-ctp-text" />

        <span className="text-xl font-bold text-ctp-text">Book Notes</span>
      </div>

      <button>
        <SunIcon className="text-ctp-overlay1 size-10" />
      </button>
    </nav>
  );
}
