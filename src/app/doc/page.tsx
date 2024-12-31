import { memo } from "react";
type ContentInfo = {
  title: string;
  path: string;
};
const tableOfContent: ContentInfo[] = [
  { title: "perceptron", path: "/doc/perceptron" },
  { title: "cross entropy", path: "/doc/cross_entropy" },
  { title: "loss function", path: "/doc/loss_function" },
  { title: "practice 01", path: "/doc/practice_01" },
];
const DocPage = memo(() => {
  return (
    <div className="container mx-auto">
      <ul>
        {tableOfContent.map((element, index: number) => {
          return (
            <li key={element.path} className="flex space-x-2">
              <h4>{index + 1}</h4>
              <a className="font-bold" href={element.path}>
                {element.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

DocPage.displayName = "DocPage";
export default DocPage;
