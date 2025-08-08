import React from "react";

const NotFound = () => {
  return (
    <>
      <section class="bg-white dark:bg-bgDark h-dvh flex justify-center items-center">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-main">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold  md:text-4xl text-main">
              Something's missing.
            </p>
            <p class="mb-4 text-xl  font-medium text-main">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
          </div>
        </div>
      </section>
      {/* head tags */}
      <title>page not found</title>
    </>
  );
};

export default NotFound;
