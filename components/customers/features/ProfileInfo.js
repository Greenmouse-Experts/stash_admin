import React, { useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { useLazyActvateCustomerQuery, useLazyDeactvateCustomerQuery } from "@/services/api/routineSlice";
import { Button } from "@/components/UI/button";
import { toast } from "react-toastify";
import { HashSpinner } from "@/components/UI/spinners";


const ProfileInfo = ({data, refetch}) => {

  const [activate] = useLazyActvateCustomerQuery()
  const [deactivate] = useLazyDeactvateCustomerQuery()
  const [isBusy, setIsBusy] = useState(false)

  const id = data?._id;

  const deactivateCustomer = async() => {
    setIsBusy(true)
    await deactivate(id)
      .then((res) => {
        if (res.isSuccess) {
          toast.success(res.data.msg);
          refetch()
        }
        if (res.isError) {
          toast.error(res.error.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.data.msg);
      });
      setIsBusy(false)
  }

  const activateCustomer = async() => {
    setIsBusy(true)
    await activate(id)
      .then((res) => {
        if (res.isSuccess) {
          toast.success(res.data.msg);
          setIsBusy(false)
          refetch()
        }
        if (res.isError) {
          toast.error(res.error.data.msg);
          setIsBusy(false)
        }
      })
      .catch((error) => {
        toast.error(error.data.msg);
        setIsBusy(false)
      });
  }

  return (
    <div>
      <div className="py-16 border-b lg:flex ">
        <div className="lg:w-3/12">
          <p className="fw-600 text-2xl">Personal Data</p>
          <p>Tier 1</p>
        </div>
        <div className="lg:w-9/12 mt-6 lg:mt-0 grid gap-y-8 md:grid-cols-2 gap-x-16">
          <div>
            <div>
              <label className="fw-500 lg:fs-700 text-gray-500">
                First name
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
               value={data?.first_name}
               disabled
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Middle name
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.middle_name}
               disabled
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">Phone</label>
              <div className="w-full  flex items-center p-3 rounded border mt-2 border-gray-400">
                <input
                  type="text"
                  className=" w-full"
                  value={data?.phone}
               disabled
                />
                <p className="fw-600 text-green-500">{data.phone_verified? "verified" : "not verified"}</p>
              </div>
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">Gender</label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value="Male"
              />
            </div>
          </div>
          <div>
            <div>
              <label className="fw-500 lg:fs-700 text-gray-500">
                Last name
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.last_name}
                disabled
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">Email</label>
              <input
                type="email"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.email}
                disabled
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Date of Birth
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={dayjs(data?.dob).format("DD - MMMM - YYYY")}
                disabled
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Date of Registration
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={dayjs(data?.createdAt).format("DD - MMMM - YYYY")}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 border-b lg:flex ">
        <div className="lg:w-3/12">
          <p className="fw-600 text-2xl">Contact Address</p>
          <p>Tier 1</p>
        </div>
        <div className="lg:w-9/12 mt-6 lg:mt-0 grid gap-y-8 md:grid-cols-2 gap-x-16">
          <div>
            <div>
              <label className="fw-500 lg:fs-700 text-gray-500">
                Residential address
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.contact_address?.residential_address}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                State of Residence
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.contact_address?.state}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">Country</label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.contact_address?.country}
              />
            </div>
          </div>
          <div>
            <div>
              <label className="fw-500 lg:fs-700 text-gray-500">
                Local Government Area
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.contact_address?.lga_area}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">Landmark</label>
              <input
                type="email"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.contact_address?.landmark}
              />
            </div>
            {/* <div className="mt-8 text-end">
              <button className="px-4 py-1 text-primary border border-indigo-300 rounded">
                Edit
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="py-16 border-b lg:flex ">
        <div className="lg:w-3/12">
          <p className="fw-600 text-2xl">Stash Wallet</p>
        </div>
        <div className="lg:w-9/12 mt-6 lg:mt-0 grid gap-x-8 md:grid-cols-2 gap-x-16">
          <div>
            <div>
              <label className="fw-500 lg:fs-700 text-gray-500">
                Stash Wallet Number
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                placeholder="3897837813017"
              />
            </div>
          </div>
          <div>
            <div>
              <label className="fw-500 lg:fs-700 text-gray-500">
                Stash Tag
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value="@emmaJ"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 border-b lg:flex ">
        <div className="lg:w-3/12">
          <p className="fw-600 text-2xl">KYC Status</p>
          <p>Tier 2</p>
        </div>
        <div className="lg:w-9/12 grid gap-y-8 mt-6 lg:mt-0 md:grid-cols-2 gap-x-16">
          <div>
            <div className="">
              <label className="fw-500 lg:fs-700 text-gray-500">ID Card</label>
              <div className="w-full  flex items-center p-3 rounded border mt-2 border-gray-400">
                <input
                  type="text"
                  className=" w-full"
                  placeholder="383838992"
                />
                <p className="fw-600 text-green-500">verified</p>
              </div>
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Account Name
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.wallet[0]?.account_name}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Card Type
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.card[0]?.card_type}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Facial Recognition
              </label>
              <div className="w-full  flex items-center p-3 rounded border mt-2 border-gray-400">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1684253872/Stash/face_apebox.png"
                  alt="banner"
                  width={200}
                  height={100}
                  className="w-10 mr-3 circle"
                />
                <input
                  type="text"
                  className=" w-full"
                  value="Facial Recognition"
                />
                <p className="fw-600 text-green-500">verified</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label className="fw-500 lg:fs-700 text-gray-500">Bank</label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.wallet[0]?.bank_name}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Account Number
              </label>
              <input
                type="number"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.wallet[0]?.account_number}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Card Number
              </label>
              <input
                type="email"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={`${(data?.card[0]?.card_number).slice(0,4)} **** **** ${(data?.card[0]?.card_number).slice(12,16)}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 border-b lg:flex ">
        <div className="lg:w-3/12">
          <p className="fw-600 text-2xl">KYC Status</p>
          <p>Tier 3</p>
        </div>
        <div className="lg:w-9/12 grid gap-y-8 mt-6 lg:mt-0 md:grid-cols-2 gap-x-16">
          <div>
            <div>
              <label className="fw-500 lg:fs-700 text-gray-500">
                Identity Verification
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                placeholder="NIN"
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Next of Kin
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.next_of_kin?.first_name? `${data?.next_of_kin?.first_name} ${data?.next_of_kin?.last_name}` : ""}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Email address
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.next_of_kin?.email}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Contact address
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.next_of_kin?.address}
              />
            </div>
          </div>
          <div>
            <div>
              <label className="fw-500 lg:fs-700 text-gray-500">
                ID Number
              </label>
              <input
                type="text"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value="no data"
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">
                Relationship
              </label>
              <input
                type="email"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.next_of_kin?.relationship}
              />
            </div>
            <div className="mt-8">
              <label className="fw-500 lg:fs-700 text-gray-500">Phone no</label>
              <input
                type="email"
                className="p-3 rounded border mt-2 border-gray-400 w-full"
                value={data?.next_of_kin?.phone_numbers[0]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 border-b ">
        <p className="lg:text-3xl fw-600">Verification</p>
        <div className="lg:flex  mt-12">
          <div className="lg:w-3/12">
            <p className="fw-600 text-2xl">BVN</p>
          </div>
          <div className="lg:w-9/12 grid gap-y-8 mt-6 lg:mt-0 md:grid-cols-2 gap-x-16">
            <div>
              <div>
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Full Name on BVN
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="Emmanuel Atikulu*"
                />
              </div>
              <div className="mt-8">
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Phone Number on BVN
                </label>
                <input
                  type="number"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value={data?.bvn?.phone_number}
                />
              </div>
            </div>
            <div>
              <div>
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Date of Birth on BVN
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="13/08/1980*"
                />
              </div>
              <div className="mt-8">
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Address on BVN
                </label>
                <input
                  type="email"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="2, Bale Street, Ikeja, Lagos*"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex  mt-12">
          <div className="lg:w-3/12">
            <p className="fw-600 text-2xl">Phone Number</p>
          </div>
          <div className="lg:w-9/12 grid gap-y-8 mt-6 lg:mt-0 md:grid-cols-2 gap-x-16">
            <div>
              <div>
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Full Name on Phone Number
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="Emmanuel Atikulu"
                />
              </div>
              <div className="mt-8">
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Phone Number on Phone Number
                </label>
                <input
                  type="number"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  placeholder="Emmanuel Atikulu"
                  value="09026195990"
                />
              </div>
            </div>
            <div>
              <div>
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Date of Birth on Phone Number
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="13/08/1980"
                />
              </div>
              <div className="mt-8">
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Address on Phone Number
                </label>
                <input
                  type="email"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="2, Bale Street, Ikeja, Lagos"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex  mt-12">
          <div className="lg:w-3/12">
            <p className="fw-600 text-2xl">ID Card</p>
          </div>
          <div className="lg:w-9/12 grid gap-y-8 mt-6 lg:mt-0 md:grid-cols-2 gap-x-16">
            <div>
              <div>
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Full Name on ID Card
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="Emmanuel Atikulu"
                />
              </div>
              <div className="mt-8">
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Phone Number on ID Card
                </label>
                <input
                  type="number"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  placeholder="Emmanuel Atikulu"
                  value="09026195990"
                />
              </div>
            </div>
            <div>
              <div>
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Date of Birth on ID Card
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="13/08/1980"
                />
              </div>
              <div className="mt-8">
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Address on ID Card
                </label>
                <input
                  type="email"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="2, Bale Street, Ikeja, Lagos"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex  mt-12">
          <div className="lg:w-3/12">
            <p className="fw-600 text-2xl">Bank Account Number</p>
          </div>
          <div className="lg:w-9/12 grid gap-y-8 mt-6 lg:mt-0 md:grid-cols-2 gap-x-16">
            <div>
              <div>
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Full Name on Bank Account
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="Emmanuel Atikulu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 border-b ">
        <p className="lg:text-3xl fw-600">Referral History</p>
        <div className="lg:flex  mt-12">
          <div className="lg:w-3/12">
            <p className="fw-600 text-2xl">Data</p>
          </div>
          <div className="lg:w-9/12 grid gap-y-8 mt-6 lg:mt-0 md:grid-cols-2 gap-x-16">
            <div>
              <div>
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Total Users Reffered
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="700"
                />
              </div>
              <div className="mt-8">
                <label className="fw-500 lg:fs-700 text-gray-500">
                  PTotal Unqualified
                </label>
                <input
                  type="number"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  placeholder="Emmanuel Atikulu"
                  value="400"
                />
              </div>
            </div>
            <div>
              <div>
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Total Qualified
                </label>
                <input
                  type="text"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="300"
                />
              </div>
              <div className="mt-8">
                <label className="fw-500 lg:fs-700 text-gray-500">
                  Total Referral Bonus
                </label>
                <input
                  type="email"
                  className="p-3 rounded border mt-2 border-gray-400 w-full"
                  value="N150,000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        {
          data?.active?
          <Button title={isBusy? <HashSpinner size={25} color="white"/> : "Deactivate Customer"} altClassname='w-8/12 lg:w-6/12 bg-red-600 py-3 fw-600 text-white text-lg rounded-lg' onClick={() => deactivateCustomer()}/>
          :
          <Button title={isBusy? <HashSpinner size={25} color="white"/> : "Activate Customer"}  altClassname='w-8/12 lg:w-6/12 btn-primary py-3 fw-600 text-lg rounded-lg' onClick={() => activateCustomer()}/>
        }
      </div>
    </div>
  );
};

export default ProfileInfo;
