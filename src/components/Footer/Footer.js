import React from "react";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className='pt-4 flex flex-col bg-amber-900 w-full justify-center items-center inset-x-0 bottom-0 mb-0 text-amber-100'>
      <div className='flex space-x-4 text-4xl '>
        <a
          href='https://www.github.com/papadavis47/experiment-one'
          target='_blank'
          rel='noreferrer'
        >
          <div>
            <VscGithubInverted />
          </div>
        </a>
        <a href='https://www.twitter.com/papadavis47' target='_blank' rel='noreferrer'>
          <div>
            <VscTwitter />
          </div>
        </a>
      </div>
      <h2 className='my-2'>
        Made with &hearts; and <code>create-react-app</code> by John William Davis
      </h2>
    </footer>
  );
};

export default Footer;
