const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 sm:px-50">
      <div className="size-10 w-100 rounded bg-gray-200 animate-pulse mb-10"></div>
      <div className="flex items-center justify-center pb-24 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((v, i) => (
            <div
              className="w-full rounded-md border border-gray-300 p-4"
              key={i}
            >
              <div className="flex flex-col animate-pulse space-x-4">
                <div className="size-40 mx-auto rounded-md bg-gray-200 mb-5"></div>
                <div className="flex-1 flex-col space-y-6 py-1">
                  <div className="h-5 rounded bg-gray-200"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                      <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                    </div>
                    <div className="h-2 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
