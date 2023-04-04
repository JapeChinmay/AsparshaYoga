import React from "react";
import Image from "next/image";
import Link from "next/link";

const details = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl leading-loose font-extrabold bg-gradient-to-l subpixel-antialiased from-sky-400 via-sky-300 to-sky-200 bg-clip-text text-transparent mt-1">
        The Clay Pot Example
      </h1>

      <div className="w-1/2">
        <section className=" text-2xl  items-center font-bold">
          can your seperate clay and pot?
        </section>
        <p>
          {" "}
          mṛttika-ghaṭa-nyāya , All the ornaments are made of gold, but they are
          of diverse forms. They are all gold only in reality made into
          different shapes. There are various kinds of jars, pots and vessels,
          big and small, round and narrow, and of all shapes and forms, but all
          of them are only mud in reality. The names (nāma) of those various
          formations and their forms (rūpa) are all impermanent, unreal and
          insubstantial, since they are modifications of the original source,
          the gold or clay This is to illustrate that the various names and
          forms (nāma-rūpa) of this world and its contents are simply false, for
          all are in essence Brahman (consciousness) only. Brahman alone is
          appearing in many names and forms Another nyāya used to express the
          same concept is samudra-taraṅga nyāya — Waves on the ocean. There are
          countless waves rolling in the vast ocean. Each wave is distinguished
          from the other and each wave can be perceived separately, one by one.
          But all are water only, and are not separate from the great ocean. All
          are ONE only in reality – the difference is only apparent. This
          illustrates that all the innumerable Jivas that appear in this
          universe, though apparently they are perceived to be separate from one
          another, are in reality that ONE Ocean of Sacchidananda and are all
          identical with it. There is no difference or diversity.
        </p>

        <button className="text-medium p-2 mt-5 mr-3 bg-gradient-to-l from-sky-200 to-sky-300 w-30 h-10 w-38 h-auto  rounded-md hover: translate-x-1">
          <Link href="/">Go back</Link>
        </button>
      </div>
    </div>
  );
};

export default details;
