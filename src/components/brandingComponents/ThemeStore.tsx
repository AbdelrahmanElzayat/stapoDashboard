"use client";
import React from "react";
import ThemeCard from "./ThemeCard";
import { ThemesType } from "@/utils/types/HeaderInfoType";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
interface themesProps<T> {
  themes: T[];
}
const ThemeStore = <T extends ThemesType>({ themes }: themesProps<T>) => {
  return (
    <div className="rounded-[14px] p-5 border-[1px] border-[#E6E6E6] mt-4">
      <h4 className="font-bold text-sm text-[#414141]">الثيـم</h4>
      <div className="cards mt-4 w-full flex justify-center items-center">
        <Swiper
          spaceBetween={6} // المسافة بين الشرائح
          slidesPerView={10} // عدد العناصر المرئية في نفس الوقت
          loop={false} // إيقاف التكرار
          freeMode={true}
          navigation={false} // إيقاف الأزرار للتنقل
          pagination={false} // إيقاف الترقيم
          modules={[FreeMode]}
          breakpoints={{
            320: {
              slidesPerView: 3, // عدد اللوجوهات للشاشات الصغيرة جداً (موبايل)
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 4, // للشاشات الموبايل المتوسطة
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6, // للشاشات التابلت
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 10, // للشاشات الكبيرة مثل اللابتوب والديسكتوب
              spaceBetween: 6,
            },
          }}
        >
          {themes?.map((theme) => (
            <SwiperSlide key={theme.id}>
              <ThemeCard theme={theme} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThemeStore;
