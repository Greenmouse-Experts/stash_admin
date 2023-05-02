
const getCallBackRoute = (path) => {
  if (path === "/") return "/dashboard";
  const indexOfQ = path.indexOf("?");
  if (indexOfQ) return path.slice(0, indexOfQ);
  return "/";
};

export default getCallBackRoute;
