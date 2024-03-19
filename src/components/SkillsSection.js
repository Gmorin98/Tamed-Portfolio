/* Image import */
import imageHTML from "./images/Html.png"
import imageCSS from "./images/Css.png"
import imageJS from "./images/JS.png"
import imageReact from "./images/React.png"
import imageMongoDB from "./images/MongoDB.png"

const SkillSection = () => {
  return (
    <section className="sectionSkills" id="sectionSkills">
      <h3>Coding Skill</h3>
      <div className="skillsContainer">
        <div>
          <img src={imageHTML} alt="HTML"/>
          <p>HTML</p>
        </div>
        <div>
          <img src={imageCSS} alt="CSS"/>
          <p>CSS</p>
        </div>
        <div>
          <img src={imageJS} alt="JavaScript"/>
          <p>JavaScript</p>
        </div>
        <div>
          <img src={imageReact} alt="React"/>
          <p>React</p>
        </div>
        <div>
          <img src={imageMongoDB} alt="MongoDB"/>
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  )
}

export default SkillSection