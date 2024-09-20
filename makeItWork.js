document.addEventListener("DOMContentLoaded", function() {
console.log("DOM Ready");


    const majorArcana = [
        {src: "0-the-Fool.jpg", text: "placeholder"},
        {src: "1-the-magician.jpg", text: "placeholder"},
        {src: "2-the-high-priestess.jpg", text: "placeholder"},
        {src: "3-the-empress.jpg", text: "placeholder"},
        {src: "4-the-emperor.jpg", text: "placeholer"},
        {src: "5-the-heirophant.jpg", text: "placeholder"},
        {src: "6-the-lovers.jpg", text: "placeholder"},
        {src: "7-the-chariot.jpg", text: "placeholder"},
        {src: "8-strength.jpg", text: "placeholder"},
        {src: "9-the-hermit.jpg", text: "placeholder"},
        {src: "10-wheel-of-fortune.jpg", text: "placeholder"},
        {src: "11-justice.jpg", text: "placeholder"},
        {src: "12-the-hanged-man.jpg", text: "placeholder"},
        {src: "13-death.jpg", text: "placeholder"},
        {src: "14-temperance.jpg", text: "placeholder"},
        {src: "15-the-devil.jpg", text: "placeholder"},
        {src: "16-the-tower.jpg", text: "placeholder"},
        {src: "17-the-star.jpg", text: "placeholder"},
        {src: "18-the-moon.jpg", text: "placeholder"},
        {src: "19-the-sun.jpg", text: "placeholder"},
        {src: "20-judgement.jpg", text: "placeholder"},
        {src: "21-the-world.jpg", text: "placeholder"}
    ]

    function tellFortune() {
        /*This should generate a number based on how long the arcana list is */
        const arcanaChooser = Math.floor(Math.random() * majorArcana.length);

        /*If I'm right this bit should get the element id for the image and change its src based on what arcanaChooser picks*/
        const freshArcana = document.getElementById("changeImage");
        freshArcana.src = majorArcana[arcanaChooser].src;
    }

    /* This should add an event listener to the center card image to trigger the fortune telling */
    document.getElementById("changeImage").addEventListener("click", tellFortune);
});