import React from "react";

const TooFast = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Whoa, Slow Down
      </h1>
      <p className="mt-3 text-center max-w-xl text-light-400">
        Looks like you&apos;ve been a little too eager. we&apos;vs put a
        temporary pause on your excitement. Chill for a bit, and try again
        shortly
      </p>
    </main>
  );
};

export default TooFast;
