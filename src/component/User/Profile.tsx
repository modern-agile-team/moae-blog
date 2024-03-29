import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import Dropdown from "./Dropdown";

interface Props {
  img?: string | null;
}

const Profile = ({ img }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const closeDropdown = (e: any) => {
    if (isDropdownOpen && (!avatarRef.current || !avatarRef.current?.contains(e.target))) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, [isDropdownOpen]);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [router.pathname]);

  return (
    <Wrapper ref={avatarRef}>
      <Avatar onClick={toggleDropdown} img={img} />
      {isDropdownOpen && <Dropdown />}
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  position: relative;
  border: 1px solid #fff;
  border-radius: 50%;
`;
