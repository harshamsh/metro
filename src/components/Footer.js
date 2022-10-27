import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import MyLogo from "../assets/salusLogo1.png";
import LocationMap from "./LocationMap";

const Footer = () => {
  const Maplink = `https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=103%20cranbrook%20road+(Salus%20Enterprise)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;
  return (
    <CDBFooter className="shadow" style={{ color: "white" }}>
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={MyLogo} width="90px" />
              {/* <span className="ml-3 h5 font-weight-bold">Devwares</span> */}
            </a>
            {/* <p className="my-3" style={{ width: "250px" }}>
              We are creating High Quality Resources and tools to Aid developers
              during the developement of their projects
            </p> */}
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Devwares
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink href="/" style={{ color: "white" }}>
                Resources
              </CDBFooterLink>
              <CDBFooterLink href="/" style={{ color: "white" }}>
                About Us
              </CDBFooterLink>
              <CDBFooterLink href="/" style={{ color: "white" }}>
                Contact
              </CDBFooterLink>
              <CDBFooterLink href="/" style={{ color: "white" }}>
                Blog
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink href="/" style={{ color: "white" }}>
                Support
              </CDBFooterLink>
              <CDBFooterLink href="/" style={{ color: "white" }}>
                Sign Up
              </CDBFooterLink>
              <CDBFooterLink href="/" style={{ color: "white" }}>
                Sign In
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Products
            </p>
            <LocationMap />
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; EquiDev, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;
