import { Avatar } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLink = () => {
    const category = [
        {
            "img": "https://img.freepik.com/free-photo/healthy-vegetables-old-dark-background_1150-38009.jpg?t=st=1732255956~exp=1732259556~hmac=76e961b31e268a25412f0e2852e7b5a7f632724a14869d56699eacc9db73af5d&w=360",
            "category": "Vegetables",
            "categoryLink": "category/vegetables"
        },
        {
            "img": "https://img.freepik.com/free-vector/tropical-fruits-set-still-life_98292-4045.jpg?t=st=1732256008~exp=1732259608~hmac=0719822bb005ad63e9e20a4f0912793ca78f49f73f607846782d899f274aaa36&w=740",
            "category": "Fruits",
            "categoryLink": "category/fruits"
        },
        {
            "img": "https://img.freepik.com/free-vector/illustration-set-with-different-types-herbs-spices-vector-illustration_1284-12271.jpg?t=st=1732256056~exp=1732259656~hmac=9ddfec76f70abf4adbe72109b6a10ec447c6ccd9f2609baa1d221c81f7cfc32f&w=360",
            "category": "Herbs",
            "categoryLink": "category/herbs"
        },
        {
            "img": "https://img.freepik.com/free-vector/colored-realistic-spices-vegetables-composition-with-fresh-vegetables-flavorings-dishes-vector-illustration_1284-18016.jpg?t=st=1732255895~exp=1732259495~hmac=a4e9559a6efe623fd542160ac4fef3cbd18d2442590a26192e7d285fbbd85b39&w=360",
            "category": "Spices",
            "categoryLink": "category/spices"
        },
        {
            "img": "https://img.freepik.com/free-photo/various-fresh-radishes-white-radish-long-pink-radish-black-radish_114579-47632.jpg?t=st=1732256254~exp=1732259854~hmac=a1ae16ab80be7919656e7b78aea0ac4fdd101d0960518312eccfd1f67fa13fe1&w=740",
            "category": "Root Vegetables",
            "categoryLink": "category/root-vegetables"
        }
    ];


    return (
        <div className='md:flex gap-4  justify-center items-center w-full'>
            {category?.map(item => <div key={item.category} className="relative flex flex-col items-center">
                <Link to={item.categoryLink}>
                    <Avatar
                        className="h-32 w-32"
                        isBordered
                        color="success"
                        src={item.img}
                    />
                </Link>
                <h1 className="absolute text-white font-bold text-xl top-1/2 transform -translate-y-1/2">
                    <Link to={item.categoryLink}>{item.category}
                    </Link> </h1>
            </div>)}

        </div>

    );
};

export default CategoryLink;