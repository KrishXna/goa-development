import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/assets/Icons";
import Link from "next/link";

const SocialIcons = ({ className }: any) => {
  return (
    <>
      <div className={`flex ${className}`}>
        <Link
          href="https://www.facebook.com/bsidesgoa"
          target="_blank"
          className="hover:scale-150 duration-150"
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://twitter.com/bsidesgoa"
          target="_blank"
          className="hover:scale-150 duration-150"
        >
          <TwitterIcon />
        </Link>
        <Link
          href="https://www.instagram.com/bsides_goa/"
          target="_blank"
          className="hover:scale-150 duration-150"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/company/bsidesgoa/"
          target="_blank"
          className="hover:scale-150 duration-150"
        >
          <LinkedinIcon />
        </Link>
      </div>
    </>
  );
};

export default SocialIcons;
