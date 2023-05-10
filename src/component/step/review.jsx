import React from "react";
import Navbar from "../navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer";
import Steppers from "../stepper";

import ManIcon from "@mui/icons-material/Man";
import GirlIcon from "@mui/icons-material/Girl";
import ChildCareIcon from "@mui/icons-material/ChildCare";

import Downloads from "../../asset/downloads.svg";
// import Downloads1 from "../../asset/downloadone.svg";
// import Downloads2 from "../../asset/downloadtwo.svg";
// import Downloads3 from "../../asset/downloadthree.svg";
// import Downloads4 from "../../asset/downloadfour.svg";

function Review() {
  const location = useLocation();
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  // stepper

  return (
    <>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1  md:grid-cols-3">
        <div
          className="-z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed  md:w-[30%] w-[90%] mx-auto "
          // style={{ height: "100vh", overflowY: "scroll" }}
        >
          <Steppers />
        </div>

        <div className="  md:col-span-2 md:ml-[300px]  lg:ml-[400px] xl:ml-[500px] md:w-[80%] mx-auto  w-[90%] mt-10 md:mt-0">
          <p className=" text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-secondary">
            Application No.: 230328006206727
          </p>

          <p className="font-displace font-medium text-[30px] mt-10">
            Application Summary
          </p>

          <p className="text-secondary text-[12px] mt-10">Application Type</p>
          <p className="text-gray-500 text-[20px] mt-5">Individual</p>

          <div className="grid grid-cols-1  lg:grid-cols-3 gap-20 mt-10">
            <div className="w-[50%] md:w-[45%] lg:w-[100%] mx-auto">
              <div className="border-2 border-secondary p-10  rounded-full">
                <ManIcon
                  sx={{
                    fontSize: "100px",
                    color: "#02c39a",
                  }}
                />
              </div>

              <p className="font-displace font-medium text-[30px]  text-gray-400 text-center mt-4">
                Male
              </p>

              <p className="font-displace font-medium text-[34px]  text-black text-center mt-4">
                0
              </p>
            </div>

            <div className="w-[50%] md:w-[45%] lg:w-[100%] mx-auto">
              <div className="border-2 border-secondary p-10  rounded-full">
                <GirlIcon
                  sx={{
                    fontSize: "100px",
                    color: "#02c39a",
                  }}
                />
              </div>

              <p className="font-displace font-medium text-[30px]  text-gray-400 text-center mt-4">
                Female
              </p>

              <p className="font-displace font-medium text-[34px]  text-black text-center mt-4">
                0
              </p>
            </div>

            <div className="w-[50%] md:w-[45%] lg:w-[100%] mx-auto">
              <div className="border-2 border-secondary p-10  rounded-full">
                <ChildCareIcon
                  sx={{
                    fontSize: "100px",
                    color: "#02c39a",
                  }}
                />
              </div>

              <p className="font-displace font-medium text-[30px]  text-gray-400 text-center mt-4">
                Child
              </p>

              <p className="font-displace font-medium text-[34px]  text-black text-center mt-4">
                0
              </p>
            </div>
          </div>

          <p className="font-displace font-medium text-[30px] mt-20">
            Basic Information
          </p>
          <p className=" text-[25px] mt-7 ">
            Are you applying on behalf of someone else ?
          </p>

          <div>
            <p className=" text-[25px] mt-14">Personal Picture</p>

            <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">
                  First Name or Given Name (English)
                </p>
                <p className="text-[20px] mt-3">First Name</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">
                  Father Name or Middle Name (English)
                </p>
                <p className="text-[20px]  mt-3">Father Name</p>
              </div>
            </div>

            <div className="grid grid-cols-1  p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Last Name or Family Name (English)
                </p>
                <p className="text-[20px] mt-3">Last Name</p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5">
              <div>
                <p className="text-[13px] text-secondary">Gender</p>
                <p className="text-[20px] mt-3">Gender</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Marital Status</p>
                <p className="text-[20px]  mt-3">Status</p>
              </div>
            </div>

            <div className="grid grid-cols-2 p-5">
              <div>
                <p className="text-[13px] text-secondary">Profession</p>
                <p className="text-[20px] mt-3">Profession</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Date of Birth</p>
                <p className="text-[20px]  mt-3">DOB</p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5">
              <div>
                <p className="text-[13px] text-secondary">Country of Birth</p>
                <p className="text-[20px] mt-3">Country</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">City of Birth</p>
                <p className="text-[20px]  mt-3">City</p>
              </div>
            </div>

            <div className="grid grid-cols-1  p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Country of Nationality
                </p>
                <p className="text-[20px] mt-3">Nationality</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Current Residence Address</p>

            <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">Country</p>
                <p className="text-[20px] mt-3">Country</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">City</p>
                <p className="text-[20px]  mt-3">City</p>
              </div>
            </div>

            <div className="grid grid-cols-2  p-5 ">
              <div>
                <p className="text-[13px] text-secondary">Zip/Postal Code</p>
                <p className="text-[20px] mt-3">Zip/Postal Code</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Address</p>
                <p className="text-[20px]  mt-3">Address</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">
              Passport Information / Travel Details
            </p>

            <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">Passport Type</p>
                <p className="text-[20px] mt-3">Passport Type</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Passport No.</p>
                <p className="text-[20px]  mt-3">Passport No.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Passport Issue Place (Country or City)
                </p>
                <p className="text-[20px] mt-3">(Country or City)</p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Passport Issue Date
                </p>
                <p className="text-[20px] mt-3">Issue Date</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">Passport No.</p>
                <p className="text-[20px]  mt-3">Passport No.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 p-5 ">
              <div>
                <p className="text-[13px] text-secondary">
                  Expected Date of Arrival
                </p>
                <p className="text-[20px] mt-3"> Date of Arrival</p>
              </div>

              <div>
                <p className="text-[13px] text-secondary">
                  Expected Date of Departure
                </p>
                <p className="text-[20px]  mt-3">Date of Departure</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Additional Purpose of Visit</p>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[20px] ">
                  Event, Family & Relatives, Leisure, Umrah
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Communication Preference </p>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">
                  Do you want to receive the visa on a email other than your
                  original email?
                </p>
                <p className="text-[20px] mt-3">No</p>
                <p className="text-[20px] mt-3">Mail</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-secondary">
                  Do you want to receive the visa on a phone number other than
                  your original phone number?
                </p>
                <p className="text-[20px] mt-3">No</p>
                <p className="text-[20px] mt-3">Number</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">
              Residence Address in Saudi Arabia
            </p>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">City</p>
                <p className="text-[20px] mt-3">City</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-secondary">Address 1</p>
                <p className="text-[20px] mt-3">Address 1</p>
              </div>
            </div>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">Address 2</p>
                <p className="text-[20px] mt-3">Address 2</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-secondary">
                  Name of Person or Hotel
                </p>
                <p className="text-[20px] mt-3">Name</p>
              </div>
            </div>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-secondary">
                  Primary Contact Number
                </p>
                <p className="text-[20px] mt-3">Primary Contact Number</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-secondary">Email</p>
                <p className="text-[20px] mt-3">Email</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Choose your payment method</p>

            <div className="flex">
              <div className="flex">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  style={{ alignSelf: "center" }}
                />
                <img style={{ width: "50%" }} src={Downloads} />
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  style={{ alignSelf: "center" }}
                />
                <img style={{ width: "50%" }} src={Downloads} />
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  style={{ alignSelf: "center" }}
                />
                <img style={{ width: "50%" }} src={Downloads} />
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  style={{ alignSelf: "center" }}
                />
                <img style={{ width: "50%" }} src={Downloads} />
              </div>

              <div className="flex">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  style={{ alignSelf: "center" }}
                />
                <img style={{ width: "50%" }} src={Downloads} />
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold text-[18px]">Visa Fee</p>
            <p className="font-medium text-[18px] bg-gray-100 p-2 text-end">
              1 x 300.00 = 300.00 SAR
            </p>

            <p className="font-bold text-[18px]">Insurance Fee</p>
            <p className="font-medium text-[18px] bg-gray-100 p-2 text-end">
              1 × 156.52 = 156.52 SAR
            </p>

            <p className="font-bold text-[18px]">VAT 15%</p>
            <p className="font-medium text-[18px] bg-gray-100 p-2 text-end">
              1 × 68.48 = 68.48 SAR
            </p>

            <p className="font-bold text-[18px]"> Associated transaction Fee</p>
            <p className="font-medium text-[18px] bg-gray-100 p-2 text-end">
              1 × 9.98 = 9.98 SAR
            </p>

            <p className="font-medium text-[18px]  p-2 text-end">
              Total Amount 534.98 SAR
            </p>
          </div>

          <div className="flex mt-20">
            <input type="checkbox" id="myCheckbox" />
            <p className=" text-[11px] md:text-[15px] ml-2 self-center">
              {" "}
              I HAVE READ AND AGREE ALL THE ABOVE TERMS AND CONDITIONS.
            </p>
          </div>

          <div className="flex justify-center my-20 ">
            <p className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer self-center mr-10">
              EDIT
            </p>
            <p
              onClick={() => handleNavigate("/termss")}
              className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer self-center"
            >
              PREVIOUS
            </p>
            <button
              onClick={() => handleNavigate("/method")}
              className="ml-5 text-secondary text-[17px] border-4 border-secondary w-[30%] p-3 rounded-full  block h-[60px]  self-end"
            >
              Agree
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Review;
