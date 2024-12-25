import { memo } from "react";
type ContentInfo = {
  title: string;
  path: string;
};
const tableOfContent: ContentInfo[] = [
  { title: "perceptron", path: "/doc/perceptron" },
  { title: "loss function", path: "/doc/loss_function" },
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
