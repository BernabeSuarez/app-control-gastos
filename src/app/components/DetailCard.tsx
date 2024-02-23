import React from "react";

const DetailCard = () => {
  return (
    <section className="w-full rounded-lg border border-slate-500 bg-slate-800 mb-5 flex justify-between py-1 px-2 sm:p-2 ">
      <div>
        <h3 className="text-xl font-semibold">titulo Gasto</h3>
        <h4 className="text-base text-slate-500 text-left">detalle gasto</h4>
      </div>
      <div>
        <h3 className="text-xl font-semibold">$750</h3>
        <h4 className="text-base text-slate-500">12/12/23</h4>
      </div>
    </section>
  );
};

export default DetailCard;
