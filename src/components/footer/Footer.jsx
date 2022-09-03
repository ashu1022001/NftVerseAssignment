import React from 'react'
import { Link } from 'react-router-dom';
import { faCopyright} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='flex flex-col gap-4 text-slate-400 self-stretch px-4 items-center'>

    <div className='flex flex-col text-xs gap-2'>
    <a href='#'><h4>About Smartup</h4></a>
    <a href='#'>Send feedback</a>
    <a href='#'>Terms of use</a>
    <a href='#'>Privacy policy</a>

    
    </div>
    <div className='flex gap-5 text-xs'>

   <a href='#'><FontAwesomeIcon icon={faLinkedin}/></a>
   <a href='#'><FontAwesomeIcon icon={faFacebook}/></a> 
   <a href='#'><FontAwesomeIcon icon={faTwitter}/></a> 
   <a href='#'><FontAwesomeIcon icon={faInstagram}/></a> 

    
    
    
    
    </div>
    <div> <span className='text-xs'> <FontAwesomeIcon icon={faCopyright} /> 2018 smartup </span></div>
    </div>
  )
}

export default Footer