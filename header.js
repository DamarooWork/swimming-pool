// const admin = document.getElementById('admin')
// const submitBtn = admin.querySelector('#admin')

// admin.addEventListener('submit', submitFormHandler)


const infoModal = $.modal({
    title: 'О нашем бассейне',
    closable: true,
    width: '752px',
    footerButtons:[
        {text:'Закрыть', type: 'primary', handler(){
            
            infoModal.close()
        }}
    ]
})

document.addEventListener('click', event => {
    event.preventDefault()
   
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
  
    if (btnType === 'poolINFO'){
    
    infoModal.setContent(`
    <img class="card-img-top" style="height: 400px;" src="/images/pool.jpg" alt="Бассейн МИЭТ"></img> 
<div class="header-modal-content">
    <h4>Здравствуйте, уважаемый посетитель нашего сайта!</h4>
    <h4>Мы всегда рады видеть вас в нашем бассейне.</h4>
    <h4>Он открыт для всех желающих с 9:00 до 21:00 по адресу:</h4>
    <h4>г. Москва, г. Зеленоград, пл. Шокина, 1, 5 корпус </h4>
    </div>
    `)
    infoModal.open()
    }})





    const regModal = $.modal({
        title: 'Записаться на занятие по плаванию',
        closable: true,
        width: '400px',
        footerButtons:[
            {text:'Отмена', type: 'danger', handler(){
                
                regModal.close()
            }},
            {text:'Записаться', type: 'success', handler(){
                
                // document.addEventListener('click', event => {
                //     event.preventDefault()
                //     btnType = event.target.className
                //     if (btnType === 'btn btn-success')
                //         console.log('Спасибо за запись');
                //     btnType = ''
                // })
                regModal.close()
            }}
            
        ]
    })
    
    document.addEventListener('click', event => {
        event.preventDefault()
       
        const btnType = event.target.dataset.btn
        
      
        if (btnType === 'registration'){
        
        regModal.setContent(`
        <form>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="" >Фамилия*</span>
  </div>
  <input type="text" class="form-control" placeholder="Фамилия">
</div>


<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Имя*</span>
  </div>
  <input type="text" class="form-control" placeholder="Имя">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Группа*</label>
  </div><select class="custom-select" id="inputGroupSelect01">
  <OPTION  SELECTED VALUE="0">Выберите группу</OPTION>
  <OPTION VALUE="1">Оздоровительное плавание</OPTION>
  <OPTION VALUE="2">Группы инвалидов</OPTION>
  <OPTION VALUE="3">Обучение плаванию</OPTION>
  <OPTION VALUE="4">Группы спортивного плавания</OPTION>
  <OPTION VALUE="5">Группы от предприятий</OPTION>
  <OPTION VALUE="6">Группы по программам поддержки Правительства Москвы или других регионов  </OPTION>
  </select>
</div>



<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Номер телефона* &#9990;</span>
  </div>
  <input type="text" class="form-control" placeholder="89123456789" aria-label="Телефон" aria-describedby="basic-addon1" pattern="89[0-9]{9}">
  
</div>



</form>

<div> * - обязательно для заполнения </div>

        `)
        regModal.open()
        }})




const adminModal = $.modal({
  id: 'admin',
        title: 'Введите данные, подтверждающие вашу личность',
        closable: true,
        width: '1000px',
        footerButtons:[
            
            {text:'Отмена', type: 'danger', handler(){
                
                adminModal.close()
            }},
            {text:'Войти', type: 'success', typebtn: 'submit', id: 'auth-form', handler(){
                
              
                adminModal.close()
                
            }}
        ]
    })
    
    document.addEventListener('click', event => {
        event.preventDefault()
       
        const btnType = event.target.dataset.btn
        
      
        if (btnType === 'admin'){
        
            adminModal.setContent(`
            <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email"  class="form-control" id="email" placeholder="Login">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
            
            
          </form>

        `)
        adminModal.open()

        
       
        
        // document.getElementById('auth-form').addEventListener('submit', authFormHandler, {once: true})
      
        }})

        
function authFormHandler(event){

  event.preventDefault()
  console.log('3');
  const email = event.target.querySelector('#email').value
  const password = event.target.querySelector('#password').value

console.log(email, password);


  
}