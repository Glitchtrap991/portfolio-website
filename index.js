const btn = document.getElementById("btn");
        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                btn.click();
            }
        });
        btn.addEventListener("click", () => {
            btn.textContent = "Clicked !!!";
        });