import React from "react";
import { contact } from "../../assets";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container mx-auto px-6 my-12 md:flex justify-between items-center"
    >
      <div className="md:w-1/2">
        <img src={contact} alt="" />
      </div>
      <div className="md:w-1/2">
        <h2 className="md:text-4xl text-3xl font-semibold">
          Contact <span className="text-primary">Me</span>
        </h2>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="message...."
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-white normal-case">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
