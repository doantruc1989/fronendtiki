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
      category: "giày nữ",
      sortBy: "price",
      search: "gia1",
      fromPrice: 0,
      toPrice: 100000,
    };
    const price2 = {
      category: "giày nữ",
      sortBy: "price",
      search: "gia2",
      fromPrice: 100000,
      toPrice: 260000,
    };
    const price3 = {
      category: "giày nữ",
      sortBy: "price",
      search: "gia3",
      fromPrice: 260000,
      toPrice: 460000,
    };
    const price4 = {
      category: "giày nữ",
      sortBy: "price",
      search: "gia4",
      fromPrice: 460000,
      toPrice: 10000000,
    };

    const danhmuc1 = {
      category: "giày nữ",
      sortBy: "gót",
      search: "danhmuc1",
    };

    const danhmuc2 = {
      category: "giày nữ",
      sortBy: "thể thao",
      search: "danhmuc2",
    };

    const danhmuc3 = {
      category: "giày nữ",
      sortBy: "sandal",
      search: "danhmuc3",
    };

    const danhmuc4 = {
      category: "giày nữ",
      sortBy: "búp bê",
      search: "danhmuc4",
    };

    const danhmuc5 = {
      category: "giày nữ",
      sortBy: "xuồng",
      search: "danhmuc5",
    };

    const danhmuc6 = {
      category: "giày nữ",
      sortBy: "boot",
      search: "danhmuc6",
    };

    const danhmuc7 = {
      category: "giày nữ",
      sortBy: "dép",
      search: "danhmuc7",
    };

    const danhmuc8 = {
      category: "giày nữ",
      sortBy: "lười",
      search: "danhmuc8",
    };

    const danhmuc9 = {
      category: "giày nữ",
      sortBy: "phụ",
      search: "danhmuc9",
    };

  return (
    <div className="my-5">
      <Breadcrumb aria-label="Default breadcrumb example" className="mx-3 my-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Giày - Dép nữ</Breadcrumb.Item>
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
              Giày cao gót
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc2);
              }}>
           Giày thể thao
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc3);
              }}>
          Giày sandals
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc4);
              }}>
              Giày búp bê
            </button>

            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc5);
              }}>
              Giày Đế xuồng
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc6);
              }}>
              Giày boots
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc7);
              }}>
             Dép - Guốc nữ
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc8);
              }}>
             Giày lười nữ
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc9);
              }}>
             Phụ kiện giày
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
              Dưới 100.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(price2);
              }}
              >
               100.000 to 260.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price3);
              }}
              >
              260.000 to 460.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl bg-gray-300 w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price4);
              }}
              >
              Trên 460.000
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
              <h1 className="mb-3 pt-3">Giày - Dép nữ</h1>
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