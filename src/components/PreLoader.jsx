import { motion } from "framer-motion";
import { PacmanLoader} from 'react-spinners'

const PreLoader = (props) => {
  return (
    <motion.div
    initial = {{ y : 0 }}
    animate = {{ y : '-100vh' }}
    transition={{ duration : 2, delay : 2}}
    className={`${props.loader ? 'fixed flex justify-center items-center top-0 left-0 w-full h-full z-50 bg-[#31363F]' : 'hidden'}`}>
      
      <motion.div>
        <PacmanLoader size={20} color="#EEEEEE"/>
      </motion.div>

    </motion.div>
  )
}

export default PreLoader