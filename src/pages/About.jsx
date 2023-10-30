export default function About() {
  return (
    <div className=" min-h-screen bg-black background p-10">

      <div className="aboutcard flex flex-col items-start justify-center">
          <img
            className="flex mb-1 rounded h-64 w-64 sm:h-80 sm:w-80"
            src="src/assets/me.jpeg"
            alt="photo of Aaron Flores"
          />
    
        <h1 className=" p-4 text-3xl font-bold tracking-tight text-white sm:text-4xl m-10">
          Hi There, My name is Aaron. I am a developer from San Antonio, Texas.
          I enjoy all things tech hardware and software. My goal is to find and
          inject efficiency in the world of technology to benefit people in
          their quest to solve real world problems. The ability to innovate and
          pioneer bigger and better is a dream I continue to pursue.
        </h1>
        </div>
     
    </div>
  );
}
