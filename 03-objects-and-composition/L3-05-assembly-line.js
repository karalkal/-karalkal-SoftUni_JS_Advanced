function createAssemblyLine() {
    let objectWithDecoratorFunctions = {

        hasClima: function (car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp += 1
                }
                else if (car.temp > car.tempSettings) {
                    car.temp -= 1
                }
            }
        },

        hasAudio: function (car) {
            car.currentTrack = { name: null, artist: null };
            car.nowPlaying = function () {
                if (car.currentTrack.name && car.currentTrack.artist) {   // if currentTrack exists
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`)
                }
            }
        },

        hasParktronic: function (car) {
            car.output = ''
            car.checkDistance = function (distance) {
                if (distance < 0.1) {
                    car.output = "Beep! Beep! Beep!"
                }
                else if (distance >= 0.1 && distance < 0.25) {
                    car.output = "Beep! Beep!"
                }
                else if (distance >= 0.25 && distance < 0.5) {
                    car.output = "Beep!"
                }
                console.log(car.output)
            }
        }
    }

    return objectWithDecoratorFunctions
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis',
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = { name: 'Never Gonna Give You Up', artist: 'Rick Astley' };
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);

