import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import resume from "../imgs/resume.pdf";
import Socials from "../components/Socials"
import Navigation from '../components/Navigation';
import { resumeContent } from '../utils/NavigationContent';
import { motion } from 'framer-motion';
const Resume = () => {
  const docs = [
    { uri: resume }, // Local File
  ];
  return <div className='my-4 rounded-md w-full'>
    <Navigation heading={resumeContent.heading} description={resumeContent.description} />

    <motion.p className='text-3xl mt-4 py-4'
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
    >resume</motion.p>
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