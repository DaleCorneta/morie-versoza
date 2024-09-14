const Contact = () => {
  return (
    <section
      id="contact"
      className="container relative max-w-4xl min-h-screen px-5 mx-auto flex-center"
    >
      <div className="w-full pb-10">
        <div className="text-center">
          <h3 className="font-bold text-primary">Contact Me</h3>
        </div>
        <div className="flex flex-col max-w-xs gap-5 mx-auto mt-12 md:relative sm:max-w-full">
          <div className="w-full mx-auto text-gray-800 rounded-lg shadow-xl dark:bg-slate-800 bg-slate-50 dark:text-gray-100 md:w-2/3 py-14 px-7">
            <h3 className="text-3xl font-semibold">
              {`Let's create your`} <span className="text-primary">vision</span>{" "}
              together!
              <br />
            </h3>
            <div className="w-full mt-6 md:w-2/3 text-[20px]">
              Need help with digital marketing, logo design, content creation,
              or giving a boost to your brand online? I will be delighted to
              help! Equipped with experience in managing social media accounts,
              designing creative content, and executing marketing plans, I am
              ready to support your goals.
              <br />
              <br />
              Feel free to reach out about inquiries, collaborations, or project
              discussions.
            </div>
          </div>
          <div className="w-full py-12 mx-auto bg-white shadow-xl dark:bg-gray-700 px-7 md:absolute lg:-right-9 right-28 rounded-xl md:w-2/5 h-5/6 top-28">
            <h3 className="pb-4 text-2xl font-semibold border-b border-gray-600">
              <span className="text-primary">Contact Details</span>.
            </h3>
            <div className="py-4">
              <p className="text-xs leading-5 text-gray-400">
                You can contact me via email, viber, whatsapp, and messenger.
              </p>
              <ul className="*:flex *:gap-4 *:items-center *:mt-4">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <h2>Baguio City</h2>
                    <address className="text-xs">Philippines</address>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <p>morieversoza@gmail.com</p>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <p>+639383282539</p>
                </li>
              </ul>
              <div className="flex items-center justify-center gap-6 text-gray-600 md:justify-end dark:text-gray-200 mt-9">
                <p className="text-xs">Follow Me</p>
                <div className="flex justify-end gap-3">
                  <a
                    href="https://www.facebook.com/imoriev"
                    className="social-icon"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
