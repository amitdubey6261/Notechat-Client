import React from 'react'

import i15 from '../../assets/images/New folder/i15.webp';
import './aboutPage.css' ; 

const AboutPage = () => {
    return (
        <>
            <main>
                <div className="image-wrapper">
                    <img id='image' src={i15} alt="not-found" />
                    <div className="image-overlay">
                        <div className="box-outer" id="colored"></div>
                        <div className="box-outer" id="text">
                            <div className="img-o-c-t "><span className='overlay-t' id="">CONNECT</span></div>
                            <div className="img-o-c-t"><h2 id=""> <span className='overlay-t-2'> TEAM CARPEDIEM </span></h2></div>
                            <div className="img-o-c-t"><span id="">My team members in Hackathon</span></div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="about-container">
                <h1 className='heading-apage'> Hackathon winning idea in 2k22 implimented now </h1>
                <div className="profile-pictures">
                    <div style={{backgroundColor:"black"}} className="image-container">
                        <img className='img-ab' src={'https://media.licdn.com/dms/image/D4D35AQG2Bnea14IWrQ/profile-framedphoto-shrink_800_800/0/1683042680498?e=1687766400&v=beta&t=2cgPa9ebShFlfv2FU4Iwc2ewA3chHbyc1bdvWtHQsC0'} alt="not-found" />
                        <div className="ab-name">CHAYAN VATS</div>
                    </div>
                    <div style={{backgroundColor:"black"}} className="image-container">
                        <img className='img-ab' src={"https://media.licdn.com/dms/image/D4D03AQFkao2nsfc4ew/profile-displayphoto-shrink_800_800/0/1686054173501?e=1692835200&v=beta&t=yTcU6RQp22yZKr_pilKkre7ZofPG03Pogozdq-BTVIw"} alt="not-found" />
                        <div className="ab-name">AMAN UTTAM</div>

                    </div>
                    <div style={{backgroundColor:"black"}} className="image-container">
                        <img className='img-ab' src={"https://media.licdn.com/dms/image/D4D03AQGRyqTktbadKg/profile-displayphoto-shrink_800_800/0/1686198104539?e=1692835200&v=beta&t=IHbt1Gd41KdpM5A92ryoGANiBgJkbtrucfui0cuKPuI"} alt="not-found" />
                        <div className="ab-name">ME : AMIT DUBEY</div>

                    </div>
                    <div style={{backgroundColor:"black"}} className="image-container">
                        <img className='img-ab' src={"https://media.licdn.com/dms/image/C4E03AQFfxVQJdHuvuQ/profile-displayphoto-shrink_800_800/0/1645957581031?e=1692835200&v=beta&t=oAWE-noP-dfMDL7APFjRjqzh9WAMvKJOnAI7mSn41T4"} alt="not-found" />
                        <div className="ab-name">ADITYA SUHANE</div>

                    </div>
                    <div style={{backgroundColor:"black"}} className="image-container">
                        <img className='img-ab' src={"https://media.licdn.com/dms/image/D4D35AQHLkOACDh36xA/profile-framedphoto-shrink_800_800/0/1686883497946?e=1687766400&v=beta&t=84oThqtmqMAys-gXbSs0Dt9kjTNNDXd97Z5bNdQobzo"} alt="not-found" />
                        <div className="ab-name">TEJAS AGRAHARI</div>
                    </div>
                </div>
                <div className="about">
                    <h1 className='heading-apage'>ABOUT NOTECHAT</h1>
                    Welcome to NoteChat - your one-stop solution for all your note-taking needs! We are a full-stack application that revolutionizes the way you access notes, previous year papers, and learning materials. With our seamless integration of real-time payments, you can easily unlock a world of knowledge and resources at your fingertips.

                    At NoteChat, our mission is to empower students and learners by providing them with a comprehensive platform that simplifies their academic journey. Gone are the days of searching through countless websites or struggling to find the right study materials. With our user-friendly interface and extensive database, you can quickly find and access the resources you need to excel in your studies.

                    One of the key features of NoteChat is our extensive collection of notes. We have a dedicated team of experts who curate and compile high-quality notes across various subjects and disciplines. Whether you are studying mathematics, literature, history, or any other subject, you can be confident that our notes will help you grasp complex concepts with ease. Our notes are structured in a way that promotes effective learning, allowing you to absorb information efficiently.

                    In addition to notes, we offer a vast repository of previous year papers. These papers serve as valuable study resources, helping you familiarize yourself with the format, types of questions, and level of difficulty that you may encounter in your exams. By practicing with these papers, you can build confidence and improve your performance.

                    Learning materials are also a crucial component of NoteChat. We understand that everyone has a unique learning style, and that's why we provide a diverse range of materials to cater to individual preferences. Whether you prefer video tutorials, interactive quizzes, or comprehensive textbooks, we have it all. Our platform allows you to explore different learning methods and choose the one that suits you best.

                    At NoteChat, we prioritize convenience and security. Our application is hosted on DigitalOcean, ensuring high availability and scalability. With the power of Docker and the MERN stack (MongoDB, Express.js, React.js, and Node.js), we offer a robust and seamless user experience. Real-time payments are integrated into our platform, enabling you to access premium content effortlessly and securely.

                    We understand the value of your time and resources. That's why we have designed NoteChat to be user-friendly and efficient. Our intuitive search functionality allows you to quickly find the exact materials you need, saving you valuable study time. Moreover, our platform is accessible on multiple devices, enabling you to learn on the go and never miss a beat.

                    Join the NoteChat community today and unlock a world of knowledge. With our extensive collection of notes, previous year papers, and learning materials, combined with real-time payments and a powerful technological infrastructure, we are committed to helping you achieve academic success. Say goodbye to information overload and hello to a streamlined learning experience. Let NoteChat be your trusted companion on your educational journey.
                </div>
                <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JbMSoaKYoYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default AboutPage