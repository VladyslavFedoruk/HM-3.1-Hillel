const FIRST = +prompt("Укажіть перше число для математичного підрахунку!")
if (FIRST === null || FIRST === "") {
    alert("Допобачення!")
} else {
    alert("Дякую!")
    const SECOND = +prompt("Та друге число. Дякую за терпіння!")
    if (SECOND === null || SECOND === "") {
        alert("Допобачення!")
    } else {
        const CONFIRM = confirm(`Ви вказалали ${FIRST}, як перше число та ${SECOND}, як друге число. Правильно?`)
        if (CONFIRM === true) {
            const SUMM = FIRST + SECOND;
            const MiNUS = FIRST + SECOND;
            const DIVIDE = FIRST / SECOND;
            const INCREASE = FIRST * SECOND;
            const RESULT = alert(`Сумма: ${FIRST} + ${SECOND} = ${SUMM}\nРізниця: ${FIRST} - ${SECOND} = ${MiNUS}\nДілення: ${FIRST} / ${SECOND} = ${DIVIDE}\nМноження: ${FIRST} * ${SECOND} = ${INCREASE}\n `)
        } else {
            ("Наш діалог завершено. Дякую!")
        }
    }
}