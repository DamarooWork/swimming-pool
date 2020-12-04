let coach = [
    {id:  1, firstName: 'Алексей', surName: 'Иванов', old: 51,  group: 'Оздоровительное плавание', photo: 'photos-coach/Иванов.PNG'},
    {id:  2, firstName: 'Марина', surName: 'Иванова', old: 44,  group: 'Обучение плаванию', photo: 'photos-coach/Ivanova.PNG'},
    {id:  3, firstName: 'Вадим', surName: 'Макарычев', old: 54,  group: 'Спортивное плавание', photo: 'photos-coach/Макарычев.PNG'},
     ]

let duty = [
{ id: 1, firstName: 'Алиса', surName: 'Волкова', old: 20, day: 'Понедельник', photo: 'photos-duty/Волкова.PNG'},
{ id: 2, firstName: 'Мария', surName: 'Петрова', old: 30, day: 'Вторник', photo: 'photos-duty/Петрова.PNG'},
{ id: 3, firstName: 'Петр', surName: 'Щеглов', old: 25, day: 'Среда', photo: 'photos-duty/Щеглов.PNG'},
 ]

let swimmer = [
    {id: 1, firstName: 'Сергей', surName: 'Новиков', patronymic: 'Александрович', dateOfBirth: '20.10.1990', address: 'г.Зеленоград, 420 к., 50 кв., ', doctor: 'Хаус', endOfValidity: '23.02.2021'},

]

let card = [
    {id: 1, swimmer, dataAndTime: '01.12.2020 10:00:00', cost: 500, group: 'Оздоровительное плавание'},
]

let session = [
    {time: 9, group: 'Оздоровительное плавание', numberOfSwimmers: 0},
]

const toHTMLCoach = coach => `
        <div class="col">
            <div class="card">
                <img class="card-img-top" style="height: 400px;" src="${coach.photo}" alt="${coach.surName}">
                <div class="card-body">
                  <h5 class="card-title">${coach.surName} ${coach.firstName}</h5>
                  <p class="card-text">Группа - ${coach.group}</p>
                  <a href="#" class="btn btn-primary" data-btn="coachINFO" data-id="${coach.id}">Подробнее</a>
                </div>
              </div>
        </div>
`


function renderCoach(){
    const html = coach.map(toHTMLCoach).join('')
    document.querySelector('#coachs').innerHTML = html 
}

renderCoach()


const toHTMLDuty = duty => `
        <div class="col">
            <div class="card">
                <img class="card-img-top" style="height: 400px;" src="${duty.photo}" alt="${duty.surName}">
                <div class="card-body">
                  <h5 class="card-title">${duty.surName} ${duty.firstName}</h5>
                  <p class="card-text">День работы - ${duty.day}</p>
                  <a href="#" class="btn btn-primary" data-btn="dutyINFO" data-id="${duty.id}">Подробнее</a>
                </div>
              </div>
        </div>
`


function renderDuty(){
    const htmlDuty = duty.map(toHTMLDuty).join('')
    document.querySelector('#duties').innerHTML = htmlDuty 
}

renderDuty()

const coachModal = $.modal({
    title: 'Тренер МИЭТ',
    closable: true,
    width: '400px',
    footerButtons:[
        {text:'Закрыть', type: 'primary', handler(){
            
            coachModal.close()
        }}
    ]
})

const dutyModal = $.modal({
    title: 'Дежурный бассейна МИЭТ',
    closable: true,
    width: '400px',
    footerButtons:[
        {text:'Закрыть', type: 'primary', handler(){
            
            dutyModal.close()
        }}
    ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id


  if (btnType === 'coachINFO'){
  const coachId = coach.find(c => c.id === id)
  
  coachModal.setContent(` 
  <strong class="card-title"> ${coachId.surName} ${coachId.firstName}</strong>
  <p>Возраст - ${coachId.old}</p>
  <p>Группа - ${coachId.group}</p>
  `)
  coachModal.open()
  }


  if (btnType === 'dutyINFO'){
  const dutyId = duty.find(c => c.id === id)
  
  dutyModal.setContent(` 
  <strong class="card-title"> ${dutyId.surName} ${dutyId.firstName}</strong>
  <p>Возраст - ${dutyId.old}</p>
  <p>День работы - ${dutyId.day}</p>
  `)
  dutyModal.open()
}
})
