import { memo } from "react";

const DocPage = memo(() => {
  return (
    <div>
      <article>
        <h1>퍼셉트론</h1>
      </article>
    </div>
  );
});

DocPage.displayName = "DocPage";
export default DocPage;
