"use client";

import { updateUser } from "@/app/admin/users/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cities, province } from "@/data/data";
import { User } from "@/utils/types";
import { CirclePlus, X } from "lucide-react";
import React, { FormEvent, useState } from "react";

export default function ShippingForm({ user }: { user: User }) {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [addAddress, setAddAddress] = useState(false);

  const [selectedProvince, setSelectedProvince] = useState("-1");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [plate, setPlate] = useState("");
  const [unit, setUnit] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [theProvince, setTheProvince] = useState("");

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  const changeCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && user) {
      setName(user.name);
      setPhone(user.phone);
    } else {
      setName("");
      setPhone("");
    }
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_id", user._id.toString());
    formData.append("role", user.role || "USER");
    formData.append("name", name);
    formData.append("phone", phone);

    const address = {
      street: street,
      plate: plate,
      city: city,
      postalCode: postalCode,
      province: theProvince,
      unit: unit || "",
    };
    formData.append("address", JSON.stringify(address));

    try {
      const errors = await updateUser(formData);

      if (errors) {
        // Handle validation errors
        console.error("Validation errors:", errors);
        return;
      }

      // Optionally: show a success message or update UI
      setIsOpenModal(false); // Close the modal after submission
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <div
      className={`fixed right-0 justify-end min-[600px]:justify-center top-0 z-50 flex h-screen w-full cursor-default flex-col items-center bg-black/40 dark:bg-black/80 transition-all duration-500 ${
        isOpenModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={closeModalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`overflow-hidden dark:bg-neutral-800 min-[600px]:w-[550px] max-sm:fixed bottom-0 right-0 w-full rounded-lg bg-white relative flex flex-col shadow transition-all duration-500 dark:text-white ${
          isOpenModal ? "opacity-100 h-fit" : "opacity-0 "
        }
        ${addAddress ? "h-[80vh] max-lg:h-screen" : ""}`}
      >
        {/* Header Section */}
        <div className="flex px-4 items-center justify-between sticky top-0 py-4 border-b dark:border-b-neutral-700 bg-white dark:bg-neutral-800 z-10">
          <p className="font-irsansb">
            {addAddress ? "جزییات آدرس" : "انتخاب آدرس"}
          </p>
          <X size={18} onClick={closeModalHandler} className="cursor-pointer" />
        </div>

        {/* Middle Scrollable Content */}
        <div
          className={`flex-1 overflow-auto px-5 ${
            addAddress ? "h-screen lg:h-96" : ""
          }`}
        >
          {addAddress ? (
            <form
              onSubmit={submitHandler}
              className="text-sm space-y-6 px-3 py-5 bg-white dark:bg-neutral-800 rounded-lg"
            >
              <div className="space-y-2">
                <label
                  htmlFor="province"
                  className="text-neutral-700 dark:text-neutral-50"
                >
                  استان
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500"
                  name="province"
                  id="province"
                  onChange={(e) => {
                    setSelectedProvince(e.target.value);
                    setTheProvince(
                      province.find(
                        (item) => item.id === Number(e.target.value)
                      ).title
                    );
                  }}
                >
                  <option value="-1"></option>
                  {province.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="text-neutral-700 dark:text-neutral-50"
                >
                  شهر
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500"
                  name="city"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                >
                  {cities
                    .filter((item) => {
                      return item.province_id === Number(selectedProvince);
                    })
                    .map((item) => (
                      <option value={item.title} key={item.id}>
                        {item.title}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex-1 space-y-2">
                <label
                  htmlFor="street"
                  className="text-neutral-700 dark:text-neutral-50"
                >
                  محله
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="street"
                  name="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label
                    htmlFor="plate"
                    className="text-neutral-700 dark:text-neutral-50"
                  >
                    پلاک
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="plate"
                    name="plate"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500 "
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <label
                    htmlFor="unit"
                    className="text-neutral-700 dark:text-neutral-50"
                  >
                    واحد
                  </label>
                  <Input
                    type="text"
                    id="unit"
                    name="unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="postalcode"
                  className="text-neutral-700 dark:text-neutral-50"
                >
                  کدپستی
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="postalcode"
                  name="postalcode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500 "
                />

                <span className="text-xs text-neutral-500">
                  کد‌پستی باید ۱۰ رقم و بدون خط تیره باشد.
                </span>
              </div>

              <div className="flex items-center space-x-2 gap-1">
                <Input
                  type="checkbox"
                  id="same-recipient"
                  className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md dark:bg-neutral-700 dark:border-neutral-500"
                  onChange={changeCheckboxHandler}
                />
                <label
                  htmlFor="same-recipient"
                  className="text-neutral-700 dark:text-neutral-50"
                >
                  گیرنده سفارش خودم هستم.
                </label>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-neutral-700 dark:text-neutral-50"
                >
                  نام و نام خانوادگی گیرنده
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-neutral-700 dark:text-neutral-50"
                >
                  شماره موبایل
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100 dark:bg-neutral-700 dark:border-neutral-500"
                />
                <span className="text-xs text-neutral-500">
                  مثل: ۰۹۱۲۳۴۵۶۷۸۹
                </span>
              </div>

              {/* Footer Section */}
              {addAddress && (
                <div className="bg-white dark:bg-neutral-800 dark:border-t-neutral-500 z-10 p-3 border-t sticky bottom-0">
                  <Button className="w-full" type="submit">
                    ثبت آدرس
                  </Button>
                </div>
              )}
            </form>
          ) : (
            <button
              className="text-sky-400 text-sm flex items-center gap-3 py-5"
              onClick={() => setAddAddress(true)}
            >
              <CirclePlus size={18} />
              افزودن آدرس
            </button>
          )}
        </div>
      </div>
    </div>
  );
}