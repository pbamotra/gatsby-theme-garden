import React from "react";
import { Link } from "gatsby";

import useSiteMetadata from "../use-site-metadata";
import DarkModeToggle from "./dark-mode-toggle";
import GraphButton from "./graph-button";
import { Search } from "./search";

import "./header.css";

const Header = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <header>
      <Link to="https://www.pankesh.com" sx={{ color: 'text', textDecoration: 'none', fontWeight: 'bold', }}>
        {siteMetadata.title} {home}
      </Link>
      <Link to="/" sx={{ color: 'text', textDecoration: 'underline', marginLeft: '30px' }}>
        {"Notes home"} 
      </Link>
      <div className="controls">
        <Search />
        <GraphButton />
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
