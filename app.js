const cp = document.querySelector('.cp')
const cp2 = document.querySelector('.cp2')
const cp3 = document.querySelector('.cp3')
const cp4 = document.querySelector('.cp4')

const heading = document.querySelector('.heading');
const lists = document.querySelector('.ul');

const hd2 = document.querySelector('.hd2');
const hd3 = document.querySelector('.hd3');
const hd4 = document.querySelector('.hd4');

const ul2 = document.querySelector('.ul2');
const ul3 = document.querySelector('.ul3');
const ul4 = document.querySelector('.ul4');


heading.addEventListener('click',()=>{
    ul2.classList.remove('show-list')
    ul3.classList.remove('show-list')
    ul4.classList.remove('show-list')

    lists.classList.toggle('show-list')
    cp2.innerHTML = '+'
    cp3.innerHTML = '+'
    cp4.innerHTML = '+'
    
    if(lists.classList.contains('show-list')){
        cp.innerHTML = '-'
        
    }
    else{
        cp.innerHTML = '+'
    }

}
    
);



hd2.addEventListener('click',()=>{
    lists.classList.remove('show-list')
    ul3.classList.remove('show-list')
    ul4.classList.remove('show-list')

    ul2.classList.toggle('show-list')
    cp.innerHTML = '+'
    cp4.innerHTML = '+' 
    cp3.innerHTML = '+' 
     
    if(ul2.classList.contains('show-list')){
        cp2.innerHTML = '-'
    }
    else{
        cp2.innerHTML = '+'
    }

    
    
});

hd3.addEventListener('click',()=>{
    lists.classList.remove('show-list')
    ul2.classList.remove('show-list')
    ul4.classList.remove('show-list')

    ul3.classList.toggle('show-list')
    cp.innerHTML = '+'
    cp2.innerHTML = '+' 
    cp4.innerHTML = '+' 

    if(ul3.classList.contains('show-list')){
        cp3.innerHTML = '-'
    }
    else{
        cp3.innerHTML = '+'
    }

    
    
});

hd4.addEventListener('click',()=>{
    lists.classList.remove('show-list')
    ul2.classList.remove('show-list')
    ul3.classList.remove('show-list')

    ul4.classList.toggle('show-list')
    cp.innerHTML = '+'
    cp2.innerHTML = '+' 
    cp3.innerHTML = '+' 

    if(ul4.classList.contains('show-list')){
        cp4.innerHTML = '-'
    }
    else{
        cp4.innerHTML = '+'
    }

    
    
});