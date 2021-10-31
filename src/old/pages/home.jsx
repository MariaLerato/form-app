import React from 'react'
import './stylesheet.css'
import f from './computer1.jpg'
import g from './laptop.jpg'
import h from './monitor.jpg'
import k from './student.jpg'
import v from './typewriter1.jpg'
import a from './typewriter2.jpg'


const Home = () =>{
    return(
        <div className="home-container">
            <div className="body">
                <h1>The World Of Machine Learning</h1>
                <div className="home">
                    <div className="first-row">
                    <div className="pic-container">
                    <img src={f} alt='' />
                <p className="subtitle">Monitore</p>
                </div>
                <div className="pic-container">
                <img src={v} alt='' />
                <p className="subtitle">Typewriter</p>
                </div>
                <div className="pic-container">
                <img src={a} alt='' />
                <p className="subtitle">old workspace</p>
                </div>
                </div>
                <div className  = "second-row">
                    <div className="pic-container">
                        <img src={h} alt='f' />
                        <p className="subtitle">Modern Technology</p>
                    </div>
                    <div className="pic-container">
                        <img src={g} alt='' />
                        <p className="subtitle">Laptop</p>
                    </div>
                    <div className="pic-container">
                        <img src={k} alt='' />
                    <p className="subtitle">Users Laptops</p>
                    </div>
                </div>
            </div>
            </div>
            <h2 className="text">Welcome To The World Of Programming</h2>
            <p className="about">
                The world of programming is progressing and slowing taking over our everyday lives. But hey, thats what machine learning is about right?!
                Today, most people don't need to know how a computer works.  Most people can simply turn on a computer or a mobile phone and point at some little graphical object on the display, click a button or swipe a finger or two, and the computer does something.  An example would be to get weather information from the net and display it.  How to interact with a computer program is all the average person needs to know.
                But, since you are going to learn how to write computer programs, you need to know a little bit about how a computer works.  Your job will be to instruct the computer to do things
            </p>
            <h2>What Is Computer Programming</h2>
            <p className="definition">
            Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms in a chosen programming language (commonly referred to as coding)
            </p>
            <h2>Learn Computer Programming</h2>
            <p className="study">
            edX offers a plethora of classes targeted to new and beginning coders. These introductory classes provide a step by step tutorial on how to code using your favorite language. Harvard's CS50's Introduction to Computer Science, an entry level course, teaches you how to think algorithmically and solve problems efficiently. Topics include basic concepts in abstraction, algorithms, operating systems,  data structures, encapsulation, resource management, security, software engineering, and web development using languages such as C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets are inspired by real-world domains of biology, cryptography, finance, forensics, and gaming.
            </p>
            <h2>Jobs in computer Programming</h2>
            <p className="jobs">
            A skilled and experienced computer programmer can essentially write their own ticket. There are thousands of open jobs in programming and related fields. For example, a search for available positions for Java programmers on Indeed.com at the time of this article had over ten thousand results. And that’s just in the United States. People wishing to enter the world of computer programming can choose to specialize in any number of popular programming languages and find many entry-level opportunities. Get started as a junior programmer in the language of your choice and gain the experience and skills to move up the ladder to software engineer or even Chief Technology Officer.
            
            </p>

        </div>
    )
}
export default Home