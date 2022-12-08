document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  /*   document.addEventListener("click", () => {
    console.log("clicked");
  }); */

  document.querySelector("#hide").addEventListener("click", async (e) => {
    e.preventDefault();

    const data = {
      prenom: document.querySelector("#prenom").value,
      nom: document.querySelector("#nom").value,
      email: document.querySelector("#email").value,
      sujet: document.querySelector("#sujet").value,
      message: document.querySelector("#message").value,
    };

    console.log(data);

    /*  const response = await axios.post("http://localhost:3000/form", data);
    console.log(response); */
  });
});
