import React from "react";
import { ReactComponent as CssIcon } from "../../assets/images/css3.svg";
import { ReactComponent as GoIcon } from "../../assets/images/go.svg";
import { ReactComponent as HtmlIcon } from "../../assets/images/html5.svg";
import { ReactComponent as JavaIcon } from "../../assets/images/java.svg";
import { ReactComponent as JsIcon } from "../../assets/images/js.svg";
import { ReactComponent as PhpIcon } from "../../assets/images/php.svg";
import { ReactComponent as RubyIcon } from "../../assets/images/ruby.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/images/typescript.svg";
import { ReactComponent as ReactIcon } from "../../assets/images/react-svgrepo-com.svg";
import { ReactComponent as PythonIcon } from "../../assets/images/python.svg";
import { makeStyles } from "@material-ui/core";

const ProgrammingLanguagesList = () => {
  const classes = useStyles();

  return (
    <div>
      <CssIcon className={classes.icon} />
      <GoIcon className={classes.icon} />
      <HtmlIcon className={classes.icon} />
      <CssIcon className={classes.icon} />
      <JavaIcon className={classes.icon} />
      <JsIcon className={classes.icon} />
      <PhpIcon className={classes.icon} />
      <RubyIcon className={classes.icon} />
      <TypescriptIcon className={classes.icon} />
      <ReactIcon className={classes.icon} />
      <PythonIcon className={classes.icon} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    padding: "10px",
    height: "50px",
    width: "50px",
  },
}));


export default ProgrammingLanguagesList;