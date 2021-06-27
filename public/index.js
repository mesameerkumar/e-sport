// basic js file
const pp = document.querySelector('#prizep');
const contentp = document.querySelector('#pp');
const mg= document.querySelector('#Moreg');
const contentg = document.querySelector('#ga');
const st= document.querySelector('#stream');
const contents = document.querySelector('#ss');

pp.addEventListener("click",()=>{
    const abox= new WinBox({
        title: "Prize Pool",
        background: "#00aa00",
        height:'250',
        width:'250',
        top:10,
        left:10,
        right:10,
        bottom:10,
        mount:contentp, 
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
})