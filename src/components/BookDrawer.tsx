import { Drawer, DrawerContent } from "@/components/ui/drawer";

import type { BookType } from "@/types";

interface Props {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  book: BookType;
}

export default function BookDrawer({ isOpen, setOpen, book }: Props) {
  return (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerContent className="px-4 pb-4">
        <div className="flex justify-center mt-4">
          <img
            src={book.coverImage}
            alt={book.title}
            className="rounded-2xl w-52 aspect-[3/4] object-cover"
          />
        </div>

        <div className="my-5 text-center">
          <h3 className="text-ctp-text text-2xl font-bold">{book.title}</h3>

          <p className="text-ctp-subtext1 mt-2">{book.author}</p>
        </div>

        <p className="text-ctp-text line-clamp-4">{book.synopsis}</p>
      </DrawerContent>
    </Drawer>
  );
}
