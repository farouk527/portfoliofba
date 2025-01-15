import * as React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import { About } from '../components/About/About';
import Personnal from '../components/Scope1/Personnal';
import { useRef } from 'react';
import Scope2 from '../components/Scope2/Scope2';
import Scope3 from '../components/Scope3/Scope3';
import Scope4 from '../components/Scope4/Scope4';
import Footer from '../components/footer/Footerfile';

function MainPages() {
  const aboutRef = useRef(null);
  const personnalRef1 = useRef(null);
  const personnalRef2 = useRef(null);
  const personnalRef3 = useRef(null);
  const personnalRef4 = useRef(null);

  return (
    <div>
      <Navbar 
      sections={{
        personnal: personnalRef1,
        scope2: personnalRef2,
        scope3: personnalRef3,
      }}/>

      <div >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ root: aboutRef }} 
        >
          <About />
        </motion.div>
      </div>

      <div ref={personnalRef1}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ root: personnalRef1 }}
        >
          <Personnal />
        </motion.div>
      </div>

      <div ref={personnalRef2}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ root: personnalRef2 }}
        >
          <Scope2 />
        </motion.div>
      </div>

      <div ref={personnalRef3}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ root: personnalRef3 }}
        >
          <Scope3 />
        </motion.div>
      </div>

      <div ref={personnalRef4}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ root: personnalRef4 }}
        >
          <Scope4/>
        </motion.div>

        <Footer/>
      </div>
    </div>
  );
}

export default MainPages;
