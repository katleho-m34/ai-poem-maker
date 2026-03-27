function displayPoem(response) {
     new Typewriter("#poem", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: "",
     });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "803006a9ef2843o8c3b4c01a1t50317b";
    let prompt = `User Instructions: Generate a poem about ${instructionsInput.value} `;
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with <br>. Make sure to follow user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning.";
    let apiUrl =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      let poemElement = document.querySelector("#poem");
      poemElement.classList.remove("hidden");
      poemElement.innerHTML = `<div class="generating">⌛Generating a poem for you about ${instructionsInput.value}</div>`;

      axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
