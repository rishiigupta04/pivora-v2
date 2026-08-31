import { Link } from "react-router";
import { LogoMonogram } from "@/components/Logo";

/** §19A — 404: wordmark, one line, three links. No illustration, no humour. */
export default function NotFound() {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="container-site max-w-xl text-center">
        <LogoMonogram className="mx-auto h-14 w-14" />
        <h1 className="mt-6 font-head text-3xl font-semibold tracking-tight text-navy">That page does not exist.</h1>
        <nav aria-label="Recovery" className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
          <Link to="/" className="text-link">Home</Link>
          <Link to="/what-we-solve" className="text-link">What We Solve</Link>
          <Link to="/contact" className="text-link">Start a Conversation</Link>
        </nav>
      </div>
    </section>
  );
}
