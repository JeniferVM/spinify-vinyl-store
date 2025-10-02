"use client";

// import Link from "next/link";
import { useAuth } from "../context/authContext";
// import { PATHROUTES } from "../helpers/navItems";
// import orderInterface from "../interface/orderInerface";

export default function Dashboard() {
  const { dataUser, logout } = useAuth();

  if (!dataUser) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Cargando...</div>
      </div>
    );
  }

  if (!dataUser.user.orders) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">No orders</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="relative">
          <div className="p-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-custume-orange/5 blur-xl opacity-50"></div>
              <h1 className="relative text-4xl font-bold mb-2">
                Hey,{" "}
                <span className="text-custume-orange">
                  {dataUser.user.name}
                </span>
              </h1>
              <p className="relative text-white/70 text-lg">
                Be welcome to your dashboard
              </p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-custume-orange/5">
            <h3 className="text-2xl font-semibold mb-6 text-custume-orange">
              Your personal info
            </h3>

            <div className="grid gap-4">
              <div className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-custume-orange/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-custume-orange"></div>
                  <div>
                    <span className="text-white/70 text-sm">Email</span>
                    <p className="text-white font-medium">
                      {dataUser.user.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-custume-orange/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-custume-orange"></div>
                  <div>
                    <span className="text-white/70 text-sm">Address</span>
                    <p className="text-white font-medium">
                      {dataUser.user.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-custume-orange/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-custume-orange"></div>
                  <div>
                    <span className="text-white/70 text-sm">Phone</span>
                    <p className="text-white font-medium">
                      {dataUser.user.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="relative">
          <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-custume-orange/5">
            <h3 className="text-2xl font-semibold mb-6 text-custume-orange">
              Your orders
            </h3>

            {dataUser.user.orders?.length > 0 ? (
              <div className="space-y-4">
                <p className="text-white/70">
                  You actually have {dataUser.user.orders.length} orders
                </p>
                <div>
                  <h2 className="text-custume-orange text-2xl mb-4">
                    Mis Órdenes: {dataUser.user.orders.length}
                  </h2>

                  {dataUser.user.orders.map((order: orderInterface) => (
                    <div
                      key={order.id}
                      className="bg-white/10 p-4 rounded mb-2"
                    >
                      <p className="text-white">Orden #{order.id}</p>
                      <p className="text-gray-300">Estado: {order.status}</p>
                      <p className="text-gray-400 text-sm">
                        {new Date(order.date).toLocaleString("es-MX")}
                      </p>
                    </div>
                  ))}
                </div>{" "}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-custume-orange/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-custume-orange/30"></div>
                </div>
                <p className="text-white/70 mb-4">No recent orders</p>
                <Link
                  href={PATHROUTES.PRODUCTS}
                  className="inline-block px-6 py-2 text-custume-orange text-sm font-medium rounded-xl border border-custume-orange/30 hover:bg-custume-orange/10 transition-all duration-300"
                >
                  Spin prodicts again
                </Link>
              </div>
            )}
          </div>
        </section> */}

        {/* <section className="relative">
          <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-custume-orange/5">
            <h3 className="text-2xl font-semibold mb-6 text-custume-orange">
              Your wish list
            </h3>

            {dataUser.user.wishList?.length > 0 ? (
              <div className="space-y-4">
                <p className="text-white/70">
                  You actually have {dataUser.user.wishList.length} wishes
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-custume-orange/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-custume-orange/30"></div>
                </div>
                <p className="text-white/70 mb-4">No recent wishes</p>
                <Link
                  href={PATHROUTES.PRODUCTS}
                  className="inline-block px-6 py-2 text-custume-orange text-sm font-medium rounded-xl border border-custume-orange/30 hover:bg-custume-orange/10 transition-all duration-300"
                >
                  Spin prodicts again
                </Link>
              </div>
            )}
          </div>
        </section> */}

        <section className="flex justify-center">
          <button
            onClick={() => logout()}
            className="group relative px-8 py-4 text-custume-orange text-lg font-medium transition-all duration-300 rounded-xl hover:bg-custume-orange/10 hover:scale-105 overflow-hidden border border-custume-orange/30 hover:border-custume-orange/60"
          >
            <span className="relative z-10 group-hover:text-custume-orange brightness-110 transition-all duration-300">
              Close your Spinify account
            </span>
            <div className="absolute inset-0 bg-custume-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-xl bg-custume-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </section>

        <div className="flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-custume-orange/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
