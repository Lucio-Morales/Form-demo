import { Link, useLocation } from "react-router-dom";

const Button = () => {
  const location = useLocation();

  let text = location.pathname === "/" ? "Sign up" : "Back";
  return (
    <Link to={location.pathname === "/" ? "/sign-up" : "/"}>
      <button>{text}</button>
    </Link>
  );
};

export default Button;
