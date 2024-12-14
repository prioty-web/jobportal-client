
import { motion } from "framer-motion";
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex-1">
    <motion.img
      src="https://img.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147850221.jpg"
      className="max-w-sm w-64 h-48 rounded-t-[40px] rounded-br-[40px] border-l-4  border-b-4  border-gray-600 shadow-2xl overflow-hidden "
      animate={{y:[10,50,0]}}
      transition={{duration:15, repeat:Infinity }} />
    <motion.img
      src="https://img.freepik.com/free-vector/hand-drawn-people-office-background_23-2148085383.jpg"
      className="max-w-sm w-64 h-48 rounded-t-[40px] rounded-br-[40px] border-l-4 overflow-hidden   border-b-4  border-gray-600 shadow-2xl"
      animate={{x:[100,150,100]}}
      transition={{duration:10, delay:5, repeat:Infinity }} />
    </div>
    <div className="flex-1">
      <motion.h1 animate={{ x:50 }}
      transition={{duration:0.3 }} className="text-5xl font-bold">Latest <motion.span animate={{color:'#4169E1'}}
      transition={{duration:2, delay:1, repeat:Infinity}}>Jobs</motion.span> For You!</motion.h1 >
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;