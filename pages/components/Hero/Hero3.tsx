import { Card, Carousel, Progress } from "flowbite-react";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import CountdownComp from "../Countdown";

const Hero3 = () => {
  return (
    <Card className="bg-gray-200 mx-6 mb-6">
      <div className="flex justify-between">
        <div className="flex contents-start items-center">
          <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Giá sốc hôm nay
          </h5>
          <CountdownComp />
        </div>

        <a href="#" className="flex text-blue-700 flex-wrap">
          <div className="text-base md:text-xl font-bold tracking-tight dark:text-white">
            Xem thêm{" "}
          </div>
          <HiChevronRight className="text-xl md:text-2xl" />
        </a>
      </div>

      <div className="h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false} indicators={false}>
          <div className="grid h-auto grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 2xl:h-96">
            <Card
              imgAlt="..."
              imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              className="cursor-pointer relative"
            >
              <span className="absolute top-2 left-2 bg-red-400 text-red-700 p-0.5 rounded-md">
                -53%
              </span>
              {/* <a href="#">
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
              </a> */}
              <span className="text-sm font-bold text-gray-900 dark:text-white justify-center flex">
                $599
              </span>
              <Progress
                progress={45}
                size="xl"
                color="red"
                label="Đã bán 45"
                labelPosition="outside"
              />
            </Card>
            <Card
              imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              className="cursor-pointer relative"
            >
              <span className="absolute top-2 left-2 bg-red-400 text-red-700 p-0.5 rounded-md">
                -53%
              </span>
              {/* <a href="#">
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
              </a> */}
              <span className="text-sm font-bold text-gray-900 dark:text-white justify-center flex">
                $599
              </span>
              <Progress
                progress={45}
                size="xl"
                color="red"
                label="Đã bán 45"
                labelPosition="outside"
              />
            </Card>

            <Card
              imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              className="cursor-pointer relative"
            >
              <span className="absolute top-2 left-2 bg-red-400 text-red-700 p-0.5 rounded-md">
                -53%
              </span>
              {/* <a href="#">
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
              </a> */}
              <span className="text-sm font-bold text-gray-900 dark:text-white justify-center flex">
                $599
              </span>
              <Progress
                progress={45}
                size="xl"
                color="red"
                label="Đã bán 45"
                labelPosition="outside"
              />
            </Card>
            <Card
              imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              className="cursor-pointer relative"
            >
              <span className="absolute top-2 left-2 bg-red-400 text-red-700 p-0.5 rounded-md">
                -53%
              </span>
              {/* <a href="#">
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
              </a> */}
              <span className="text-sm font-bold text-gray-900 dark:text-white justify-center flex">
                $599
              </span>
              <Progress
                progress={45}
                size="xl"
                color="red"
                label="Đã bán 45"
                labelPosition="outside"
              />
            </Card>
            <Card
              imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              className="cursor-pointer relative"
            >
              <span className="absolute top-2 left-2 bg-red-400 text-red-700 p-0.5 rounded-md">
                -53%
              </span>
              {/* <a href="#">
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
              </a> */}
              <span className="text-sm font-bold text-gray-900 dark:text-white justify-center flex">
                $599
              </span>
              <Progress
                progress={45}
                size="xl"
                color="red"
                label="Đã bán 45"
                labelPosition="outside"
              />
            </Card>
            <Card
              imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              className="cursor-pointer relative"
            >
              <span className="absolute top-2 left-2 bg-red-400 text-red-700 p-0.5 rounded-md">
                -53%
              </span>
              {/* <a href="#">
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
              </a> */}
              <span className="text-sm font-bold text-gray-900 dark:text-white justify-center flex">
                $599
              </span>
              <Progress
                progress={45}
                size="xl"
                color="red"
                label="Đã bán 45"
                labelPosition="outside"
              />
            </Card>
          </div>
        </Carousel>
      </div>
    </Card>
  );
};

export default Hero3;
