const PORT = process.env.PORT || 8000;

const express = require('express');
const axios = require('axios');
const res = require('express/lib/response');
const { config } = require('nodemon');


const app = express();

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

// Variables


const degrees = ["1deg", "2deg", "3deg", "4deg", "5deg", "6deg", "7deg", "8deg", "9deg", "10deg", "11deg", "12deg", "13deg", "14deg", "15deg", "16deg", "17deg", "18deg", "19deg", "20deg", "21deg", "22deg", "23deg", "24deg", "25deg", "26deg", "27deg", "28deg", "29deg", "30deg", "31deg", "32deg", "33deg", "34deg", "35deg", "36deg", "37deg", "38deg", "39deg", "40deg", "41deg", "42deg", "43deg", "44deg", "45deg", "46deg", "47deg", "48deg", "49deg", "50deg", "51deg", "52deg", "53deg", "54deg", "55deg", "56deg", "57deg", "58deg", "59deg", "60deg", "61deg", "62deg", "63deg", "64deg", "65deg", "66deg", "67deg", "68deg", "69deg", "70deg", "71deg", "72deg", "73deg", "74deg", "75deg", "76deg", "77deg", "78deg", "79deg", "80deg", "81deg", "82deg", "83deg", "84deg", "85deg", "86deg", "87deg", "88deg", "89deg", "90deg", "91deg", "92deg", "93deg", "94deg", "95deg", "96deg", "97deg", "98deg", "99deg", "100deg", "101deg", "102deg", "103deg", "104deg", "105deg", "106deg", "107deg", "108deg", "109deg", "110deg", "111deg", "112deg", "113deg", "114deg", "115deg", "116deg", "117deg", "118deg", "119deg", "120deg", "121deg", "122deg", "123deg", "124deg", "125deg", "126deg", "127deg", "128deg", "129deg", "130deg", "131deg", "132deg", "133deg", "134deg", "135deg", "136deg", "137deg", "138deg", "139deg", "140deg", "141deg", "142deg", "143deg", "144deg", "145deg", "146deg", "147deg", "148deg", "149deg", "150deg", "151deg", "152deg", "153deg", "154deg", "155deg", "156deg", "157deg", "158deg", "159deg", "160deg", "161deg", "162deg", "163deg", "164deg", "165deg", "166deg", "167deg", "168deg", "169deg", "170deg", "171deg", "172deg", "173deg", "174deg", "175deg", "176deg", "177deg", "178deg", "179deg", "180deg", "181deg", "182deg", "183deg", "184deg", "185deg", "186deg", "187deg", "188deg", "189deg", "190deg", "191deg", "192deg", "193deg", "194deg", "195deg", "196deg", "197deg", "198deg", "199deg", "200deg", "201deg", "202deg", "203deg", "204deg", "205deg", "206deg", "207deg", "208deg", "209deg", "210deg", "211deg", "212deg", "213deg", "214deg", "215deg", "216deg", "217deg", "218deg", "219deg", "220deg", "221deg", "222deg", "223deg", "224deg", "225deg", "226deg", "227deg", "228deg", "229deg", "230deg", "231deg", "232deg", "233deg", "234deg", "235deg", "236deg", "237deg", "238deg", "239deg", "240deg", "241deg", "242deg", "243deg", "244deg", "245deg", "246deg", "247deg", "248deg", "249deg", "250deg", "251deg", "252deg", "253deg", "254deg", "255deg", "256deg", "257deg", "258deg", "259deg", "260deg", "261deg", "262deg", "263deg", "264deg", "265deg", "266deg", "267deg", "268deg", "269deg", "270deg", "271deg", "272deg", "273deg", "274deg", "275deg", "276deg", "277deg", "278deg", "279deg", "280deg", "281deg", "282deg", "283deg", "284deg", "285deg", "286deg", "287deg", "288deg", "289deg", "290deg", "291deg", "292deg", "293deg", "294deg", "295deg", "296deg", "297deg", "298deg", "299deg", "300deg", "301deg", "302deg", "303deg", "304deg", "305deg", "306deg", "307deg", "308deg", "309deg", "310deg", "311deg", "312deg", "313deg", "314deg", "315deg", "316deg", "317deg", "318deg", "319deg", "320deg", "321deg", "322deg", "323deg", "324deg", "325deg", "326deg", "327deg", "328deg", "329deg", "330deg", "331deg", "332deg", "333deg", "334deg", "335deg", "336deg", "337deg", "338deg", "339deg", "340deg", "341deg", "342deg", "343deg", "344deg", "345deg", "346deg", "347deg", "348deg", "349deg", "350deg", "351deg", "352deg", "353deg", "354deg", "355deg", "356deg", "357deg", "358deg", "359deg", "360deg"];

const directions = [
    {
        "id": "tt",
        "value": "to top"
    },
    {
        "id": "tb",
        "value": "to bottom"
    },
    {
        "id": "tl",
        "value": "to left"
    },
    {
        "id": "tr",
        "value": "to right"
    },
    {
        "id": "tlt",
        "value": "to left top"
    },
    {
        "id": "trt",
        "value": "to right top"
    },
    {
        "id": "trb",
        "value": "to right bottom"
    },
    {
        "id": "tlb",
        "value": "to left bottom"
    },
]




