
    const b=document.getElementById("but");
    b.addEventListener('click',async()=>{
        const c=document.getElementById('city').value;
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${'1a8aff1a0e9dcd3e2940d5ab5239939a'}`;
    var we=await fetch(url);
    var res=await we.json();
    console.log(res)
    var {temp,feels_like}=res.main;
    var {description}=res.weather[0];
    console.log(description,temp,feels_like)
    display(description,temp,feels_like,c);
    grpah(res.main.grnd_level,res.main.humidity,res.main.pressure,res.main.sea_level)
    grp()
    })
    
function display(description,temp,feels_like,c){
    document.getElementById('result').insertAdjacentHTML('beforeend','<h3>Place : '+c+'</h3> <br> <h3>Weather : '+description+'</h3> <br> <h3>Temperature : '+temp+ '</h3> <br> <h3> Feels Like :'+feels_like+'</h3>');
}
function grpah(grnd,humidity,pressure,sea_level){
const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Ground level', 'Humidity', 'Pressure', 'Sea Level'],
            datasets: [{
              label: '# of Votes',
              data: [grnd, humidity, pressure, sea_level],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
    }
function grp(){
    console.log("pie")
    const p=document.getElementById('pie');
    new Chart(p,{
        type:'pie',
        data: {
            labels: [
              'Red',
              'Blue',
              'Yellow'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          }
    });
    
}