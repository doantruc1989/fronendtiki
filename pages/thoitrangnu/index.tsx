import { Breadcrumb, Carousel, Tabs } from "flowbite-react";
import React, { ReactElement, useState } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiHome } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";
import Tab from "./Tab";
import TabSearch from "./TabSearch";



const index = () => {
    const [searchs, setSearchs] = useState({});
    const [changeTab, setChangeTab] = useState(false);

    const price1 = {
      category: "đồ nữ",
      sortBy: "price",
      search: "gia1",
      fromPrice: 0,
      toPrice: 80000,
    };
    const price2 = {
      category: "đồ nữ",
      sortBy: "price",
      search: "gia2",
      fromPrice: 80000,
      toPrice: 200000,
    };
    const price3 = {
      category: "đồ nữ",
      sortBy: "price",
      search: "gia3",
      fromPrice: 200000,
      toPrice: 420000,
    };
    const price4 = {
      category: "đồ nữ",
      sortBy: "price",
      search: "gia4",
      fromPrice: 420000,
      toPrice: 10000000,
    };

    const danhmuc1 = {
      category: "đồ nữ",
      sortBy: "da",
      search: "danhmuc1",
    };

    const danhmuc2 = {
      category: "đồ nữ",
      sortBy: "đầm",
      search: "danhmuc2",
    };

    const danhmuc3 = {
      category: "đồ nữ",
      sortBy: "váy",
      search: "danhmuc3",
    };

    const danhmuc4 = {
      category: "đồ nữ",
      sortBy: "quần",
      search: "danhmuc4",
    };

    const danhmuc5 = {
      category: "đồ nữ",
      sortBy: "áo",
      search: "danhmuc5",
    };

    const danhmuc6 = {
      category: "đồ nữ",
      sortBy: "đôi",
      search: "danhmuc6",
    };

    const danhmuc7 = {
      category: "đồ nữ",
      sortBy: "bầu",
      search: "danhmuc7",
    };

    const danhmuc8 = {
      category: "đồ nữ",
      sortBy: "lót",
      search: "danhmuc8",
    };

    const danhmuc9 = {
      category: "đồ nữ",
      sortBy: "ngủ",
      search: "danhmuc9",
    };

  return (
    <div className="my-5">
      <Breadcrumb aria-label="Default breadcrumb example" className="mx-3 my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Thời trang nữ</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid gap-6 grid-cols-4 w-11/12 mx-auto mt-5">
        <div className="md:col-start-1 md:col-end-2 hidden md:block">
          <div className=" bg-gray-200 mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium">Danh mục sản phẩm</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc1);
              }}>
              Áo nữ
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc2);
              }}>
           Đầm nữ
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc3);
              }}>
           Chân váy
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc4);
              }}>
              Quần nữ
            </button>

            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc5);
              }}>
              Áo liền quần
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc6);
              }}>
              Đồ đôi 
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc7);
              }}>
             Thời trang bầu
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc8);
              }}>
             Đồ lót nữ
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc9);
              }}>
             Đồ ngủ
            </button>
          </div>

          <div className="flex flex-col bg-gray-200 mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium">Giá</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price1);
              }}
            >
              Dưới 80.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(price2);
              }}
              >
              80.000 to 200.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price3);
              }}
              >
              200.000 to 420.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price4);
              }}
              >
              Trên 420.000
            </button>
          </div>
          
          <div className=" bg-gray-200 mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium mb-2">Dịch vụ</h2>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Giao Siêu Tốc 2H
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Thưởng thêm Astra
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Freeship không giới hạn
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Trả góp 0%
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Giảm sâu
              </label>
            </div>
          </div>
        </div>
        <div className="col-start-1 md:col-start-2 col-end-5 ">
          <div className="bg-gray-200 rounded-xl">
            <div className="mx-3 mt-3 font-medium text-xl">
              <h1 className="mb-3 pt-3">Thời trang nữ</h1>
              <div className="h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96 pb-3 px-3">
                <Carousel
                  slide={true}
                  indicators={false}
                  leftControl=" "
                  rightControl=" "
                >
                  <img
                    src="image/dienthoai/banner1.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                  <img
                    src="image/dienthoai/banner2.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                  <img
                    src="image/dienthoai/banner3.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                  <img
                    src="image/dienthoai/banner4.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                </Carousel>
              </div>
            </div>
          </div>
        {!changeTab ? <Tab /> : <TabSearch prop={searchs}/>}
        </div>
      </div>
    </div>
  );
};

index.getLayout = function getLayout(page: ReactElement) {
  return (
    <CartProvider>
      <Layout>
        <>{page}</>
      </Layout>
    </CartProvider>
  );
};

export default index;
