import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Logo = () => {
  const [images, setImages] = useState([]);
  const imagesperpage = 6;
  const [page, setPage] = useState(1);
  const data = [
    "1tM0lZo7y2iWjnJqyuJt-rM2b0Y84EyPb",
    "1ZXKUWfZ0a_z3kVLh3rujRPStARoPgzra",
    "1vSxbZxjtio741GHFsSyqj1m3Bg7Kfajx",
    "1kjGDcHJLFKtQZtCcm8_8i4ZEaXVWSPuw",
    "1V56_iWgXMY9sm_wLCWhdIdQQJBDgThc3",
    "1AY06j3P226kI6nH7WhNF9fx6zYwDcMIN",
    "10xzMPF-jCK7arvXcCecS_h2eeyZ5zzjX",
    "1FPxbjh4pEeT1i777ombuT6xS-5B1qLe2",
    "1CEWBcC8Z1wwnbG5j44H-Z8amlwObpNPQ",
    "1sZLjAEnZgfRCyfZGRroS_SAFz9sC18SN",
    "17oOk2Q-106cHjzilr5nkbrSj9Q9gfpXG",
    "1ZAnfqlo0DScckxBnWls7tKfbApnK1BK0",
    "1jNsHrP6IKn-3-3C8vtZI_X9Wy3nKcJ8P",
    "1T_-uqOqrIwQoI6x6Snsc3OtBFy-M7GUD",
    "1dgyKurpTSCNXtek3fDDizTT-DWfpnRwb",
    "1BlE555n3hZrPFdmQxnQZplJOVgkWSqYB",
    "1Kj5FP3baR6Ndaf1Pgg4Tj-Su776STkvb",
    "1bBbimVkmG3HgyBWYIzHRPbbTD10Q2WDd",
    "14xw6VMY0xRN4HpGgxVp3wqOFtxt4uLsD",
    "11dK24y3HUn614MB4q232d7NCpf-Zf5Q9",
    "18uz6nDP2MzTPy7UyR45ErnrzNbMVXXZW",
    "1Go6iE6n4OyPHCtuMnSaLV-V02KJEsve4",
    "1iX3qkrCti7-ejlw54813o4uvyZnywPfc",
    "1iJzLDxm2PFThOfbD-86-_fXhBOVdI1DA",
    "1sJqvXzR--v8Fsc-0fe-qgQbqpmiuWhhX",
    "1bL9MHeXZ59kztxg8v_japlYnCL9aBc2O",
    "1QHw4JXvycsP0Zd43tzL_ggKklmdEM7ha",
    "1e91Oh9WNj_ABe19yInFGFzR4JUm4TPnA",
    "1CKAxi8R74OX_kwjeRAxN0VhhNjXlV9H_",
    "1Ec6jBvuhP9PvxTwepqGCRtR63424yrhL",
    "1bcPJAKjqxbWT9-zUe8lDUnN7P9cD1iyc",
    "1-ERvxhOTC4XzAZbJ3C5Lh2siJYzuqAid",
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

export default Logo;
