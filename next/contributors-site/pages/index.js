import Layout from "../components/Layout";
import { FaTwitter, FaGithub } from "react-icons/fa";

import Contributors from "../static/contributors.json";

export default function Index() {
  return (
    <Layout>
      <h2>List of Contributors</h2>
      <ol>
        {Contributors.map((contributor, index) => {
          return (
            <li key={index}>
              <span style={{ fontSize: "large" }}>
                {contributor.name}
                <a href={contributor.github} target="_blank">
                  <FaGithub color="#211F1F" />
                </a>
                <a href={contributor.twitter} target="_blank">
                  <FaTwitter color="#00acee" />
                </a>
              </span>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}
