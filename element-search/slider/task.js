const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderDot =  Array.from(document.querySelectorAll('.slider__dot'));
const sliderButtonLeft = document.querySelector('.slider__arrow_prev');
const sliderButtonRight = document.querySelector('.slider__arrow_next');
const naviArrow = document.querySelectorAll('.slider__arrow')

let count = 0; // счетчик

// Управление счетчиком
sliderButtonRight.addEventListener('click', () => {
    count += 1;
        if (count >= sliderItem.length){count = 0}
})
sliderButtonLeft.addEventListener('click', () => {
    count -= 1;
        if (count === -1){count = sliderItem.length -1}
    })
    

    // Управление слайдами кнопками навигации
naviArrow.forEach(el => {
    el.addEventListener('click', () => {
        sliderItem[count].classList.add('slider__item_active');
        if (count === (sliderItem.length-1)){
                sliderItem[0].classList.remove('slider__item_active');
                sliderItem[count-1].classList.remove('slider__item_active');
        } else if (count === 0){
                sliderItem[sliderItem.length-1].classList.remove('slider__item_active');
                sliderItem[count+1].classList.remove('slider__item_active');
        }  else {
            sliderItem[count-1].classList.remove('slider__item_active');
            sliderItem[count+1].classList.remove('slider__item_active');
        }
    }) 
})

// Управление точками
sliderDot.forEach ((item, index) => {
    item.addEventListener('click', () =>{
        sliderItem.forEach(rem => {
            rem.classList.remove('slider__item_active');
        });
        sliderItem[index].classList.add('slider__item_active');
    })
})