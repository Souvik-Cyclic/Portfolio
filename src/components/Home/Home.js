import './Home.css';
import Typing from '../Typing';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profile_pic from '../../assets/profile_pic.png';

function Home() {
    return (
        <section className='home'>
            <img src={profile_pic} alt="Profile Picture" className='profile-picture'/>
            <span className='typing'>
                <span className='i-am'>I am Souvik, </span>
                <b>
                    <Typing text = {["Web Developer", "Problem Solver", "AI Enthusiast", "Student at Scaler School Of Technology"]}
                    typingSpeed = {100}
                    deletingSpeed={50}
                    duration={1000}/>
                </b>
            </span>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/souvik-cyclic/" target="_blank" rel="noreferrer noopener"><FaLinkedin size={40} /></a>
                <a href="https://github.com/Souvik-Cyclic" target="_blank" rel="noreferrer noopener"><FaGithub size={40} /></a>
            </div>
        </section>
    )
}

export default Home;