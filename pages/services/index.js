import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


const Services = () => {
  return (
    <div className="h-full bg-primary/60 py-40 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
             variants={fadeIn("up", 0.3)}
             initial="hidden"
             animate="show"
             exit="hidden"
             className="h2 text-white/90 md:mt-40 xl:mt-8">
              My Services<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
             variants={fadeIn("up", 0.4)}
             initial="hidden"
             animate="show"
             exit="hidden"
             className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Over the past few years, my expertise has grown across these
              domains and I'm committed to continuous learning, always exploring
              new frameworks and features.
            </motion.p>
          </div>
          <motion.div
           variants={fadeIn("down", 0.6)}
           initial="hidden"
           animate="show"
           exit="hidden"
           className="w-full xl:max-w-[65%]">
          <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
