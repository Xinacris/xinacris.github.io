async function o(){const t=await fetch("https://api.github.com/users/xinacris");if(!t.ok)throw new Error("Failed to fetch GitHub data");return{profile:await t.json()}}export{o as clientLoader};
