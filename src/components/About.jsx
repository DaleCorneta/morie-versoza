import tools from "../assets/platforms/tools.png";

const About = () => {
  return (
    <section id="about" className="min-h-full  flex-center">
      <div className="container mx-auto">
        <h3 className="mb-8 font-bold text-center text-primary">What I Do</h3>
        <div className="w-full grid md:grid-cols-2 gap-6 px-2 sm:grid-cols-3 *:text-lg *:sm:max-w-full *:max-w-sm hover:*:brightness-90 *:mx-auto *:sm:text-left *:text-center *:hover:cursor-pointer *:shadow-sm mt-10 mx-auto *:rounded-xl *:bg-gray-100 *:dark:bg-slate-800 *:p-7 *:flex *:md:flex-row *:flex-col *:items-center *:gap-12">
          <div>
            <div className="*:text-primary lg:w-[20%] w-full">
              <i className="fa-solid fa-check"></i>
              <h6 className="mt-3 font-semibold">Digital Marketing</h6>
            </div>
            <div className="lg:w-[70%] w-full">
              <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">
                Social media management, marketing strategy planning, and
                digital advertising campaigns running via Google Ads.
              </p>
            </div>
            <div className="lg:w-[10%] w-full">
              <i className="rotate-45 cursor-pointer fa-solid fa-arrow-up-long text-primary"></i>
            </div>
          </div>
          <div>
            <div className="*:text-primary lg:w-[20%] w-full">
              <i className="fa-solid fa-check"></i>
              <h6 className="mt-3 font-semibold">Graphic Design</h6>
            </div>
            <div className="lg:w-[70%] w-full">
              <p className="text-xs leading-5 text-gray-600 dark:text-gray-400 text-balance">
                Experienced with Canva, Adobe Photoshop, and Illustrator; poster
                designing, logo designing, and other creative work.
              </p>
            </div>
            <div className="lg:w-[10%] w-full">
              <i className="rotate-45 cursor-pointer fa-solid fa-arrow-up-long text-primary"></i>
            </div>
          </div>
          <div>
            <div className="*:text-primary lg:w-[20%] w-full">
              <i className="fa-solid fa-check"></i>
              <h6 className="mt-3 font-semibold">Event Organization</h6>
            </div>
            <div className="lg:w-[70%] w-full">
              <p className="text-xs leading-5 text-gray-600 dark:text-gray-400 text-balance">
                Plan and execute events and represent companies at expos to
                build relationships.
              </p>
            </div>
            <div className="lg:w-[10%] w-full">
              <i className="rotate-45 cursor-pointer fa-solid fa-arrow-up-long text-primary"></i>
            </div>
          </div>
          <div>
            <div className="*:text-primary lg:w-[20%] w-full">
              <i className="fa-solid fa-check"></i>
              <h6 className="mt-3 font-semibold">Content Creation</h6>
            </div>
            <div className="lg:w-[70%] w-full">
              <p className="text-xs leading-5 text-gray-600 dark:text-gray-400 text-balance">
                Produce visually compelling content which targets the
                achievement of brand goals and audience engagement.
              </p>
            </div>
            <div className="lg:w-[10%] w-full">
              <i className="rotate-45 cursor-pointer fa-solid fa-arrow-up-long text-primary"></i>
            </div>
          </div>
          <div>
            <div className="*:text-primary lg:w-[20%] w-full">
              <i className="fa-solid fa-check"></i>
              <h6 className="mt-3 font-semibold">Customer Service</h6>
            </div>
            <div className="lg:w-[70%] w-full">
              <p className="text-xs leading-5 text-gray-600 dark:text-gray-400 text-balance">
                Provide high-quality customer service to support team members
                for seamless operations.
              </p>
            </div>
            <div className="lg:w-[10%] w-full">
              <i className="rotate-45 cursor-pointer fa-solid fa-arrow-up-long text-primary"></i>
            </div>
          </div>
          <div>
            <div className="*:text-primary lg:w-[20%] w-full">
              <i className="fa-solid fa-check"></i>
              <h6 className="mt-3 font-semibold">Virtual Assistance</h6>
            </div>
            <div className="lg:w-[70%] w-full">
              <p className="text-xs leading-5 text-gray-600 dark:text-gray-400 text-balance">
                Data entry, data scrubbing, creating forms, and building landing
                pages for marketing purposes.
              </p>
            </div>
            <div className="lg:w-[10%] w-full">
              <i className="rotate-45 cursor-pointer fa-solid fa-arrow-up-long text-primary"></i>
            </div>
          </div>
          <div className="w-full">
            <div className="*:text-primary lg:w-[20%] w-full">
              <i className="fa-solid fa-wrench"></i>
              <h6 className="mt-3 font-semibold">Tools I Use</h6>
            </div>
            <div>
              <img src={tools} alt="Tools" className="h-[70px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
