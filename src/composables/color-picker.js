import { ref } from "vue";

export const useColorPicker = (colorsArray) => {
  const colors = colorsArray;
  let message = ref("Pick a color");

  const matchColor = (val) => {
    const randomColVal = Math.floor(Math.random() * 3) + 1;

    return (message.value =
      colors[randomColVal] === val
        ? `You win! 🤗 [answer: ${randomColVal}]`
        : `You loose! 🫣 [answer: ${colors[randomColVal]}]`);
  };

  return { colors, message, matchColor };
};
