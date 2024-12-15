import "../styles/Parallex.scss";
import { Link } from "react-router-dom";

export default function Parallx() {
  return (
    <div className="parallex">
      <h1>
        Our one and only priority is the <span>customer satisfaction</span>
      </h1>
      <Link className="quote">Get A Quote</Link>
    </div>
  );
}
