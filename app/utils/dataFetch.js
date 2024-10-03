export default async function fetchData() {
    const res = await fetch('https://dummyjson.com/recipes');
    const result = await res.json();
    return result?.recipes
}