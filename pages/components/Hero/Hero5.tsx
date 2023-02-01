import { Card, Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axiosAll from "../other/axiosAll";

const Hero5 = () => {
  const [collections, setCollections] = useState([]);
  const [nextCols, setNextCols] = useState([]);
  useEffect(() => {
    try {
      axiosAll.get("/homepage/bosuutap").then((response) => {
        setCollections(response.data.splice(0, 6));
        response.data.slice(6);
        setNextCols(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Card className="bg-gray-200 mx-6 mb-6">
      <h5 className="text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Bộ sưu tập nổi bật
      </h5>
      <div className="h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false} indicators={false}>
          <div className="grid gap-1 grid-cols-6">
            {collections.map((collection) => {
              return (
                <img
                  src={collection.image}
                  className="rounded-xl"
                  key={collection.id}
                />
              );
            })}
          </div>

          <div className="grid gap-1 grid-cols-6">
            {nextCols.map((nextCol) => {
              return (
                <img
                  src={nextCol.image}
                  className="rounded-xl"
                  key={nextCol.id}
                />
              );
            })}
          </div>
        </Carousel>
      </div>
    </Card>
  );
};

export default Hero5;
