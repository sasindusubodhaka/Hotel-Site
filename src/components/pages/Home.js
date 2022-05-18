import React,{useEffect} from 'react'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout';

const Home = () => {
    useEffect(() => {
        console.log("Home")
    }, []);
    return (
        <>            
            <Hero />
            <HomeAbout />
        </>
    )
}

export default Home
