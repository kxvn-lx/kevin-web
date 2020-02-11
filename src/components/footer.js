import React from "react"

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
                        <a href="https://instagram.com/kxvn.lx/" target="_blank" rel="noopener">Instagram</a>
                        {' / '}
                        <a href="https://github.com/kxvn-lx/" target="_blank" rel="noopener">Github</a>
                        {' / '}
                        <a href="https://www.linkedin.com/in/kevinlaminto/" target="_blank" rel="noopener">LinkedIn</a>
                        {' / '}
                        <a href="https://dribbble.com/asketh" target="_blank" rel="noopener">Dribbble</a>
                        <br />
                        <a href="https://www.kevinlaminto.com" target="_blank" rel="noopener">Photography portfolio</a>
                    </p>
                </div>
                <div>
                    <p>
                        Developed with ❤️ by Kevin Laminto.
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