import React from "react";

const Page4 = () => {
  return (
    <div id="projects">
      <h1 className="text-4xl font-[anzo] text-center md:text-8xl mt-12">Proven Results</h1>
      <div className="md:mt-8 md:px-10 md:pb-20 w-full md:flex md:gap-5 lg:justify-around">
        <div className="lg:w-1/3 flex justify-center items-center gap-2 flex-col bg-gray-100 p-4 m-1 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mt-4 font-[anzo]">
            Accelerates
          </h2>
          <p className="mt-2 ">
            accelerate.42web.io Built a complete website for a client to
            showcase their business online. Focused on clean design, fast
            performance, and responsive layout. Used user feedback to create an
            easy-to-use and visually appealing interface.
          </p>
          <div className="flex gap-2 mt-4">
            <a href="https://accelerate.42web.io" target="blank">
              <button className="border px-2 rounded-xl bg-green-400 font-[anzo] py-1">
                View Live
              </button>
            </a>
            {/* <a href="https://github.com/shashi187/accelerates" target="blank">
              <button className="border px-2 rounded-xl bg-blue-400 font-[anzo] py-1">
                View Code
              </button>
            </a> */}
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-center items-center gap-2 flex-col bg-gray-100 p-4 m-1 mt-5 md:mt-0 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mt-4 font-[anzo]">
            Task Assign
          </h2>
          <p className="mt-2 ">
            Employee Admin Task App is a React-based employee task management
            app where an admin can assign tasks to employees. The application
            features a simple UI for creating, viewing, and managing tasks. All
            task data is stored locally in the browser (localStorage), making it
            a lightweight solution without the need for a backend or database.
          </p>
          <div className="flex gap-2 mt-4">
            <a href="https://employee-admin-task-app.vercel.app" target="blank">
              <button className="border px-2 rounded-xl bg-green-400 font-[anzo] py-1">
                View Live
              </button>
            </a>
            {/* <a
              href="https://github.com/shashi187/employeeadmintaskapp"
              target="blank">
              <button className="border px-2 rounded-xl bg-blue-400 font-[anzo] py-1">
                View Code
              </button>
            </a> */}
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-center items-center gap-2 flex-col bg-gray-100 p-4 m-1 mt-5 md:mt-0 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mt-4 font-[anzo]">
            Item Paste App
          </h2>
          <p className="mt-2 ">
            Item Paste App is a simple web application that allows users to
            paste and share text snippets easily. Built with React, it features
            a clean and intuitive interface, making it easy for users to manage
            their pasted items. The app is designed to be lightweight and fast,
            focusing on the core functionality without unnecessary bloat.
          </p>
          <div className="flex gap-2 mt-4">
            <a href="https://paste-app-opal-six.vercel.app" target="blank">
              <button className="border px-2 rounded-xl bg-green-400 font-[anzo] py-1">
                View Live
              </button>
            </a>
            {/* <a href="https://github.com/shashi187/paste-app" target="blank">
              <button className="border px-2 rounded-xl bg-blue-400 font-[anzo] py-1">
                View Code
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
