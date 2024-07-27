// script.js

document.addEventListener('DOMContentLoaded', function() {
    const text = "Hello! I'm John Mutua, a passionate Web Developer and Data Analyst. I have a strong background in creating visually appealing and user-friendly websites. My journey started with a keen interest in technology, which led me to pursue a Bachelor in Business Information Technology at Dedan Kimathi University of Technology. Over the years, I have honed my skills in various web technologies and data analytics, constantly striving to improve and stay updated with the latest trends.\n\nI enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me meditating, taking walks, listening to music, or watching movies. Let's work together to bring your ideas to life!";
    let i = 0;
    const speed = 50; // Adjust speed as needed
    const aboutTextElement = document.getElementById('aboutText');

    function typeWriter() {
        if (i < text.length) {
            aboutTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
