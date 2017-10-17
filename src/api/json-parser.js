const parseJSON = str => {
  let data
  try {
    data = JSON.parse(str);
  } catch(e) {
    data = {}
    const positionIdx = RegExp('position').exec(e).index + 9
    const errPosition = e.toString().slice(positionIdx, positionIdx + 4)
    console.log(`JSON parsed error @${errPosition}`);
  }
  return data
}

export default parseJSON;
