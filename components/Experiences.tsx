import React from "react";
import { workExperience } from "@/data";
import { BorderBeamButtonF } from "./ui/BorderBeamButton";

const Experiences = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading text-3xl md:text-5xl font-bold text-center">
        Mon <span className="text-purple">expérience de travail</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <BorderBeamButtonF
            key={card.id}
            duration={Math.random() * 10 + 10}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-12 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xxl md:text-2xl font-bold">
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </h1>
              </div>
            </div>
          </BorderBeamButtonF>
        ))}
      </div>
    </div>
  );
};

export default Experiences;