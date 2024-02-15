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
      <h1>Welcome to Remix blogs!</h1>
      <ul> Check out these fine blogs!
        <li>
          <a
            target="_blank"
            href="./blog1.tsx"
            rel="noreferrer"
          >
            Blog #1
          </a> 
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Blog #2
          </a>
        </li>
        <li>
        <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
          Blog #3
          </a>
        </li>
      </ul>
    </div>
  );
}
