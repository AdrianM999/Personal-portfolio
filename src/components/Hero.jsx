import { motion } from 'framer-motion';

import { styles } from '../style';
import { ComputersCanvas } from './canvas';

import background from '../assets/backgroundIMG.png';

const Hero = () => {
  return (
    <section className='relative  w-full h-screen mx-auto' 
             style={{ 
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-reapeat'
            }}
             >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#eba10e]'/>
          <div className='w-1 sm:h-80 h-40 bg-[#eba10e]' />

        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#eba10e]'>Adrian</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop 3D visuals, user <br className='sm:block hidden'/>interfaces and web applications</p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  )
}

export default Hero