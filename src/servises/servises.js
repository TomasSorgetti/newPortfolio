const URL_BASE = "";
export const getAllProjects = async () => {
  return await fetch(URL_BASE)
    .then((res) => res.json)
    .then((result) => console.log(result));
};
