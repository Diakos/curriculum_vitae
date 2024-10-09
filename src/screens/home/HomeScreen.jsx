import Cursor from "../../components/cursor/Cursor"
import Header from "../../components/header/Header"
import Education from "../../components/education/Education"
import Experience from "../../components/experience/Experience"
import Skill from "../../components/skill/Skill"
import Hobbies from "../../components/hobbies/Hobbies"
import CertificateAward from "../../components/certificateaward/CertificateAward"

const HomeScreen = () => {
    return (
        <div className="page-container">
            <Header />
            <Experience />
            <Education />
            <Skill />
            <CertificateAward />
            <Hobbies />
            <Cursor />
        </div>
    )
}

export default HomeScreen
