import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>Writing</li>
        <li>Speaking</li>
        <li>Projects</li>
      </ul>
      <hr />
      <p>All materials &#169; Mohd Ashif 2023</p>
      <div className="social-links">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/mohd-ashif-052b71194/"
        >
          <LinkedInIcon sx={{ fontSize: 28 }} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/AshifAli007"
        >
          <GitHubIcon sx={{ fontSize: 28 }} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/theashifkhan/"
        >
          <InstagramIcon sx={{ fontSize: 28 }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
