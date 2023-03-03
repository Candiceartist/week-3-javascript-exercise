// let width = ()
// let height = ()

// const computerArea = () => {
//   width * height 
// }

// computerArea()
                      //parameter
const computerArea = (width,height)=> {
  area = width * height
  console.log(area)
}
// arguments
computerArea(20,20)

// const addAges = (a, b, c, d, e) => {
//   // ..by doing this
//   let total = a + b + c + d + e
//   console.log(total)
// }

// addAges(1, 43, 66, 34, 8)

// addAges(1.5, 4, 6, 3, 8)



const planetHasWater =(planet)=>{
  if(planet.toLowerCase() === "earth" || planet.toLowerCase() ==="Mars" ){
    console.log("TRUUUU")
    return true 
  }else{
    console.log("NAHHH")
    return false
  }
}


planetHasWater("Earth") 
planetHasWater("EARth") 
planetHasWater("EarTH") 
planetHasWater("EARTH") 
planetHasWater("Earf") 