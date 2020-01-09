import React from 'react';
import TopBar from "../Topbar/topbar";
import Footer from "../Footer/footer";

// const items = ["hi", "hello"]

// const list = () => {
//     items.map(item => <div className="things"></div>)
// }


const About = props => {
    return (<div>
        <TopBar />
        <div className="container">
            <div className="info">
                <p>Hello and welcome to my Portfolio. <br></br>
                    My name is Laurentino Jaimes and I'm a 27 year old Lvl.3 Full Stack Developer in the programming field who went to The UCF BOOT CAMP,
                    as of right now I am knowledgeable in JavaScript, HTML, CSS, JQuery, MySQL, MongoDB and React. <br></br> <br></br>
                    There are many more to come as I am just starting this adventure in the massive world of Coding. <br></br>
            </p>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default About;