import Wrapper from "./wr-TechNav";
import IconNode from "../Tech/SvgNode";
import IconDocker from "../Tech/SvgDocker";
import IconMongo from "../Tech/SvgMongo";
import IconRedis from "../Tech/SvgRedis";
import IconPostgree from "../Tech/SvgPostgreSql";
import IconCss from "../Tech/SvgCss";
import IconReact from "../Tech/SvgReact";
import IconAngular from "../Tech/SvgAngular";
import IconNext from "../Tech/SvgNext";
import IconDjango from "../Tech/SvgDjango";
import { motion } from "framer-motion";

const TechNav = () => {
  const pathVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <Wrapper variants={pathVariants} initial="hidden" animate="visible">
      <motion.div variants={pathVariants} initial="hidden" animate="visible">
        <div className="item">
          <div className="icon">
            <IconNode />
          </div>
          <p>Nodejs</p>
        </div>
        <div className="item">
          <div className="icon">
            <IconDocker />
          </div>
          <p>Docker</p>
        </div>
        <div className="item">
          <div className="icon">
            <IconMongo />
          </div>
          <p>MongoDB</p>
        </div>
        <div className="item">
          <div className="icon">
            <IconRedis />
          </div>
          <p>Redis</p>
        </div>
        <div className="item">
          <div className="icon">
            <IconPostgree />
          </div>
          <p>PostgreeSQL</p>
        </div>
        <div className="item">
          <div className="icon">
            <IconReact />
          </div>
          <p>Reacts</p>
        </div>
        <div className="item">
          <div className="icon">
            <IconCss />
          </div>
          <p>CSS</p>
        </div>
        <div className="item">
          <div className="icon">
            <IconAngular />
          </div>
          <p>Angular</p>
        </div>
        <div className="item">
          <div className="icon">
            <IconNext />
          </div>
          <p>Nextjs</p>
        </div>
        <div className="item">
          <div className="icon">
            <IconDjango />
          </div>
          <p>Django</p>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default TechNav;
