import Navbar from "../component/navbar";
import { useLocation,} from "react-router-dom";
import Footer from "../component/footer";
import Steppers from "../component/stepper";
import React, { useState } from "react";
import jsPDF from 'jspdf';

function PerfonalInfo() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [countrynationality, setCountrynationality] = useState ('');
  const [firstName, setFirstName] = useState('');
  const [father, setFather] = useState ('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState ('');
  const [marital, setMarital] = useState ('');
  const [dbirth, setDbirth] = useState ('');
  const [cbirth, setCbirth] = useState ('');
  const [ctbirth, setCtbirth] = useState ('');
  const [profession, setProfession] = useState ('');
  const [country, setCountry] = useState ('');
  const [city, setCity] = useState ('');
  const [zipcode, setZipcode] = useState ('');
  const [address, setAddress] = useState ('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if input data is valid
    if (!countrynationality || !firstName || !father || !lastName || !gender || !marital || !dbirth || !cbirth || !ctbirth || !profession || !country || !city || !zipcode || !address) {
      console.error('Please fill in all the fields');
      return;
    }

    // Store input data in local storage
    const inputData = { countrynationality, firstName, father, lastName, gender, marital, dbirth, cbirth, ctbirth, profession, country, city, zipcode, address };
    localStorage.setItem('inputData', JSON.stringify(inputData));

    try {
      // Send POST request to API
      const response = await postDataToAPI(inputData);
      if (response.ok) {
        const confirmation = window.confirm("Are you sure you want to submit this form?");
        if (confirmation) {
          // Redirect to selected coin's page
          window.location.href = '/coins';
          // Generate and download PDF file
          generatePDF(inputData);
        }
      } else {
        console.error('Server responded with an error:', response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postDataToAPI = async (inputData) => {
    const response = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    return response;
  };

  const handleCountrynationalityChange = (event) => {
    setCountrynationality(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleFatherChange = (event) => {
    setFather(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleMaritalChange = (event) => {
    setMarital(event.target.value);
  }

  const handleDbirth = (event) => {
    setDbirth(event.target.value);
  }
  const handleCbirth = (event) => {
    setCbirth(event.target.value);
  }

  const handleCtbirth = (event) => {
    setCtbirth(event.target.value);
  }

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const generatePDF = (inputData) => {
    const doc = new jsPDF();
  
    // Add content to PDF file
    doc.text(`First Name: ${inputData.firstName}`, 10, 10);
    doc.text(`Last Name: ${inputData.lastName}`, 10, 20);
    doc.text(`Email: ${inputData.email}`, 10, 30);
    doc.text(`Password: ${inputData.password}`, 10, 40);
    doc.text(`Confirm Password: ${inputData.confirmPassword}`, 10, 50);
  
    // Download PDF file
    doc.save('form-data.pdf');
  };

  return (
    <>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1  md:grid-cols-3">
        <div
          className="md:block lg:block hidden -z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed md:w-[25%] w-[90%] mx-auto "
          // style={{ overflowY: "scroll" }}
        >
          <Steppers />
        </div>

        <form className="md:col-span-2 md:ml-[300px] lg:ml-[400px] xl:ml-[500px] md:w-[80%] mx-auto w-[90%] ">
          <div className="mt-20">
            <p className=" text-[20px] font-semibold">Personal Picture</p>
            <p className="text-gray-400 text-sm py-4 md:w-1/2 md:mt-5">
              Please upload image of dimension 200 x 200 px Personal Image Size
              must be from 5 to 100 Kb Allowed picture file types are .jpg,
              .jpeg, .png, .gif, .bmp Photo Specifications
            </p>
            <label className="cool-links " htmlFor="file-upload">
              UPLOAD FILE*
            </label>
            <input id="file-upload" type="file" />
          </div>
          <div className="mt-10 ">
            <label className="text-secondary font-medium ">
              Country of Nationality*
            </label>
            <br />
            <select className="border-[1px]  border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400 ">
              <option>Andorra</option>
              <option>What is the name of your best friend</option>
              <option>What is the name of your first pet</option>
              <option>What is your favorite color</option>
            </select>
          </div>
          <div className="mt-10">
            <label className="text-secondary font-medium ">
              First Name or Given Name (English)*
            </label>
            <br />
            <input
              type="text"
              placeholder="First Name or Given Name (English)"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
            <p className="text-[12px] mt-2 text-gray-400">
              Please make sure to enter the names exactly mentioned on your
              passport in English only
            </p>
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">
              Father Name or Middle Name (English){" "}
              <span className="text-red-500">
                'Optional,if available in passport'
              </span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Father Name or Middle Name (English)"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">
              Last Name or Family Name (English)*
            </label>
            <br />
            <input
              type="text"
              placeholder="Last Name or Family Name (English)*"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
            <p className="text-[12px] mt-2 text-gray-400">
              Please make sure to enter the names exactly mentioned on your
              passport in English only
            </p>
          </div>

          <div className="mt-10 ">
            <label className="text-secondary font-medium ">Gender*</label>

            <br />
            <select className="border-[1px]  border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400 ">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="mt-10 ">
            <label className="text-secondary font-medium ">
              Marital Status*
            </label>

            <br />
            <select className="border-[1px]  border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400 ">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">
              Date of Birth*
            </label>
            <br />
            <input
              type="date"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
            <p className="text-[12px] mt-2 text-gray-400">
              Click on the title of the popup window to scroll multiple
              months/years at a time
            </p>
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">
              Country of Birth*
            </label>
            <br />
            <input
              type="text"
              placeholder="Country of Birth*"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">
              City of Birth*
            </label>
            <br />
            <input
              type="text"
              placeholder="City of Birth*"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">Profession*</label>
            <br />
            <input
              type="text"
              placeholder="Profession"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
            <p className="text-[12px] mt-2 text-gray-400">
              In case of minor please write "None"
            </p>
          </div>

          <div className="mt-20">
            <p className=" text-[30px] font-displace">
              Current Residence Address
            </p>
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">Country*</label>
            <br />
            <input
              type="text"
              placeholder="Country"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">City*</label>
            <br />
            <input
              type="text"
              placeholder="City"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">
              Zip/Postal Code*
            </label>
            <br />
            <input
              type="text"
              placeholder="Zip/Postal Code"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">Address*</label>
            <br />
            <input
              type="text"
              placeholder="Address"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="flex justify-center my-20">
            <p className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer self-center">
              PREVIOUS
            </p>
            <button
              className="ml-5 text-secondary text-[17px] border-4 border-secondary w-[30%] p-3 rounded-full  block h-[60px]  self-end"
            >
              NEXT
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default PerfonalInfo;
