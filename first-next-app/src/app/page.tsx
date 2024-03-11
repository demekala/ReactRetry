import Image from "next/image";
import Header from "./Components/Header/Header";
import Evaluation from "./Components/Evaluation/Evaluation";
import Input from "./Components/Left/Input";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Input />
        <Evaluation firstCoefficient={1} secondCoefficient={5} thirdCoefficient={2} />
      </div>
    </div>
  );
}
