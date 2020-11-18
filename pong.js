class Bola{
    constructor(){
        this.posX=document.getElementsByTagName("svg")[0].width.animVal.value/2;
        this.posY=document.getElementsByTagName("svg")[0].height.animVal.value/2;
        this.incX=Math.floor(random(-10,10));
        this.incY=Math.floor(random(-10,10));
        if(this.incX==0 || this.incX==1 || this.incX==-1)this.incX=10;
        this.radio=15;

        var circ=document.createElementNS("http://www.w3.org/2000/svg","circle");
        circ.setAttributeNS(null,"cx",this.posX);
        circ.setAttributeNS(null,"cy",this.posY);
        circ.setAttributeNS(null,"r",this.radio);
        circ.setAttributeNS(null,"id","bola");
        circ.setAttributeNS(null,"fill","white");
        document.getElementsByTagName("svg")[0].appendChild(circ);
    }

    moverX(bola){
        var element = document.getElementById("bola");
        element.setAttribute("cx",bola.posX);
        element.setAttribute("cy",bola.posY);
        bola.posX += bola.incX;
        bola.posY += bola.incY;
        var svgX = document.getElementsByTagName("svg")[0].width.animVal.value;
        if(bola.posX > svgX){
            nuevaBola();
            m1++;
            gol("mi",m1+" |");
        };
        if(bola.posX < 0){
            nuevaBola();
            m2++;
            gol("md",m2);
        };
        var derecha=document.getElementById("derecha");
        var izquierda=document.getElementById("izquierda");
        if(bola.posX >=derecha.x.animVal.value-bola.radio && bola.posX <=derecha.x.animVal.value+derecha.width.animVal.value && bola.posY+bola.radio>=derecha.y.animVal.value && bola.posY+bola.radio<=(derecha.y.animVal.value+derecha.height.animVal.value)){
            bola.incX *= -1;
            if(Math.round(Math.random())*3==3){
                if(bola.incY>0){
                    bola.incY+=1;
                    if(bola.incY>10)bola.incY=9;
                }else{
                    bola.incY+=-1;
                    if(bola.incY<-10)bola.incY=-9;
                }
            }
        }
        if(bola.posX-bola.radio<=izquierda.x.animVal.value+izquierda.width.animVal.value && bola.posX >=izquierda.x.animVal.value && bola.posY+bola.radio>=izquierda.y.animVal.value && bola.posY+bola.radio<=izquierda.y.animVal.value+izquierda.height.animVal.value){
            bola.incX*=-1
            if(Math.round(Math.random())*3==3){
                if(bola.incY>0){
                    bola.incY+=1;
                    if(bola.incY>10)bola.incY=9;
                }else{
                    bola.incY+=-1;
                    if(bola.incY<-10)bola.incY=-9;
                }
            }
        }
    }

    moverY(bola){
        var element = document.getElementById("bola");
        element.setAttribute("cx",bola.posX);
        element.setAttribute("cy",bola.posY);
        bola.posX += bola.incX;
        bola.posY += bola.incY;
        var svgY = document.getElementsByTagName("svg")[0].height.animVal.value;
        if(bola.posY > svgY-bola.radio){bola.posY=svgY-bola.radio};
        if(bola.posY < bola.radio){bola.posY=bola.radio};

        if(bola.posY >=svgY-bola.radio){
            bola.incY *= -1;
            if(Math.round(Math.random())*3==3){
                if(bola.incX>0){
                    bola.incX+=2;
                    if(bola.incX>10)bola.incX=9;
                }else{
                    bola.incX-=2;
                    if(bola.incX<-10)bola.incX=-9;
                }
            }
        }

        if(bola.posY <=bola.radio){
            bola.incY*=-1
            if(Math.round(Math.random())*3==3){
                if(bola.incX>0){
                    bola.incX+=2;
                    if(bola.incX>10)bola.incX=9;
                }else{
                    bola.incX-=2;
                    if(bola.incX<-10)bola.incX=-9;
                }
            }
        }
    }
}

class Palo{
    constructor(lado){
        this.posX;
        if(lado=="derecha"){this.posX=document.getElementsByTagName("svg")[0].width.animVal.value-100;}else{this.posX=100}
        this.posY=(document.getElementsByTagName("svg")[0].height.animVal.value/2)-60;

        var rect=document.createElementNS("http://www.w3.org/2000/svg","rect");
        rect.setAttributeNS(null,"x",this.posX);
        rect.setAttributeNS(null,"y",this.posY);
        rect.setAttributeNS(null,"width",20);
        rect.setAttributeNS(null,"height",120);
        rect.setAttributeNS(null,"id",lado);
        rect.setAttributeNS(null,"fill","white");
        document.getElementsByTagName("svg")[0].appendChild(rect);

        document.addEventListener("keydown",event =>{
            if(event.key=="w" || event.key=="W"){
                document.getElementById("izquierda").setAttribute("y",document.getElementById("izquierda").y.animVal.value-20);
            }
            if(event.key=="s" || event.key=="S"){
                document.getElementById("izquierda").setAttribute("y",document.getElementById("izquierda").y.animVal.value+20);
            }
            if(event.key=="ArrowUp"){
                document.getElementById("derecha").setAttribute("y",document.getElementById("derecha").y.animVal.value-20);
            }
            if(event.key=="ArrowDown"){
                document.getElementById("derecha").setAttribute("y",document.getElementById("derecha").y.animVal.value+20);
            }
        });
    }

    logKey(e){
        console.log(e.code);
    }

}

function random(min,max){
    return Math.random() * (max - min) + min;
}

function anima(){
    bola.moverX(bola);
    bola.moverY(bola);
}

function nuevaBola(){
    bola.posX=document.getElementsByTagName("svg")[0].width.animVal.value/2;
    bola.posY=document.getElementsByTagName("svg")[0].height.animVal.value/2;
    bola.incX=Math.floor(random(-10,10));
    bola.incY=Math.floor(random(-10,10));
    if(bola.incX==0 || bola.incX==1 || bola.incX==-1)bola.incX=5;
}
function gol(id,n){
    document.getElementById(id).innerText=""+n;
}

var bola=new Bola;
var palo1=new Palo("izquierda");
var palo2=new Palo("derecha");
var m1=0;
var m2=0;
nuevaBola();
setInterval(anima,30);