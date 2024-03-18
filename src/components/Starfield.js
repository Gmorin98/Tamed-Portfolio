
const Starfield = () => {
  const numStars = Math.floor(Math.random() * 100 + 100); // Adjust the number of stars as needed
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 3; // 0 to 3.
    const randomRGB = [];

    // Making the random Color.
    for(let RGB = 0; RGB <= 2; RGB++) {
      randomRGB[RGB] = Math.floor(Math.random() * 100 + 155);
    }

    const style = {
      left: `${Math.random() * 100}%`, // 0 to 100.
      top: `${Math.random() * 100}%`, // 0 to 100.
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`,
      animationDelay: `${Math.random() * 5}s` // Delay their animation from 0s to 3s.
    };
    
    stars.push(<div className="star" style={style} key={i}></div>);
  }

  return <div className="starfield">{stars}</div>;
};

export default Starfield
