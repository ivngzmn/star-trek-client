const button = document.querySelector('#getButton');
button.addEventListener('click', apiRequest);

const image = document.querySelector('img');

async function apiRequest() {
    const alienName = document.querySelector('input').value;
    try {
        const response = await fetch(
            `https://star-trek-node-express-api.herokuapp.com/api/${alienName}`
        );
        const data = await response.json();
        console.log(data);
        // creating the innerText
        document.getElementById('alienName').innerText = data.speciesName;
        document.getElementById('alienWorld').innerText = data.homeWorld;
        document.getElementById('alienFeatures').innerText = data.features;
        document.getElementById('alienFacts').innerText = data.interestingFact;
        document.getElementById('alienExamples').innerText =
            data.notableExamples;

        // insert image
        image.src = data.image;
        image.alt = data.speciesName;
        document.getElementById('alienCaption').innerText = data.speciesName;
    } catch (error) {
        console.log(error);
    }
}