let allGradients = [];



// Completely Random Direction and Random Color

app.get('/random', async (req, res) => {

    const randomDirection = directions[Math.floor(Math.random() * directions.length)].value


    axios.get('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json')
        .then(data => {

            const totalGradients = data.data;

            // Getting a Random number from the Total num of gradients
            randomNumber = Math.floor(Math.random() * totalGradients.length)


            // Picking a random Gradient
            const randomColors = totalGradients[randomNumber]



            // Examining it

            if (randomColors.colors.length === 3) {

                const [colorOne, colorTwo, colorThree] = randomColors.colors;
                const gradientcolor = {
                    "gradientColor": `linear-gradient(${randomDirection}, ${colorOne}, ${colorTwo}, ${colorThree} )`,
                    "name": `${randomColors.name}`,
                    "colors": [colorOne, colorTwo, colorThree]
                }


                res.json(gradientcolor)
            } else {

                const [colorOne, colorTwo] = randomColors.colors;
                const gradientcolor = {
                    "gradientColor": `linear-gradient(${randomDirection}, ${colorOne}, ${colorTwo})`,
                    "name": `${randomColors.name}`,
                    "colors": [colorOne, colorTwo]
                }


                res.json(gradientcolor)
            }




        }).catch(err => console.log(err))

})

// Get All Gradient as an array

app.get('/all', async (req, res) => {

    axios.get('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json')
        .then(data => {



            for (let colors of data.data) {



                if (colors.colors.length === 3) {


                    let [colorOne, colorTwo, colorThree] = colors.colors;



                    let colorGradient = {
                        name: `${colors.name}`,
                        "gradientColor": `linear-gradient(to right, ${colorOne}, ${colorTwo}, ${colorThree})`,
                        "colors": [colorOne, colorTwo, colorThree]
                    }

                    allGradients.push(colorGradient)


                } else {


                    let [colorOne, colorTwo] = colors.colors;


                    let colorGradient = {
                        "name": `${colors.name}`,
                        "gradientColor": `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
                        "colors": [colorOne, colorTwo]
                    }

                    allGradients.push(colorGradient)


                }



            }

            res.json(allGradients)


        }).catch(err => console.log(err))


})






// Specific Angle

app.get('/angle/:degree', async (req, res) => {


    const degree = req.params.degree.toLowerCase();


    if (degrees.includes(degree)) {
        axios.get('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json')
            .then(data => {

                const totalGradients = data.data;

                // Getting a Random number from the Total num of gradients

                randomNumber = Math.floor(Math.random() * totalGradients.length)


                // Picking a random Gradient
                const randomColors = totalGradients[randomNumber]



                // Examining it

                if (randomColors.colors.length === 3) {

                    const [colorOne, colorTwo, colorThree] = randomColors.colors;
                    const gradientcolor = {
                        "gradientColor": `linear-gradient(${degree}, ${colorOne}, ${colorTwo}, ${colorThree} )`,
                        "name": `${randomColors.name}`,
                        "colors": [colorOne, colorTwo, colorThree]
                    }

                    res.json(gradientcolor)
                } else {

                    const [colorOne, colorTwo] = randomColors.colors;
                    const gradientcolor = {
                        "gradientColor": `linear-gradient(${degree}, ${colorOne}, ${colorTwo})`,
                        "name": `${randomColors.name}`,
                        "colors": [colorOne, colorTwo]
                    }

                    res.json(gradientcolor)
                }




            }).catch(err => console.log(err))
    } else {
        res.json("INVALID ANGLE ! (angle must be from '0deg' to '360deg')")
    }

})


// Specific Direction

app.get('/direction/:direction', (req, res) => {

    requestDirection = req.params.direction.toLowerCase();

    const direction = directions.filter(direction => direction.id == requestDirection)

    if (direction.length == 0) {

        res.json("INVALID DIRECTION!")

    } else if (direction.length <= 1) {


        directionValue = direction[0].value;

        axios.get('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json')
            .then(data => {

                const totalGradients = data.data;

                // Getting a Random number from the Total num of gradients

                randomNumber = Math.floor(Math.random() * totalGradients.length)

                // Picking a random Gradient
                const randomColors = totalGradients[randomNumber]


                // Examining it

                if (randomColors.colors.length === 3) {

                    const [colorOne, colorTwo, colorThree] = randomColors.colors;
                    const gradientcolor = {
                        "gradientColor": `linear-gradient(${directionValue}, ${colorOne}, ${colorTwo}, ${colorThree} )`,
                        "name": `${randomColors.name}`,
                        "colors": [colorOne, colorTwo, colorThree]
                    }


                    res.json(gradientcolor)
                } else {

                    const [colorOne, colorTwo] = randomColors.colors;
                    const gradientcolor = {
                        "gradientColor": `linear-gradient(${directionValue}, ${colorOne}, ${colorTwo})`,
                        "name": `${randomColors.name}`,
                        "colors": [colorOne, colorTwo]
                    }


                    res.json(gradientcolor)
                }




            }).catch(err => console.log(err))

    }
})

app.get('/', (req, res) => {

    res.json("Welcome to Random-Gradient-API |  visit    | Credits : uigradients.com")
})