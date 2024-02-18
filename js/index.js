//select all seat button and click Event add
let totalPrice=0;
let seat=40;
let count=0;
let discount=0;
const seatsButtons=document.querySelectorAll('#sit-button');
for(let i = 0 ; i <= seatsButtons.length ; i++){

    const seatButton=seatsButtons[i];

    seatButton.addEventListener('click',function(){

        //seat seatButton background color
        seatButton.classList.add('bg-green-500')

        //disablet button



        //get site namne and price
        const btnText=this.innerText;
        const price=parseFloat(550);

        //select seat Container and seat child div

        const seatContainer=document.getElementById('select-title');

        //create seat title and parent div

        const div=document.createElement('div');
        div.setAttribute('class','flex justify-between items-center')
        const seatName=document.createElement('h3');
        seatName.innerText=btnText;
        div.appendChild(seatName);

        const priceTitle=document.createElement('h3');
        priceTitle.innerText=price;
        div.appendChild(priceTitle);

        seatContainer.appendChild(div);

        //sum total price and add

        totalPrice += price;
        const total=document.getElementById('price');
        total.innerText=totalPrice;

        //grand total price

        const grandTotal=document.getElementById('grand-total');
        grandTotal.innerText=totalPrice;

        //total seate 
        const totalSeat=document.getElementById('total-seate');
            seat=seat -1;
            totalSeat.innerText=seat;


            //seat count

            const seatCount=document.getElementById('seat-count');

            count += 1;
            seatCount.innerText=count;



            //discunt functionality

            if(count === 4){
                //cupon input enable
                const kuponElement=document.getElementById('cupon-input');
                kuponElement.children[0].classList.add('bg-green-200')
                kuponElement.classList.remove('btn-disabled');

                ///dispunt 
                const kopuponBtn=document.getElementById('kopupon-btn');
                kopuponBtn.addEventListener('click',function(){
                    const kuponField=document.getElementById('kopupon-field').value;
                    if(kuponField === 'NEW15'){
                        discount=totalPrice * 15 /100;

                        grandTotal.innerText=totalPrice - discount;


                    }


    

                    
                })

            }



    })
    
}




