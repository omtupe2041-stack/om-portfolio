export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Title */}
        <div>
          <h2 className="text-4xl font-bold tracking-widest mb-6">
            ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white"></div>
        </div>

        {/* Right Content */}
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          <p className="mb-4">
            I’m <b>Om Tupe</b>, a Computer Science graduate and passionate 
            Python Full Stack Developer from Pune, India.
          </p>

          <p className="mb-4">
            I specialize in building modern, responsive, and scalable 
            web applications using <b>Flask</b>, <b>Django</b>, and 
            frontend technologies like <b>HTML, CSS, JavaScript</b>.
          </p>

          <p>
            I love turning ideas into real digital products, 
            focusing on clean UI, performance, and user experience. 
            I’m always learning new technologies and ready 
            to contribute to innovative development teams.
          </p>
        </div>

      </div>
    </section>
  );
}
