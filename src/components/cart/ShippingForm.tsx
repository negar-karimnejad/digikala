"use client";

import { updateUser } from "@/app/admin/users/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cities, province } from "@/data/data";
import { useCart } from "@/utils/cartItemsContext";
import { User } from "@/utils/types";
import useScroll from "@/utils/useScroll";
import axios from "axios";
import { CirclePlus, MapPin, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

export default function ShippingForm({ user }: { user: User }) {
  const [isOpenModal, setIsOpenModal] = useState(user.address ? false : true);
  const [addAddress, setAddAddress] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedProvince, setSelectedProvince] = useState("-1");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [plate, setPlate] = useState("");
  const [unit, setUnit] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [theProvince, setTheProvince] = useState("");

  const { isVisible } = useScroll();
  const { cart, totalPrice } = useCart();

  const router = useRouter();

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

  const handleCheckout = async () => {
    try {
      setLoading(true);

      // Create the checkout request using axios
      const response = await axios.post("/api/checkout", {
        totalPrice,
        user,
      });

      const paymentUrl = response.data.paymentUrl;

      if (paymentUrl) {
        window.location.href = paymentUrl; // Redirect to Zarinpal payment page
      } else {
        console.error("Payment URL not received");
      }
    } catch (error) {
      console.error("Failed to create checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cart.length === 0) router.push("/checkout/cart");
  }, [cart.length, router]);

  return (
    <>
      {user.address && (
        <>
          <div className="relative grid grid-cols-12 gap-3 px-4 lg:px-20">
            <div className="lg:col-span-9 col-span-12 lg:border rounded-lg">
              <div className="px-4 sm:px-8 text-sm py-4 flex flex-col gap-10">
                <div>
                  <p className="mr-7 text-neutral-500">آدرس تحویل سفارش</p>
                  <p className="font-irsansb flex items-center my-3 gap-3">
                    <MapPin size={20} />
                    {user.address.street}
                  </p>
                  <p className="mr-7 text-neutral-500">{user.name}</p>
                </div>
                <div className="border-b"></div>
                <div>
                  <p className="mr-7 text-neutral-500 mb-5">کالاهای ارسالی</p>
                  <div className="flex gap-5 flex-wrap items-center">
                    {cart.map((product) => (
                      <div
                        key={product._id.toString()}
                        className="shadow h-52 w-40"
                      >
                        <div className="flex items-center flex-col">
                          <Image
                            src={product.thumbnail}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="flex-1 w-32 h-32 object-contain"
                          />
                          <p
                            title={product.title}
                            className="overflow-hidden w-full text-ellipsis whitespace-nowrap text-xs font-irsansb text-neutral-600 dark:text-neutral-100 p-4"
                          >
                            {product.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 h-2 bg-neutral-100 dark:bg-neutral-800 lg:hidden"></div>

            <div
              className={`lg:h-96 h-72 lg:col-span-3 col-span-12 sticky z-10 ${
                isVisible ? "top-[7rem]" : "top-20"
              }`}
            >
              <div className="lg:border rounded-lg lg:space-y-6 space-y-4 lg:p-6 pt-6">
                <p className="flex items-center justify-between dark:text-neutral-300 text-neutral-500">
                  <span className="text-sm dark:text-neutral-300">
                    قیمت کالاها ({cart.length})
                  </span>
                  <span className="font-bold flex items-center gap-1">
                    {totalPrice.toLocaleString()}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-neutral-600 dark:fill-neutral-300"
                    >
                      <path d="M9.696 17.76L9.48 16.776C9.96 16.712 10.4 16.62 10.8 16.5C11.208 16.388 11.556 16.224 11.844 16.008C12.14 15.792 12.368 15.508 12.528 15.156C12.688 14.804 12.768 14.364 12.768 13.836C12.768 13.292 12.668 12.84 12.468 12.48C12.268 12.12 12.008 11.94 11.688 11.94C11.52 11.94 11.364 12.004 11.22 12.132C11.076 12.26 10.956 12.432 10.86 12.648C10.772 12.864 10.728 13.1 10.728 13.356C10.728 13.5 10.76 13.62 10.824 13.716C10.888 13.804 10.98 13.876 11.1 13.932C11.228 13.98 11.388 14.016 11.58 14.04C11.772 14.064 11.996 14.076 12.252 14.076H14.784C14.952 14.076 15.072 14.124 15.144 14.22C15.224 14.308 15.264 14.416 15.264 14.544C15.264 14.672 15.208 14.792 15.096 14.904C14.984 15.008 14.84 15.06 14.664 15.06H11.796C11.436 15.06 11.1 15.008 10.788 14.904C10.484 14.8 10.236 14.64 10.044 14.424C9.86 14.2 9.768 13.908 9.768 13.548C9.768 13.212 9.82 12.892 9.924 12.588C10.028 12.276 10.168 12 10.344 11.76C10.528 11.512 10.74 11.316 10.98 11.172C11.228 11.028 11.496 10.956 11.784 10.956C12.152 10.956 12.48 11.064 12.768 11.28C13.056 11.496 13.284 11.824 13.452 12.264C13.62 12.696 13.704 13.244 13.704 13.908C13.704 14.652 13.552 15.292 13.248 15.828C12.952 16.372 12.504 16.804 11.904 17.124C11.312 17.444 10.576 17.656 9.696 17.76ZM14.6602 15.06L14.7802 14.076C15.2522 14.076 15.6202 14.06 15.8842 14.028C16.1482 13.988 16.3362 13.896 16.4482 13.752C16.5602 13.6 16.6162 13.364 16.6162 13.044C16.6162 12.844 16.5842 12.608 16.5202 12.336C16.4562 12.056 16.3722 11.76 16.2682 11.448C16.1642 11.136 16.0522 10.828 15.9322 10.524L16.9042 10.164C17.0082 10.42 17.1042 10.712 17.1922 11.04C17.2882 11.368 17.3682 11.692 17.4322 12.012C17.4962 12.332 17.5282 12.612 17.5282 12.852C17.5282 13.252 17.4722 13.592 17.3602 13.872C17.2562 14.152 17.0882 14.38 16.8562 14.556C16.6242 14.732 16.3242 14.86 15.9562 14.94C15.5962 15.02 15.1642 15.06 14.6602 15.06ZM17.2762 8.916C17.1082 8.916 16.9642 8.86 16.8442 8.748C16.7322 8.628 16.6762 8.488 16.6762 8.328C16.6762 8.168 16.7322 8.028 16.8442 7.908C16.9642 7.788 17.1082 7.728 17.2762 7.728C17.4362 7.728 17.5722 7.788 17.6842 7.908C17.8042 8.028 17.8642 8.168 17.8642 8.328C17.8642 8.488 17.8042 8.628 17.6842 8.748C17.5722 8.86 17.4362 8.916 17.2762 8.916ZM15.6322 8.916C15.4642 8.916 15.3202 8.86 15.2002 8.748C15.0882 8.628 15.0322 8.488 15.0322 8.328C15.0322 8.168 15.0882 8.028 15.2002 7.908C15.3202 7.788 15.4642 7.728 15.6322 7.728C15.7922 7.728 15.9282 7.788 16.0402 7.908C16.1602 8.028 16.2202 8.168 16.2202 8.328C16.2202 8.488 16.1602 8.628 16.0402 8.748C15.9282 8.86 15.7922 8.916 15.6322 8.916Z" />
                      <path d="M3.492 17.06C2.852 17.06 2.36 16.988 2.016 16.844C1.68 16.7 1.448 16.476 1.32 16.172C1.192 15.868 1.12 15.476 1.104 14.996L0.864 8.432H1.848L2.088 14.612C2.104 15.004 2.14 15.308 2.196 15.524C2.26 15.732 2.396 15.876 2.604 15.956C2.82 16.036 3.156 16.076 3.612 16.076C3.78 16.076 3.9 16.124 3.972 16.22C4.052 16.308 4.092 16.416 4.092 16.544C4.092 16.672 4.036 16.792 3.924 16.904C3.812 17.008 3.668 17.06 3.492 17.06ZM3.49219 17.06L3.61219 16.076C3.83619 16.076 4.02419 16.028 4.17619 15.932C4.32819 15.836 4.47619 15.676 4.62019 15.452C4.76419 15.228 4.92019 14.928 5.08819 14.552C5.32019 14.04 5.54819 13.652 5.77219 13.388C6.00419 13.124 6.23219 12.944 6.45619 12.848C6.68819 12.752 6.91619 12.704 7.14019 12.704C7.41219 12.704 7.66419 12.776 7.89619 12.92C8.12819 13.056 8.33219 13.24 8.50819 13.472C8.68419 13.704 8.82019 13.96 8.91619 14.24C9.02019 14.512 9.07219 14.784 9.07219 15.056C9.07219 15.536 8.98819 15.92 8.82019 16.208C8.65219 16.488 8.43619 16.692 8.17219 16.82C7.91619 16.94 7.64819 17 7.36819 17C7.12019 17 6.80019 16.952 6.40819 16.856C6.02419 16.76 5.53619 16.516 4.94419 16.124L5.41219 15.368C5.80419 15.616 6.15619 15.788 6.46819 15.884C6.78819 15.972 7.05219 16.016 7.26019 16.016C7.49219 16.016 7.67619 15.984 7.81219 15.92C7.94819 15.848 8.04819 15.748 8.11219 15.62C8.17619 15.492 8.20819 15.348 8.20819 15.188C8.20819 14.956 8.15219 14.724 8.04019 14.492C7.92819 14.26 7.78419 14.068 7.60819 13.916C7.44019 13.764 7.26019 13.688 7.06819 13.688C6.92419 13.688 6.78419 13.728 6.64819 13.808C6.51219 13.888 6.37219 14.036 6.22819 14.252C6.08419 14.468 5.92019 14.78 5.73619 15.188C5.54419 15.62 5.36019 15.964 5.18419 16.22C5.01619 16.468 4.84419 16.652 4.66819 16.772C4.49219 16.892 4.30819 16.968 4.11619 17C3.93219 17.04 3.72419 17.06 3.49219 17.06Z" />
                      <path d="M0.36 6.012C0.36 5.82 0.376 5.616 0.408 5.4C0.448 5.176 0.504 4.94 0.576 4.692C0.656 4.436 0.752 4.168 0.864 3.888L1.728 4.224C1.648 4.448 1.576 4.66 1.512 4.86C1.456 5.06 1.412 5.248 1.38 5.424C1.356 5.6 1.344 5.768 1.344 5.928C1.344 6.344 1.452 6.688 1.668 6.96C1.884 7.232 2.18 7.436 2.556 7.572C2.932 7.708 3.356 7.776 3.828 7.776C4.364 7.776 4.812 7.704 5.172 7.56C5.54 7.416 5.832 7.224 6.048 6.984C6.264 6.752 6.416 6.492 6.504 6.204C6.6 5.916 6.648 5.632 6.648 5.352C6.648 5.048 6.588 4.68 6.468 4.248C6.356 3.816 6.144 3.28 5.832 2.64L6.732 2.184C6.892 2.488 7.036 2.808 7.164 3.144C7.3 3.472 7.408 3.812 7.488 4.164C7.576 4.508 7.62 4.86 7.62 5.22C7.62 5.532 7.58 5.852 7.5 6.18C7.428 6.508 7.304 6.824 7.128 7.128C6.952 7.44 6.716 7.716 6.42 7.956C6.132 8.204 5.772 8.4 5.34 8.544C4.916 8.688 4.408 8.76 3.816 8.76C3.352 8.76 2.908 8.704 2.484 8.592C2.068 8.488 1.7 8.324 1.38 8.1C1.068 7.876 0.82 7.592 0.636 7.248C0.452 6.904 0.36 6.492 0.36 6.012ZM3.984 1.224C3.816 1.224 3.672 1.168 3.552 1.056C3.44 0.936 3.384 0.796 3.384 0.636C3.384 0.476 3.44 0.336 3.552 0.216C3.672 0.0959998 3.816 0.0359999 3.984 0.0359999C4.144 0.0359999 4.28 0.0959998 4.392 0.216C4.512 0.336 4.572 0.476 4.572 0.636C4.572 0.796 4.512 0.936 4.392 1.056C4.28 1.168 4.144 1.224 3.984 1.224Z" />
                    </svg>
                  </span>
                </p>
                <div className="border-b"></div>
                <p className="flex items-center justify-between">
                  <span className="text-sm dark:text-neutral-300">
                    هزینه ارسال
                  </span>
                  <span className="font-bold text-neutral-700 dark:text-white flex items-center gap-1">
                    رایگان
                  </span>
                </p>
                <div className="border-b"></div>
                <p className="flex items-center justify-between dark:text-neutral-300 text-neutral-500">
                  <span className="text-sm dark:text-neutral-300">
                    قابل پرداخت
                  </span>
                  <span className="font-bold flex items-center gap-1">
                    {totalPrice.toLocaleString()}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-neutral-600 dark:fill-neutral-300"
                    >
                      <path d="M9.696 17.76L9.48 16.776C9.96 16.712 10.4 16.62 10.8 16.5C11.208 16.388 11.556 16.224 11.844 16.008C12.14 15.792 12.368 15.508 12.528 15.156C12.688 14.804 12.768 14.364 12.768 13.836C12.768 13.292 12.668 12.84 12.468 12.48C12.268 12.12 12.008 11.94 11.688 11.94C11.52 11.94 11.364 12.004 11.22 12.132C11.076 12.26 10.956 12.432 10.86 12.648C10.772 12.864 10.728 13.1 10.728 13.356C10.728 13.5 10.76 13.62 10.824 13.716C10.888 13.804 10.98 13.876 11.1 13.932C11.228 13.98 11.388 14.016 11.58 14.04C11.772 14.064 11.996 14.076 12.252 14.076H14.784C14.952 14.076 15.072 14.124 15.144 14.22C15.224 14.308 15.264 14.416 15.264 14.544C15.264 14.672 15.208 14.792 15.096 14.904C14.984 15.008 14.84 15.06 14.664 15.06H11.796C11.436 15.06 11.1 15.008 10.788 14.904C10.484 14.8 10.236 14.64 10.044 14.424C9.86 14.2 9.768 13.908 9.768 13.548C9.768 13.212 9.82 12.892 9.924 12.588C10.028 12.276 10.168 12 10.344 11.76C10.528 11.512 10.74 11.316 10.98 11.172C11.228 11.028 11.496 10.956 11.784 10.956C12.152 10.956 12.48 11.064 12.768 11.28C13.056 11.496 13.284 11.824 13.452 12.264C13.62 12.696 13.704 13.244 13.704 13.908C13.704 14.652 13.552 15.292 13.248 15.828C12.952 16.372 12.504 16.804 11.904 17.124C11.312 17.444 10.576 17.656 9.696 17.76ZM14.6602 15.06L14.7802 14.076C15.2522 14.076 15.6202 14.06 15.8842 14.028C16.1482 13.988 16.3362 13.896 16.4482 13.752C16.5602 13.6 16.6162 13.364 16.6162 13.044C16.6162 12.844 16.5842 12.608 16.5202 12.336C16.4562 12.056 16.3722 11.76 16.2682 11.448C16.1642 11.136 16.0522 10.828 15.9322 10.524L16.9042 10.164C17.0082 10.42 17.1042 10.712 17.1922 11.04C17.2882 11.368 17.3682 11.692 17.4322 12.012C17.4962 12.332 17.5282 12.612 17.5282 12.852C17.5282 13.252 17.4722 13.592 17.3602 13.872C17.2562 14.152 17.0882 14.38 16.8562 14.556C16.6242 14.732 16.3242 14.86 15.9562 14.94C15.5962 15.02 15.1642 15.06 14.6602 15.06ZM17.2762 8.916C17.1082 8.916 16.9642 8.86 16.8442 8.748C16.7322 8.628 16.6762 8.488 16.6762 8.328C16.6762 8.168 16.7322 8.028 16.8442 7.908C16.9642 7.788 17.1082 7.728 17.2762 7.728C17.4362 7.728 17.5722 7.788 17.6842 7.908C17.8042 8.028 17.8642 8.168 17.8642 8.328C17.8642 8.488 17.8042 8.628 17.6842 8.748C17.5722 8.86 17.4362 8.916 17.2762 8.916ZM15.6322 8.916C15.4642 8.916 15.3202 8.86 15.2002 8.748C15.0882 8.628 15.0322 8.488 15.0322 8.328C15.0322 8.168 15.0882 8.028 15.2002 7.908C15.3202 7.788 15.4642 7.728 15.6322 7.728C15.7922 7.728 15.9282 7.788 16.0402 7.908C16.1602 8.028 16.2202 8.168 16.2202 8.328C16.2202 8.488 16.1602 8.628 16.0402 8.748C15.9282 8.86 15.7922 8.916 15.6322 8.916Z" />
                      <path d="M3.492 17.06C2.852 17.06 2.36 16.988 2.016 16.844C1.68 16.7 1.448 16.476 1.32 16.172C1.192 15.868 1.12 15.476 1.104 14.996L0.864 8.432H1.848L2.088 14.612C2.104 15.004 2.14 15.308 2.196 15.524C2.26 15.732 2.396 15.876 2.604 15.956C2.82 16.036 3.156 16.076 3.612 16.076C3.78 16.076 3.9 16.124 3.972 16.22C4.052 16.308 4.092 16.416 4.092 16.544C4.092 16.672 4.036 16.792 3.924 16.904C3.812 17.008 3.668 17.06 3.492 17.06ZM3.49219 17.06L3.61219 16.076C3.83619 16.076 4.02419 16.028 4.17619 15.932C4.32819 15.836 4.47619 15.676 4.62019 15.452C4.76419 15.228 4.92019 14.928 5.08819 14.552C5.32019 14.04 5.54819 13.652 5.77219 13.388C6.00419 13.124 6.23219 12.944 6.45619 12.848C6.68819 12.752 6.91619 12.704 7.14019 12.704C7.41219 12.704 7.66419 12.776 7.89619 12.92C8.12819 13.056 8.33219 13.24 8.50819 13.472C8.68419 13.704 8.82019 13.96 8.91619 14.24C9.02019 14.512 9.07219 14.784 9.07219 15.056C9.07219 15.536 8.98819 15.92 8.82019 16.208C8.65219 16.488 8.43619 16.692 8.17219 16.82C7.91619 16.94 7.64819 17 7.36819 17C7.12019 17 6.80019 16.952 6.40819 16.856C6.02419 16.76 5.53619 16.516 4.94419 16.124L5.41219 15.368C5.80419 15.616 6.15619 15.788 6.46819 15.884C6.78819 15.972 7.05219 16.016 7.26019 16.016C7.49219 16.016 7.67619 15.984 7.81219 15.92C7.94819 15.848 8.04819 15.748 8.11219 15.62C8.17619 15.492 8.20819 15.348 8.20819 15.188C8.20819 14.956 8.15219 14.724 8.04019 14.492C7.92819 14.26 7.78419 14.068 7.60819 13.916C7.44019 13.764 7.26019 13.688 7.06819 13.688C6.92419 13.688 6.78419 13.728 6.64819 13.808C6.51219 13.888 6.37219 14.036 6.22819 14.252C6.08419 14.468 5.92019 14.78 5.73619 15.188C5.54419 15.62 5.36019 15.964 5.18419 16.22C5.01619 16.468 4.84419 16.652 4.66819 16.772C4.49219 16.892 4.30819 16.968 4.11619 17C3.93219 17.04 3.72419 17.06 3.49219 17.06Z" />
                      <path d="M0.36 6.012C0.36 5.82 0.376 5.616 0.408 5.4C0.448 5.176 0.504 4.94 0.576 4.692C0.656 4.436 0.752 4.168 0.864 3.888L1.728 4.224C1.648 4.448 1.576 4.66 1.512 4.86C1.456 5.06 1.412 5.248 1.38 5.424C1.356 5.6 1.344 5.768 1.344 5.928C1.344 6.344 1.452 6.688 1.668 6.96C1.884 7.232 2.18 7.436 2.556 7.572C2.932 7.708 3.356 7.776 3.828 7.776C4.364 7.776 4.812 7.704 5.172 7.56C5.54 7.416 5.832 7.224 6.048 6.984C6.264 6.752 6.416 6.492 6.504 6.204C6.6 5.916 6.648 5.632 6.648 5.352C6.648 5.048 6.588 4.68 6.468 4.248C6.356 3.816 6.144 3.28 5.832 2.64L6.732 2.184C6.892 2.488 7.036 2.808 7.164 3.144C7.3 3.472 7.408 3.812 7.488 4.164C7.576 4.508 7.62 4.86 7.62 5.22C7.62 5.532 7.58 5.852 7.5 6.18C7.428 6.508 7.304 6.824 7.128 7.128C6.952 7.44 6.716 7.716 6.42 7.956C6.132 8.204 5.772 8.4 5.34 8.544C4.916 8.688 4.408 8.76 3.816 8.76C3.352 8.76 2.908 8.704 2.484 8.592C2.068 8.488 1.7 8.324 1.38 8.1C1.068 7.876 0.82 7.592 0.636 7.248C0.452 6.904 0.36 6.492 0.36 6.012ZM3.984 1.224C3.816 1.224 3.672 1.168 3.552 1.056C3.44 0.936 3.384 0.796 3.384 0.636C3.384 0.476 3.44 0.336 3.552 0.216C3.672 0.0959998 3.816 0.0359999 3.984 0.0359999C4.144 0.0359999 4.28 0.0959998 4.392 0.216C4.512 0.336 4.572 0.476 4.572 0.636C4.572 0.796 4.512 0.936 4.392 1.056C4.28 1.168 4.144 1.224 3.984 1.224Z" />
                    </svg>
                  </span>
                </p>
                <Button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="max-lg:hidden py-2 font-irsansb w-full"
                >
                  {loading ? "در حال ثبت سفارش..." : "ثبت سفارش"}
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:hidden fixed flex shadow-[rgba(17,_17,_26,_0.2)_0px_0px_5px] items-center py-3 px-4 bg-white dark:bg-neutral-900 w-full bottom-0 right-0 border-t z-30">
            <div className="flex justify-between items-center w-full">
              <Button disabled={loading} onClick={handleCheckout}>
                {loading ? "در حال ثبت سفارش..." : "ثبت سفارش"}
              </Button>
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                  جمع سبد خرید
                </p>
                <p className="text-neutral-800 dark:text-neutral-100 text-sm flex items-center gap-1">
                  {totalPrice.toLocaleString()}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-neutral-700 dark:fill-neutral-400"
                  >
                    <path d="M9.696 17.76L9.48 16.776C9.96 16.712 10.4 16.62 10.8 16.5C11.208 16.388 11.556 16.224 11.844 16.008C12.14 15.792 12.368 15.508 12.528 15.156C12.688 14.804 12.768 14.364 12.768 13.836C12.768 13.292 12.668 12.84 12.468 12.48C12.268 12.12 12.008 11.94 11.688 11.94C11.52 11.94 11.364 12.004 11.22 12.132C11.076 12.26 10.956 12.432 10.86 12.648C10.772 12.864 10.728 13.1 10.728 13.356C10.728 13.5 10.76 13.62 10.824 13.716C10.888 13.804 10.98 13.876 11.1 13.932C11.228 13.98 11.388 14.016 11.58 14.04C11.772 14.064 11.996 14.076 12.252 14.076H14.784C14.952 14.076 15.072 14.124 15.144 14.22C15.224 14.308 15.264 14.416 15.264 14.544C15.264 14.672 15.208 14.792 15.096 14.904C14.984 15.008 14.84 15.06 14.664 15.06H11.796C11.436 15.06 11.1 15.008 10.788 14.904C10.484 14.8 10.236 14.64 10.044 14.424C9.86 14.2 9.768 13.908 9.768 13.548C9.768 13.212 9.82 12.892 9.924 12.588C10.028 12.276 10.168 12 10.344 11.76C10.528 11.512 10.74 11.316 10.98 11.172C11.228 11.028 11.496 10.956 11.784 10.956C12.152 10.956 12.48 11.064 12.768 11.28C13.056 11.496 13.284 11.824 13.452 12.264C13.62 12.696 13.704 13.244 13.704 13.908C13.704 14.652 13.552 15.292 13.248 15.828C12.952 16.372 12.504 16.804 11.904 17.124C11.312 17.444 10.576 17.656 9.696 17.76ZM14.6602 15.06L14.7802 14.076C15.2522 14.076 15.6202 14.06 15.8842 14.028C16.1482 13.988 16.3362 13.896 16.4482 13.752C16.5602 13.6 16.6162 13.364 16.6162 13.044C16.6162 12.844 16.5842 12.608 16.5202 12.336C16.4562 12.056 16.3722 11.76 16.2682 11.448C16.1642 11.136 16.0522 10.828 15.9322 10.524L16.9042 10.164C17.0082 10.42 17.1042 10.712 17.1922 11.04C17.2882 11.368 17.3682 11.692 17.4322 12.012C17.4962 12.332 17.5282 12.612 17.5282 12.852C17.5282 13.252 17.4722 13.592 17.3602 13.872C17.2562 14.152 17.0882 14.38 16.8562 14.556C16.6242 14.732 16.3242 14.86 15.9562 14.94C15.5962 15.02 15.1642 15.06 14.6602 15.06ZM17.2762 8.916C17.1082 8.916 16.9642 8.86 16.8442 8.748C16.7322 8.628 16.6762 8.488 16.6762 8.328C16.6762 8.168 16.7322 8.028 16.8442 7.908C16.9642 7.788 17.1082 7.728 17.2762 7.728C17.4362 7.728 17.5722 7.788 17.6842 7.908C17.8042 8.028 17.8642 8.168 17.8642 8.328C17.8642 8.488 17.8042 8.628 17.6842 8.748C17.5722 8.86 17.4362 8.916 17.2762 8.916ZM15.6322 8.916C15.4642 8.916 15.3202 8.86 15.2002 8.748C15.0882 8.628 15.0322 8.488 15.0322 8.328C15.0322 8.168 15.0882 8.028 15.2002 7.908C15.3202 7.788 15.4642 7.728 15.6322 7.728C15.7922 7.728 15.9282 7.788 16.0402 7.908C16.1602 8.028 16.2202 8.168 16.2202 8.328C16.2202 8.488 16.1602 8.628 16.0402 8.748C15.9282 8.86 15.7922 8.916 15.6322 8.916Z" />
                    <path d="M3.492 17.06C2.852 17.06 2.36 16.988 2.016 16.844C1.68 16.7 1.448 16.476 1.32 16.172C1.192 15.868 1.12 15.476 1.104 14.996L0.864 8.432H1.848L2.088 14.612C2.104 15.004 2.14 15.308 2.196 15.524C2.26 15.732 2.396 15.876 2.604 15.956C2.82 16.036 3.156 16.076 3.612 16.076C3.78 16.076 3.9 16.124 3.972 16.22C4.052 16.308 4.092 16.416 4.092 16.544C4.092 16.672 4.036 16.792 3.924 16.904C3.812 17.008 3.668 17.06 3.492 17.06ZM3.49219 17.06L3.61219 16.076C3.83619 16.076 4.02419 16.028 4.17619 15.932C4.32819 15.836 4.47619 15.676 4.62019 15.452C4.76419 15.228 4.92019 14.928 5.08819 14.552C5.32019 14.04 5.54819 13.652 5.77219 13.388C6.00419 13.124 6.23219 12.944 6.45619 12.848C6.68819 12.752 6.91619 12.704 7.14019 12.704C7.41219 12.704 7.66419 12.776 7.89619 12.92C8.12819 13.056 8.33219 13.24 8.50819 13.472C8.68419 13.704 8.82019 13.96 8.91619 14.24C9.02019 14.512 9.07219 14.784 9.07219 15.056C9.07219 15.536 8.98819 15.92 8.82019 16.208C8.65219 16.488 8.43619 16.692 8.17219 16.82C7.91619 16.94 7.64819 17 7.36819 17C7.12019 17 6.80019 16.952 6.40819 16.856C6.02419 16.76 5.53619 16.516 4.94419 16.124L5.41219 15.368C5.80419 15.616 6.15619 15.788 6.46819 15.884C6.78819 15.972 7.05219 16.016 7.26019 16.016C7.49219 16.016 7.67619 15.984 7.81219 15.92C7.94819 15.848 8.04819 15.748 8.11219 15.62C8.17619 15.492 8.20819 15.348 8.20819 15.188C8.20819 14.956 8.15219 14.724 8.04019 14.492C7.92819 14.26 7.78419 14.068 7.60819 13.916C7.44019 13.764 7.26019 13.688 7.06819 13.688C6.92419 13.688 6.78419 13.728 6.64819 13.808C6.51219 13.888 6.37219 14.036 6.22819 14.252C6.08419 14.468 5.92019 14.78 5.73619 15.188C5.54419 15.62 5.36019 15.964 5.18419 16.22C5.01619 16.468 4.84419 16.652 4.66819 16.772C4.49219 16.892 4.30819 16.968 4.11619 17C3.93219 17.04 3.72419 17.06 3.49219 17.06Z" />
                    <path d="M0.36 6.012C0.36 5.82 0.376 5.616 0.408 5.4C0.448 5.176 0.504 4.94 0.576 4.692C0.656 4.436 0.752 4.168 0.864 3.888L1.728 4.224C1.648 4.448 1.576 4.66 1.512 4.86C1.456 5.06 1.412 5.248 1.38 5.424C1.356 5.6 1.344 5.768 1.344 5.928C1.344 6.344 1.452 6.688 1.668 6.96C1.884 7.232 2.18 7.436 2.556 7.572C2.932 7.708 3.356 7.776 3.828 7.776C4.364 7.776 4.812 7.704 5.172 7.56C5.54 7.416 5.832 7.224 6.048 6.984C6.264 6.752 6.416 6.492 6.504 6.204C6.6 5.916 6.648 5.632 6.648 5.352C6.648 5.048 6.588 4.68 6.468 4.248C6.356 3.816 6.144 3.28 5.832 2.64L6.732 2.184C6.892 2.488 7.036 2.808 7.164 3.144C7.3 3.472 7.408 3.812 7.488 4.164C7.576 4.508 7.62 4.86 7.62 5.22C7.62 5.532 7.58 5.852 7.5 6.18C7.428 6.508 7.304 6.824 7.128 7.128C6.952 7.44 6.716 7.716 6.42 7.956C6.132 8.204 5.772 8.4 5.34 8.544C4.916 8.688 4.408 8.76 3.816 8.76C3.352 8.76 2.908 8.704 2.484 8.592C2.068 8.488 1.7 8.324 1.38 8.1C1.068 7.876 0.82 7.592 0.636 7.248C0.452 6.904 0.36 6.492 0.36 6.012ZM3.984 1.224C3.816 1.224 3.672 1.168 3.552 1.056C3.44 0.936 3.384 0.796 3.384 0.636C3.384 0.476 3.44 0.336 3.552 0.216C3.672 0.0959998 3.816 0.0359999 3.984 0.0359999C4.144 0.0359999 4.28 0.0959998 4.392 0.216C4.512 0.336 4.572 0.476 4.572 0.636C4.572 0.796 4.512 0.936 4.392 1.056C4.28 1.168 4.144 1.224 3.984 1.224Z" />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
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
            <X
              size={18}
              onClick={closeModalHandler}
              className="cursor-pointer"
            />
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
    </>
  );
}
