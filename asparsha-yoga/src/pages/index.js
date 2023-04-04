import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 w-full h-full bg-gradient-to-b from-white via-slate-200 to-indigo-300">
      <h1 className="lg:text-8xl text-4xl font-bold bg-gradient-to-r subpixel-antialiased from-orange-200 via-orange-300 to-orange-400 bg-clip-text text-transparent md:text-5xl sm:text-7xl">
        Asparsha Yoga
      </h1>
      <h4 className="lg:font-normal  text-indigo-300 text-2xl md:text-lg sm:text-md mt-4 lg:mt-6">
        Origins, meaning and execution
      </h4>

      <div className="font-semibold flex flex-col gap-2 line-clamp-4 leading-loose mt-10 max-w-4xl">
        <h2 className="subpixel-antialiased lg:text-4xl md:text-3xl sm:text-2xl">
          What is Asparsha Yoga?
        </h2>

        <div className="flex flex-col items-center justify-center w-full h-auto flex-wrap animate__animated animate__fadeInUp">
          <p className="line-clamp-10">
            The ten Upaniṣads on which Adi Śaṅkara (A.D. 788-820) wrote
            commentaries have been accepted as more ancient and authoritative.
            His depth of revealing meaning of the upanishads is mindboggling.
            Māndukyopanisad, the smallest of these, is uniquely distinct because
            of the comments of Gauḍapāda (7th cent. A. D.). This commentary is
            well-known as Māndukya Kārikā. The Māndukya Kārikā which advocates
            an extreme form of Advaita Vedānta, has used the term ‘asparśa-yoga’
            twice. The word ‘sparśa’ is generally used to signify contact of the
            sense-organs with the sense-objects. Hence any yoga or
            super-conscious experience which has no contact of the senses with
            the sense-objects may be called as asparśa-yoga.
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-16 lg:mt-28 max-w-xl max-h-full flex flex-col gap-1 items-center opacity-1 rounded-lg p-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-3 font-medium text-white underline">
          Origins Of Self
        </h1>
        <div className="w-full md:w-auto justify-center">
          <div>
            <p className="mt-3 mb-4 text-sm md:text-base lg:text-lg text-gray-700 font-medium">
              <strong>Mandukya</strong> holds genius in-depth explanation of the
              self, almost a wonder how we miss the truth hidden in plain sight,
              it says.
            </p>
            <h1 className="w-full md:w-auto text-md md:text-xl lg:text-2xl font-medium leading-tight">
              <span className="inline-block py-1 px-2 ">
                अस्पर्शयोगो वै नाम दुर्दर्शः सर्वयोगिभिः । योगिनो बिभ्यति
                ह्यस्मादभये भयदर्शिनः - Mandukya Karika, verse 3.39
              </span>

              <span className="inline-block py-1 px-2 text-white text-transparent bg-clip-text">
                ॥ ३९ ॥
              </span>
            </h1>
            <h1 className="mt-2 text-sm md:text-base lg:text-lg text-gray-700 font-medium  decoration-indigo-300 decoration-offset-1/4">
              This Yoga, which is not in touch with anything, is hard to be
              attained by all Yogis (in general). The Yogis are afraid of it,
              for they see fear in it where there is really fearlessness....
            </h1>
            <button className="text-medium p-2 mt-5 mr-3 bg-indigo-200 w-38 h-auto  rounded-md hover: translate-x-1 ">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
