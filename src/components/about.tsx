import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <div className="flex-about">
                <div className="about-img">
                    <Image src='/images/profile2.jpg' className="profile-img" width={350} height={500} alt="Luisa"/>
                </div>
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                    I am currently a third-year student at Dalhousie University, pursuing a Bachelors of Computer Science with honours and a minor in Neuroscience. Although my tech journey began in 2022, I've been able to achieve more than I could have imagined. In 2023, I worked as a representative of Dalhousie's faculty of Computer Science. Presenting at tech events and schools accross Nova Scotia, I built presentations and activities which made Computer Science accessible to youth with little technical exposure. In January 2024, I began my first internship as a Software Developer, leading a website redesign project for a Halifax based human resource company, and in September 2024 I began my second internship as a full-stack Software Engineer at a FinTech company.
                    </p>
                    <p>
                    I thrive in collaborative environments and enjoy working with passionate engineers, where I can contribute ideas, learn from others, and merge perspectives into innovative solutions. Through both academic and work experiences, I have developed interpersonal skills that enable me to communicate effectively while staying highly motivated and embracing challenges as opportunities for creative problem-solving. In my final years at Dalhousie, I'll be completing my Honours while pursuing certificates in Machine Learning and Data Science. Outside of tech, I love surfing, reading, weight lifting, creating music and spending as much time as possible in the great outdoors.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;