import './Projects.css';

function Projects() {
    return (
        <div className='projects-div'>
            <div className='project-card'>
                <h2>Web Scraper</h2>
                <p>Compares prices of similar products on multiple shopping sites.</p>
                <p>Features:</p>
                <ul>
                    <li>Automatically fetches product information from various websites</li>
                    <li>Compares prices and displays the best deal</li>
                    <li>Supports custom search filters and sorting options</li>
                </ul>
            </div>
            <div className='project-card'>
                <h2>Image Editor</h2>
                <p>Command Line Based Image Editor.</p>
                <p>Features:</p>
                <ul>
                    <li>Supports various image editing operations like cropping, resizing, and applying filters</li>
                    <li>Can be used in batch mode to process multiple images at once</li>
                    <li>Provides a simple and intuitive command line interface</li>
                </ul>
            </div>
            <div className='project-card'>
                <h2>Music Player</h2>
                <p>Fetches music from different sources on the internet and plays them.</p>
                <p>Features:</p>
                <ul>
                    <li>Supports streaming and downloading of music files</li>
                    <li>Provides a user-friendly interface for browsing and managing music library</li>
                    <li>Includes features like playlist creation, shuffle, and repeat</li>
                </ul>
            </div>
            <p className='more'>
            and Many More Interesting Projects....
            </p>
        </div>
    )
}

export default Projects;