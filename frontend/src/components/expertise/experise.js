import React from 'react' 
import Image from 'next/image';
import { Button} from 'antd';

const expertise = () => {
  return (
    <div>
    <Image src="" alt="Expertise Image" width={1470} height={650} />
    <h5>IT <br>Consulting</br></h5>
    <div >
        <p>In a world that breathes on technology, businesses can’t afford to sideline its importance in scaling operations and sales. Our expert advice helps you to be at the forefront.</p>
    </div>
       <div> 
            <ul>
                <li>
                UI/UX Design
                </li>
                <li>
                Technical Architecture Design
                </li>
                <li>
                Product Strategy
                </li>
            </ul>
        </div>
    <div>
            <Button type="primary" htmlType="submit">
             Contact us
            </Button>

    </div>
    </div>
  )
}

export default expertise;
