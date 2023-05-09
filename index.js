let KoleckoNaRade = true;
let range = 0;

function tableCreate() {
    const body = document.body;
    range = document.querySelector("#inputvalue").value;
    tbl = document.createElement('table');
    tbl.style.border = '1px solid black';
    for (let i = 0; i < range; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < range; j++) {
            const td = tr.insertCell();
            td.classList.add('HraciPole');              
        }
    }
    body.appendChild(tbl);
    ZacatekHry();
  
}
function restarthry(){
    window.location.reload();
}


function ZacatekHry() {
  const HraciPole = document.querySelectorAll(".HraciPole");
  console.log(HraciPole);
  HraciPole.forEach((HraciPole) => {
      HraciPole.addEventListener("click", () => {
            
            if(HraciPole.classList.contains("HraciPole")) {
                if (KoleckoNaRade == true) {
                    HraciPole.classList = "kolecko";
                    Victory();
                    KoleckoNaRade = false;
                    
                }   else {
                    HraciPole.classList = "krizek";
                    Victory();
                    KoleckoNaRade = true;
                }
                
                HraciPole.classList.remove("HraciPole");
                HraciPole.classList.add("ObsazenePole");
                
                
                if (CheckForObsazenePole()) {
                  if (confirm("Všechna pole jsou zabraná. Zmáčkněte ok pro restart hry")) {
                    window.location.reload();
                  }
                  else{
                    alert("Odmítli jste restart hry");
                  } 
                }
            }
        })
    })

  let StartSelector = document.querySelector('.HraciPole');
  StartSelector.setAttribute('id','start');
  var start = document.getElementById('start');
  start.focus();
  start.style.backgroundColor = 'green';
  start.style.color = 'white';
  }


window.addEventListener("DOMContentLoaded", function () {
const startbutton = document.getElementById("starthry");
const inputvalue = document.getElementById("inputvalue");
startbutton.addEventListener('click', () => {
    startbutton.remove();
    inputvalue.remove();
    document.getElementById("restarthry").style.visibility = "visible";
    document.querySelector("#restarthry").setAttribute("class","animation");
    });

    function dotheneedful(sibling) {
      if (sibling != null) {
        start.focus();
        start.style.backgroundColor = '';
        start.style.color = '';
        sibling.focus();
        sibling.style.backgroundColor = 'green';
        sibling.style.color = 'white';
        start = sibling;
      }
    }
    
    document.onkeydown = checkKey;
    function checkKey(e) {
      e = e || window.event;
      if (e.keyCode == '38') {
        // up arrow
        var idx = start.cellIndex;
        var nextrow = start.parentElement.previousElementSibling;
        if (nextrow != null) {
          var sibling = nextrow.cells[idx];
          dotheneedful(sibling);
        }
      } else if (e.keyCode == '40') {
        // down arrow
        var idx = start.cellIndex;
        var nextrow = start.parentElement.nextElementSibling;
        if (nextrow != null) {
          var sibling = nextrow.cells[idx];
          dotheneedful(sibling);
        }
      } else if (e.keyCode == '37') {
        // left arrow
        var sibling = start.previousElementSibling;
        dotheneedful(sibling);
      } else if (e.keyCode == '39') {
        // right arrow
        var sibling = start.nextElementSibling;
        dotheneedful(sibling);
      } else if (e.keyCode == '32') {  
        if(start.classList.contains("HraciPole")) {
          if (KoleckoNaRade == true) {
            start.classList = "kolecko";
            KoleckoNaRade = false;
          }   else {
            start.classList = "krizek";
            KoleckoNaRade = true;
          }
          start.classList.remove("HraciPole");
          start.classList.add("ObsazenePole");
          if (CheckForObsazenePole()) {
            if (confirm("Všechna pole jsou zabraná. Zmáčkněte ok pro restart hry")) {
              restarthry();
            }
            else{
              alert("Odmítli jste restart hry");
            } 
          }    
        } 
      }
        
    
    }
}); 

function CheckForObsazenePole(){
  let pocetPoli = Math.pow(parseInt(range),2);
  let obsazenePole = document.querySelectorAll("td.ObsazenePole").length;
  return obsazenePole >= pocetPoli;
}

function Victory(){
  let PocetZnaku = 0;
  const table = document.querySelector("table");

  let classProHrace = "kolecko";
  if (KoleckoNaRade == false) {
    classProHrace = "krizek";
  }

/*range=10*/
    for (let y = 0; y < range;y++) {
      for (let x = 0; x < range;x++) {
        if (table.rows[y].cells[x].classList.contains(classProHrace)) {
          PocetZnaku++;
          
        }
        else if (!(table.rows[y].cells[x].classList.contains(classProHrace))) {
          PocetZnaku == 0;
          console.log(PocetZnaku);
        }
        else{
          PocetZnaku == 0;
        }
      
      
      }
    
    }
}

