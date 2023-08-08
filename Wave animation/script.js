
// let label = document.querySelector('label');
// label.innerHTML = label.innerHTML.split('').map((letters, i) => `<span style="transition-delay: ${i*30}ms;filter: hue-rotate(${i*10}deg);">${letters}</span>`).join('');

let label = document.querySelector('label');
label.innerHTML = label.textContent.split('').map((letter, i) => {
    if (letter === ' ') {
        return '<span>&nbsp;</span>'; // Add a non-breaking space for spaces
    }
    return `<span style="transition-delay: ${i * 30}ms;">${letter}</span>`;
}).join('');
