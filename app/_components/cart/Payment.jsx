"use client";
function Payment() {
  return (
    <div className=" sticky top-[15rem] z-50">
      <div className=" mt-4 p-4 flex flex-col gap-4 border-[0.1px] rounded-2xl">
        <h1 className="text-xl font-bold text-[#2d3a4b]">Summary</h1>
        <p className="flex  justify-between">
          Subtotal: <strong className=" text-[1.1rem]">$1500</strong>
        </p>
        <p className="flex justify-between capitalize">
          estimated delivery and handling: <span>Free</span>
        </p>
        <p className="flex justify-between capitalize">
          estimated taxes:<strong className="">${"150"}</strong>
        </p>
        <div className=" flex justify-between text-xl">
          <strong>Total:</strong>
          <strong>$1500</strong>
        </div>
        <button className=" bg-black text-white p-2 rounded-2xl">
          checkout
        </button>
      </div>
    </div>
  );
}

export default Payment;
