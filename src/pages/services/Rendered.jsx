import { Tilt } from "react-tilt"; 
import { motion } from "framer-motion";
import { styles } from "./styles";
import { fadeIn, textVariant } from "./motion";
import web from "../../assets/web.png";
import mobile from "../../assets/mobile.png";
import backend from "../../assets/backend.png";
import creator from "../../assets/creator.png";

const Rendered = () => {
    const services = [
        {
          title: "Web Developer",
          icon: web,
        },
        {
          title: "React Native Developer",
          icon: mobile,
        },
        {
          title: "Backend Developer",
          icon: backend,
        },
        {
          title: "Content Creator",
          icon: creator,
        },
    ];

    return(
        <>
            <div className="">.</div>
        </>
    )
}

export default Rendered;