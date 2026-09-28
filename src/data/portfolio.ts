export type Project = {
  number: string;
  title: string;
  type: string;
  stack: string;
  href: string;
  accent: string;
};

export type Experience = {
  date: string;
  role: string;
  company: string;
  kind: string;
  title: string;
  points: string[];
  stack: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "SmileTravel",
    type: "Appointment system",
    stack: ".NET 9 / React / MySQL",
    href: "http://smiletravel.runasp.net",
    accent: "coral",
  },
  {
    number: "02",
    title: "Sales & Inventory",
    type: "Enterprise operations",
    stack: "Laravel / PHP / MySQL",
    href: "https://sales-and-inventory.great-site.net",
    accent: "mint",
  },
  {
    number: "03",
    title: "HOA / RFID",
    type: "Community platform",
    stack: "C# / ASP.NET MVC / Arduino",
    href: "https://github.com/kelvinhubi/HOA-Management-System-with-RFID#",
    accent: "lilac",
  },
];

export const experience: Experience[] = [
  {
    date: "Jan 2026 - Sept 2026",
    role: "Full-Stack Software Engineer",
    company: "Seiko IT Solutions",
    kind: "Full-time",
    title: "Key achievements",
    points: [
      "Maintained legacy manufacturing and microservices systems while implementing new features with C# (.NET), Laravel, React, and TypeScript.",
      "Used AI tools to automate repetitive coding tasks, manual workflows, and rapid prototypes.",
      "Improved legacy manufacturing database performance through efficient MySQL and MSSQL indexing.",
      "Automated translation testing and resolved critical system failures.",
    ],
    stack: "C# · .NET · Laravel · React · TypeScript · MySQL · MSSQL",
  },
  {
    date: "November 2025",
    role: "Freelance Developer",
    company: "SmileTravel Dental Clinic",
    kind: "Freelance project",
    title: "SmileTravel Appointment Management System",
    points: [
      "Developed a secure .NET 9 and React appointment system using a responsive single-page architecture.",
      "Implemented role-based access control and advanced data encryption for patient privacy.",
    ],
    stack: "C# · .NET 9 · React · MySQL · JavaScript",
  },
  {
    date: "Jun 2025 - Oct 2025",
    role: "Freelance Developer",
    company: "Isaac's Foods and Vegetable Supplies OPC",
    kind: "Freelance project",
    title: "Sales and Inventory System",
    points: [
      "Engineered a Laravel system with automated GitHub Actions CI/CD pipelines.",
      "Integrated AI-driven analytics for sales trends and inventory levels.",
      "Built real-time employee session monitoring, PDF invoice generation, and dynamic stock tracking.",
    ],
    stack: "Laravel · PHP · MySQL · Bootstrap · JavaScript · GitHub Actions",
  },
  {
    date: "Feb 2025 - Jun 2025",
    role: "Intern AppSheet Developer",
    company: "Miguel and Maria Group of Restaurants Inc. · Marikina City",
    kind: "Internship",
    title: "Key achievements",
    points: [
      "Gathered requirements and identified workflow bottlenecks with stakeholders.",
      "Delivered an AppSheet solution that increased productivity by 30%.",
      "Managed data validation, workstation setup, networking support, and day-to-day IT troubleshooting.",
    ],
    stack: "AppSheet · Data validation · System administration · Networking",
  },
  {
    date: "Sep 2024 - Jan 2025",
    role: "Capstone Project",
    company: "STI College Marikina",
    kind: "Academic project",
    title: "HOA Management System",
    points: [
      "Built payment, event and facility management, vehicle and pet registration, reporting, and real-time communication features.",
      "Integrated RFID-based vehicle tracking into a full-stack community operations platform.",
    ],
    stack: "C# · C++ (Arduino) · ASP.NET MVC · jQuery · Bootstrap · MySQL",
  },
];

export const education = [
  {
    date: "Graduated 2025",
    school: "STI College Marikina",
    degree: "Bachelor of Science in Information Technology",
    detail:
      "Systems analysis, web development, cybersecurity, database management, and OOP.",
  },
  {
    date: "Graduated 2021",
    school: "Asian College Quezon City",
    degree: "Technical Vocational in Computer Programming",
    detail:
      "Programming fundamentals, application development, and debugging with C++, VB.NET, HTML, and CSS.",
  },
];

export const certificates = [
  {
    date: "2025",
    name: "The AI For Communities Workshop",
    issuer: "Vjal Institute",
    href: "#resume",
  },
  {
    date: "June 2022",
    name: "Systems Administration",
    issuer: "Linux Professional Institute",
    href: "https://drive.google.com/file/d/1r8uE9ylaqf-P8Y1FNO01TdjYmDdrZ_0T/view?usp=sharing",
  },
  {
    date: "June 2022",
    name: "Java Foundations",
    issuer: "Oracle Academy",
    href: "https://drive.google.com/file/d/1eQySrhIcv-w0oFUCHMVYLbuOvdoVZhUu/view?usp=sharing",
  },
  {
    date: "March 2023",
    name: "SAP Business One",
    issuer: "FIT Academy",
    href: "https://drive.google.com/file/d/1q44FLiUiOPgiZ_pg1QxQw3MCAwsU39_3/view?usp=sharing",
  },
  {
    date: "Feb 2025",
    name: "AppSheet Course",
    issuer: "Udemy",
    href: "https://drive.google.com/file/d/1ytvU7noh6mmaLZVnjyDeNzjm99ImK1Gu/view?usp=sharing",
  },
  {
    date: "Feb 2025",
    name: "Google Sheets Course",
    issuer: "Udemy",
    href: "https://drive.google.com/file/d/1ha7SY9tBVeHF0d8wjZ_DjjPUnNDCh4H7/view?usp=sharing",
  },
];

export const skills = [
  "Java (OOP)",
  "C#",
  "TypeScript",
  "PHP",
  "SQL",
  "HTML/CSS",
  "JavaScript",
  "Relational database design",
  "Data modelling",
  "MySQL",
  "MSSQL",
  "Git/GitHub",
  "CI/CD",
  "Visual Studio",
  "AI-assisted development",
  "AppSheet",
  "System administration",
  "Laravel",
  "React",
];

export const resumeUrl =
  "https://drive.google.com/file/d/1_6Q36mq0sPwys_u_m6jwpDnf1Uz5fHs9/view?usp=sharing";
