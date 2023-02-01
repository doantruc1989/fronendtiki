import { Avatar, Button, Dropdown, Modal, Navbar } from "flowbite-react";
import { HiOutlineShoppingCart, HiGift, HiMap } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import axiosAll from "./other/axiosAll";

const Nav = () => {
  const [modals, setModals] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState();
  const [provinces, setProvinces] = useState([]);
  const [states, setStates] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      axiosAll.get("/listcategory").then((response) => {
        setItems(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleModals = () => {
    setModals(true);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    try {
      axiosAll.get("/api/provinces").then((response) => {
        setProvinces(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      axiosAll.get(`/api/provinces/${city}`).then((response) => {
        setStates(response.data ? JSON.parse(response.data.districts) : null);
      });
    } catch (error) {
      console.log(error);
    }
  }, [city]);

  return (
    <div className="sticky top-0 z-50 w-full mx-auto">
      <Navbar className="navbar" fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img src="image/logotiki.png" className="mr-3 h-10 md:h-14" alt="tiki Logo" />
        </Navbar.Brand>

        <div className="md:flex md:items-center md:flex-col md:w-2/4">
          <form className="hidden md:flex md:items-center md:w-full sm:w-4/12">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bạn tìm gì hôm nay?"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </form>
          <div className="hidden md:justify-start md:flex">
            <a href="/ngon"> trái cây, </a>
            <a href="/ngon"> thịt, trứng, </a>
            <a href="/ngon"> rau, củ, quả, </a>
            <a href="/ngon"> hải sản, mì gói, </a>
            <a href="/ngon"> bia, rượu </a>
          </div>
        </div>

        <div>
          <div className="flex md:order-2 justify-end">
            <div className="flex items-center">
              <Button className="navbutton">
                <HiGift className="mr-2 text-xl" />
                <span className="text-lg">Astra</span>
              </Button>
              <Button className="navbutton">
                <HiOutlineShoppingCart className="mr-2 text-xl" />
              </Button>
            </div>

            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <div className="flex items-center">
            <HiMap className="navbutton" />
            <a className="ml-2 navfont cursor-pointer text-xs" onClick={handleModals}>
              Giao đến:{" "}
              <b className="text-black text-xs">Q. 1, P. Bến Nghé, Hồ Chí Minh</b>
            </a>
          </div>

          <Modal
            show={modals}
            position="center"
            onClose={() => {
              setModals(false);
            }}
          >
            <Modal.Header>Địa chỉ giao hàng</Modal.Header>
            <Modal.Body>
              <div className="space-y-6 p-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng
                  cùng phí đóng gói, vận chuyển một cách chính xác nhất.
                </p>
                <Button href="/login">
                  Đăng nhập để chọn địa chỉ giao hàng
                </Button>
                {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p> */}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="flex items-start mb-4 flex-col ml-10">
                <div className="flex items-center mb-4">
                  <input
                    // checked
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                  >
                    TP. Hồ Chí Minh
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    onClick={handleClick}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                  >
                    Chọn khu vực giao hàng khác
                  </label>
                </div>
                <div
                  className={
                    "flex items-start flex-col " +
                    (isOpen ? "visible" : "invisible")
                  }
                >
                  <label>City:</label>
                  <select
                    value={city}
                    onChange={(e: any) => setCity(e.target.value)}
                  >
                    {provinces.map((province: any) => (
                      <option value={province.name} key={province.id}>{province.name}</option>
                    ))}
                  </select>
                  <label>State:</label>
                  <select>
                    {states?.map((state: any) => (
                      <option value={state.name} key={state.id}>{state.name}</option>
                    ))}
                  </select>
                </div>
                <Button>GIAO ĐẾN ĐỊA CHỈ NÀY</Button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>

        <Navbar.Collapse className="md:hidden">
          <div className="grid grid-cols-2">
          {items
            ? items.map((item: any) => {
                return <Navbar.Link href={item.path} key={item.id}>
                  <div className="flex items-center">
                        <img
                          className="h-6 w-6 rounded-lg shadow-lg mr-1"
                          src={item.image}
                          alt={item.category}
                        />
                        <p className="capitalize text-sm">{item.category}</p>
                      </div>
                  </Navbar.Link>;
              })
            : null}
          </div>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
