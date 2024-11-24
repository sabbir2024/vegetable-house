import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { FaRightLong } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";


const ItemCard = ({ product }) => {
    const { rating } = product;


    const thirdExample = {
        size: 10,
        count: 5,
        isHalf: false,
        value: rating,
        color: "blue",
        activeColor: "red",
        onChange: newValue => {
            console.log(`Example 3: new value is ${newValue}`);
        }
    };

    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none w-full"
        >
            <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src={product?.category_img}
                width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div>
                    <ReactStars {...thirdExample} />
                    <p className="text-tiny text-black">{product?.product_name}</p>
                </div>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                    Add to Card <FaRightLong className="animate-bounce" />
                </Button>
            </CardFooter>
        </Card>
    );
};


export default ItemCard;