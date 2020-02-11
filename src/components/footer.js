import React from "react"
import Emoji from "../components/emoji"

const Footer = () => {
    return (
        <footer>
            <div className="bg-container">
                <div>
                    <p>
                        <strong>Kevin Laminto</strong><br />
                        Developer + Designer,<br />
                        passionate about photography.
                    </p>
                </div>
                <div>
                    <p>
                        Connect with me.
                        <br />
                        <a href="https://instagram.com/kxvn.lx/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        {' / '}
                        <a href="https://github.com/kxvn-lx/" target="_blank" rel="noopener noreferrer">Github</a>
                        {' / '}
                        <a href="https://www.linkedin.com/in/kevinlaminto/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        {' / '}
                        <a href="https://dribbble.com/asketh" target="_blank" rel="noopener noreferrer">Dribbble</a>
                        <br />
                        <a href="https://www.kevinlaminto.com" target="_blank" rel="noopener noreferrer">Photography portfolio</a>
                    </p>
                </div>
                <div>
                    <p>
                        Developed with <Emoji symbol="❤️" label="red heart"/> by Kevin Laminto.
                        <br />
                        <span>
                            version alpha
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer