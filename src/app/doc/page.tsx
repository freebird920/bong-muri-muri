import { memo } from "react";

const DocPage = memo(() => {
  return (
    <>
      <a href="/doc/perceptron">perceptron</a>
    </>
  );
});

DocPage.displayName = "DocPage";
export default DocPage;
