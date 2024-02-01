// synchronous //
/*
console.log("I")

console.log("eat")

console.log("ice cream")

console.log("with a")

console.log("spoon")
*/



// ASYNCHRONOUS //
/*
setTimeout(() => {
  console.log("I");
}, 1000);

setTimeout(() => {
  console.log("eat");
}, 1500);

setTimeout(() => {
  console.log("ice cream");
}, 2000);

setTimeout(() => {
  console.log("with a");
}, 2500);

setTimeout(() => {
  console.log("spoon");
}, 3000);
*/


//CALLBACKS//
/*
In basic terms, calling a function inside another function is a callback, it does a connection between two functions
*/

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = false;

function time (ms){
  return new Promise((resolve, reject)=>{
    if(isShopOpen){
      setTimeout(resolve, ms)
    }
    else{
      reject(console.log("The shop is closed"))
    }
  })
}

async function kitchen(){
  try{
    await time(2000)

    console.log(`${stocks.fruits[0]} selected`);

    await time(1000)
    console.log("Start the production");

    await time(2000)
    console.log("Cut the fruit");

    await time(2000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000)
    console.log("Machine started");

    await time(2000)
    console.log(`Ice cream placed on ${stocks.holder[0]}`);

    await time(3000)
    console.log(`${stocks.toppings[0]} topping added to ice cream`);

    await time(2000)
    console.log("Serving the ice cream")


  }

  catch(error){
    console.log("Custumer left", error)
  }

  finally{
    console.log("Day ended, shop is closed")
  }
}

kitchen();

/*
let toppingsChoice =()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(console.log("Which topping you would like to add?"));
    }, 3000)
  });
}

async function kitchen(){
  console.log("A")
  console.log("B")
  console.log("C")

  await toppingsChoice();

  console.log("D")
  console.log("E")
}

kitchen()

console.log("Doing the dishes")
console.log("Cleaning the tables")
console.log("Taking other orders")
/*






/*
let order = (time, work)=>{
  
  return new Promise ((resolve, reject)=>{

    if(isShopOpen){
      setTimeout(()=>{
        resolve(work());
      }, time);
    } 
    else{
      reject(console.log("Our shop is closed"));
    };
  });
}

order(2000, ()=> console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{
  return order(1000, ()=>{
    console.log("Production has started");
  });
})

.then(()=>{
  return order(2000, ()=>{
    console.log("The fruit was chopped");
  });
})

.then(()=>{
  return order(2000, ()=>{
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
  });
})

.then(()=>{
  return order(1000, ()=>{
    console.log("The machine has been started");
  });
})

.then(()=>{
  return order(2000, ()=>{
    console.log(` Ice cream was placed on ${stocks.holder[0]}`);
  });
})

.then(()=>{
  return order(3000, ()=>{
    console.log(`${stocks.toppings[0]} was selected`);
  });
})

.then(()=>{
  return order(2000, ()=> console.log("Ice cream was served"));
})

.catch(()=>{
  console.log("Costumer left");
})

.finally(()=>{
  console.log("Day ended, shop is closed");
})
*/

/*let order = ()=>{
  return new Promise((resolve, reject)=>{
    if(true){
      resolve()
    }

    else{
      reject()
    }
  })
} 
















/*
let order = (fruitName, callProduction)=>{
  setTimeout(()=>{
    console.log(`${stocks.fruits[fruitName]} was selected`);
    callProduction()
  }, 2000)
};

//CALLBACK HELL//

let production = ()=>{
  setTimeout(()=>{
    console.log("Production has started");
    setTimeout(()=>{
      console.log("The fruit has been chopped");
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(()=>{
          console.log("the machine was started");
          setTimeout(()=>{
            console.log(`ice cream was placed on the ${stocks.holder[0]}`);
            setTimeout(()=>{
              console.log(`${stocks.toppings[0]} topping was added`);
              setTimeout(()=>{
                console.log("Serve ice cream")
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production)
*/



