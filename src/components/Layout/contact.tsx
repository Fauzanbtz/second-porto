import React, { useState } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wuoz36o",
        "template_0bzg2rp",
        {
          from_name: name,
          from_email: email,
          phone,
          message,
        },
        "qXu-yQneF-Rffto8o"
      )
      .then(() => {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        setError("Failed to send the message. Please try again later.");
        console.error("Email send error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen mt-20"
      id="contact">
      <div className="bg-color w-full p-10 rounded-2xl text-color-light">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-color-light gap-20 flex flex-col">
            <div className="text-center md:text-start">
              <h1 className="text-2xl font-semibold">Get In Touch</h1>
              <p>let's make your project become a reality</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-start">
              <div className="flex flex-col ">
                <h1 className="text-2xl font-semibold">lets connect</h1>
                <h2>send me an email</h2>
                <p>m.fauzan.hb@gmail.com</p>
              </div>
              <div className="flex flex-col ">
                <h2 className="text-2xl">follow me</h2>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href="https://github.com/Fauzanbtz"
                    className="hover:bg-[#9897a4] hover:text-black rounded-md transition duration-300">
                    <Github />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/fauzan_btz/?hl=id"
                    className="hover:bg-[#9897a4] hover:text-black rounded-md transition duration-300">
                    <Instagram />
                  </a>
                  <a
                    href="https://discordapp.com/users/491792226351841282"
                    className="hover:bg-[#9897a4] text-2xl hover:text-black rounded-md transition duration-300"
                    target="_blank">
                    <FaDiscord />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/muhammad-fauzan-16279a274/"
                    className="hover:bg-[#9897a4] hover:text-black rounded-md transition duration-300">
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-20 md:p-0 md:w-1/2">
            <h1 className="text-2xl font-semibold text-center">Send me a message</h1>
            {success && (
              <p className="bg-green-500 text-white p-2 rounded-xl text-center ">
                Your message was sent successfully!
              </p>
            )}
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <form onSubmit={sendEmail} className="flex flex-col text-color">
                <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-[1px] border-gray-400 focus:outline-none focus:ring-black focus:border-black w-full p-2 py-6 rounded-t-lg mt-5"
                  required
                />
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[1px] border-gray-400 focus:outline-none focus:ring-black focus:border-black w-full p-2 py-6"
                  required
                />
                <input
                  type="text"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-[1px] border-gray-400 focus:outline-none focus:ring-black focus:border-black w-full p-2 py-6"
                />
                <textarea
                  name="message"
                  placeholder="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-[1px] border-gray-400 text-color focus:outline-none focus:ring-black focus:border-black w-full p-2 py-6 rounded-b-lg"
                  required></textarea>
                <input
                  type="submit"
                  value={loading ? "Sending..." : "Send Message"}
                  className={`btn border-none hover:bg-[#9897a4] focus:outline-none focus:ring-black focus:border-black text-color-dark bg-color-light btn-primary mt-5 ${
                    loading ? "bg-gray-400" : ""
                  }`}
                  disabled={loading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
