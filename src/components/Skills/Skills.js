import './Skills.css';
import java from '../../assets/java.jpg';
import python from '../../assets/python.png';
import js from '../../assets/js.jpeg';
import cpp from '../../assets/cpp.jpeg';
import sql from '../../assets/sql.jpeg';
import git from '../../assets/git.png';
import docker from '../../assets/docker.png';
import nodejs from '../../assets/nodejs.png';
import react from '../../assets/react.png';

function Skills() {
    return(
        <div className='skills'>
            <br/><br/>
            <h1>Skills</h1>
            <p><b>I love to learn new things and experiment with new technologies.<br/>
            These are some of the major languages, technologies, tools and platforms I have worked with:</b></p>
            <div className='skill-list'>
                <h3>Languages & Databases:</h3>
                <div className="image-container">
                    <img src={java} alt="Java" />
                    <img src={python} alt="Python" />
                    <img src={js} alt="JavaScript" />
                    <img src={cpp} alt="C++" />
                    <img src={sql} alt="MySQL" />
                </div>
                <br/>
                <h3>Frameworks & Technologies</h3>
                <div className='image-container'>
                    <img src={react} alt="react"/>
                    <img src={nodejs} alt="node-js"/>
                </div>
                <br/>
                <h3>Tools & Platforms</h3>
                <div className='image-container'>
                    <img src={git} alt="git"/>
                    <img src={docker} alt="docker"/>
                </div>
            </div>
        </div>
    )
}

export default Skills;