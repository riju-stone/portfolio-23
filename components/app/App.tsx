import React from 'react'
import Work from '../work/Work'
import Contact from '../contact/Contact'
import Title from '../title/Title'
import About from '../about/About'
import { motion } from 'framer-motion'

function App() {
    return (
        <motion.div layoutId="loader" className="overflow-x-hidden">
            <Contact/>
            <Title/>
            <About/>
            <Work/>
        </motion.div>
    )
}

export default App
