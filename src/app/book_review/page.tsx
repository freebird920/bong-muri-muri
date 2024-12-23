import { memo } from "react";

const BookReviewPage = memo(() => {
  return (
    <div>
      <article>
        <h2>재미있어서 밤세 읽는 진화론 이야기</h2>
      </article>
      <article>
        <h2>재미있는 AI 이야기</h2>
      </article>
    </div>
  );
});
BookReviewPage.displayName = "BookReviewPage";
export default BookReviewPage;
