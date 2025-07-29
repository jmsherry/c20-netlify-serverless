try {
  const response = await fetch("/.netlify/functions/hello-world");
  console.log(response);
  if(!response.ok) throw response;
  const message = await response.json();
  console.log(message);
  document.getElementById("message").textContent = message;
} catch (err) {
  console.log(err)
}