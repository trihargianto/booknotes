interface Props {
  title: string;
  author: string;
  img: string;
  onClick?: () => void;
}

export default function BookCard({ title, author, img, onClick }: Props) {
  return (
    <div className="relative" role="button" tabIndex={0} onClick={onClick}>
      <div className="justify-center flex py-1 px-2 bg-neutral-200 absolute right-0 rounded-full shadow-lg m-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4 text-ctp-yellow mr-0.5"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          ></path>
        </svg>

        <span className="font-semibold text-neutral-700 text-sm">5.0</span>
      </div>

      <img src={img} className="rounded-2xl aspect-[3/4] w-full object-cover" />

      <p className="text-ctp-text mt-2 font-semibold text-center truncate">
        {title}
      </p>

      <p className="mt-0.5 text-sm text-ctp-overlay1 text-center truncate">
        {author}
      </p>
    </div>
  );
}
