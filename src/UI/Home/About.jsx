import { Image, User } from '@nextui-org/react';
import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 py-2 container'>
            <div className='flex items-center justify-center'>
                <Image
                    className='w-full'
                    width={500}
                    alt="set-vegetables-white-background"
                    src="https://img.freepik.com/free-vector/set-vegetables-white-background_1308-105493.jpg?t=st=1732252947~exp=1732256547~hmac=49f94a7f4291399c5ed2d5e93e2e149482acf746dd20f174b0ea76dce4e6797a&w=740"
                />
            </div>
            <div className='text-center items-center'>
                <p className='text-small text-neutral-500'>About Us</p>
                <h2 className='text-2xl font-bold text-black'>Passionate About Freshness, Committed to Quality</h2>
                <p className='text-small text-neutral-500 pt-6'>We believe in the power of fresh vegetables to nourish and sustain life. Our mission is to bring the finest, freshest produce to your table while supporting sustainable farming practices. From farm to fork, we take pride in providing a wide range of vibrant, healthy vegetables that inspire creativity in the kitchen and promote a wholesome lifestyle. Join us in celebrating the goodness of nature, one vegetable at a time.</p>
                <User
                    className='pt-7'
                    name="Jane Doe"
                    description="Product Designer"
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    }}
                />
            </div>
        </div>
    );
};

export default About;