import React,{useEffect} from 'react'
import Hero from '../HomeSection/Hero'

const Home = () => {
    useEffect(() => {
        console.log("Home")
    }, []);
    return (
        <>            
            <Hero />
        </>
    )
}

export default Home
