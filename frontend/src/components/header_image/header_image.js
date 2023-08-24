import React from 'react' 
import Image from 'next/image';

const header_image = () => {
  return (
    <div>
    <Image src="/images/image1.jpg" alt="My Image" width={1470} height={650} />
    </div>
  )
}

export default header_image
