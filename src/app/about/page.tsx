import { memo, useState } from "react";
import il_jiwoo from "../../assets/il_jiwoo.png";
import il_choi from "../../assets/il_choi.png";
import il_lee from "../../assets/il_lee.png";
const members = [
  { name: "곤뇬필통애호가", img: il_lee },
  { name: "거울공주", img: il_choi },
  { name: "지우", img: il_jiwoo },
];

const AboutPage = memo(() => {
  const [selectedMember, setSelectedMember] = useState<string>("");

  // 선택된 멤버 찾기
  const selected = members.find((member) => member.name === selectedMember);

  return (
    <div className="container mx-auto flex flex-row">
      {/* 멤버 리스트 섹션 */}
      <section>
        <ul>
          {members.map((member) => (
            <li
              key={member.name}
              onClick={() => setSelectedMember(member.name)}
              className="cursor-pointer hover:underline"
            >
              {member.name}
            </li>
          ))}
        </ul>
      </section>

      {/* 선택된 멤버 표시 섹션 */}
      {selected && (
        <section>
          <article>
            <h2 className="text-lg font-extrabold">{selected.name}</h2>
            <p></p>
            <img className="max-h-screen" src={selected.img}></img>
          </article>
        </section>
      )}
    </div>
  );
});
AboutPage.displayName = "AboutPage";
export default AboutPage;
