"use client";

export default function TechMarquee() {
  const tech = [
    { name: "HTML5", icon: "https://img.icons8.com/color/48/html-5.png" },
    { name: "CSS3", icon: "https://img.icons8.com/color/48/css3.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript.png" },
    { name: "Python", icon: "https://img.icons8.com/color/48/python.png" },
    { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
    { name: "Flask", icon: "https://img.icons8.com/ios-filled/50/ffffff/flask.png" },
    { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
  ];

  return (
    <div className="bg-black text-white py-6 overflow-hidden">
      <div className="relative flex whitespace-nowrap animate-marquee">
        {[...tech, ...tech].map((t, i) => (
          <div key={i} className="flex items-center gap-3 mx-8">
            <img src={t.icon} className="w-8 h-8" />
            <span className="text-sm font-semibold tracking-wider">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
