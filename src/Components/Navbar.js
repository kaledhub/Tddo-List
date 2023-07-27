import "../Styles/navbar.css";

// IMPORT CHAKRA UI
import { Text, Button, Box } from "@chakra-ui/react";

// IMPORT CHAKRA ICONS
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// HOOKS
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("nav_list");

  const navToggle = () => {
    active === "nav_list"
      ? setActive("nav_list nav_active")
      : setActive("nav_list");

    setIsOpen(!isOpen);
  };
  return (
    <>
      <Box
        className="header"
        h={"16"}
        bg={"whiteAlpha.900"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"row-reverse"}
      >
        <Text></Text>
        <Box
          className={active}
          display={"flex"}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          position={{ base: "fixed", md: "unset", lg: "unset" }}
          top={{ base: "16", md: "0", lg: "0" }}
          right={{ base: "0", md: "0", lg: "0" }}
          height={{ base: "100vh", md: "0", lg: "0" }}
          w={{ base: "sm", md: "0", lg: "0" }}
          bg={{
            base: "whiteAlpha.900",
            md: "whiteAlpha.900",
            lg: "whiteAlpha.900",
          }}
          gap={5}
          fontWeight={"bold"}
        >
          <Link to="/">الرئيسية</Link>
          <Link to="/#">التقويم</Link>
          <Link to="/alerts">التذكيرات</Link>
          <Button
            visibility={{ base: "", md: "hidden", lg: "hidden" }}
            className="nav-btn nav-close-btn"
            // onClick={showNavbar}
          >
            {/* <CloseIcon /> */}
          </Button>
        </Box>
        <Button
          bg={"whiteAlpha.900"}
          _hover={{ bg: "whiteAlpha.900" }}
          onClick={navToggle}
          // bg={"transparent"}
          visibility={{ base: "visible", md: "hidden", lg: "hidden" }}
          className="nav-btn"
          // onClick={showNavbar}
        >
          {/* <HamburgerIcon /> */}
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Button>
      </Box>
    </>
  );
}

export default Navbar;
