import React from "react";

const DetailCard = () => {
  return (
    <section className="w-full rounded-xl bg-slate-400 mb-5 flex justify-between p-4 ">
      <div>
        <h3 className="text-2xl font-semibold">titulo Gasto</h3>
        <h4 className="text-base text-slate-500 text-left">detalle gasto</h4>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">$750</h3>
        <h4 className="text-base text-slate-500">12/12/23</h4>
      </div>
    </section>
  );
};

export default DetailCard;
