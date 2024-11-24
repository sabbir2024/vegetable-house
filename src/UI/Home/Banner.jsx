import { Button } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselImages = ['https://img.freepik.com/free-photo/joyful-young-female-gardener-uniform-wearing-gardening-hat-holds-vegetable-basket-tomato_141793-70848.jpg?t=st=1732251279~exp=1732254879~hmac=a0dc99009285b0c2d7860850d67993f228a70b806cd20afd9add2fb214c71ebe&w=740', 'https://img.freepik.com/free-photo/angry-young-female-gardener-uniform-wearing-gardening-hat-holds-looks-vegetable-basket_141793-70312.jpg?t=st=1732251358~exp=1732254958~hmac=5de8c005ec1b9ebf60cb2610bf9169e2cf5a47d5505d25f205ef144e0383d74f&w=740', 'https://img.freepik.com/free-photo/happy-unshaven-young-guy-vegan-with-muscular-fit-body-with-broad-radiant-smile-carrying-fresh-colorful-veggies-lettuce-from-grocery-shop-veganism-raw-food-dieting_343059-4850.jpg?t=st=1732251455~exp=1732255055~hmac=06e7814c794094b69b3a742b7d7d8bab1cd473c415586334274f4e4fd22e8d51&w=740'];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden container mx-auto">
            {/* arrow left */}
            <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>
            </button>
            <div className="absolute top-1/2 left-0 right-0 z-50 flex justify-center items-center text-center">
                <div>
                    <h1 className="text-md md:text-3xl font-bold text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

                    <Button color="success" className="text-white">
                        View more <FaArrowRight />
                    </Button>
                </div>
            </div>
            {/* arrow right */}
            <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>
            </button>
            {/* dots */}
            <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                {carouselImages.map((img, idx) => (
                    <button key={`${img}_${idx}`} onClick={() => setCurrentSlider(idx)} className={`rounded-full duration-500 bg-white ${currentSlider === idx ? "w-8" : "wz-2"} h-2`}></button>
                ))}
            </div>
            {/* Carousel container */}
            <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                {/* sliders */}
                {carouselImages.map((slide, idx) => (
                    <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${idx + 1}`} />
                ))}
            </div>
        </div>
    )
};


export default Banner;