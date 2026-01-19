export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/html-5.png",
      level: "90%",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/css3.png",
      level: "85%",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/javascript.png",
      level: "80%",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/python.png",
      level: "75%",
    },
    {
      name: "SQL",
      icon: "https://img.icons8.com/color/48/mysql-logo.png",
      level: "78%",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Tools
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-4 mb-4">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
