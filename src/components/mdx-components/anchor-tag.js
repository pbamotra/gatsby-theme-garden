import React from "react";
import { withPrefix } from "gatsby";
import Tippy from "@tippyjs/react";
import { MDXProvider } from "@mdx-js/react";
import { LinkToStacked } from "react-stacked-pages-hook";

import { basename } from "../../utils/path";
import MDXRenderer from "./mdx-renderer";

import "./anchor-tag.css";

export const AnchorTag = ({
  title,
  href,
  references = [],
  withoutLink,
  withoutPopup,
  ...restProps
}) => {
  if (!href) href = restProps.to;
  if (!href.match(/^http/))
    return noPopups ? (
      <Link {...restProps} to={href} sx={{ variant: 'links.internal' }} />
    ) : (
      <Tippy content={popups[href.replace(/^\//, '')]} placement="right" animation="shift-away">
        <LinkToStacked {...restProps} to={href} sx={{ variant: 'links.internal' }} />
      </Tippy>
    );
  return <a {...restProps} href={href} />;
};
