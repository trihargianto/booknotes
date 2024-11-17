import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/styles/book-carousel.css";

import BookCard from "@/components/BookCard";

export default function BookCarousel() {
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

  return (
    <div>
      <h2 className="text-xl text-ctp-text font-bold mb-6">
        This Year's Favorite
      </h2>

      <div className="slider-container">
        <Slick {...settings} className="book-carousel">
          {[1, 2, 3, 4, 5].map((i) => (
            <BookCard
              img="https://picsum.photos/300/300"
              title="Building a Second Brain"
              author="Tiago Forte"
              key={i}
            />
          ))}
        </Slick>
      </div>
    </div>
  );
}
