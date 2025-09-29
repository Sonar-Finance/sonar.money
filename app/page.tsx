import Image from "next/image"
import Link from "next/link"

import { FaTwitter, FaArrowRight, FaGithub } from "react-icons/fa"

import asset_bg from "@/public/bg.webp"
import asset_logo from "@/assets/logo.svg"

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0">
        <div
          style={{
            transition: "opacity 150ms ease-in-out",
            backgroundImage: `url(${asset_bg.src}), url(${asset_bg.blurDataURL})`,
          }}
          className="absolute inset-0 bg-cover bg-bottom"
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/50 to-black/90" />
      </div>

      <div className="p-6 relative z-1 min-h-screen">
        <section className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between">
            <figure className="w-36">
              <Image src={asset_logo} alt="" className="w-full" />
            </figure>

            <Link
              target="_blank"
              aria-label="Open Sonar Finance Mini App"
              href="https://world.org/mini-app?app_id=app_4bf83c14596fb3f11fbcd73f9686c8c1&draft_id=meta_fffef72e4142eb6e7ed8096590214c49"
              className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg font-semibold ring-2 ring-transparent hover:ring-white/25 transition"
            >
              Open <span className="hidden sm:inline">Mini</span> App
            </Link>
          </nav>

          <div className="text-white flex flex-col justify-center items-center text-center min-h-[60vh] mt-20">
            <h1 className="text-4xl sm:text-7xl max-w-2xl uppercase font-black">
              Predictions.
              <br className="sm:hidden" /> made — human
            </h1>
            <p className="text-lg sm:text-xl mt-4 max-w-xl">
              <strong>Sonar:</strong> The human-powered prediction market on
              Worldchain. Turning collective foresight into tradable truth.
            </p>

            <nav className="mt-12 w-full sm:w-auto sm:mt-6 flex flex-col sm:flex-row gap-5">
              <Link
                target="_blank"
                aria-label="Open Sonar Finance Mini App"
                href="https://world.org/mini-app?app_id=app_4bf83c14596fb3f11fbcd73f9686c8c1&draft_id=meta_fffef72e4142eb6e7ed8096590214c49"
                className="h-[3.75rem] group px-6 flex gap-4 sm:gap-3 text-black items-center justify-center font-semibold rounded-lg border-2 text-lg border-white/10 bg-gradient-to-bl from-sf-blue/90 to-sf-blue/60"
              >
                <span>Start Predicting</span>
                <FaArrowRight className="group-hover:translate-x-px" />
              </Link>

              <Link
                target="_blank"
                aria-label="Follow 0xSonarFinance on X (Twitter)"
                href="https://x.com/0xSonarFinance"
                className="h-[3.75rem] group px-6 flex gap-3 text-white items-center justify-center font-semibold rounded-lg border-2 text-lg border-white"
              >
                <span>Follow Twitter</span>
              </Link>
            </nav>
          </div>

          <footer className="flex mt-44 sm:mt-20 gap-4 mb-8 flex-col sm:flex-row py-3 items-center justify-center sm:justify-between">
            <p className="text-center text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Sonar Finance. All rights
              reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link
                className="text-white/70 hover:text-white transition"
                target="_blank"
                aria-label="View source code on GitHub"
                href="https://github.com/sonar-finance"
              >
                <FaGithub className="text-xl" />
              </Link>

              <Link
                className="text-white/70 hover:text-white transition"
                target="_blank"
                aria-label="Follow 0xSonarFinance on X (Twitter)"
                href="https://x.com/0xSonarFinance"
              >
                <FaTwitter className="text-xl" />
              </Link>
            </div>
          </footer>
        </section>
      </div>
    </main>
  )
}
