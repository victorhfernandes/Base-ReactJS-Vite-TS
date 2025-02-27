import Anchor from "../Anchor/Anchor";
import Separator from "../Separator/Separator";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Separator />

      <footer>
        <span className="footer-text">
          Made by{" "}
          <Anchor href="https://letterboxd.com/Victorh8010/">
            Victor Hugo Fernandes
          </Anchor>
        </span>
        <Link className="anchor" to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link className="anchor" to="/about">
          About
        </Link>{" "}
      </footer>
    </>
  );
};
export default Footer;
