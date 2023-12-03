var insideRect = document.querySelector(".rectangle");
const throttlePointerFn = (functionToDelay, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - prev > delay){
        //will run the first time since time - 0 > delay
            prev = now;
            return functionToDelay(...args);
        }
    }
}

insideRect.addEventListener("mousemove", 
            throttlePointerFn((dets)=>{
                var div = document.createElement("div");
                div.classList.add("imageDiv");
                //assigning class imageDiv to div above

                div.style.left = dets.clientX + 'px';
                div.style.top = dets.clientY + 'px';

                var img = document.createElement("img");

                img.setAttribute("src", "./media/picture/confusedCat.png");

                div.appendChild(img);
                document.body.appendChild(div);

                gsap.to(img, {
                    y: "0",
                    ease: Power3,
                    duration: .1
                });

                gsap.to(img, {
                    y: "100%",
                    ease: Power2,
                    delay: .5,
                });

                console.log("Working");

                setTimeout(function(){
                    div.remove();
                }, 1000)
                //must have, else the cat's will stop
                // to appear since last div's will take
                // up all the space.

            }, 100));

