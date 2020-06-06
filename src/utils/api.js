async function fetchData(path, method, body) {
  const request = {
    method,
    headers: { "Content-Type": "text/html" },
    credentials: "same-origin",
  };
  if (body) request.body = JSON.stringify(body);
  const url =
    window.location.hostname === "localhost"
      ? `http://localhost:3000${path}`
      : path;
  try {
    const response = await fetch(url, request);
    return await response.json();
  } catch (err) {
    console.log("Error: ", err);
  }
}

const api = {
  get: (url) => fetchData(url, "GET"),
  post: (url, body) => fetchData(url, "POST", body),
};

export default api;
