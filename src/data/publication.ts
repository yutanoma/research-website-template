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
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "SIGGRAPH Asia",
    title: "Medial Sphere Preconditioning for Knot Untangling and Volume-Filling Curves",
    authors: "<span class='underline'>Yuta Noma</span>, Alec Jacobson, Karan Singh",
    // projectUrl: "https://www.dgp.toronto.edu/projects/surface-filling-curves/",
    // paperUrl: "https://www.dgp.toronto.edu/projects/surface-filling-curves/surface-filling-curves.pdf",
    // codeUrl: "https://github.com/yutanoma/surface-filling-curve-flows",
    // videoUrl: "https://www.youtube.com/watch?v=DeWv9sClz-8",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl: "/images/proj_vol_filling.webp",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
    isNew: true,
  },
  {
    year: "2025",
    conference: "SCF",
    title: "OriStitch: A Machine Embroidery Workflow to Turn Existing Fabrics into Self-Folding 3D Textiles",
    authors: "Zekun Chang, Yixuan Gao, <span class='underline'>Yuta Noma</span>, Shuo Feng, Xinyi Yang, Kazuhiro Shinoda, Tung Ta, Koji Yatani, Tomoyuki Yokota, Takao Someya, Tomohiro Tachi, Yoshihiro Kawahara, Koya Narumi, Francois Guimbretiere, Thijs Roumen",
    // projectUrl: "https://www.dgp.toronto.edu/projects/surface-filling-curves/",
    // paperUrl: "https://www.dgp.toronto.edu/projects/surface-filling-curves/surface-filling-curves.pdf",
    // codeUrl: "https://github.com/yutanoma/surface-filling-curve-flows",
    // videoUrl: "https://www.youtube.com/watch?v=DeWv9sClz-8",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    imageUrl: "/images/proj_oristitch.webp",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
    isNew: true,
  },
  {
    year: "2024",
    conference: "SIGGRAPH North America",
    title: "Surface-Filling Curve Flows via Implicit Medial Axes",
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
