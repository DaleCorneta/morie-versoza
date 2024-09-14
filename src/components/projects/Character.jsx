import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Character = () => {
  const [images, setImages] = useState([]);
  const imagesperpage = 6;
  const [page, setPage] = useState(1);
  const data = [
    "1COngc5qvtd_SmOIJp-t7Ekp0-GoFdQ1Q",
    "12Ra1Fx0iOPHBya1jsrOmm4nccD94Yw2g",
    "1w7Ue1wkLDbORK4NpX-BUm4D2vUXVg--s",
    "1fyjqyUMHCfB9G3zvDOuQ9Htkj_96BPmA",
    "14Oi7fEh6UHxGH4g4A2BTHg3GYDModPjF",
    "1UiFIM2KDcyF5VnvpRP7twlujWRJ50wBX",
    "1u3Nf4UIL8yFX8bhThmFMzqrrc7_pkxc9",
    "1B98w8BkkR2zndsIwAnDK1Oil6hrZf-vl",
    "19JRdldRgpLHysUj7J6zcg95kcTGOOljQ",
    "1uAJ9XnGIPwrer0JDnFrBjVt73LlqwcP4",
    "1MxjNOki96nG_gR8Ep7JXQ2awHimK08bG",
    "1EKQIw_ldYZ09XhIMhf9wsiRYFdo6zSIp",
  ];

  useEffect(() => {
    setImages(data.slice(0, page * imagesperpage));
  }, [page]);

  function redirectHandler(url) {
    const link = `https://drive.google.com/open?id=${url}&usp=drive_copy`;
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

export default Character;
