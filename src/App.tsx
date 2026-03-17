/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Nav, Hero, Services, Profile, Works, Contact, Footer } from "./components";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-navy-pale selection:text-navy">
      <div className="max-w-[960px] mx-auto px-8 md:px-8 sm:px-5">
        <Nav />
        <Hero />
        <Services />
        <Profile />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
