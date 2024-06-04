// @ts-nocheck

import SectionS from "../components/SectionS";
import Header from "../components/Header";
import SectionA from "../components/SectionA";
import SectionH from "../components/SectionH";
import Loading from "components/loading";
import { Suspense } from "react";
export default function Home() {
  return (
  
      <div className="hero_area">
        <Header />
        <SectionH />
        <SectionA />
        <Suspense fallback={<Loading />}>
        <SectionS/>
        </Suspense>
      </div>
  );
}
