import React from "react";
import AboutVocoXp from "../component/AboutVocoXp";
import InnerAbout from "../component/InnerAbout";

const VideoContentSectionTailwind = () => {
  return (
    <section className="bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-4 lg:px-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Why Choose <span className="text-blue-500">Cloud</span>
          <span className="text-indigo-400">Node</span>
        </h2>

        <div className="flex justify-center mt-4">
          <div className="h-0.75 w-44 rounded-full bg-linear-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed font-light">
          Global infrastructure built for{" "}
          <span className="text-cyan-400 font-semibold">unmatched scale</span>{" "}
          and enterprise-grade reliability.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-[55%]">
          <InnerAbout />
        </div>
        <div className="w-full lg:w-[45%]">
          <AboutVocoXp />
        </div>
      </div>
    </section>
  );
};

export default VideoContentSectionTailwind;