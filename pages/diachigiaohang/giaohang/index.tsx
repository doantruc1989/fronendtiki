import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axiosAll from "../../components/other/axiosAll";
import axiosHeader from "../../components/other/axiosHeader";

const Index = () => {
  const [users, setUsers] = useState([] as any)
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState();
  const [provinces, setProvinces] = useState([]);
  const [states, setStates] = useState([]);

  const user = localStorage.getItem('user') || " ";
  const id = (JSON.parse(user)).id

  const handleClick = () => {
    try {
      axiosAll.get("/homepage/provinces").then((response) => {
        setProvinces(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  try {
    axiosHeader.get(`/users/${id}`).then((res) => {
      setUsers(res?.data);
    });
  } catch (error) {
    console.log(error)
  }
  })

  useEffect(() => {
    try {
      axiosAll.get(`/homepage/provinces/${city}`).then((response) => {
        setStates(response.data ? JSON.parse(response.data.districts) : null);
      });
    } catch (error) {
      console.log(error);
    }
  }, [city]);

  return (
    <React.Fragment>
      <div className="sticky top-0 z-50 w-full mx-auto">
        <nav className="navbar flex items-center justify-between py-5 h-fit px-4">
          <Link href="/">
            <img
              src="/image/logotiki.png"
              className="h-10 md:h-14"
              alt="tiki Logo"
            />
          </Link>

          <ol className="flex items-center w-1/2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <p className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                ????ng <span className="hidden sm:inline-flex sm:ml-2">nh???p</span>
              </p>
            </li>
            <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <p className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Giao <span className="hidden sm:inline-flex sm:ml-2">h??ng</span>
              </p>
            </li>
            <li className="flex items-center">
              <p className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                <span className="mr-2">3</span>
                Thanh{" "}
                <span className="hidden sm:inline-flex sm:ml-2">to??n</span>
              </p>
            </li>
          </ol>

          <div>
            <img src="/image/hotline.png" alt="tiki Logo" />
          </div>
        </nav>
      </div>
      <div className="w-3/5 mx-auto h-screen my-10">
        <div className="flex flex-col items-start">
          <h2>2. ?????a ch??? giao h??ng</h2>
          <h3>
            B???n mu???n giao h??ng ?????n ?????a ch??? kh??c?{" "}
            <button
              className="text-blue-800"
              onClick={() => {
                setIsOpen(!isOpen);
                handleClick();
              }}
            >
              Th??m ?????a ch??? giao h??ng m???i
            </button>{" "}
          </h3>
        </div>
        {isOpen && (
          <div className="flex flex-col w-full mt-5">
            <div className="mb-2 flex items-center justify-end gap-10">
              <Label htmlFor="name" color="info" value="H??? t??n" />
              <TextInput
                id="name"
                value={users.name}
                placeholder="Doan Truc"
                required={true}
                color="info"
                className="w-2/3"
              />
            </div>
            <div className="mb-2 flex items-center justify-end gap-10">
              <Label htmlFor="phone" color="info" value="??i???n tho???i di ?????ng" />
              <TextInput
                id="phone"
                placeholder="0902xxxxx"
                required={true}
                color="info"
                className="w-2/3"
              />
            </div>
            <div className="mb-2 flex items-center justify-end gap-10">
              <Label htmlFor="state" color="info" value="T???nh/Th??nh ph???" />
              <Select
                className="w-2/3"
                id="state"
                color="info"
                required={true}
                value={city}
                onChange={(e: any) => setCity(e.target.value)}
              >
                {provinces.map((province: any) => (
                  <option value={province.name} key={province.id}>
                    {province.name}
                  </option>
                ))}
              </Select>
            </div>
            <div className="mb-2 flex items-center justify-end gap-10">
              <Label htmlFor="district" color="info" value="Qu???n/Huy???n" />
              <Select
                className="w-2/3"
                id="district"
                color="info"
                required={true}
              >
                {states
                  ? states.map((state: any) => (
                      <option value={state.name} key={state.id}>
                        {state.name}
                      </option>
                    ))
                  : null}
              </Select>
            </div>
            <div className="mb-2 flex items-center justify-end gap-10">
              <Label htmlFor="diachi" color="info" value="?????a ch???" />
              <TextInput
                id="diachi"
                placeholder=""
                required={true}
                color="info"
                className="w-2/3"
              />
            </div>
            <div className="mb-2 flex items-center justify-end gap-10 mt-2">
              <Label htmlFor="loaidiachi" color="info" value="Lo???i ?????a ch???" />
              <div className="w-2/3 flex gap-7">
                <div className="flex items-center gap-2">
                  <Radio
                    id="united-state"
                    name="countries"
                    value="USA"
                    defaultChecked={true}
                  />
                  <Label htmlFor="united-state">Nh?? ri??ng / Chung c??</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="germany" name="countries" value="Germany" />
                  <Label htmlFor="germany">C?? quan / C??ng ty</Label>
                </div>
              </div>
            </div>
            <div className="mb-2 flex items-center justify-end gap-10 mt-2">
              <Button className="w-1/3 bg-slate-500">Hu??? b???</Button>
              <Button className="w-1/3">
                <Link href="/diachigiaohang/giaohang/thanhtoan">
                  Giao ?????n ?????a ch??? n??y
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Index;
