export const apiCall = async (method, payload, url) => {
  try {
    if (method !== "POST") {
      console.log(url);
      const response = await fetch(url, { method: method });
      const data = await response.json();
      return data;
    } else if (method === "POST") {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
export const getCurrentAndFive = async (method, payload, urls) => {
  try {
    const [response1, response2] = await Promise.all([
      fetch(urls[0]),
      fetch(urls[1]),
    ]);

    const data1 = await response1.json();
    // console.log("Response 1:", data1);

    const data2 = await response2.json();
    // console.log("Response 2:", data2);
    return [data1, data2];
    // Continue processing the API responses as needed
  } catch (error) {
    console.error("Error:", error);
  }
};
