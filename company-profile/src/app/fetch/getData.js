export default async function getData() {
  const res = await fetch(
    "https://randomuser.me/api?results=6&nat=us,gb&8seed:d7723aa515e9013"
  );
  const data = await res.json();
  return data.results;
}
