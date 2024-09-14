import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Animation = () => {
  const [images, setImages] = useState([]);
  const imagesperpage = 6;
  const [page, setPage] = useState(1);
  const data = [
    "1kJudupGStlHioKjcBPT-TRJYE8ckdcMl",
    "11ax1rzykjBY6ZxZTvFQw6cw_XCmHhrxs",
  ];

  useEffect(() => {
    setImages(data.slice(0, page * imagesperpage));
  }, [page]);

  function redirectHandler(url) {
    const link = `https://drive.google.com/file/d/${url}/view?usp=drive_link`;
    window.open(link, "_blank", "noreferrer");
  }
  return (
    <>
      <div className="*:w-full grid mx-auto md:grid-rows-2 md:grid-cols-3 max-w-4xl md:px-0 px-10 *:h-full *:object-cover *:border-4 *:dark:border-white *:rounded-md gap-4 *:cursor-pointer group hover:*:!grayscale-0 *:hover:grayscale *:duration-1000">
        {images.map((image, index) => {
          return (
            <LazyLoadImage
              key={index}
              src={`https://drive.google.com/thumbnail?id=${image}`}
              alt={image}
              onClick={() => redirectHandler(image)}
            />
          );
        })}
      </div>
      {images.length !== data.length && (
        <div className="gap-4 mt-6 flex-center">
          <button onClick={() => setPage(page + 1)} className="btn btn-filled">
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Animation;
