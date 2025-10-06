"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/context/toastContext";
import {
  CheckoutInitialValues,
  CheckoutValSchema,
} from "@/app/helpers/validators/checkoutSchema";
import { useCart } from "@/app/context/cartContext";
import { createOrder } from "@/app/Services/orders.serv";
import { PATHROUTES } from "@/app/helpers/navItems";
import ConfirmData from "./ConfirmData";
import OrderConfirmationModal from "../OrderConfirmationModal";

function CheckoutForm() {
  const { clearCart, getItemsId } = useCart();
  const { dataUser } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();
  const [isDataConfirmed, setIsDataConfirmed] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleCheckOut = async () => {
    console.log("Showing modal NOW");

    const itemIds = getItemsId();
    const token = dataUser?.token;
    if (!token) {
      showToast("You need to log in to checkout", "error");
      return;
    }
    try {
      await createOrder(itemIds, token);
      setShowOrderModal(true);

      setTimeout(() => {
        setShowOrderModal(false);
        clearCart();

        router.push(PATHROUTES.HOME);
      }, 3000);
    } catch (error) {
      console.log("Error: ", error);
      showToast("Something went wrong while processing your order", "error");
    }
  };

  const handleCloseModal = () => {
    setShowOrderModal(false);
    setTimeout(() => {
      router.push(PATHROUTES.HOME);
    }, 200);
  };

  const formik = useFormik<typeof CheckoutInitialValues>({
    initialValues: CheckoutInitialValues,
    validationSchema: CheckoutValSchema,
    onSubmit: async () => {
      await handleCheckOut();
    },
  });

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    const chunks = cleaned.match(/.{1,4}/g) || [];
    return chunks.join(" ").substr(0, 19);
  };

  const formatExpirationDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.substr(0, 2) + "/" + cleaned.substr(2, 2);
    }
    return cleaned;
  };

  if (!dataUser?.user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">No orders</div>
      </div>
    );
  }

  console.log("Modal open:", showOrderModal);

  return (
    <>
      <div className="w-full">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <ConfirmData
            isConfirmed={isDataConfirmed}
            onConfirmChange={setIsDataConfirmed}
          />

          {isDataConfirmed && (
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-custume-orange rounded-full"></div>
                  Payment Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="cartNumber"
                      className="block text-white/70 text-sm mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cartNumber"
                      name="cartNumber"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      value={formatCardNumber(formik.values.cartNumber)}
                      onChange={(e) => {
                        const formatted = e.target.value.replace(/\s/g, "");
                        formik.setFieldValue("cartNumber", formatted);
                      }}
                      onBlur={formik.handleBlur}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-custume-orange/50 focus:ring-2 focus:ring-custume-orange/20 transition-all duration-300"
                    />
                    {formik.touched.cartNumber && formik.errors.cartNumber && (
                      <p className="text-custume-orange text-xs mt-1">
                        ⚠ {formik.errors.cartNumber}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expirationDate"
                        className="block text-white/70 text-sm mb-2"
                      >
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        placeholder="MM/YY"
                        maxLength={5}
                        value={formatExpirationDate(
                          formik.values.expirationDate
                        )}
                        onChange={(e) => {
                          const cleaned = e.target.value.replace(/\D/g, "");
                          formik.setFieldValue(
                            "expirationDate",
                            formatExpirationDate(cleaned)
                          );
                        }}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-custume-orange/50 focus:ring-2 focus:ring-custume-orange/20 transition-all duration-300"
                      />
                      {formik.touched.expirationDate &&
                        formik.errors.expirationDate && (
                          <p className="text-custume-orange text-xs mt-1">
                            ⚠ {formik.errors.expirationDate}
                          </p>
                        )}
                    </div>

                    <div>
                      <label
                        htmlFor="cvv"
                        className="block text-white/70 text-sm mb-2"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        maxLength={4}
                        value={formik.values.cvv}
                        onChange={(e) => {
                          const cleaned = e.target.value.replace(/\D/g, "");
                          formik.setFieldValue("cvv", cleaned);
                        }}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-custume-orange/50 focus:ring-2 focus:ring-custume-orange/20 transition-all duration-300"
                      />
                      {formik.touched.cvv && formik.errors.cvv && (
                        <p className="text-custume-orange text-xs mt-1">
                          ⚠ {formik.errors.cvv}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={!isDataConfirmed || formik.isSubmitting}
            className="w-full px-6 py-4 bg-custume-orange text-black text-lg font-bold rounded-xl hover:bg-custume-orange/90 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-custume-orange/20"
            // onClick={() => router.push("/orderPage")}
          >
            {formik.isSubmitting ? "PROCESSING..." : "CHECK OUT"}
          </button>
          <OrderConfirmationModal
            isOpen={showOrderModal}
            onClose={handleCloseModal}
          />
        </form>
      </div>
    </>
  );
}

export default CheckoutForm;
