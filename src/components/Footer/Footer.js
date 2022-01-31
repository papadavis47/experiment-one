import React from "react";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className='flex bg-amber-900 h-16 w-full justify-center items-center fixed inset-x-0 bottom-0 mb-0'>
      <div className='flex space-x-4 text-4xl text-amber-100'>
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
    </footer>
  );
};

export default Footer;
