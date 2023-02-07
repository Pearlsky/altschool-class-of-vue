import { ref } from "vue";

export const useColorPicker = (colorsArray) => {
  const colors = colorsArray;
  let message = ref("Pick a color");

  const matchColor = (val) => {
    // use Math.random() to get random values and Math.floor to limit values between indexes 0 - 3
    const randomColVal = Math.floor(Math.random() * 4) ;

    return (message.value =
      colors[randomColVal] === val
        ? `You win! 🤗 [answer: ${colors[randomColVal]}]`
        : `You loose! 🫣 [answer: ${colors[randomColVal]}]`);
  };

  return { colors, message, matchColor };
};
