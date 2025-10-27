import React from "react";
import "../App.css";

const tags = [
    "#量子情報",
    "#学会口頭発表経験あり",
    "#成績優秀者賞受賞",
    "#ハッカソン複数回出場",
    "#学生団体リーダー経験あり"
];

export default function Home() {
  return (
    <div>
    <h1>(名前)と申します。</h1>
    <p>理論研究で培った論理的思考力と協調してチームで結果にコミットする力に自信があります。</p>
    <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {tags.map((tag, idx) => (
                <button className="bg-sky-500 text-white p-8" key= {idx}>{tag}</button>
        ))}
    </div>
    </div>
)}