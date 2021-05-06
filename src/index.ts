import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const getToken = () => {
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    return process.env.GITHUB_TOKEN;
  }
  throw Error("not found GITHUB_TOKEN!!!");
};

const main = async () => {
  await axios.post(
    "https://api.github.com/repos/NoriyukiMatsumoto/githubactions-test/actions/workflows/hello.yml/dispatches",
    {
      inputs: {
        name: "Jon",
      },
      ref: "main",
    },
    {
      headers: {
        Authorization: `token ${getToken()}`,
      },
    }
  );
};

try {
  main();
} catch (e) {
  console.error(e);
}
