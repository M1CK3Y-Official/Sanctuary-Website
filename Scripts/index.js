import { releases } from "../Scripts/hero.js";
console.log(releases)

const releaseText = document.querySelector('.text');

const releaseTmp = (releases) => 
`<h1 class="heading">Sanctuary</h1>
<p class="release">${releases[0].title} by ${releases[0].artist} is out now!</p>
<a href="${releases[0].link}" target="_blank"><button class="streamnow">Stream Now <i class="fa-solid fa-up-right-from-square fa-bounce"></i></button></a>`

if (releaseText) {
    releaseText.innerHTML = releaseTmp(releases);
}

