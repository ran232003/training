export const apiCall = async (method, url, payload) => {
  let data, response;
  try {
    switch (method) {
      case "GET":
        response = await fetch(url);
        break;
      case "POST":
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        break;
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        console.log(`Sorry, we are out of.`);
    }
    data = await response.json();
  } catch (error) {}
};
