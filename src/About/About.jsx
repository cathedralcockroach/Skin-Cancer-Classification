import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import "./about.css";
import HomeIcon from "@mui/icons-material/Home";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '80%',
  height: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: '1.5rem', 
};

export default function About() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/Home");
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style: { backgroundColor: "#a6e6e2" },
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="aboutlogo" onClick={navigateToHome}>
              <img src={logo}></img>
              <h2>
                Skin Cancer Detection
              </h2>
              <a className="btn aboutHome" onClick={navigateToHome}>
                <HomeIcon />
              </a>
            </div>
            <Typography id="transition-modal-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias provident delectus fuga rem quam ratione ipsa mollitia animi et fugiat numquam nemo repellendus harum explicabo consectetur saepe voluptas iure molestiae ex vero, odio fugit tempora. Vitae, sapiente architecto voluptatum eos pariatur explicabo vero facilis, tempore veniam nam dolore ab inventore.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
