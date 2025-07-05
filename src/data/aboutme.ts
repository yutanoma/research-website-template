export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Yuta Noma",
  altName: "野間 裕太",
  title: "Ph.D. Student",
  institution: "University of Toronto",
  // Note that links work in the description
  description:
    "Hi there! I'm a Ph.D. student at the University of Toronto advised by <a href='https://www.dgp.toronto.edu/~karan/' target='_blank'>Karan Singh</a> and <a href='https://www.cs.toronto.edu/~jacobson/' target='_blank'>Alec Jacobson</a>. I'm grateful to be supported by the <a href='https://www.toyotariken.jp/overseas/' target='_blank'>Toyota Riken Scholarship</a>. <br><br> Prior to my Ph.D., I did my master's and undergraduate studies at the <a href='https://www.ee.t.u-tokyo.ac.jp/en/' target='_blank'>EEIC department</a> of the University of Tokyo.<br><br> My research interest is in computer graphics, specifically geometry processing these days. My research goal is to develop tools and algorithms to process geometric data more reliably and interactively. I also used to work on 3D printing and computational origami before.",
  email: "yutanoma@dgp.toronto.edu",
  imageUrl: "/images/icon.jpg",
  // googleScholarUrl: "https://scholar.google.com/citations?user=NnPAgSkAAAAJ&hl=ja",
  // githubUsername: "yutanoma",
  // linkedinUsername: "janesmith",
  // twitterUsername: "ytnm0520",
  // blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/146k6pUU-9wYQI-cgY9mUqM_9ET8jj3Z2/view?usp=sharing",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
