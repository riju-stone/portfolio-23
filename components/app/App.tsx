import React from 'react'
import Work from '../work/Work'
import Contact from '../contact/Contact'
import Title from '../title/Title'
import About from '../about/About'

function App() {
    return (
        <div className="overflow-x-hidden">
            <Contact/>
            <Title/>
            <About/>
            <Work/>
        </div>
    )
}

export default App
