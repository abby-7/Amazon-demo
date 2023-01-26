import "./terms.css";

export default function Terms() {
  return (
    <div className="terms">
      <ul className="term-list">
        {/* 链接暂用官网 */}
        <li>
          <a href="https://www.amazon.com">Condition of Use</a>
        </li>
        <li>
          <a href="https://www.amazon.com">Privacy Notice</a>
        </li>
        <li>
          <a href="https://www.amazon.com">Your Ads Privacy Choices</a>
        </li>
      </ul>
      <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
    </div>
  );
}
