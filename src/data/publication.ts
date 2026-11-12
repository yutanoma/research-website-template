export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  projectUrl?: string;
  paperUrl?: string;
  videoUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  isNew?: boolean;
  /** Mark as a selected publication (shown under the "Selected" filter). */
  selected?: boolean;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "Communications Engineering",
    title: "Magnetic field estimation using Gaussian process regression for interactive wireless power system design",
    selected: false,
    authors: "Yuichi Honjo, Cedric Caremel, Ken Takaki, <span class='underline'>Yuta Noma</span>, Yoshihiro Kawahara, Takuya Sasatani",
    // projectUrl: "https://yutanoma.com/projects/neural-displacement-fields/",
    paperUrl: "https://arxiv.org/pdf/2510.19277",
    // codeUrl: "https://github.com/yutanoma/neural-displacement-fields",
    imageUrl: "/images/proj_magnetic_field_estimation.png",
    // isNew: true,
  },
  {
    year: "2026",
    conference: "ACM SCF",
    title: "Make It Balance: Interactive Design of Free-Form Balancing Objects by Center of Mass Externalization",
    selected: false,
    authors: "Shunsuke Hirata, <span class='underline'>Yuta Noma</span>, Koya Narumi, Yoshihiro Kawahara",
    // projectUrl: "https://yutanoma.com/projects/neural-displacement-fields/",
    // paperUrl: "https://yutanoma.com/projects/neural-displacement-fields/neural-displacement-fields.pdf",
    // codeUrl: "https://github.com/yutanoma/neural-displacement-fields",
    imageUrl: "/images/proj_make_it_balance.png",
    // isNew: true,
  },
  {
    year: "2026",
    conference: "Eurographics",
    title: "Mesh Processing Non-Meshes via Neural Displacement Fields",
    selected: true,
    authors: "<span class='underline'>Yuta Noma</span>, Zhecheng Wang, Chenxi Liu, Karan Singh, Alec Jacobson",
    projectUrl: "https://yutanoma.com/projects/neural-displacement-fields/",
    paperUrl: "https://yutanoma.com/projects/neural-displacement-fields/neural-displacement-fields.pdf",
    codeUrl: "https://github.com/yutanoma/neural-displacement-fields",
    imageUrl: "/images/proj_neural_displacement.jpg",
    // isNew: true,
  },
  {
    year: "2025",
    conference: "SIGGRAPH Asia",
    title: "Medial Sphere Preconditioning for Knot Untangling and Volume-Filling Curves",
    selected: true,
    authors: "<span class='underline'>Yuta Noma</span>, Alec Jacobson, Karan Singh",
    projectUrl: "https://www.dgp.toronto.edu/projects/medial-sphere-preconditioning/",
    paperUrl: "https://www.dgp.toronto.edu/projects/medial-sphere-preconditioning/medial-sphere-preconditioning.pdf",
    codeUrl: "https://github.com/yutanoma/medial-sphere-preconditioning",
    videoUrl: "https://youtu.be/Oz-sSmU0ZxQ",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl: "/images/proj_vol_filling.webp",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
    // isNew: true,
  },
  {
    year: "2025",
    conference: "SCF",
    title: "OriStitch: A Machine Embroidery Workflow to Turn Existing Fabrics into Self-Folding 3D Textiles",
    authors: "Zekun Chang, Yixuan Gao, <span class='underline'>Yuta Noma</span>, Shuo Feng, Xinyi Yang, Kazuhiro Shinoda, Tung Ta, Koji Yatani, Tomoyuki Yokota, Takao Someya, Tomohiro Tachi, Yoshihiro Kawahara, Koya Narumi, Francois Guimbretiere, Thijs Roumen",
    projectUrl: "https://zekunchang.com/portfolio/oristitch/",
    paperUrl: "https://dl.acm.org/doi/10.1145/3745778.3766666",
    // codeUrl: "https://github.com/yutanoma/surface-filling-curve-flows",
    videoUrl: "https://vimeo.com/1055065341?fl=pl&fe=ti",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl: "/images/proj_oristitch.webp",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
    // isNew: true,
  },
  {
    year: "2024",
    conference: "SIGGRAPH North America",
    title: "Surface-Filling Curve Flows via Implicit Medial Axes",
    selected: true,
    authors: "<span class='underline'>Yuta Noma</span>, Silvia Sellán, Nicholas Sharp, Karan Singh, Alec Jacobson",
    projectUrl: "https://www.dgp.toronto.edu/projects/surface-filling-curves/",
    paperUrl: "https://www.dgp.toronto.edu/projects/surface-filling-curves/surface-filling-curves.pdf",
    codeUrl: "https://github.com/yutanoma/surface-filling-curve-flows",
    videoUrl: "https://www.youtube.com/watch?v=DeWv9sClz-8",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl: "/images/proj_surf_filling.webp",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "SIGGRAPH North America",
    title: "Inkjet 4D Print: Self-folding Tessellated Origami Objects by Inkjet UV Printing",
    authors: "Koya Narumi*, Kazuki Koyama*, Kai Suto, <span class='underline'>Yuta Noma</span>, Hiroki Sato, Tomohiro Tachi, Masaaki Sugimoto, Takeo Igarashi, Yoshihiro Kawahara",
    projectUrl: "https://narumi.me/inkjet4dprint",
    paperUrl: "https://dl.acm.org/doi/10.1145/3592409",
    // codeUrl: "https://github.com/yutanoma/surface-filling-curve-flows",
    videoUrl: "https://www.youtube.com/watch?v=2rY-XNBnTW4",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl: "/images/proj_inkjet4d.webp",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "CHI",
    title: "Crane: An Integrated Computational Design Platform for Functional, Foldable, and Fabricable Origami Products",
    authors: "Kai Suto, <span class='underline'>Yuta Noma</span>, Kotaro Tanimichi, Koya Narumi, Tomohiro Tachi",
    // projectUrl: "https://narumi.me/inkjet4dprint",
    paperUrl: "https://dl.acm.org/doi/10.1145/3576856",
    // codeUrl: "https://github.com/yutanoma/surface-filling-curve-flows",
    videoUrl: "https://www.youtube.com/watch?v=1HRlDPuNSMo",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl: "/images/proj_crane.webp",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2022",
    conference: "SIGGRAPH Asia",
    title: "Fast Editing of Singularities in Field-Aligned Stripe Patterns",
    selected: true,
    authors: "<span class='underline'>Yuta Noma</span>, Nobuyuki Umetani, Yoshihiro Kawahara",
    // projectUrl: "https://narumi.me/inkjet4dprint",
    paperUrl: "https://dl.acm.org/doi/10.1145/3550469.3555387",
    codeUrl: "https://github.com/yutanoma/singularity-editing",
    videoUrl: "https://www.youtube.com/watch?v=vkujJi3-Ems",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl: "/images/proj_singularity.webp",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2020",
    conference: "UIST",
    title: "Pop-up Print: Rapidly 3D Printing Mechanically Reversible Objects in the Folded State",
    selected: true,
    authors: "<span class='underline'>Yuta Noma</span>, Koya Narumi, Fuminori Okuya, Yoshihiro Kawahara",
    projectUrl: "https://narumi.me/pop-up-print",
    paperUrl: "https://drive.google.com/file/d/10wTWySzOccmUK7VSKrQT99MHp3e_nvKT/view",
    // codeUrl: "https://github.com/yutanoma/pop-up-print",
    videoUrl: "https://www.youtube.com/watch?v=jeqv7gJ9hSE",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl:
      "/images/proj_popup.webp",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
