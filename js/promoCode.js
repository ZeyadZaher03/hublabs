const promoCodeHandler = () => {
    const promoCodesButtons = document.querySelectorAll(".promo-code-status");
    promoCodesButtons.forEach(promoCodesButton=>{
        promoCodesButton.addEventListener("click",()=>{
            const button = promoCodesButton;
            const container = promoCodesButton.parentNode.parentNode.parentNode;
            const activityContainer = container.querySelector(
              ".promo-codes-item-sec"
            );
            const activity = container.querySelector(".promo-code-activity");
            const activityMsg = container.querySelector(
              ".promo-code-activity-message"
            );
                
            let isBurned = button.classList.contains("promo-code-status--inactive"); 
            
            const burnCodeHandler = ()=>{
                button.classList.remove("promo-code-status--active"); 
                button.classList.add("promo-code-status--inactive");
                activityContainer.classList.remove("promo-codes-item--burn");
                activityContainer.classList.add("promo-codes-item--burned");
                activity.innerHTML = `<i class="fas fa-shield-alt"></i>&nbspVerified Code`;
                activityMsg.innerHTML = `<i class="far fa-check-circle"></i>&nbsp;Burned Code`;
            } 
            
            const unBurnCodeHandler = ()=>{
                button.classList.remove("promo-code-status--inactive"); 
                button.classList.add("promo-code-status--active"); 
                activityContainer.classList.remove("promo-codes-item--burned");
                activityContainer.classList.add("promo-codes-item--burn");
                activity.innerHTML = "Active Code";
                activityMsg.innerHTML = "Still available to use";
                
            } 
            

            if(isBurned){
                unBurnCodeHandler();
            }else if(!isBurned){
                burnCodeHandler();
            }
        });
    });

}

promoCodeHandler() 
footerVisHandler("side");