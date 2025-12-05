import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/deleteIcon.svg";
import OpenIcon from "../../assets/icons/open2.svg";

const TableRow = () => {
  return (
    <tr className="border-b bg-gray-100/10 hover:bg-gray-100/35 text-black ">
      <td className="text-left flex gap-2">
        {" "}
        <button>
          <img className="w-10 h-6 cursor-pointer" src={OpenIcon} alt="" />
        </button>
        <span> Dec 25</span>
      </td>
      <td className="text-left">15000</td>
      <td className="text-left">12000</td>
      <td className="text-left">2000</td>
      <td className="text-right">
        <button>
          <img className="w-10 h-5 cursor-pointer" src={EditIcon} alt="" />
        </button>
      </td>
      <td className="text-right">
        <button>
          {" "}
          <img className="w-10 h-5 cursor-pointer" src={DeleteIcon} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
