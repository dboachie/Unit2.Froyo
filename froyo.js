const flavors = prompt("Please enter a list of comma separated flavors");


const inputFlavors = flavors.split(",");


const froyo = {



};

function orders() {





    for (let i = 0; i < inputFlavors.length; i++) {



        if (!froyo[inputFlavors[i]]) {



            froyo[inputFlavors[i]] = 1

        }

        else {
            froyo[inputFlavors[i]]++


        }



    }

    console.table(froyo);

}

orders()