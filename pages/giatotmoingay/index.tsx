import { Tabs } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import ListProductgiatot from "../components/ListProductgiatot";

function index() {
  const phobien = {
    category: "điện thoại",
    sortBy: "price",
    search: "phobien",
    path: "/dienthoaimaytinhbang"
  };
  const asc = {
    category: "điện gia dụng",
    sortBy: "price",
    search: "asc",
    path: "/diengiadung"
  };
  const desc = {
    category: "sách",
    sortBy: "price",
    search: "desc",
    path: "/nhasachtiki"
  };
  const phobien2 = {
    category: "đồ nam",
    sortBy: "price",
    search: "phobien",
    path: "/thoitrangnam"
  };
  const asc2 = {
    category: "đồ nữ",
    sortBy: "price",
    search: "asc",
    path: "/thoitrangnu"
  };
  const desc2 = {
    category: "giày nữ",
    sortBy: "price",
    search: "desc",
    path: "/giaydepnu"
  };
  return (
    <div className="mb-5">
      <img
        className="mx-auto pt-5"
        src="/image/other/giatotmoingay.png"
        alt="giatotmoingay"
      />
      <div className="w-11/12 mx-auto">
        <div className="mt-3">
          <Tabs.Group aria-label="Tabs with underline" style="underline"
          className="flex justify-evenly"
          >
            <Tabs.Item active={true} title="Điện thoại - máy tính bảng">
              <div className="bg-gray-200 rounded-xl my-5 pt-3">
                <ListProductgiatot prop={phobien} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Điện gia dụng">
            <div className="bg-gray-200 rounded-xl my-5 pt-3">
              <ListProductgiatot prop={asc} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Nhà sách tiki">
            <div className="bg-gray-200 rounded-xl my-5 pt-3">
              <ListProductgiatot prop={desc} />
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        <div className="mt-3">
          <Tabs.Group aria-label="Tabs with underline" style="underline"
          className="flex justify-evenly"
          >
            <Tabs.Item active={true} title="Đồ nam">
              <div className="bg-gray-200 rounded-xl my-5 pt-3">
                <ListProductgiatot prop={phobien2} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Đồ nữ">
            <div className="bg-gray-200 rounded-xl my-5 pt-3">
              <ListProductgiatot prop={asc2} />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Giày nữ">
            <div className="bg-gray-200 rounded-xl my-5 pt-3">
              <ListProductgiatot prop={desc2} />
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>

    </div>
  );
}

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
