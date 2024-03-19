
const ContactMe = () => {
  return (
    <footer className="sectionContactMe" id="sectionContactMe">
      <h3>If you wish to contact me, Fill this up!</h3>
      <form >
        <label htmlFor="firstName">First Name:</label>
        <input name="firstName" id="firstName" type="text" autoComplete="given-name"></input>

        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" id="lastName" type="text" autoComplete="family-name"></input>

        <label htmlFor="email">Email:</label>
        <input name="email" id="email" type="text" autoComplete="off"></input>

        <label htmlFor="extraDetail">Extra details:</label>
        <textarea id="extraDetail" type="text" autoComplete="off"></textarea>

        <button type="submit">Send!</button>
      </form>
    </footer>
  )
}

export default ContactMe