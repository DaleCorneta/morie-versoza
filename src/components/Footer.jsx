const Footer = () => {
  return (
    <footer className="py-2 text-center dark:bg-slate-700 bg-slate-100">
      Copyright &copy; 2024
      <ul className="gap-5 py-4 text-sm flex-center">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
