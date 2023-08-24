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
    
    </div>
    </div>

    
  )
}

export default profileimg;