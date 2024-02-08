import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsGithub, BsTwitterX} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          <Link
        to='/'
        className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Kiran's
        </span>
        Blog
      </Link>

          </div>
          <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>
              <Footer.Link
              href='/about'
              target='_blank'
              rel='noopener noreferrer'
              >
                Kiran's Blog
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title='Follow Me' />
            <Footer.LinkGroup col>
              <Footer.Link
              href='https://www.instagram.com/_kiran_gtm/'
              target='_blank'
              rel='noopener noreferrer'
              >
                Instagram
              </Footer.Link>
              <Footer.Link
              href='https://twitter.com/kiran_gtm28'
              target='_blank'
              rel='noopener noreferrer'
              >
                Twitter
              </Footer.Link>
              <Footer.Link
              href='https://github.com/keerushar28'
              target='_blank'
              rel='noopener noreferrer'
              >
                Github
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title='Legal' />
            <Footer.LinkGroup col>
              <Footer.Link
              href='#'
              >
                Privacy Policy
              </Footer.Link>
              <Footer.Link href='#'>
                Terms &amp; Conditions
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href='/about' by="Kiran's Blog" year={new Date().getFullYear()}/>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/kiran.gautam.77312477' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/_kiran_gtm/' icon={BsInstagram}/>
            <Footer.Icon href='https://github.com/keerushar28' icon={BsGithub}/>
            <Footer.Icon href='https://twitter.com/kiran_gtm28' icon={BsTwitterX}/>

          </div>

        </div>
      </div>
    </Footer>
  )
}
