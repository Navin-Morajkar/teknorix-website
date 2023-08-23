import React from 'react' 
import Image from 'next/image';
import Style from "../main_profile_image/main_profile_image.module.css"

const profileimg = () => {
  return (
    <div>
    <Image  className={Style.profileimg} src="/images/image1.jpg" alt="My Image" width={300} height={300} />
    <h5 class="block-title">Bhavit Naik</h5>
    <div class="block-subtitle"><p>Co-Founder &amp; CEO</p>
    </div>
    <div class="block-social">
    <a href="https://www.linkedin.com/in/bhavit/" target="_blank">
    <i class="tek-social-linkedin-fill"></i> <span>View Profile</span>
    </a>
    </div>
    </div>

    
  )
}

export default profileimg;