import { useState } from "react";

import BookCard from "./BookCard";
import BookDrawer from "@/components/BookDrawer";
import type { BookType } from "@/types";

const books: BookType[] = [
  {
    id: 1,
    coverImage: "https://picsum.photos/320/300",
    title: "Building a Second Brain",
    author: "Tiago Forte",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum.",
    tags: ["Productivity", "Knowledge", "Evergreen Note"],
  },
  {
    id: 2,
    coverImage: "https://picsum.photos/341/301",
    title: "Atomic Habits",
    author: "James Clear",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum.",
    tags: ["Habits", "Productivity"],
  },
  {
    id: 3,
    coverImage: "https://picsum.photos/352/302",
    title: "Deep Work",
    author: "Cal Newport",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum.",
    tags: ["Productivity", "Focus"],
  },
  {
    id: 4,
    coverImage: "https://picsum.photos/383/303",
    title: "The Lean Startup",
    author: "Eric Ries",
    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Startup", "Business"],
  },
  {
    id: 5,
    coverImage: "https://picsum.photos/394/304",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Design", "Psychology"],
  },
];

export default function BookList() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [book, setBook] = useState<BookType>({
    id: 0,
    coverImage: "",
    title: "",
    author: "",
    synopsis: "",
    tags: [],
  });

  function openDrawer(isOpen: boolean, book: BookType) {
    setDrawerOpen(isOpen);
    setBook(book);
  }

  return (
    <div className="text-ctp-text">
      <h2 className="text-xl text-ctp-text font-bold mb-6">Have Read</h2>

      <div className="flex flex-wrap -mr-4">
        {books.map((item: BookType) => (
          <div key={item.id} className="w-1/2 pr-4 pb-6">
            <BookCard
              img={item.coverImage}
              title={item.title}
              author={item.author}
              onClick={() => openDrawer(true, item)}
            />
          </div>
        ))}
      </div>

      <BookDrawer isOpen={isDrawerOpen} setOpen={setDrawerOpen} book={book} />
    </div>
  );
}
