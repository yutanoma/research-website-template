import type { Metadata } from "next";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mesh Processing Non-Meshes via Neural Displacement Fields",
  description:
    "We present a novel approach for mesh processing that handles non-mesh inputs through neural displacement fields, enabling robust geometry processing on diverse input representations.",
  openGraph: {
    images: [
      {
        url: "/images/proj_neural_displacement.jpg",
        width: 1200,
        height: 630,
        alt: "Neural Displacement Fields",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/proj_neural_displacement.jpg"],
  },
};

export default function NeuralDisplacementFieldsPage() {
  return (
    <div className={`min-h-screen bg-white ${openSans.className}`}>
      <div className="max-w-[915px] mx-auto bg-white px-4 pt-12 pb-20 min-h-screen">
        {/* Title */}
        <h1 className="text-[1.5em] text-center font-normal mb-4">
          Mesh Processing Non-Meshes via Neural Displacement Fields{" "}
          <em className="text-[0.7em] font-light">Eurographics 2026</em>
        </h1>

        {/* Authors */}
        <div className="text-center text-[1.0833em] pb-8">
          <p>
            Yuta Noma¹, Zhecheng Wang¹, Chenxi Liu¹, Karan Singh¹, Alec
            Jacobson¹²
          </p>
          <p className="mt-1">¹University of Toronto, ²Adobe Research</p>
        </div>

        {/* Teaser Image */}
        <figure className="mb-12">
          <Image
            src="/projects/neural-displacement-fields/teaser.png"
            alt="Neural Displacement Fields Teaser"
            width={915}
            height={400}
            className="w-full"
            priority
          />
        </figure>

        {/* Abstract */}
        <section className="mb-12">
          <h2 className="text-[1.166667em] font-bold mb-4">
            Abstract
          </h2>
          <p className="text-base leading-relaxed text-justify">
          Mesh processing pipelines are mature, but adapting them to newer non-mesh surface representations—which enable fast rendering with compact file size—requires costly meshing or transmitting bulky meshes, negating their core benefits for streaming applications. <br/><br/>

          We present a compact neural field that enables common geometry processing tasks across diverse surface representations. Given an input surface, our method learns a neural map from its coarse mesh approximation to the surface. The full representation totals only a few hundred kilobytes, making it ideal for lightweight transmission. Our method enables fast extraction of manifold and Delaunay meshes for intrinsic shape analysis, and compresses scalar fields for efficient delivery of costly precomputed results. Experiments and applications show that our fast, compact, and accurate approach opens up new possibilities for interactive geometry processing.
          </p>
        </section>

        {/* Downloads */}
        <section className="mb-12">
          <h2 className="text-[1.166667em] font-bold mb-4">
            Downloads
          </h2>
          <ul className="list-none pl-4 space-y-1">
            <li className="before:content-['↪'] before:pr-2">
              <a
                href="/projects/neural-displacement-fields/neural-displacement-fields.pdf"
                className="text-blue-700 hover:underline"
              >
                Paper
              </a>
            </li>
            <li className="before:content-['↪'] before:pr-2">
              <a
                href="/projects/neural-displacement-fields/neural-displacement-fields-supp.pdf"
                className="text-blue-700 hover:underline"
              >
                Supplementary Material
              </a>
            </li>
            <li className="before:content-['↪'] before:pr-2">
              <a
                href="https://github.com/yutanoma/neural-displacement-fields"
                className="text-blue-700 hover:underline"
              >
                Code
              </a>
            </li>
          </ul>
        </section>

        {/* Interactive 3D Results */}
        <section className="mb-12">
          <h2 className="text-[1.166667em] font-bold mb-4">
            3D Plot
          </h2>
          <p className="text-base leading-relaxed text-justify mb-4">
            Our method aims to extend the Pareto frontier of three properties: error in computation tasks, runtime of mesh extraction + solve, and file size. Here, we show that the data points of our method (orange) form a new Pareto frontier that is impossible to achieve with existing methods. The 3D plots below are interactive — drag to rotate, scroll to zoom,
            and shift-drag to pan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <figure>
              <iframe
                src="/projects/neural-displacement-fields/results_geodesics.html"
                title="Geodesics Results"
                className="w-full border border-[#CCC] rounded bg-white"
                style={{ height: "500px" }}
                loading="lazy"
              />
              <figcaption className="italic text-sm text-center mt-2">
                Error of geodesic distance vs. file size vs. runtime.
              </figcaption>
            </figure>
            <figure>
              <iframe
                src="/projects/neural-displacement-fields/results_eigenvalues.html"
                title="Eigenvalues Results"
                className="w-full border border-[#CCC] rounded bg-white"
                style={{ height: "500px" }}
                loading="lazy"
              />
              <figcaption className="italic text-sm text-center mt-2">
                Error of Laplacian eigenvalues vs. file size vs. runtime.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BibTeX */}
        <section className="mb-12">
          <h2 className="text-[1.166667em] font-bold mb-4">
            BibTeX
          </h2>
          <pre className="bg-[#F8F8F8] border border-[#CCC] rounded p-3 overflow-x-auto">
            <code className="text-[0.85em] font-mono whitespace-pre">{`@article{noma2026neuraldisplacement,
  title = {Mesh Processing Non-Meshes via Neural Displacement Fields},
  author = {Yuta Noma and Zhecheng Wang and Chenxi Liu and Karan Singh and Alec Jacobson},
  year = {2026},
  journal = {Computer Graphics Forum (Eurographics)}, 
}`}</code>
          </pre>
        </section>

        {/* Acknowledgements */}
        <section className="mb-12">
          <h2 className="text-[1.166667em] font-bold mb-4">
            Acknowledgements
          </h2>
          <p className="text-base leading-relaxed text-justify">
          We thank Jonathan Panuelos and Abhishek Madan for insightful
          discussions, and Thor Vestergaard Christiansen, Joonho Kim, and
          Victor Rong for proofreading. Our research is funded in part by
          NSERC Discovery (RGPIN-2022-04680), the Ontario Early Research Award program, the Canada Research Chairs Program, a
          Sloan Research Fellowship, the DSI Catalyst Grant program and
          gifts by Adobe Inc.
          </p>
        </section>
      </div>
    </div>
  );
}
