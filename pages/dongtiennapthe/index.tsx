import { Carousel } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout";
import { HiPuzzle } from "react-icons/hi";
import Dongtienhero from "../components/Dongtienhero";
import { ToastContainer } from "react-toastify";

function index() {

  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
            <ToastContainer />
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000} indicators={true}>
          <div className="grid grid-cols-2 gap-2">
            <img src="/image/other/napthe1.png" alt="napthe1" />
            <img src="/image/other/napthe2.png" alt="napthe2" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img src="/image/other/napthe3.png" alt="napthe3" />
            <img src="/image/other/napthe4.png" alt="napthe4" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img src="/image/other/napthe5.png" alt="napthe5" />
            <img src="/image/other/napthe6.png" alt="napthe6" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img src="/image/other/napthe7.png" alt="napthe7" />
            <img src="/image/other/napthe8.png" alt="napthe8" />
          </div>
        </Carousel>
      </div>
      <div className="mb-5">
        <div className="bg-gray-200 rounded-md mb-1 flex justify-center md:justify-start items-center gap-2 p-2">
          <HiPuzzle className="text-2xl text-green-500" />
          <h2 className="text-lg font-medium">Dịch vụ tiện ích</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

        <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Thanh toán hóa đơn</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/dien.png"
                  alt="dien"
                />
                <span>Điện</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/thanhtoankhoanvay.png"
                  alt="thanhtoankhoanvay"
                />
                <span>Thanh toán</span>
                <span>khoản vay</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/nuoc.png"
                  alt="nuoc"
                />
                <span>Nước</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Nạp điện thoại và game</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/naptiendienthoai.png"
                  alt="naptiendienthoai"
                />
                <span>Nạp tiền</span>
                <span>điện thoại</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/thedienthoai.png"
                  alt="thedienthoai"
                />
                <span>Thẻ điện thoại</span>
                
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/thegame.png"
                  alt="thegame"
                />
                <span>Thẻ game</span>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Vũ Trụ Bảo Hiểm Số</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/baohiemtiki360.png"
                  alt="baohiemtiki360"
                />
                <span>Bảo hiểm</span>
                <span>Tiki 360</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/baohiemxemay.png"
                  alt="baohiemxemay"
                />
                <span>Bảo hiểm</span>
                <span>xe máy</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/baohiemotobatbuoc.png"
                  alt="baohiemotobatbuoc"
                />
                <span>Bảo hiểm</span>
                <span>oto bắt buộc</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/bhdulichliberty.png"
                  alt="bhdulichliberty"
                />
                <span>BH du lịch</span>
                <span>Liberty</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Voucher</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/vouchervip.png"
                  alt="vouchervip"
                />
                <span>Voucher VIP</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/dulichkhachsan.png"
                  alt="dulichkhachsan"
                />
                <span>Du Lịch - </span>
                <span>Khách sạn</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/nhahanganuong.png"
                  alt="nhahanganuong"
                />
                <span>Nhà Hàng Ăn</span>
                <span>Uống</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/khoahoc.png"
                  alt="khoahoc"
                />
                <span>Khoá Học</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Sự kiện và giải trí</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/muavetaiticketbox.png"
                  alt="muavetaiticketbox"
                />
                <span>Mua vé tại</span>
                <span>Ticketbox</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/vevuichoigiaitri.png"
                  alt="vevuichoigiaitri"
                />
                <span>Vé Vui Chơi</span>
                <span>Giải Trí</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md flex flex-col items-start p-2">
            <h1 className="font-medium mb-3">Phiếu Quà Tặng & TikiXu</h1>
            <div className="grid grid-cols-4 text-xs">
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/phieuquatang.png"
                  alt="phieuquatang"
                />
                <span>Phiếu quà</span>
                <span> tặng</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 h-8 mb-2"
                  src="/image/dongtien/tikixu.png"
                  alt="tikixu"
                />
                <span>Top-up TikiXU</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <img
        className="mb-10"
        src="/image/dongtien/uudaidanhchoban.png"
        alt="uudaidanhchoban"
      />

<Dongtienhero />

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
