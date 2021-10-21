import React from 'react'
import Work from '../work/Work'
import Contact from '../contact/Contact'
import Title from '../title/Title'

function App() {
    return (
        <div className="overflow-x-hidden">
            <Contact/>
            <Title/>
            <Work/>
        </div>
    )
}

export default App
