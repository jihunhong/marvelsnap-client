const copy = async (text: string) => {
  if (!navigator.clipboard) {
    const temp = document.createElement('textarea');
    document.body.appendChild(temp);
    temp.value = text;
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
  } else {
    await navigator.clipboard.writeText(text);
  }
};

export default copy;
