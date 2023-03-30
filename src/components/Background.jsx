import Bug from "./Bug";
import '../styles/BackgroundStyle.css'


function Background() {

  
  return (
    <div className="background">
      <Bug speed={4} x={-100} y={100} />
      <Bug speed={2} x={-50} y={200} />
      <Bug speed={3} x={-200} y={300} />
      <Bug speed={3} x={-100} y={200} />
    </div>
  );
}

export default Background;