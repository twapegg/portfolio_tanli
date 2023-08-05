import Link from "next/link";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      className="mb-5 min-h-4/6 md:min-h-screen grid md:grid-cols-2 gap-20 md:gap-4"
      id="contact"
    >
      <div>
        <h1 className="text-white text-3xl mb-12 md:text-6xl text-center">
          reach out here
        </h1>
        <div className="mx-auto w-1/2 md:w-2/3 2xl:w-1/2 text-sm  md:text-md lg:text-lg 2xl:text-xl">
          <div className="flex gap-2 md:gap-4 items-center text-purple-500">
            <AiOutlineMail className="text-white flex-shrink-0" />
            <Link href="mailto:johntaltonaga@gmail.com">
              johntaltonaga@gmail.com
            </Link>
          </div>
          <div className="flex gap-2 md:gap-3 items-center text-white">
            <AiFillLinkedin className="text-white flex-shrink-0" />
            <Link
              href="https://linkedin.com/in/stanleyaltonaga"
              target="_blank"
              className="text-purple-500"
            >
              @stanleyaltonaga
            </Link>
            on LinkedIn
          </div>
          <div className="flex gap-2 md:gap-3 items-center text-white">
            <AiFillGithub className="text-white flex-shrink-0" />
            <Link
              href="https://github.com/twapegg"
              target="_blank"
              className="text-purple-500"
            >
              @twapegg
            </Link>
            on GitHub
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white text-3xl mb-12 md:text-6xl text-center">
          or send a quick msg
        </h1>
        <ContactForm />
      </div>
    </section>
  );
}
