import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillMail, AiFillHtml5} from 'react-icons/ai';
import Image from "next/legacy/image";
import pfp from '../public/newpfp.png';
import tools from '../public/tools.png';
import languages from '../public/languages.png';
import skills from '../public/skills.png';
import {useState} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jamie&apos;s Portfolio</title>
      </Head>
      <main className="bg-white dark:bg-slate-800 px-10 md:px-20 lg:px-40 text-gray-800 dark:text-white font-sans">
        <section id="top">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-serif text-slate-500 ">Jamie Lee</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-slate-500 font-medium md:text-6xl">Jamie Lee</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Engineering Student</h3>
            <p className="text-md py-5 leading-8  md:text-xl max-w-xl mx-auto">Hey! I&apos;m a software engineering student at the University of Auckland. I&apos;m currently in my second year of study and I&apos;m looking for a summer internship for 2023.</p>
          </div>
          <div className="relative mx-auto mb-10 w-80 h-80 md:height-96 md:width-96">
            <Image src={pfp} className="rounded-full" layout="fill" objectFit="cover" alt=""/>
          </div>
          <div className="text-center my-5">
            <a className="w-30 px-4 hover:bg-slate-400 bg-transparent border-2 hover:border-slate-400 text-slate-400 hover:text-white py-2 rounded-md" href="">Download CV</a>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 mb-20">
            <a href="mailto:jamiechawin@gmail.com" className=" hover:text-gray-900 dark:hover:text-white"><AiFillMail/></a>
            <a href="https://github.com/eejl773" className=" hover:text-gray-900 dark:hover:text-white"><AiFillGithub/></a>
            <a href="https://nz.linkedin.com/in/jamie-lee-24b161197" className=" hover:text-gray-900 dark:hover:text-white"><AiFillLinkedin/></a>
          </div>
        </section>
        <section id="about-me">
          <div className="text-center">
            <h3 className="text-3xl py-1">About me</h3>
          </div>
          <div className="text-center mb-10">
              <p className="text-md py-5 leading-8  md:text-l max-w-xl mx-auto">Hey there! Thanks for visiting my website!</p> 
              <p className="text-md py-5 leading-8  md:text-l max-w-5xl mx-auto">I am a second year software engineering student at the University of Auckland. I am passionate about problem solving 
                and learning new things, with a particular interest in all things STEM. I was introduced to programming for the first time in my 
                first year of uni, and I&apos;ve quickly come to appreciate the dichotomy of suffering and satisfaction that comes with it. Currently 
                I am most interested in front-end development and machine learning, but do recognise the importance of diversifying my skillset.</p>
                <p className="text-md py-5 leading-8  md:text-l max-w-5xl mx-auto">Interests and passions that have continued with me since childhood include origami, playing cards, and astronomy.
                Origami fascinates me with how you can essentially create anything out of just a blank piece of paper. A deck of cards is so versatile - you can play 
                games with it, perform magic or cardistry, or even do math. And finally, my interest with space extends from my interest with all things subliminal - 
                I have a profound, existential desire to discover what&apos;s out there, and what we are capable of.</p>
          </div>
        </section>
        <section id="skills">
          <div className="text-center">
            <h3 className="text-3xl py-1">Skills</h3>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/4 flex-1 bg-slate-50 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-500">
              <Image src={languages} width={100} height={100} className="mx-auto" alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Languages</h3>
              <div className="py-5 grid grid-cols-2">
                <p className="py-1">Javascript</p>
                <p className=" py-1">C</p>
                <p className=" py-1">HTML</p>
                <p className=" py-1">Java</p>
                <p className=" py-1">CSS</p>
                <p className=" py-1">MATLAB</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/4 flex-1 bg-slate-50 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-500">
              <Image src={tools} width={100} height={100} className="mx-auto" alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Tools and Frameworks</h3>
              <p className=" py-1">React</p>
              <p className=" py-1">Tailwind CSS</p>
              <p className=" py-1">Git</p>
              <p className=" py-1">GitHub</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/4 flex-1 bg-slate-50 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-500">
              <Image src={skills} width={100} height={100} className="mx-auto" alt=""/>
              <h3 className="text-lg font-medium pt-8 pb-2">Soft Skills</h3>
              <p className=" py-1">Communication</p>
              <p className=" py-1">Creativity</p>
              <p className=" py-1">Problem Solving</p>
              <p className=" py-1">Teamwork</p>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="text-center">
            <h3 className="text-3xl py-4">Projects</h3>
            <p className="text-md py2 leadin-8">These are my current &apos;completed&apos; projects! They can all be found on my <span><a href="https://github.com/eejl773" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">GitHub</a></span>.</p>
            <p className="text-md py2 leadin-8">More will be added in due course.</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/3 flex-1 text-center lg:mb-40">
            <h4 className="text-2xl py-4">Portfolio Website</h4>
              <embed src="https://eejl773.github.io/21-Card-Trick/" className="rounded-lg object-cover lg:aspect-video aspect-[4/3] mb-10" width={'100%'} height={'100%'} layout="responsive"/>
              <a className="mx-5 w-30 px-4 hover:bg-slate-400 bg-transparent border-2 hover:border-slate-400 text-slate-400 hover:text-white py-2 rounded-md" >Link to GitHub Repository</a>
              <a className="mx-5 w-30 px-4 hover:bg-slate-400 bg-transparent border-2 hover:border-slate-400 text-slate-400 hover:text-white py-2 rounded-md" href ="#top">Link to website</a>
            </div>
            <div className="basis-1/3 flex-1 text-center lg:mb-40">
              <h4 className="text-2xl py-4">21 Card Trick</h4>
              <embed src="https://eejl773.github.io/21-Card-Trick/" className="rounded-lg object-cover lg:aspect-video aspect-[4/3] mb-10" width={'100%'} height={'100%'} layout="responsive"/>
              <a className="mx-5 w-30 px-4 hover:bg-slate-400 bg-transparent border-2 hover:border-slate-400 text-slate-400 hover:text-white py-2 rounded-md" >Link to GitHub Repository</a>
              <a className="mx-5 w-30 px-4 hover:bg-slate-400 bg-transparent border-2 hover:border-slate-400 text-slate-400 hover:text-white py-2 rounded-md" href ="https://eejl773.github.io/21-Card-Trick/">Link to website</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-400 bg-opacity-50 dark:bg-gray-900">
        <div className="w--full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Jamie Lee
            </p>
            <ul className="flex flex-wrap items-center sm:justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="#about-me" className="mr-4 hover:underline md:mr-6 ">About Me</a>
              </li>
              <li>
                  <a href="#skills" className="mr-4 hover:underline md:mr-6">Skills</a>
              </li>
              <li>
                  <a href="#projects" className="mr-4 hover:underline md:mr-6">Projects</a>
              </li>
              <li>
                  <a href="#top" className="hover:underline">Back to top</a>
              </li>
            </ul>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="mailto:jamiechawin@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <AiFillMail/>
                </a>
                <a href="https://github.com/eejl773" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <AiFillGithub/>
                </a>
                <a href="https://nz.linkedin.com/in/jamie-lee-24b161197" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <AiFillLinkedin/>
                </a>
            </div>
        </div>
    </footer>
    </div>
  )
}
