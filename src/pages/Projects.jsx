import unitybiz from "../assets/unityBiz.png";
import meowme from "../assets/MeowMeDark.png";
import horizon from "../assets/HorizonFanPagePhoto.jpg";
import candyshop from "../assets/moc-image.png";

import { DiGithubBadge } from "react-icons/di";

export default function Projects() {
  return (
    <div className="flex bg-black background text-white p-10">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Projects
      </h1>

      <a
        className="hover:bg-sky-700 card"
        href="https://unitybiz-fd2efb602da8.herokuapp.com/"
      >
        <div>
          <div>
            <dt className="text-3xl p-3">UnityBiz</dt>
            <img
              className="rounded"
              src={unitybiz}
              alt="photo of unitybiz site"
              width="384"
              height="512"
            />
          </div>
            <a href="https://github.com/Aaronf87/UnityBiz">
              <DiGithubBadge className="m-4" size="4rem" />{" "}
            </a>
        </div>
      </a>

      <a
        className="hover:bg-sky-700 card"
        href="https://aaronf87.github.io/Meow-Me/"
      >
        <div>
          <dt className="text-3xl p-3">Meow Me</dt>
          <img
            className="rounded"
            src= {meowme}
            alt="photo of meow me site"
            width="384"
            height="512"
            border-radius="50%"
          />
            <a href="https://github.com/Aaronf87/Meow-Me">
              <DiGithubBadge className="m-4" size="4rem" />{" "}
            </a>
        </div>
      </a>

      <a
        className="hover:bg-sky-700 card"
        href="https://aaronf87.github.io/HorizonFansite/"
      >
        <div>
          <dt className="text-3xl p-3">Horizon Fan Page</dt>
          <img
            className="rounded"
            src= {horizon}
            alt=""
            width="384"
            height="512"
            border-radius="50%"
          />
            <a href="https://github.com/Aaronf87/HorizonFansite">
              <DiGithubBadge className="m-4" size="4rem" />{" "}
            </a>
        </div>
      </a>

      <a
        className="hover:bg-sky-700 card"
        href="https://aaronf87.github.io/moc/"
      >
        <div>
          <dt className="text-3xl p-3">Museum of Candy Shop</dt>
          <img
            className="rounded"
            src= {candyshop}
            alt=""
            width="384"
            height="512"
            border-radius="50%"
          />
            <a href="https://github.com/Aaronf87/moc">
              <DiGithubBadge className="m-4" size="4rem" />{" "}
            </a>
        </div>
      </a>
    </div>
  );
}
