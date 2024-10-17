import { Inter } from "next/font/google";
import ThemeSwitch from "../../components/ThemeSwitch";

const MainTitleFont = Inter({ subsets: ["latin"], weight: ["700"] });
const MainCategoryFont = Inter({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <main className={`flex flex-col w-full items-center`}>
      <div className={`flex relative border w-full h-[100px] items-center`}>
        <div
          className={`flex justify-center ${MainTitleFont.className} text-3xl w-1/2 text-gradient`}
        >
          MY WORLD
        </div>
        <div className={`flex w-1/2 justify-center`}>
        
          <div
            className={`px-2 mx-1 ${MainCategoryFont.className} text-center text-xl text-[#808080] w-fit h-fit hover:bg-[#E6E6E6] rounded-sm`}
          >
            홈
          </div>
          <div
            className={`px-2 mx-1 ${MainCategoryFont.className} text-xl text-[#808080] w-fit h-fit hover:bg-[#E6E6E6] rounded-sm`}
          >
            프로젝트
          </div>
          <div
            className={`px-2 mx-1 ${MainCategoryFont.className} text-xl text-[#808080] w-fit h-fit hover:bg-[#E6E6E6] rounded-sm`}
          >
            질문하기
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </main>
  );
}
