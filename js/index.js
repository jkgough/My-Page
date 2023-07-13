// email copy

function copyText() {
      
            /* Copy text into clipboard */
            navigator.clipboard.writeText
                ("jkgougn@hotmail.com");
        }

        //   Button Change
        const changeText = document.querySelector(".headerButton");

        changeText.addEventListener("click", function() {
          changeText.textContent = "Copied!";
        });
        


        // Scroll to top


        let mybutton = document.getElementById("blk-btn");
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }