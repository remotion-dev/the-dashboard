type Employee = {
  name: string;
  picture: string;
  employeeOfTheMonth: string;
};

export const forOneRedEmployees: Employee[] = [
  {
    name: "Luke Zirngibl",
    picture: "luke.jpg",
    employeeOfTheMonth:
      "Luke was named employee of the month for his exceptional leadership and contributions to the company. As the most experienced developer and chief executive, he has played a key role in driving the success of the development team and the company as a whole. His wealth of knowledge and expertise have been invaluable in guiding the team to new heights, and he is always willing to go above and beyond to ensure that the team is meeting its goals and objectives. In addition to his technical skills, Luke is a strong leader who is always willing to listen to and support his team members. His dedication and hard work make him a valuable asset to the company, and we are proud to recognize him as our employee of the month.",
  },
  {
    name: "Matteo Gamba",
    picture: "matteo.jpeg",
    employeeOfTheMonth:
      "Matteo was named employee of the month for his outstanding contributions to the development team. He consistently delivers high-quality work on time, and is always willing to go above and beyond to meet project deadlines. In addition to his technical expertise, Matteo is a valuable team player who is always willing to lend a helping hand and share his knowledge with his colleagues. His innovative ideas and solutions have helped drive the team's success, and we are proud to recognize him as our employee of the month.",
  },
  {
    name: "Isabell Fink",
    picture: "isabell.jpeg",
    employeeOfTheMonth:
      "Isabell was selected as employee of the month for her exceptional design skills and her ability to consistently deliver high-quality work. She has a strong eye for aesthetics and is able to effectively translate her clients' vision into visually appealing designs. In addition, Isabell is a team player and is always willing to collaborate with her colleagues to achieve the best possible results.",
  },
  {
    name: "Corey Bothwell",
    picture: "corey.jpeg",
    employeeOfTheMonth:
      "Corey was selected as employee of the month for his exceptional technical skills and his ability to consistently deliver high-quality code. He has a strong understanding of programming languages and is able to quickly and effectively solve complex problems. In addition, Corey is a team player and is always willing to lend a helping hand to his colleagues.",
  },
  {
    name: "Chiara Turel",
    picture: "chiara.jpeg",
    employeeOfTheMonth:
      "Chiara was selected as employee of the month for her exceptional creativity and attention to detail in her illustrations, as well as her ability to consistently meet tight deadlines and deliver high-quality work.",
  },
  {
    name: "Roman Burkard",
    picture: "roman.jpeg",
    employeeOfTheMonth:
      "Roman was selected as employee of the month for his outstanding leadership and management skills, as well as his ability to effectively communicate with and support his team. He has consistently demonstrated a strong dedication to the growth and development of his team, and has played a key role in the success of the company.",
  },
  {
    name: "Luisa Stückelberger",
    picture: "luisa.jpg",
    employeeOfTheMonth:
      "Luisa was named employee of the month for her exceptional work performance and ability to handle any situation with poise and grace. She consistently delivers high-quality work on time, and is always willing to go above and beyond to meet project deadlines. In addition to her technical expertise, Luisa is known for her ability to handle difficult situations with calmness and professionalism. She has a great attitude and is always willing to lend a helping hand to her colleagues. Her contributions and positive attitude have been invaluable to the development team, and we are proud to recognize her as our employee of the month.",
  },
  {
    name: "Jakob Dhondt",
    picture: "jakob.jpeg",
    employeeOfTheMonth:
      "Jakob was named employee of the month for his outstanding contributions to the company as a network and cloud specialist. He has played a key role in helping the company transition to remote work, using his expertise in cloud computing and network infrastructure to set up and maintain a secure and efficient remote work environment. His technical skills have been invaluable in ensuring that the company's systems are running smoothly, and he is always willing to go above and beyond to help his colleagues and resolve any issues that may arise. Jakob's dedication and hard work have been instrumental in helping the company succeed, and we are proud to recognize him as our employee of the month.",
  },
];

export const remotionEmployees: Employee[] = [
  {
    name: "Jonny Burger",
    picture: "jonny.png",
    employeeOfTheMonth:
      "Jonny was named employee of the month for his exceptional leadership and contributions to the company as the tech lead and chief executive. He has played a key role in driving the success of the development team and the company as a whole, using his technical expertise and leadership skills to guide the team towards meeting its goals and objectives. In addition to his technical skills, Jonny is a strong and supportive leader who is always willing to listen to and support his team members. His dedication to the company and his team have been invaluable, and we are proud to recognize him as our employee of the month.",
  },
  {
    name: "Mehmet Ademi",
    picture: "mehmet.png",
    employeeOfTheMonth:
      "Mehmet was named employee of the month for securing the @remotion username on Twitter and Instagram as well as his outstanding contributions to the company as a business developer. He has played a key role in driving the success of the business development team, using his excellent communication and negotiation skills to secure new partnerships and contracts for the company. ",
  },
  {
    name: "Patric Salvisberg",
    picture: "patric.png",
    employeeOfTheMonth:
      "Patric was named employee of the month for his outstanding work performance and contributions as a junior developer. Despite being new to the team, he has quickly proven himself to be a valuable asset with his technical skills and ability to learn and adapt. Patric consistently delivers high-quality work on time, and is always willing to go above and beyond to meet project deadlines. In addition to his technical expertise, Patric is a team player who is always willing to lend a helping hand and share his knowledge with his colleagues. His contributions and positive attitude have been invaluable to the development team, and we are proud to recognize him as our employee of the month.",
  },
];

export const lunchRoulette: Employee[] = [
  ...forOneRedEmployees,
  ...remotionEmployees,
];
