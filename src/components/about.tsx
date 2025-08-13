import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        soon to be long wall of text
                    </p>
                    <p>
                        soon to be other long wall of text
                    </p>
                </div>
                <div className="about-img">
                    <Image src='/images/profile.png' className="profile-img" width={300} height={500} alt="Luisa on a volcano, pretty cool photo"/>
                </div>
            </div>
        </div>
    )
}

export default About;