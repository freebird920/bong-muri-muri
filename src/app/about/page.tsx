import { memo, useState } from "react";
import il_jiwoo from "/images/il_jiwoo.png";
import il_choi from "/images/il_choi.png";
import il_lee from "/images/il_lee.png";
import wallpaper from "/images/wallpaper.png";

type MemberInfo = {
  name: string;
  img: string;
  description?: string;
};
const members: MemberInfo[] = [
  { name: "봉무리무리", img: wallpaper, description: "봉무리무리입니다." },
  {
    name: "곤뇬(청소안함)",
    img: il_lee,
    description:
      "청소를 하지 않습니다. 몰래 초코송이 먹습니다. 에이블리에서 공룡필통 구입하였습니다.",
  },
  {
    name: "거울공주",
    img: il_choi,
    description: "거울을 즐겨 봅니다. 금잔디.",
  },
  {
    name: "왕자님",
    img: il_jiwoo,
    description: "귀여운 남학생으로 웹툰을 좋아합니다.",
  },
];

const AboutPage = memo(() => {
  const [selectedMember, setSelectedMember] = useState<string>("봉무리무리");

  // 선택된 멤버 찾기
  const selected = members.find((member) => member.name === selectedMember);

  return (
    <div className="container mx-auto flex justify-center">
      {/* 멤버 리스트 섹션 */}
      <section className="">
        <ul className="flex-row">
          {members.map((member) => (
            <li
              key={member.name}
              onClick={() => setSelectedMember(member.name)}
              className={`cursor-pointer select-none hover:underline ${selectedMember === member.name && "font-extrabold"}`}
            >
              {member.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="grow">
        {/* 선택된 멤버 표시 섹션 */}
        {selected && (
          <article className="grid grid-cols-2">
            {/* introdice */}
            <section className="">
              <h2 className="text-lg font-extrabold">이름: {selected.name}</h2>
              <p>소개: {selected.description}</p>
            </section>

            {/* img */}
            <section>
              <img className="max-h-screen" src={selected.img}></img>
            </section>
          </article>
        )}
      </section>
    </div>
  );
});
AboutPage.displayName = "AboutPage";
export default AboutPage;
