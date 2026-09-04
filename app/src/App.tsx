import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollManager, usePageMeta } from "@/hooks/usePageMeta";
import Home from "@/pages/Home";
import WhatWeSolve from "@/pages/WhatWeSolve";
import MarketEntry from "@/pages/capabilities/MarketEntry";
import RevenueAcceleration from "@/pages/capabilities/RevenueAcceleration";
import GCCGSI from "@/pages/capabilities/GCCGSI";
import IndiaToGlobalCapability from "@/pages/capabilities/IndiaToGlobalCapability";
import NicheAI from "@/pages/capabilities/NicheAI";
import GrowthPaths from "@/pages/GrowthPaths";
import GlobalToIndia from "@/pages/GlobalToIndia";
import IndiaToGlobalPath from "@/pages/IndiaToGlobalPath";
import HowWeWork from "@/pages/HowWeWork";
import BuiltOperateSustain from "@/pages/BuiltOperateSustain";
import PlatformGrowth from "@/pages/PlatformGrowth";
import DeliveryModel from "@/pages/DeliveryModel";
import Proof from "@/pages/Proof";
import CaseStudies from "@/pages/CaseStudies";
import OperatingExperienceDetail from "@/pages/OperatingExperienceDetail";
import Insights from "@/pages/Insights";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import CareersApply from "@/pages/CareersApply";
import Contact from "@/pages/Contact";
import { Cookies, Privacy, Terms } from "@/pages/Legal";
import NotFound from "@/pages/NotFound";

/** §3.3 page map — every page reachable, no orphans; legal footer-only; 404 by design. */
export default function App() {
  usePageMeta();
  const location = useLocation();
  return (
    // reducedMotion="user" once at the root: every animation in the app collapses
    // to its end state under prefers-reduced-motion, with no per-component
    // handling (§ Step 6).
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-white font-body text-ink antialiased">
        <ScrollManager />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {/* Route transition: 200ms fade with a 6px rise, keyed on pathname so
              in-page hash navigation never triggers it. mode="popLayout" takes
              the outgoing page out of flow, so the incoming page paints
              immediately rather than waiting for an exit animation. */}
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/what-we-solve" element={<WhatWeSolve />} />
                <Route path="/what-we-solve/market-entry-gtm" element={<MarketEntry />} />
                <Route path="/what-we-solve/revenue-acceleration" element={<RevenueAcceleration />} />
                <Route path="/what-we-solve/gcc-gsi-growth" element={<GCCGSI />} />
                <Route path="/what-we-solve/india-to-global" element={<IndiaToGlobalCapability />} />
                <Route path="/what-we-solve/niche-ai" element={<NicheAI />} />
                <Route path="/growth-paths" element={<GrowthPaths />} />
                <Route path="/growth-paths/global-to-india" element={<GlobalToIndia />} />
                <Route path="/growth-paths/india-to-global" element={<IndiaToGlobalPath />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/how-we-work/built-operate-sustain" element={<BuiltOperateSustain />} />
                <Route path="/how-we-work/platform-growth" element={<PlatformGrowth />} />
                <Route path="/how-we-work/delivery-model" element={<DeliveryModel />} />
                <Route path="/proof" element={<Proof />} />
                <Route path="/proof/case-studies" element={<CaseStudies />} />
                <Route path="/proof/case-studies/:slug" element={<OperatingExperienceDetail />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/apply" element={<CareersApply />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
