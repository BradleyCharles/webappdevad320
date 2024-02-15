import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to the blog depot!</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="./blog1"
            rel="noreferrer"
          >
            top blog #1
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="./blog2"
            rel="noreferrer"
          >
            top blog #2
          </a>
        </li>
        <li>
        <a
            target="_blank"
            href="./blog3"
            rel="noreferrer"
          >
            top blog #3
          </a>
        </li>
        <li>
        <a
            target="_blank"
            href="./blog4"
            rel="noreferrer"
          >
            top blog #4
          </a>
        </li>
      </ul>
    </div>
  );
}
