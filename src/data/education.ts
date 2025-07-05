export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  // {
  //   year: "2024—2029",
  //   institution: "University of Toronto",
  //   degree: "Ph.D. of Computer Science",
  //   advisor: "Prof. Karan Singh and Prof. Alec Jacobson",
  // },
  // {
  //   year: "2020-2022",
  //   institution: "The University of Tokyo",
  //   degree: "Master of Engineering",
  //   // advisor: "Prof. Karan Singh and Prof. Alec Jacobson",
  // },
  // {
  //   year: "2016-2020",
  //   institution: "The University of Tokyo",
  //   degree: "Bachelor of Engineering",
  //   // thesis: "Algorithmic Approaches to Causal Discovery",
  //   // Optional links to thesis
  //   // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  // },
];
