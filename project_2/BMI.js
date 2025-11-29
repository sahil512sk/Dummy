const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const Height = parseInt(document.querySelector('#height').value);
    const Weight = parseInt(document.querySelector('#weight').value);
    const answer = document.querySelector('#answers');
    if (Height === '' || Height < 0 || isNaN(Height)) {
        answer.innerHTML = `please enter valid ${Height}`;
    }
    else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
        answer.innerHTML = `pleasse enter valid ${Weight}`;
    }
    else {
        const bmi = (Weight / ((Height / 100) ** 2)).toFixed(2);
        if (bmi < 18.6) {
            answer.innerHTML = `Your are UnderWeight. Your BMI is ${bmi}`
        }
        else if (bmi > 25) {
            answer.innerHTML = `Your are OverWeight. Your BMI is ${bmi}`
        }
        else {
            answer.innerHTML = `<strong> Your Weight is Average. Your BMI is ${bmi}</strong>`
        }
        // console.log(bmi);
    }
})
