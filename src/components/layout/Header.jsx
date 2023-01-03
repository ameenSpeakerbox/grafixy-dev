import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../ui/Button";
import { Link } from "gatsby";

const navLink = [
  {
    id: 1,
    name: "why grafixy?",
  },
  {
    id: 1,
    name: "how it's works",
  },
  {
    id: 1,
    name: "pricing",
  },
  {
    id: 1,
    name: "our work",
  },
];

const Header = () => {
  return (
    <nav className="h-[67px] flex items-center mt-[90px] overflow-hidden">
      <div className="flex items-center justify-between w-full">
        <StaticImage
          src="../images/logo.png"
          alt="logo"
          layout="fixed"
          loading="lazy"
        />
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-[10px] mr-[35px]">
            {navLink.map((nav) => (
              <Link key={nav.id} to="" className="text-white font-bold text-lg">
                {nav.name}
              </Link>
            ))}
          </div>
          <Button
            className="h-[67px] bg-[#19013F] mr-[10px] drop-shadow-lg"
            name="CLIENT LOGIN"
          />
          <Button
            className="h-[67px] bg-white text-[#19013F] drop-shadow-lg"
            name="SCHEDULE A DEMO"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
