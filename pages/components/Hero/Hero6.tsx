import { Card, Carousel } from 'flowbite-react'
import React from 'react'

const Hero6 = () => {
    return (
        <Card className="bg-gray-200 mx-6 mb-6">
            <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Gợi ý hôm nay
            </h5>
            <div className="hidden md:flex md:flex-wrap content-around justify-between">
                <Card className="cursor-pointer w-1/6 h-auto hover">
                    <div className="flex flex-col items-center">
                        <img
                            className="mb-3 h-11 w-11 rounded-full shadow-lg"
                            src="image/danhchoban.png"
                            alt="Bonnie image"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Dành cho bạn
                        </span>
                    </div>
                </Card>

                <Card className="cursor-pointer w-1/6 h-auto hover">
                    <div className="flex flex-col items-center">
                        <img
                            className="mb-3 h-11 w-11 rounded-full shadow-lg"
                            src="image/dichvuso.png"
                            alt="Bonnie image"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Dịch vụ số
                        </span>
                    </div>
                </Card>
                <Card className="cursor-pointer w-1/6 h-auto hover">
                    <div className="flex flex-col items-center">
                        <img
                            className="mb-3 h-11 w-11 rounded-full shadow-lg"
                            src="image/dealsieuhot.png"
                            alt="Bonnie image"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Deal siêu hot
                        </span>
                    </div>
                </Card>
                <Card className="cursor-pointer w-1/6 h-auto hover">
                    <div className="flex flex-col items-center">
                        <img
                            className="mb-3 h-11 w-11 rounded-full shadow-lg"
                            src="image/revodoi.png"
                            alt="Bonnie image"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Rẻ vô đối
                        </span>
                    </div>
                </Card>
                <Card className="cursor-pointer w-1/6 h-auto hover">
                    <div className="flex flex-col items-center">
                        <img
                            className="mb-3 h-11 w-11 rounded-full shadow-lg"
                            src="image/thoitrang.png"
                            alt="Bonnie image"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Thời trang
                        </span>
                    </div>
                </Card>
                <Card className="cursor-pointer w-1/6 h-auto hover">
                    <div className="flex flex-col items-center">
                        <img
                            className="mb-3 h-11 w-11 rounded-full shadow-lg"
                            src="image/trending.png"
                            alt="Bonnie image"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Trending
                        </span>
                    </div>
                </Card>
            </div>
            {/* <div className=" flex flex-wrap content-around justify-between"> */}
            <div className="grid grid-cols-6 gap-1">
                <Card
                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                    imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    className="cursor-pointer w-full h-full my-1"
                >
                    <a href="#">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>
                    <div className="flex items-center flex-col justify-between">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            href="#"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </Card>
                <Card
                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                    imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    className="cursor-pointer w-full h-full my-1"
                >
                    <a href="#">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>
                    <div className="flex items-center flex-col justify-between">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            href="#"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </Card>
                <Card
                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                    imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    className="cursor-pointer w-full h-full my-1"
                >
                    <a href="#">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>
                    <div className="flex items-center flex-col justify-between">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            href="#"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </Card>
                <Card
                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                    imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    className="cursor-pointer w-full h-full my-1"
                >
                    <a href="#">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>
                    <div className="flex items-center flex-col justify-between">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            href="#"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </Card>
                <Card
                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                    imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    className="cursor-pointer w-full h-full my-1"
                >
                    <a href="#">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>
                    <div className="flex items-center flex-col justify-between">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            href="#"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </Card>
                <Card
                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                    imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    className="cursor-pointer w-full h-full my-1"
                >
                    <a href="#">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>
                    <div className="flex items-center flex-col justify-between">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            href="#"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </Card>
                <Card
                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                    imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    className="cursor-pointer w-full h-full my-1"
                >
                    <a href="#">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>
                    <div className="flex items-center flex-col justify-between">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <a
                            href="#"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </Card>

            </div>
        </Card>

    )
}

export default Hero6