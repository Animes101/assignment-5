//select all seat button and click Event add
let totalPrice=0;
let seat=40;
let count=0;
let discount=0;
const seatsButtons=document.querySelectorAll('#sit-button');
for(const seatButton of seatsButtons){

        seatButton.addEventListener('click',function(e){

            
        //button and alert message

        if (count >= 4) {
            alert("You can buy only 4 tickets");
            return;
        }

        if (seatButton.classList.contains('bg-[#1DD100]')) {
            return;
        }

        //seat seatButton background color
        seatButton.classList.add('bg-[#1DD100]')

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

        const classElement=document.createElement('h3');
        classElement.innerText='Economoy';
        div.appendChild(classElement);

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

                ///discount 
                const kopuponBtn=document.getElementById('kopupon-btn');
                kopuponBtn.addEventListener('click',function(){
                    const kuponFields=document.getElementById('kopupon-field').value;
                    const kuponField=kuponFields.split(' ').join('').toUpperCase();

                    const discountElement=document.getElementById('discount')
                    if(kuponField === 'NEW15' || kuponField === 'COUPLE20'){
                        if(kuponField === 'NEW15'){
                            discount=totalPrice * 15 / 100;
                            discountElement.innerText='Discount= '+ discount;

                            grandTotal.innerText=totalPrice - discount;
                        }else if(kuponField === 'COUPLE20'){
                            discount=totalPrice * 20 / 100;
                            discountElement.innerText='Discount= '+ discount;

                            grandTotal.innerText=totalPrice - discount;

                        }
                    }else{
                        alert('please valid kopupon')
                    }
                    kuponElement.classList.add('hidden');

                    
                })

            }

    })
    
}

//next button enable and click function

const numberField = document.getElementById('number-input');
numberField.addEventListener('keyup', function (e) {
    const number = e.target.value;
    const nextBtn = document.getElementById('next-btn');
    if (number !== '') {
        nextBtn.classList.remove('btn-disabled');
    }else{
        nextBtn.classList.add('btn-disabled');
        numberField.value = ''
    }
})

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {

    const congratulation = document.getElementById('success');
    congratulation.classList.remove('hidden');

});


function Continue() {
    const congratulation = document.getElementById('success');
    congratulation.classList.add('hidden');
    const numberField = document.getElementById('number-input')
    numberField.value = '';
}




