import { Button, Modal, Rating } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useCart } from "react-use-cart";
import axiosAll from "./other/axiosAll";

const ListProductdetail = ({prop}: any) => {
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  const [modals, setModals] = useState(false);
  const [productDetail, setProductDetail] = useState([] as any);
  const clickref: any = useRef();

  useEffect(() => {
    let handler = (e: any) => {
      if (!clickref.current?.contains(e.target)) {
        setModals(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    try {
      axiosAll.get(`/product/all?category=${prop.category}&search=${prop.search}&sortBy=${prop.sortBy}&fromPrice=${prop.fromPrice}&toPrice=${prop.toPrice}`)
      .then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [prop]);

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="grid gap-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mx-3">
        {products
          ? products.map((product: any) => {
              return (
                <div className="rounded-lg bg-white mb-4" key={product?.id}>
                  <img
                    onClick={() => {
                      axiosAll
                        .get(`/product/${product?.id}`)
                        .then((response) => {
                          setProductDetail(response.data);
                          setModals(!modals);
                        });
                    }}
                    src={product?.image}
                    alt="..."
                    className="rounded-t-lg cursor-pointer w-fit h-fit"
                  />
                  <a
                    onClick={() => {
                      axiosAll
                        .get(`/product/${product?.id}`)
                        .then((response) => {
                          setProductDetail(response.data);
                          setModals(!modals);
                        });
                    }}
                  >
                    <h5 className="cursor-pointer text-sm sm:text-xs font-semibold text-gray-900 dark:text-white mx-1 mt-3 h-20 text-ellipsis">
                      {product?.productName}
                    </h5>
                  </a>
                  <div className="flex items-center flex-col justify-between">
                    <p className="text-sm font-bold text-gray-900 dark:text-white my-1">
                      {Intl.NumberFormat().format(product?.price)} ??
                    </p>
                    <Button
                      className="mb-5 mt-2"
                      onClick={() => {
                        addItem(product);
                        toast("Add product successfully", {
                          position: toast.POSITION.BOTTOM_RIGHT,
                          type: toast.TYPE.SUCCESS,
                          className: "toast-message",
                        });
                      }}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              );
            })
          : null}
        <Modal
          show={modals}
          position="center"
          onClose={() => {
            setModals(!modals);
          }}
        >
          <Modal.Header>Product Details</Modal.Header>
          <Modal.Body>
            <div className="grid grid-cols-1 items-center align-center md:grid-cols-2 md:items-start gap-4 mx-3">
              <img
                src={productDetail?.image}
                className="w-80 h-fit rounded-lg"
                alt="..."
              />
              <div>
                <div className="text-xs mb-3 flex">
                  <h5>Th????ng hi???u: </h5>
                  <a href="#" className="text-blue-600 underline ml-2">
                    {productDetail?.brand}
                  </a>
                </div>
                <h3 className="text-lg md:text-2xl font-medium mb-3">
                  {productDetail?.productName}
                </h3>
                <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <Rating>
                      <Rating.Star />
                      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white mr-4">
                        4.95
                      </p>
                   
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                      >
                        73 reviews
                      </a>
                    </Rating>
                  </div>
                  <h5 className="text-sm">???? b??n 1453</h5>
                </div>

                <div className="bg-gray-100 font-bold rounded-md p-4 my-4 text-red-700 text-xl md:text-3xl">
                  <h2>{Intl.NumberFormat().format(productDetail?.price)} ??</h2>
                </div>
                
              </div>
            </div>
            <div className="bg-gray-100 rounded-md p-3 mx-3 mt-4">
                  <h2 className="font-bold text-sm md:text-base">
                    M?? t??? s???n ph???m:
                  </h2>
                  <div className="text-sm md:text-base text-justify">
                    {productDetail?.content}
                  </div>
                </div>
          </Modal.Body>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default ListProductdetail;
