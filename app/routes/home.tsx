import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {cvs} from "../../constants";
import CvCard from "~/components/CvCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV Check" },
    { name: "description", content: "Analyze your CV!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
        <div className="page-heading">
          <h1>Analyze your CV and improve it</h1>
          <h2>AI Powered CV analyzer</h2>
        </div>
    </section>

    {cvs.length > 0 && (
        <div className="resume-section">
          {cvs.map((cv) => (
              <CvCard key={cv.id} cv={cv}/>
          ))}
        </div>
    )}
  </main>;
}
