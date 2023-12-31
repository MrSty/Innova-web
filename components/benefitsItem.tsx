import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface BenefitsItemProps {
  title: string;
  content: string;
  icon: ReactNode;
}

const BenefitsItem: React.FC<BenefitsItemProps> = ({ title, content, icon }) => {

  const { ref, inView } = useInView({
    threshold: 0.5, // Opcional, define cuándo se considera visible
});

  return (
    <motion.div 
    ref={ref}
    initial={{scale:1.1}}
    animate={inView ? { scale: 1 } : { scale: 0.9}}
    transition={{ duration: 0.5, ease: "easeInOut" }}  
    className="p-4 rounded-[4rem] flex bg-white shadow-lg shadow-slate-600 lg:w-2/3">
      <div className="flex flex-row my-3 mx-2 space-x-4">
        <div className="flex items-center text-tertiary">{icon}</div>
        <div className="flex flex-col">
          <h1 className="md:text-lg font-[900] sm:text-base">{title}</h1>
          <p className="max-w-[20rem] md:text-sm sm:text-xs lg:text-base font-light text-gray-400">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitsItem;
