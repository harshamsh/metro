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
            <a
              href="/"
              className="d-flex align-items-center p-0 text-dark"
              // style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <img alt="logo" src={MyLogo} width="90px" />
              {/* <span className="ml-3 h5 font-weight-bold">Devwares</span> */}
            </a>

            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="linkedin" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Services
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <div style={{ color: "white" }}>Waiters</div>
              <div style={{ color: "white" }}>Bartenders</div>
              <div style={{ color: "white" }}>Kitchen Porters</div>
              <div style={{ color: "white" }}>House keeping</div>
              <div style={{ color: "white" }}>Receptionists</div>
              <div style={{ color: "white" }}>Room Service</div>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Contact
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <div
                style={{
                  color: "white",
                  textDecoration: "none",

                  cursor: "pointer ",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer ",
                  }}
                  href="tel:02071400161"
                >
                  +44 2071400161
                </a>
              </div>
              <div style={{ color: "white" }}>hr@salus.co.uk</div>
              <div style={{ color: "white", marginTop: 10 }}>Address:</div>
              <div style={{ color: "white" }}></div>
              <div style={{ color: "white" }}>113, Cranbrook Road, IG1 4PU</div>

              <div style={{ color: "white" }}>Freguensen house</div>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Location
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
