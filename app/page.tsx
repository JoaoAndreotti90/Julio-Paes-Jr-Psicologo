"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Care from "@/components/Care";
import About from "@/components/About";
import Statement from "@/components/Statement";
import Gallery from "@/components/Gallery";
import Motion from "@/components/Motion";
import Steps from "@/components/Steps";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { DEFAULT_BOOKING } from "@/lib/booking";

export default function Page() {
  const [booking, setBooking] = useState(DEFAULT_BOOKING);

  return (
    <>
      <Header />
      <main id="top">
        <Intro />
        <Care setBooking={setBooking} />
        <Statement />
        <About />
        <Gallery />
        <Steps />
        <Faq />
        <Contact booking={booking} setBooking={setBooking} />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
