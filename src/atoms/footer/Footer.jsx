import React from 'react'
import { Link } from 'react-router-dom';
import { faCopyright ,faLinkin,faInsta} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='flex flex-col gap-4 text-slate-400'>

    <div className='flex flex-col'>
    <span><h4>About Smartup</h4></span>
    <span>Send feedback</span>
    <span>Terms of use</span>
    <span>Privacy policy</span>

    
    </div>
    <div className='flex gap-5'>
    <FontAwesomeIcon icon={faLinkedin}/>
    <FontAwesomeIcon icon={faFacebook}/>
    <FontAwesomeIcon icon={faTwitter}/>
    <FontAwesomeIcon icon={faInstagram}/>
    
    </div>
    <div> <span> <FontAwesomeIcon icon={faCopyright} /> 2018 smartup </span></div>
    </div>
  )
}

export default Footer