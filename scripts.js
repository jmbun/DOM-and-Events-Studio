// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttle = document.getElementById("rocket");

    let addHeight = function(value) {
        let oldHeight = Number(shuttleHeight.innerText);
        let newHeight = oldHeight + value;
        shuttleHeight.innerText = newHeight;
    };

    let setHeight = function(value) {
        shuttleHeight.innerText = String(value);
    };

    document.getElementById("takeoff").addEventListener("click", function (event) {
        if(!window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            return;
        }
        flightStatus.innerText = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        addHeight(10000);
    });

    document.getElementById("landing").addEventListener("click", function (event) {
        window.confirm("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        setHeight(0);
    });

    document.getElementById("missionAbort").addEventListener("click", function (event) {
        if(!window.confirm("Confirm that you want to abort the mission.")) {
            return;
        }
        flightStatus.innerText = "Mission aborted";
        shuttleBackground.style.backgroundColor = "green";
        setHeight(0);
    });

    document.getElementById("up").addEventListener("click", function (event) {
        shuttle.style.top = "30%";
        //shuttle.style.padding = "50px 10px 20px 30px";
        addHeight(+10000);
    });

    document.getElementById("down").addEventListener("click", function (event) {
        addHeight(-10000);
    });

    document.getElementById("right").addEventListener("click", function (event) {
        shuttle.style.top = "50%";

    });

    document.getElementById("left").addEventListener("click", function (event) {
        
    });
});