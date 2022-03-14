const seatSelection     = document.querySelector(".container");
const movies            = document.querySelector("#movie");

const count         = document.querySelector("#count");
const film          = document.querySelector("#film");
const total         = document.querySelector("#total");

function selectedSeats(){
      const seats = document.querySelectorAll(".row .seat");
      let selectedSeats = [];
      seats.forEach((seat, index)=>{
            if (seat.classList.contains("selected")){
                  selectedSeats.push(index);
            }
      })
      return selectedSeats;
}

function selectedMovie(){
      return movies.options[movies.selectedIndex].innerText.split("(")[0];
}

function selectedMoviePrice(){
      return movies.options[movies.selectedIndex].value;
}

function calculations(){
      count.textContent = localStorage.getItem("Selected Seats").split(",").length;
      film.textContent  = localStorage.getItem("Selected Movie");
      total.textContent = localStorage.getItem("Selected Movie Price") * +count.textContent;
}

movies.addEventListener("change",()=>{
     localStorage.setItem("Selected Movie", selectedMovie())
     localStorage.setItem("Selected Movie Price",selectedMoviePrice());
     calculations();
})
// movies.addEventListener("change", ()=>{
//       calculator()
//   })


seatSelection.addEventListener("click", (e)=>{
     if (e.target.classList.contains("seat") 
            && !e.target.classList.contains("occupied")){
                  e.target.classList.toggle("selected");
            }
      console.log(selectedSeats());
      localStorage.setItem("Selected Seats", selectedSeats());
      localStorage.setItem("Selected Movie", selectedMovie())
      localStorage.setItem("Selected Movie Price",selectedMoviePrice());
      calculations();

})

window.addEventListener("load", ()=>{
      const selectedSeats = localStorage.getItem("Selected Seats").split(",");
      const seats = document.querySelectorAll(".row .seat");
      for (const seat of selectedSeats) {
            seats[seat].classList.add("selected");
      }
      calculations();
})