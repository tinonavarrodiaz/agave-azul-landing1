export const getLenguage = async () => {
  const res= await fetch('/translate.json');
  const data = await res.json();
  return data;
}
