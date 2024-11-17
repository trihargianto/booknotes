import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/styles/book-carousel.css";

import BookCard from "@/components/BookCard";
import BookDrawer from "@/components/BookDrawer";
import type { BookType } from "@/types";

const books: BookType[] = [
  {
    id: 1,
    coverImage: "https://picsum.photos/300/300",
    title: "Building a Second Brain",
    author: "Tiago Forte",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum.",
    tags: ["Productivity", "Knowledge", "Evergreen Note"],
  },
  {
    id: 2,
    coverImage: "https://picsum.photos/301/301",
    title: "Atomic Habits",
    author: "James Clear",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum.",
    tags: ["Habits", "Productivity"],
  },
  {
    id: 3,
    coverImage: "https://picsum.photos/302/302",
    title: "Deep Work",
    author: "Cal Newport",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio sit amet ipsum.",
    tags: ["Productivity", "Focus"],
  },
];

export default function BookCarousel() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [book, setBook] = useState<BookType>({
    id: 0,
    coverImage: "",
    title: "",
    author: "",
    synopsis: "",
    tags: [],
  });

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    centerMode: true,
    centerPadding: "100px",
    arrows: false,
  };

  // Workaround for SSR
  // See: https://github.com/akiran/react-slick/issues/2206#issuecomment-1961173249
  // @ts-ignore-next-line
  const Slick = typeof window === "undefined" ? Slider.default : Slider;

  function openDrawer(isOpen: boolean, book: BookType) {
    setDrawerOpen(isOpen);
    setBook(book);
  }

  return (
    <div>
      <h2 className="text-xl text-ctp-text font-bold mb-6">
        This Year's Favorite
      </h2>

      <div className="slider-container">
        <Slick {...settings} className="book-carousel">
          {books.map((item: BookType) => (
            <BookCard
              img={item.coverImage}
              title={item.title}
              author={item.author}
              key={item.id}
              onClick={() => openDrawer(true, item)}
            />
          ))}
        </Slick>
      </div>

      <BookDrawer isOpen={isDrawerOpen} setOpen={setDrawerOpen} book={book} />
    </div>
  );
}
