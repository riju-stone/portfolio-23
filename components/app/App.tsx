import React from 'react'
import Work from '../work/Work'
import Contact from '../contact/Contact'
import Title from '../title/Title'

function App() {
    return (
        <div className="overflow-x-hidden">
            <Title/>
            <Work/>
            <Contact/>
        </div>
    )
}

export default App
