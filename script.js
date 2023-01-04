var a = document.getElementById('btn');
a.addEventListener('click',()=>{

    async function call(){
        // console.log("cl");
        var ser = document.getElementById('txt').value;
        var coin = ser.toUpperCase();
        // console.log(coin);


        var get_url= await fetch("http://api.coinlayer.com/api/live?access_key=b6f704d4e170caf9522cf0a0ba984cd2");
        var data= await get_url.json();
        var don = Object.values(data);
        var obj = don[5];
        var coin_value = obj[`${coin}`];
        // console.log(coin_value);

        var a = document.getElementById('name');
        a.innerText=`The value of ${coin} is ${coin_value} USD`;
    }
    call()
})

var cl = document.getElementById('cl');
cl.addEventListener('click',()=>{
    var b = document.getElementById('name');
        b.innerText="";
    var c = document.getElementById('txt');
    c.value=""


})