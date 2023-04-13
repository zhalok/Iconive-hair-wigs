/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <>
      <div className="bg-pink">
        <div className="container d-flex flex-column py-5 justify-between ">
          <div className="d-flex justify-content-between">
            {/* <div className="flex xl:flex-col xs:flex-row">
          
            <div className="flex gap-1 my-8">
              <button className="w-10 h-10 bg-[#253451] rounded-[16px]"><a hrf="" className="">
                <Image src={insta} className="mx-auto my-auto"/>
                </a></button>
                <button className="w-10 h-10 bg-[#253451] rounded-[16px]"><a hrf="" className="">
                <Image src={viver} className="mx-auto my-auto"/>
                </a></button>
                <button className="w-10 h-10 bg-[#253451] rounded-[16px]"><a hrf="" className="">
                <Image src={youtube} className="mx-auto my-auto"/>
                </a></button>
                <button className="w-10 h-10 bg-[#253451] rounded-[16px]"><a hrf="" className="">
                <Image src={linkedin} className="mx-auto my-auto"/>
                </a></button>
            </div>
            <div className="flex gap-2 h-[20px] xs:my-auto xs:ml-4">
              <Image src={global} className="my-auto"/> 
              <p className="text-[14px]">English</p>
              <Image src={downarrow} className=""/> 

            </div>
            </div> */}

            <div className="text-dark text-start px-5">
              <h5 className="borderB pb-3 fw-bold">Help and Supoort</h5>
              <p className="">Help Us</p>
              <p className="">Contact us</p>
              <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
                Payment method
              </p>
            </div>

            <div className="text-dark text-start px-5">
              <h5 className="borderB pb-3 fw-bold">Our Policy</h5>

              <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
                Privacy Policy
              </p>
              <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
                Shipping Policy
              </p>
              <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
                Terms and Service
              </p>
              <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
                Refund Policy
              </p>
            </div>
            <div className="text-dark text-start px-5 ">
              <h5 className="borderB pb-3 fw-bold">Contact Us</h5>

              <p className="mt-2">Email : Supoort.iconvie@gmail.com</p>
              <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
                WhatsApp: +8618561738950
              </p>
            </div>
          </div>
          {/* <div className="text-white  border-top">
          <div className="container d-flex py-3">
            <p className="me-auto">
              © Copyright 2023, All Rights Reserved by FLAIR
            </p>
            <p className="ml-auto">
              Privacy Policy <span className="mx-3"></span> Terms & Conditions
            </p>
          </div>
        </div> */}
        </div>
      </div>

      <div className="bg-dark text-light pt-5 pb-4">
        <h2 className="my-3">Want $ 15 off ?</h2>
        <p>Join us and get the exclusive sales, product launches, wig tips & more directly delivered to your inbox</p>
        <form class="d-flex w-50 mx-auto bg-outline-white">
          <input
            class="form-control rounded-0 me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-dark px-5" type="submit">
            Subscribe
          </button>
        </form>

        <div>
            <div className="mt-4 ">
            <a className="mx-1" href="https://www.facebook.com/profile.php?id=100087712010768"><button className="btn btn-outline-light p-2 rounded-circle"><FacebookIcon/></button></a>
            <a className="mx-1" href="https://wa.me/message/PIZLMGBXCLUUN1"><button className="btn btn-outline-light p-2 rounded-circle"><WhatsAppIcon/></button></a>
            <a className="mx-1" href="https://www.instagram.com/invites/contact/?i=5jfrooti9ghz&utm_content=qa5m1k1"><button className="btn btn-outline-light p-2 rounded-circle"><InstagramIcon/></button></a>
          
            <a className="mx-1" href="https://twitter.com/Iconivehairwigs?t=NKMVGHrLlnyuKu5bZkZ3MA&s=35"><button className="btn btn-outline-light p-2 rounded-circle"><TwitterIcon/></button></a>
            </div>
        </div>

        
      </div>

      <div className="bg-black text-light">
      <p className=" border-dark py-3 m-0"> <small className="text-secondary">All Rights Reserved by <span className="text-light"> Iconve Hair Wigs</span></small></p>
      </div>
    </>
  );
}
