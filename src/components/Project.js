import imageProject from './images/Project.jpg'

const Project = () => {
  return (
    <section className="sectionProjects" id="sectionProjects">
      <h3>Projects</h3>
      <div>
        <img src={imageProject}/>
        <p>PROJECT NYAN CAT</p>
        <p>We were given a small game that we had to tweak some elements and make it our own.</p>
      </div>
    </section>
  )
}

export default Project