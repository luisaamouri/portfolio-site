import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.png' className="profile-img" width={300} height={300} alt="Luisa on a volcano, pretty cool photo"/>
            <div className="hero-text">
                <h1>Hi, I'm Luisa</h1>
                <p>
                    Computer science student at Dalhousie, pursuing a minor in Neuroscience. Aspiring software engineer. I push buttons, and occasionally the right ones.
                </p>
                <div className="social-icons">
                <a
                    href="https://github.com/luisaamouri"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/luisa-el-amouri-43a895290/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>       
        </div>
    )
}

export default Hero;