'use strict';

const formContainer=document.getElementById('studentForm');
const tabelContainer=document.getElementById('tabelContainer');
const studentArray=['id','name','mobile','age','tution'];
const submitButton=document.getElementById('submitButton');

function StudentInformation(studentEmail,mobileNumber,tution){
this.studentEmail=studentEmail;
this.mobileNumber=mobileNumber;
this.tution=tution;
this.min=18;
this.max=24;
StudentInformation.all.push(this);
// console.log(StudentInformation.all);
}
StudentInformation.all=[];


function retriveLocal(){
    if(localStorage.length>0){
        StudentInformation.all=JSON.parse(localStorage.getItem('studentInformation'));
        studentInforender();
    }
}

StudentInformation.prototype.render=function(){
    const tabel=document.createElement('table');
    tabelContainer.appendChild(tabel);
    const firstRow=document.createElement('tr')
    tabel.appendChild(firstRow);
    firstRow.textContent=studentArray;

    const secRow=document.createElement('td');
    tabel.appendChild(secRow);
    secRow.textContent=`${this.studentEmail} ${this.mobileNumber}  ${this.tution} `;

}
const totaloftotal=[];
function studentInforender(){
    const tabel=document.createElement('table');

    for(let i=0 ; i<studentArray.length;i++){
    const firstRow=document.createElement('tr')
    tabel.appendChild(firstRow);
    firstRow.textContent=studentArray[i];
    }

    for(let i=0;i<StudentInformation.all.length;i++){
        const secRow=document.createElement('td');
        tabel.appendChild(secRow);
        secRow.textContent=`${StudentInformation.all[i].studentEmail} ${StudentInformation.all[i].mobileNumber} ${StudentInformation.all[i].tution} `;

        }
        for(let i=0;i<StudentInformation;i++){
            totaloftotal+=StudentInformation.all[i].tution;
        }
        const totalOf=document.createElement('p');
        formContainer.appendChild(totalOf);
        totalOf.textContent=totaloftotal;
}

function handelSubmit(event){
        event.preventDefault();
        const studentEmail=document.getElementById('studentEmail').value;
        const mobileNumber=document.getElementById('studentNo').value;
        const tution=document.getElementById('tutionFee').value;
        
        const newStudent= new StudentInformation(studentEmail,mobileNumber,tution);
        formContainer.reset();
         newStudent.render();
    console.log(StudentInformation.all);
        localStorage.setItem('studentInformation',JSON.stringify(StudentInformation.all));
        


}
submitButton.addEventListener('click',handelSubmit);

function getRandomAge(min, max) {
    return Math.random() * (max - min) + min;
  }
  retriveLocal();
