import { Button, Table } from "flowbite-react";
import React, { ReactElement } from "react";
import { toast } from "react-toastify";
import { CartProvider, useCart } from "react-use-cart";
import Layout from "../components/Layout";
import {
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import Link from "next/link";

const index = () => {
  const { totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();
  return (
    <>
      {totalUniqueItems > 0 ? (
        <>
          <h1 className="text-2xl font-medium flex justify-center py-6">
            Giỏ hàng
          </h1>
          <div className="grid lg:grid-cols-4 w-11/12 mx-auto mb-10 gap-4 items-end">
            <div className="lg:col-start-1 lg:col-end-4">
              <Table striped={true}>
                <Table.Head>
                  <Table.HeadCell>Tất cả</Table.HeadCell>
                  <Table.HeadCell className="hidden lg:block">
                    Tên sản phẩm
                  </Table.HeadCell>
                  <Table.HeadCell>Đơn giá</Table.HeadCell>
                  <Table.HeadCell>Số lượng</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {items.map((item) => {
                    return (
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="px-0 py-0">
                          <img src={item.image} className="w-15 h-15" />
                        </Table.Cell>
                        <Table.Cell className="flex-col self-center content-center hidden w-96 lg:flex text-xs font-medium text-gray-900 dark:text-white">
                          {item.productName}
                        </Table.Cell>
                        <Table.Cell className="w-full font-medium">
                          {Intl.NumberFormat().format(item.price)} đ
                        </Table.Cell>
                        <Table.Cell className="flex items-center content-center justify-center pt-10">
                          <button
                            className="font-medium text-2xl px-1"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity! - 1)
                            }
                          >
                            <HiChevronLeft />
                          </button>
                          <input
                            value={item.quantity}
                            className="w-5 flex content-center pl-1 justify-center"
                          />
                          <button
                            className="font-medium text-2xl px-1"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity! + 1)
                            }
                          >
                            <HiChevronRight />
                          </button>
                        </Table.Cell>
                        <Table.Cell>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-lg rounded-full bg-red-500 px-2 pb-0.5 text-white"
                          >
                            &times;
                          </button>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </div>
            <div>
              <div className="bg-gray-200 rounded-xl h-fit p-4">
                <div className="flex justify-between mb-4">
                  <h3>Tạm tính</h3>
                  <div>{Intl.NumberFormat().format(cartTotal)} đ</div>
                </div>
                <div className="flex justify-between border-b border-solid border-black divide-y-8">
                  <h3>Giảm giá</h3>
                  <div>0 đ</div>
                </div>
                <div className="flex justify-between mt-4 items-center">
                  <h3 className="font-medium">Tổng tiền</h3>
                  <div className="text-red-700 text-xl md:text-2xl font-medium">
                    {Intl.NumberFormat().format(cartTotal)} đ
                  </div>
                </div>
              </div>
              <Link href="/diachigiaohang">
              <Button
                className="justify-self-center mt-4 w-full"
              >
                Thanh toán ({totalUniqueItems})
              </Button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center font-medium text-lg mb-8 pt-20">
          Bạn chưa chọn sản phẩm nào
        </div>
      )}
    </>
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
