import { updateUser } from "@/app/admin/users/action";
import { User } from "@/utils/types";
import { Edit2, Plus, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Modal from "../ui/Modal";

export default function PersonalInfo({ user }: { user: User }) {
  const [formData, setFormData] = useState({
    email: user.email || "",
    name: user.name || "",
    phone: user.phone || "",
    password: user.password || "",
    job: user.job || "",
    idNumber: user.idNumber || "",
    role: user.role,
  });

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const closeModalHandler = () => setActiveModal(null);

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("_id", user._id.toString());
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    await updateUser(data);
    setLoading(false);
    closeModalHandler();
  };

  return (
    <>
      <div className="flex border rounded-md px-5 flex-col lg:flex-row mx-4 lg:mx-0">
        <div className="flex-1 divide-y-2 divide-neutral-100 dark:divide-neutral-900">
          {[
            { label: "نام و نام خانوادگی", value: user.name, modal: "name" },
            { label: "شماره موبایل", value: user.phone, modal: "phone" },
            { label: "رمز عبور", value: "•••••••", modal: "password" },
          ].map(({ label, value, modal }) => (
            <div
              key={modal}
              className="p-5 h-20 flex justify-between items-center"
            >
              <div className="flex flex-col gap-3">
                <span className="text-neutral-400 text-sm">{label}</span>
                <span
                  className={`text-neutral-700 dark:text-white ${
                    modal === "password" ? "opacity-50" : ""
                  }`}
                >
                  {value}
                </span>
              </div>
              <Edit2
                onClick={() => setActiveModal(modal)}
                size={20}
                className={`text-neutral-500 ${
                  modal === "password" ? "opacity-50" : ""
                }`}
              />
            </div>
          ))}
        </div>

        <div className="lg:w-0.5 w-full max-lg:h-0.5 bg-neutral-100 dark:bg-neutral-900"></div>

        <div className="flex-1 divide-y-2 divide-neutral-100 dark:divide-neutral-900">
          {[
            { label: "کد ملی", value: user.idNumber, modal: "idNumber" },
            { label: "ایمیل", value: user.email, modal: "email" },
            { label: "شغل", value: user.job, modal: "job" },
          ].map(({ label, value, modal }) => (
            <div
              key={modal}
              className="p-5 h-20 flex justify-between items-center"
            >
              <div className="flex flex-col gap-3">
                <span className="text-neutral-400 text-sm">{label}</span>
                <span className="text-neutral-700 dark:text-white">
                  {value}
                </span>
              </div>
              <span
                className="text-neutral-500 cursor-pointer"
                onClick={() => setActiveModal(modal)}
              >
                {value ? <Edit2 size={20} /> : <Plus size={20} />}
              </span>
            </div>
          ))}
        </div>
      </div>

      {[
        {
          modal: "email",
          title: "پست الکترونیکی خود را وارد کنید",
          field: "email",
        },
        {
          modal: "name",
          title: "نام و نام خانوادگی خود را وارد کنید",
          field: "name",
        },
        {
          modal: "phone",
          title: "شماره موبایل خود را وارد کنید",
          field: "phone",
        },
        { modal: "job", title: "شغل خود را وارد کنید", field: "job" },
        {
          modal: "idNumber",
          title: "کد ملی خود را وارد کنید",
          field: "idNumber",
        },
      ].map(({ modal, title, field }) => (
        <Modal
          key={modal}
          isOpen={activeModal === modal}
          closeModalHandler={closeModalHandler}
        >
          <div className="border-b dark:border-b-neutral-700 py-3 text-neutral-800 dark:text-white flex justify-between items-center">
            <h2 className="text-lg font-irsansb">{title}</h2>
            <Button variant="ghost" onClick={closeModalHandler}>
              <X />
            </Button>
          </div>
          <form onSubmit={submitHandler} className="flex flex-col gap-5 my-5">
            <Input
              type="text"
              value={formData[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
              disabled={loading}
            />
            <Button
              type="submit"
              variant={formData[field].trim() ? "default" : "disabled"}
              disabled={loading}
            >
              {loading ? "در حال ارسال..." : "تایید"}
            </Button>
          </form>
        </Modal>
      ))}
    </>
  );
}
