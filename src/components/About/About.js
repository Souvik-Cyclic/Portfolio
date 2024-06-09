import './About.css'
import profile from "../../assets/profile.png"

function About() {
    return (
        <div className='about'>
            <p>
                <br />
                <h1>About</h1>
                <img src={profile} alt="Image" align="right"></img>
                <br />
                <p className='intro'>
                Hello, my name is Souvik Kumar.
                <br /><br />
                I am an undergraduate student majoring in Computer Science at Scaler School of Technology in Bengaluru, India.
                <br /><br />
                I am passionate about programming and enjoy working on web development projects.
                <br /><br />
                In my free time, I like to explore new technologies and contribute to open-source projects.
                <br /><br />
                </p>
                <div className="contact-info">
                    Feel free to reach out to me if you have any questions or collaboration opportunities.
                </div>
            </p>
        </div>
    );
}


export default About;