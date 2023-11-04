import profilep from "../assets/me.jpeg";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-black background p-10">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl m-10">
          Hi There, My name is Aaron I am a developer from San Antonio, Texas. I
          enjoy all things tech hardware and software. My goal is to find and
          inject efficiency in the world of technology to benefit people in
          their quest to solve real world problems. The ability to innovate and
          pioneer bigger and better is a dream I continue to pursue.
        </h1>
        <img
          className="w-60 h-30 rounded mx-auto md:h-auto m-9"
          src={`${profilep}`}
          alt="photo of Aaron Flores"
        />
      </div>
    </div>
  );
}
