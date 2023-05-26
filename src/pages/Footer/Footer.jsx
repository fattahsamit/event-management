import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content flex flex-col justify-around min-h-[50vh]">
      <section className="footer container mx-auto m-10">
        <div>
          <span className="footer-title text-xl">Event Management</span>
          <p className="w-1/2">
            Streamline and simplify the process of planning and organizing
            events
          </p>
          {/* <img src="assets/Icons/social.png" alt="" /> */}
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Latest Offers</a>
          <a className="link link-hover">Bookings</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Report</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">Dhaka , Bangladesh</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </div>
      </section>

      <section className="container mx-auto text-center my-10">
        <p>Copyright &copy; 2023 - All right reserved by fattahsamit</p>
        <p>
          Powered by <strong>Event Management</strong>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
