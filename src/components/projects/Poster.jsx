import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Poster = () => {
  const [images, setImages] = useState([]);
  const imagesperpage = 6;
  const [page, setPage] = useState(1);
  const data = [
    "1zI2hf8oPQD1kvUDaY_c-9nL9sN9DtD__",
    "15Q7mldW-LdXQYh1Pbhj70V-dCqDr8foc",
    "11MY4alpQ1-6ca5arncWK6oWofZCZwB-9",
    "1O0LBsdCQX_3oPFxbwLDMNPqwPyTKRusI",
    "1tT7S5BKJysa_wQJq719Vq2uIHWQIOgmU",
    "1epTA1cW_rkEqVdxNC5irM82StkA7lIiQ",
    "1x8TeUTPdThPnAo8g5dwMTa3oM9UXxdTz",
    "1hCGa_Pyee6ySiTKvXVf3Dy-oNYT8MW-y",
    "1VRxOUYFpyYcgJK5C5-zgkhc1-SCDqcd-",
    "1o2mDp_HqkvsUo60JV4k5NELhpLx_NuF4",
    "1rPrGEZlDtbmVCPSQNJWt8b4AliYV_grt",
    "1hk7vE6XuOzstnR7OQzT0fzBYZeXG2YlW",
    "1zo2RY8sWMC_nCrDmt_Y_0S2GQAgpIjGW",
    "1ez2vHR8bBVaopShp6CKOS-WKGCGheRbI",
    "11SuPUWdvYqSFAcRIhvLTGzJzlKXORQRr",
    "1IMsQsoTGBoeQsXR0D5Roh-wu_i0XBGT-",
    "1es-vcm9vc_XxzyxxF2l41_RJB3pzSCez",
    "1yZM5hbPlLvSzAJrR-QHF5l8wvqjQZBFT",
    "1mXQucBwhidq1eALTeD2LhBkJ-CKH6pSP",
    "1HQwEzvm0UY-UkarFCADQUKRGHh2x_tO-",
    "1J-f1iMJ8rhKMAnVv3UhcBwvE6-c_3JFY",
    "1wH2s4VGUeTjxxfj22wTtw8b6acZ6AKqr",
    "1iyyzdbMt93h6Rn_TKns9JRLVU_9C_MK5",
    "1T5mh_NJrdVH2poksU9n6t_vObBtXFJVX",
    "1nGdxrVQYdjMK8YNWtx5MzBX6TaeEDnjp",
    "1tKxogFr4W3Y8QH3Rg3cdIcMSGrI3Urzr",
    "1XvhvXzxJUk6xEpHMjVRAXTXXw1KTO3sM",
    "1uUHPtgEh0JQFXPDBVFRxWBHIXPOBs-In",
    "1EGKkeCMovSUUNmrpdMxoZKm_9_eNerIu",
    "1n3VamB_DprA8J-yCR3oPytplIuEe5Y4K",
    "1GikuRCB8E8Di4ebZ1MrvpuEc2_LkQJKA",
    "1qsqW_kGTnDkULVjq9XTFHkyZuGCnMiE8",
    "1Al7AqwM5Ufq6UvPBvG1RNUK8MGmUz4dn",
    "1iQtaTdIi_pqyVW_NVQO9SnUn6KHBfMtc",
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

export default Poster;
