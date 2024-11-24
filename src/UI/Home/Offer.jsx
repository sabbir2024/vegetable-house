import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { FaRightLong } from "react-icons/fa6";

const Offer = () => {
    return (
        <div className="w-full mx-auto container grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
            {/* Card 1 */}
            <Card className="h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">My Offer's</p>
                    <h4 className="text-white font-medium text-7xl">Shop with up to 60% Off</h4>
                    <Button color="success" endContent={<FaRightLong />}>
                        Show more
                    </Button>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://img.freepik.com/free-photo/row-green-plant-leaves_23-2147931875.jpg?t=st=1732457161~exp=1732460761~hmac=791ab782ea5dc15551832d07e862f9600f4eefdbf3b67903953e4576006f8f7e&w=740"
                />
            </Card>

            {/* Card 2 */}
            <Card className="h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">My Offer's</p>
                    <h4 className="text-white font-medium text-7xl">Shop with up to 50% Off</h4>
                    <Button color="success" endContent={<FaRightLong />}>
                        Show more
                    </Button>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://img.freepik.com/free-photo/row-green-plant-leaves_23-2147931875.jpg?t=st=1732457161~exp=1732460761~hmac=791ab782ea5dc15551832d07e862f9600f4eefdbf3b67903953e4576006f8f7e&w=740"
                />
            </Card>
        </div>
    );
};

export default Offer;
