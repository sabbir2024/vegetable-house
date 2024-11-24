import { Tabs, Tab, Card, CardBody, CardHeader, Image, CardFooter, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";


const LetexItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const vegetables = products?.filter(product => product.category === 'Vegetable');
    const herbs = products?.filter(product => product.category === 'Herbs');
    return (
        <div className="container pt-6">
            <div className="text-center items-center justify-center">
                <h2 className="text-2xl font-bold text-black">New Products</h2>
                <div className="flex w-full flex-col items-center justify-center mx-auto mt-4">
                    <Tabs aria-label="Options">
                        <Tab key="All" title="All">
                            <Card>
                                <CardBody>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                                        {products?.map(product => <ItemCard key={product.id} product={product} ></ItemCard>)}
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="Vegetable" title="Vegetable">
                            <Card>
                                <CardBody>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                                        {vegetables?.map(product => <ItemCard key={product.id} product={product}></ItemCard>)}
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="Herbs" title="Herbs">
                            <Card>
                                <CardBody>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                                        {herbs?.map(product => <ItemCard key={product.id} product={product}></ItemCard>)}
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>

    );
};

export default LetexItems;