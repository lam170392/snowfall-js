"use strict";

function styleSnow() {

    const style = document.createElement('style');
style.innerHTML = `
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        height: 100vh;
        background: #001f3f;
      }

      #snow-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      .snowflake {
        position: absolute;
        top: -50px;
        color: white;
        opacity: 0.8;
        user-select: none;
        z-index: 9999;
        animation: fall linear infinite;
      }

      @keyframes fall {
        to {
          transform: translateY(100vh);
        }
      }
    `;
document.head.appendChild(style);
}

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄"; // Используем символ снежинки

    // Генерация случайных стилей для каждой снежинки
    snowflake.style.left = Math.random() * 100 + "vw"; // Случайное горизонтальное положение
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Разное время падения
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Разные размеры снежинок

    document.getElementById("snow-container").appendChild(snowflake);

    // Удаляем снежинку, когда она выйдет за пределы экрана
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Задержка удаления после окончания анимации
}


styleSnow();
setInterval(createSnowflake, 100);
