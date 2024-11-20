import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
