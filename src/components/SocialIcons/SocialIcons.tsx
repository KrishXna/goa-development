import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/assets/Icons";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <>
      <div className="flex gap-2">
        <Link href="https://www.facebook.com/bsidesgoa" target="_blank">
          <FacebookIcon />
        </Link>
        <Link href="https://twitter.com/bsidesgoa" target="_blank">
          <TwitterIcon />
        </Link>
        <Link href="https://www.instagram.com/bsides_goa/" target="_blank">
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/company/bsidesgoa/"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
      </div>
    </>
  );
};

export default SocialIcons;
