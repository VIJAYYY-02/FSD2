const father={
    vehicle.function(){
        console.log("scooter");
    }
};
let son=Object.create(father);
son.vehicle=function(){
    console.log("bike");
};
son.vehicle();
father.vehicle();