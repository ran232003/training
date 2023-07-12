export const getPeopleApi = async (num) => {
  console.log("getPeopleApi", num);

  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${num}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { status: "fail", message: "Internal Error" };
  }
};
export const getImageApi = async (num) => {
  console.log("getPeopleApi", num);

  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${num}&limit=10`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { status: "fail", message: "Internal Error" };
  }
};
