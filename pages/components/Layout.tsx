import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axiosAll from "./other/axiosAll";
import Nav from "./Nav";
import Footera from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      axiosAll.get("/listcategory").then((response) => {
   
        setItems(response.data)
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="flex ml-2">
        <div className="w-fit hidden md:block mt-2">
          <Sidebar
            // className=" md:sticky md:left-0"
            aria-label="Sidebar with logo branding example"
          >
            <Sidebar.Items >
              <Sidebar.ItemGroup className="bg-gray-200 rounded-lg">
                {items ? 
                items.map((item : any) => {
                  return (
                    <Sidebar.Item href={item.path} key={item.id}>
                      <div className="flex items-center">
                        <img
                          className="h-8 w-8 rounded-lg shadow-lg mr-2"
                          src={item.image}
                          alt={item.category}
                        />
                        <p className="capitalize text-sm font-medium">{item.category}</p>
                      </div>
                    </Sidebar.Item>
                  );
                }) :null }
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <main className="md:container md:mx-auto">{children}</main>
      </div>
      <Footera />
    </>
  );
};

export default Layout;
