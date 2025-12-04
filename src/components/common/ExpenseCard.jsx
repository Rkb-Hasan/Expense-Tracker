import test from "../../assets/icons/database-svgrepo-com.svg";

export default function ExpenseCard() {
  return (
    <div className="bg-neon-green text-black rounded-md border border-gray-500 px-6 py-2 w-full min-h-[300px] flex flex-col ">
      <div>
        <h2 className="font-heading font-bold mx-auto text-lg flex justify-center">
          Dec 25
        </h2>
        <hr />
      </div>
      {/* categories */}
      <div className="flex-1 my-1">
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <label
              htmlFor="Food"
              className="flex  items-center font-heading font-medium"
            >
              <img src={test} className="w-4 h-4" /> <span>Food :</span>
            </label>
            <progress
              id="Food"
              value="32"
              max="100"
              className=" h-3 rounded-2xl flex-1"
            >
              32%
            </progress>
          </li>
        </ul>
      </div>
      <hr />
      {/* lower part */}
      <div>
        {/* target */}
        <div className="px-2 font-heading font-medium flex flex-col items-end text-sm">
          <p className=" ">Total expense : 200</p>
          <p className=" ">Target expense : 200</p>
        </div>
        <hr />
        {/* balance */}
        <p className="flex justify-end font-bold px-2 text-sm">Balance : 200</p>
      </div>
    </div>
  );
}
