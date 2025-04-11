"use client"
import React, { useEffect, useState } from "react";
import { fetchDropdown, fetchHeader, fetchMenudropdown } from "../../strapiendpoints";
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { domain } from "@/app/config/config";
import { MdMenu, MdClose } from "react-icons/md";



export default function Header() {
    const [headerData, setHeaderData] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [dropdownData , setDropdownData] = useState(null);
    // const [MenudropdownData , setMenudropdownData] = useState(null);
    // const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    // const [showMenuDropdown, setShowMenuDropdown] = useState(false);


    useEffect(() => {
        if (isMenuOpen) {
          const closeMenu = (event) => {
            const navElement = document.getElementById("navbar");
            if (navElement && !navElement.contains(event.target)) {
              setIsMenuOpen(false);
            }
          };
          document.body.addEventListener("click", closeMenu);
          return () => document.body.removeEventListener("click", closeMenu);
        }
      }, [isMenuOpen]);

      
    useEffect(() => {
        async function getHeaderData() {
            const data = await fetchHeader();
            // console.log("data",data)
            setHeaderData(data);
        }
        getHeaderData();
        // console.log(getHeaderData());
    }, []);

    // useEffect(() => {
    //     async function getDropdownData(){
    //         const data = await fetchDropdown();
    //         setDropdownData(data.data[0]);
    //     }
    //     getDropdownData();
    // },[])

    // useEffect(() => {
    //     async function getMenudropdownData(){
    //         const data = await fetchMenudropdown();
    //         setMenudropdownData(data.data[0]);
    //     }
    //     getMenudropdownData();
    // },[])

    const headerDetails = headerData?.data?.[0];
    if (!headerData) {
        return <h1>Loading...</h1>;
    }

    const headerAttributes = headerData?.data?.[0] || {};
    // console.log("Logo URL:", headerAttributes.brandLogo);

    return (
        <header id="navbar" className=" flex  bg-white items-center p-2 justify-between px-10 lg:px-20 py-5 shadow-md w-full top-0 fixed z-50">
            
            <img src={`${domain.APIURL}${headerAttributes.brandLogo.url}`} alt="Brand Logo" width="100" className="relative" />

            <div>
                <ul className={`flex ${isMenuOpen ? "flex flex-col  xl:flex-row  absolute top-20 left-0 pl-10 bg-white w-full" : "hidden  xl:flex"}`}>
                    <li className="py-2 px-3">Home</li>
                    <li className="py-2 px-3 flex">Menu
                    <span className="py-2 pl-1" dangerouslySetInnerHTML={{__html: headerDetails.dropdwnIcon}}></span>
                    </li>
                    <li className="py-2 px-3 flex">Services
                        <span dangerouslySetInnerHTML={{__html:headerDetails.dropdwnIcon}} className="py-2 pl-1"></span>
                    </li>
                        {/* <li className="relative py-2 px-3 flex items-center"
                            onMouseOver={() => setShowMenuDropdown(true)}
                            onMouseLeave={() => setShowMenuDropdown(false)}>
                            Menu
                            <span className="py-2 pl-1" dangerouslySetInnerHTML={{ __html: headerDetails.dropdwnIcon }}></span>
                            
                            {showMenuDropdown && dropdownData?.Services?.length > 0 && (
                                <ul className="absolute bg-white shadow-md p-2 top-full left-0 z-50 min-w-[150px]">
                                {MenudropdownData.Breakfastmenu.map((item) => (
                                    <li key={item.id} className="p-2 hover:bg-gray-100 hover:cursor-pointer">
                                    {item.title}
                                    </li>
                                ))}
                                </ul>
                            )}
                            </li> */}

                    
                        {/* <li className="relative py-2 px-3 flex items-center"
                            onMouseOver={() => setShowServicesDropdown(true)}
                            onMouseLeave={() => setShowServicesDropdown(false)}>
                            Services
                            <span className="py-2 pl-1" dangerouslySetInnerHTML={{ __html: headerDetails.dropdwnIcon }}></span>
                            
                            {showServicesDropdown && dropdownData?.Services?.length > 0 && (
                                <ul className="absolute bg-white shadow-md p-2 top-full left-0 z-50 min-w-[150px]">
                                {dropdownData.Services.map((item) => (
                                    <li key={item.id} className="p-2 hover:bg-gray-100 hover:cursor-pointer">
                                    {item.Title}
                                    </li>
                                ))}
                                </ul>
                            )}
                            </li> */}

                    
                    <li className="py-2 px-3">Offers</li>
                </ul>
            </div>

            <div className="flex gap-4">
                <div dangerouslySetInnerHTML={{ __html: headerDetails.searchIcon }} className="px-1 py-2 sm:p-2"/>

                <Stack spacing={1} direction="row">
                    <Badge color="success" overlap="circular" badgeContent="8">
                        {<div dangerouslySetInnerHTML={{ __html: headerDetails.bagIcon }} className="px-1 py-2 sm:p-2" /> }
                    </Badge>
                </Stack>


                <div className="flex bg-[#39DB4A] rounded-full sm:px-5 px-2 py-2">
                    <div dangerouslySetInnerHTML={{ __html: headerDetails.phnIcon }} />
                    <p className="text-white px-2">Contact</p>
                </div>

                <button onClick={(e) => {setIsMenuOpen(!isMenuOpen);}}className="right-4 top-4 xl:hidden text-3xl cursor-pointerm">
                    {isMenuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>
        </header>
    );
}
