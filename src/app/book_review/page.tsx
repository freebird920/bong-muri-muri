import { memo } from "react";
type BookReview = {
  title: string;
  author: string;
  reviewr: string;
  content: string;
};
const bookReview: BookReview[] = [
  {
    title: "재밌어서 밤새 읽는 진화론 이야기 ",
    author: "하세가와 에이스케",
    reviewr: "현지우",
    content:
      "진화론에 대해서 너무나도 많은 것을 알게 되어서 너무너무 기뻐 ^_^(웃음) ",
  },
  {
    title: "재밌어서 밤새 읽는 진화론 이야기 ",
    author: "하세가와 에이스케",
    reviewr: "최예진",
    content: `최잔디: 제 마음에 궁금벨이 울리면, 언제나 선배가 나타나요.\n다윈: 그럼, 시켜줘! 최잔디의 명예 교수.`,
  },
  {
    title: "재밌어서 밤새 읽는 진화론 이야기 ",
    author: "하세가와 에이스케",
    reviewr: "이예진",
    content: `다윈 선생님! 마라탕 먹어요!! 마라탕 마라탕!!! 부산가서 부산스럽게 마라탕 먹어요!!`,
  },
];
const BookReviewPage = memo(() => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col space-y-2">
        {bookReview.map((element: BookReview) => {
          return (
            <article
              key={`${element.reviewr}${element.author}${element.title}`}
              className="rounded-md border-2 p-2"
            >
              <section className="flex space-x-2">
                <h4 className="font-bold">서명</h4>
                <h3>{element.title}</h3>
              </section>
              <section className="flex space-x-2">
                <h4 className="font-bold">작성</h4>
                <p>{element.reviewr}</p>
              </section>
              <section>
                <h4 className="font-bold">내용</h4>
                <div className="px-2">
                  <pre className="font-sans">{element.content}</pre>
                </div>
              </section>
            </article>
          );
        })}
      </div>
    </div>
  );
});
BookReviewPage.displayName = "BookReviewPage";
export default BookReviewPage;
