import React, { useRef } from 'react'
import './Portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
const Portfolio = () => {
    const ref = useRef()
    const item = [{
        id: 1,
        title: "Weather App",
        img: "https://th.bing.com/th/id/OIP.OsKFU_w957qAQn9YAzG6VgHaHa?rs=1&pid=ImgDetMain",
        desc: "A weather API is a service that allows you to access and use weather data from different sources in your own applications or websites. For example, you can use a weather API to display the current temperature, forecast, or alerts on your website, or to create a weather app for your mobile device."
    },
    {
        id: 2,
        title: "Social Media",
        img: "https://th.bing.com/th/id/OIP.zhjsMHgLj_art4uQIwygWwHaE2?rs=1&pid=ImgDetMain",
        desc: "Social media is digital technology that allows the sharing of ideas and information, including text and visuals, through virtual networks and communities."
    },
    {
        id: 3,
        title: "E-Commerce App",
        img: "https://image.freepik.com/free-vector/grocery-shopping-online-mobile-application_81534-1139.jpg",
        desc: "Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones, and other smart devices"
    }
    ]
    const Single = ({ item }) => {
        const ref = useRef()
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start start", "end start"]
        })
        const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
        return <section>
            <div className="text-container">
                <div className="wrapper">
                    <div className="image-container" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="info" style={{ y }}>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    }
    //for featured work
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress, {
        damping: 30,
        stiffness: 100
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
            </div>
            {item.map((p) => (
                <Single item={p} key={p.id} />
            ))}
        </div>
    )
}

export default Portfolio