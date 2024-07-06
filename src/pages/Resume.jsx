import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import resume from "../imgs/resume.pdf";
import Socials from "../components/Socials"
import Navigation from '../components/Navigation';
import { resumeContent } from '../utils/NavigationContent';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Resume = () => {
  const docs = [
    { uri: resume }, // Local File
  ];
  return <div className='my-2 rounded-md w-full'>
    <Navigation />

    <motion.div className='flex justify-between items-center'
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
    >

      <p className='text-3xl py-2'
      >resume</p>
      <Link to={'/'} className='mr-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-green hover:bg-green hover:text-gray-50 rounded-md p-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </Link>
    </motion.div>
    <div className='px-2 py-4 rounded-md bg-blackFade my-4'>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}
        className=""
        theme={{
          primary: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#836FFF",
          textPrimary: "#040303",
          textSecondary: "#040303",
          textTertiary: "#040303",
          disableThemeScrollbar: false,
        }} />
    </div>
    <Socials />

  </div>
}

export default Resume