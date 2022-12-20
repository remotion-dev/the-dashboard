type Employee = {
  name: string;
  picture: string;
};

export const forOneRedEmployees: Employee[] = [
  { name: "Luke Zirngibl", picture: "luke.jpg" },
  { name: "Matteo Gamba", picture: "matteo.jpeg" },
  { name: "Isabell Fink", picture: "isabell.jpeg" },
  { name: "Corey Bothwell", picture: "corey.jpeg" },
  { name: "Chiara Turel", picture: "chiara.jpeg" },
  { name: "Roman Burkard", picture: "roman.jpeg" },
  { name: "Luisa Stückelberger", picture: "luisa.jpg" },
  { name: "Jakob Dhondt", picture: "jakob.jpeg" },
];

export const remotionEmployees: Employee[] = [
  { name: "Jonny Burger", picture: "jonny.png" },
  { name: "Mehmet Ademi", picture: "mehmet.png" },
  { name: "Patric Salvisberg", picture: "patric.png" },
];

export const lunchRoulette: Employee[] = [
  ...forOneRedEmployees,
  ...remotionEmployees,
];
