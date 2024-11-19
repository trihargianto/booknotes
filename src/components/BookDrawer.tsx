import { Drawer, DrawerContent } from "@/components/ui/drawer";

import type { BookType } from "@/types";
import Tag from "@/components/Tag";
import Button from "@/components/Button";

interface Props {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  book: BookType;
}

export default function BookDrawer({ isOpen, setOpen, book }: Props) {
  function goToReadNotePage() {
    window.location.href = `/read/dummy`;
  }

  return (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerContent className="px-4 pb-4">
        <div className="flex justify-center my-4">
          <img
            src={book.coverImage}
            alt={book.title}
            className="rounded-2xl w-52 aspect-[3/4] object-cover"
          />
        </div>

        <div className="text-center">
          <h3 className="text-ctp-text text-2xl font-bold">{book.title}</h3>

          <p className="text-ctp-subtext1 mt-2">{book.author}</p>
        </div>

        <div className="flex gap-2 my-4 flex-wrap">
          {book.tags.map((tag, index) => (
            <Tag key={`carousel-book-tag-${index}`}>{tag}</Tag>
          ))}
        </div>

        <p className="text-ctp-text line-clamp-4">{book.synopsis}</p>

        <div className="flex gap-2 mt-4">
          <Button variant="secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            Buy
          </Button>

          <Button variant="primary" onClick={goToReadNotePage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            Read Note
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
