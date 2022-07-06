function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
	// Exercicio 1

function createDaysOfMonth(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

	for (let index = 0; index < dezDaysList.length; index += 1){
		const allDays = dezDaysList[index];
		const allDaysListItem = document.createElement('li');
		allDaysListItem.innerText = allDays;
		allDaysListItem.className = 'day';

		daysList.appendChild(allDaysListItem);

		if(allDays == 24 || allDays == 25 || allDays == 31){
			allDaysListItem.classList.add('holiday');
		}
		if(allDays == 4 || allDays == 11 || allDays == 18 || allDays == 25){
			allDaysListItem.classList.add('friday');
		}

	}

}
createDaysOfMonth();

// Exercicio 2 
function createButtons(texto) {
  const divChild = document.querySelector('.buttons-container');
  const buttonFeriado = document.createElement('button');
  buttonFeriado.id = 'btn-holiday';
  buttonFeriado.innerText = texto;

  divChild.appendChild(buttonFeriado);
}

createButtons('Feriados');

// Exercicio 3

function feriadosClick(){
  const button = document.getElementById('btn-holiday');
  const holidayListItem = document.querySelectorAll('.holiday');

  for(index = 0; index < holidayListItem.length; index += 1){

  }

}