"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Care from "@/components/Care";
import About from "@/components/About";
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
        <Hero booking={booking} setBooking={setBooking} />
        <Care setBooking={setBooking} />
        <About />
        <Steps />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
