import { useState } from "react";
import { motion } from "framer-motion";

export const Home = () => {

  const services = [
    {
      image: "",
      label: "Birthday Flowers",
      description: "Fast Same Day Delivery",
      path: "",
    },
    {
      image: "",
      label: "Free Shipping",
      description: "On orders over $99",
      path: "",
    },
    {
      image: "",
      label: "Fresh Flowers",
      description: "Fast Same Day Delivery",
      path: "",
    },
  ];

  const categories = [
    {
      image: "",
      label: "Test",
    },
    {
      image: "",
      label: "Test",
    },
    {
      image: "",
      label: "Test",
    },
  ];

  return (
    <div>
      <div className="relative flex justify-center items-center">

        {/* Header */}
        <img src="" alt="" className="bg-gray-300 w-full h-[500px] object-cover" />
        <div className="absolute flex flex-col items-center text-white gap-2">
          <h1 className="text-[3rem]">Flowers</h1>
          <p className="text-[1.2rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, eveniet.</p>
        </div>

        {/* Services */}
        <div className="absolute grid grid-cols-3 gap-10 bottom-[-20%]">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center"
            >
              <img src={item.image} className="bg-gray-400 h-[200px] w-[300px]" />
              <div className="absolute top-0 flex flex-col justify-center items-center h-full gap-2">
                <h1 className="text-[1.2rem] font-[600]">{item.label}</h1>
                <p className="text-[.8rem]">{item.description}</p>
                <button className="font-[500]">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-[180px]"></div>

      {/* Top Categories */}
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-[2rem]">Top categories</h1>
        <div className="grid grid-cols-3 gap-20">
          {categories.map((item, index) => {

            const [active, toggle] = useState<boolean>(false);

            return (
              <motion.div 
                key={index} 
                className="relative gap-4 overflow-hidden"
                onHoverStart={() => toggle(!active)}
                onHoverEnd={() => toggle(!active)}
              >
                <img src={item.image} className="w-[260px] h-[260px] bg-gray-300" />
                <motion.div 
                  className="absolute flex flex-col items-center justify-center bg-[#9b9b9b5b] w-full h-full top-0"
                  initial={{ translateY: active ? "0" : "100%" }}
                  animate={{ 
                    translateY: active ? "0" : "100%", 
                    transition: { 
                      duration: .3
                    } 
                  }}
                >
                  <h1>{item.label}</h1>
                  <button>View All</button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="">

      </div>

    </div>
  );
}