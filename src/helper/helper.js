export function getOption(optType) {
  let tempOption = this.userInput.filter(user => user.type === optType);
  let option = tempOption[0].options[0];
  return option;
}
