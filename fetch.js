import fetch from "node-fetch";
import fs from "fs";

const usernames = ["madan69993", "jafar.abdalrhman"];

async function update() {
  let results = {};

  for (let username of usernames) {
    try {
      let res = await fetch(
        `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
        {
          headers: {
            "User-Agent": "Mozilla/5.0",
            "X-IG-App-ID": "936619743392459"
          }
        }
      );

      let json = await res.json();
      results[username] = json.data.user;

    } catch (e) {
      results[username] = null;
    }
  }

  fs.writeFileSync("data.json", JSON.stringify(results, null, 2));
}

update();
