interface Song {
  videoId: string;
  name: string;
  artist: string;
  album: string;
  duration: string;
}

const songs: Song[] = [
  {
    videoId: "rCeM57e2BfU",
    name: "And July (Feat. DEAN, DJ Friz)",
    artist: "Heize",
    album: "And July",
    duration: "3:48",
  },
  {
    videoId: "sk6WiGOmlso",
    name: "Shut Up & Groove (Feat. DEAN)",
    artist: "Heize",
    album: "And July",
    duration: "3:20",
  },
  {
    videoId: "eelfrHtmk68",
    name: "D (Half Moon) ft. Gaeko",
    artist: "DEANTRBL",
    album: "130 Mood: TRBL",
    duration: "3:51",
  },
  {
    videoId: "8wpX6164uk4",
    name: "풀어(Pour Up) (ft. Zico)",
    artist: "DEANTRBL",
    album: "130 Mood: TRBL",
    duration: "3:33",
  },
  {
    videoId: "3ze6drtwiE4",
    name: "Bonnie & Clyde",
    artist: "DEANTRBL",
    album: "130 Mood: TRBL",
    duration: "3:44",
  },
  {
    videoId: "D2sMg8mCHds",
    name: "Come Over ft. Ye Rin Baek",
    artist: "DEANTRBL",
    album: "Limbo",
    duration: "4:27",
  },
  {
    videoId: "Z3W0jKcv1SU",
    name: "하루살이 (dayfly) ft. 설리, Rad Museum",
    artist: "DEANTRBL",
    album: "하루살이",
    duration: "4:17",
  },
  {
    videoId: "hiUPJaHjuUk",
    name: "Troll (Feat. DEAN)",
    artist: "IU",
    album: "IU 5th Album 'LILAC'",
    duration: "3:09",
  },
  {
    videoId: "v7bnOxV4jAc",
    name: "LILAC",
    artist: "IU",
    album: "IU 5th Album 'LILAC'",
    duration: "4:39",
  },
  {
    videoId: "4iFP_wd6QU8",
    name: "Square (2017)",
    artist: "Yerin Baek",
    album: "Every letter I sent you",
    duration: "4:22",
  },
  {
    videoId: "IRNBtocmQ58",
    name: "Maybe It's Not Our Fault",
    artist: "Yerin Baek",
    album: "Our Love Is Great",
    duration: "3:59",
  },
  {
    videoId: "Vyo2m2CbdUs",
    name: "Blue Flame",
    artist: "LE SSERAFIM",
    album: "Fearless",
    duration: "3:21",
  },
  {
    videoId: "-7Uo2oKHGyU",
    name: "Only U (Original Ver.)",
    artist: "Moon Sujin",
    album: "Only U",
    duration: "3:47",
  },
  {
    videoId: "QU9c0053UAU",
    name: "Seven (feat. Latto)",
    artist: "Jung Kook",
    album: "Seven (feat. Latto)",
    duration: "3:46",
  },
  {
    videoId: "UNo0TG9LwwI",
    name: "Standing Next to You",
    artist: "Jung Kook",
    album: "GOLDEN",
    duration: "3:46",
  },
  {
    videoId: "SctIHP5dPyM",
    name: "DIE 4 YOU",
    artist: "DEANTRBL",
    album: "DIE 4 YOU",
    duration: "3:15",
  },
  {
    videoId: "D8VEhcPeSlc",
    name: "Drama",
    artist: "aespa",
    album: "Drama - The 4th Mini Album",
    duration: "3:47",
  },
  {
    videoId: "Os_heh8vPfs",
    name: "Spicy",
    artist: "aespa",
    album: "MY WORLD - The 3rd Mini Album",
    duration: "3:24",
  },
  {
    videoId: "5_n6t9G2TUQ",
    name: "To.X",
    artist: "TAEYEON",
    album: "To.X - The 5th Mini Album",
    duration: "2:57",
  },
  {
    videoId: "zZwFi86zIZM",
    name: "Yes or No (Feat. HUH YUNJIN of LE SSERAFIM, Crush)",
    artist: "GroovyRoom",
    album: "Yes or No",
    duration: "3:02",
  },
  {
    videoId: "HKBPmZbrsm0",
    name: "Ego",
    artist: "Crush",
    album: "wonderego",
    duration: "3:02",
  },
  {
    videoId: "V4tmJoX4NsI",
    name: "Monday Blues",
    artist: "Crush",
    album: "wonderego",
    duration: "3:12",
  },
  {
    videoId: "w0sOLQXCGjE",
    name: "Chi-Ka (feat. DEAN)",
    artist: "Tabber",
    album: "Chi-Ka",
    duration: "3:23",
  },
  {
    videoId: "AbZH7XWDW_k",
    name: "INVU",
    artist: "TAEYEON",
    album: "INVU - The 3rd Album",
    duration: "3:37",
  },
  {
    videoId: "Z4qVfCi_lUI",
    name: "Love You With All My Heart",
    artist: "Crush",
    album: "Queen of Tears (Original Television Soundtrack)",
    duration: "4:04",
  },
  {
    videoId: "jRRCWFLAO6k",
    name: "Hold Me Back",
    artist: "Heize",
    album: "Queen of Tears (Original Television Soundtrack)",
    duration: "3:52",
  },
  {
    videoId: "zgxSYEFcePY",
    name: "Howlin' 404",
    artist: "DEANTRBL",
    album: "Howlin' 404",
    duration: "3:47",
  },
  {
    videoId: "Vk5-c_v4gMU",
    name: "Magenetic",
    artist: "ILLIT",
    album: "SUPER REAL ME",
    duration: "3:08",
  },
  {
    videoId: "lz46lUhrW5w",
    name: "Better (Feat. 쿠기)",
    artist: "Moon Sujin",
    album: "Better",
    duration: "2:41",
  },
  {
    videoId: "xfqBQ2XhBCg",
    name: "SPOT! (feat. JENNIE)",
    artist: "ZICO",
    album: "SPOT!",
    duration: "3:12",
  },
  {
    videoId: "phuiiNCxRMg",
    name: "Supernova",
    artist: "aespa",
    album: "Supernova",
    duration: "3:13",
  },
  {
    videoId: "nFYwcndNuOY",
    name: "Armageddon",
    artist: "aespa",
    album: "Armageddon - The 1st Album",
    duration: "3:32",
  },
  {
    videoId: "w2DOQLVpvLg",
    name: "Sun and Moon",
    artist: "aespa",
    album: "Hot Mess",
    duration: "3:19",
  },
  {
    videoId: "uMjsUhfq5gY",
    name: "Me Myself & I",
    artist: "Crush",
    album: "wonderego",
    duration: "4:18",
  },
  {
    videoId: "Dbx5-OXjGe0",
    name: "peach eyes",
    artist: "wave to earth",
    album: "0.1 flaws and all.",
    duration: "3:05",
  },
  {
    videoId: "n6B5gQXlB-0",
    name: "CRAZY",
    artist: "LE SSERAFIM",
    album: "CRAZY",
    duration: "2:49",
  },
  {
    videoId: "6GC8JF2FOgA",
    name: "Say Yes",
    artist: "Loco, Punch",
    album:
      "Moonlovers - Scarlet Heart Ryeo (Original Television Soundtrack), Pt. 2",
    duration: "3:45",
  },
  {
    videoId: "Y-FhDScM_2w",
    name: "Some (feat. Lil Boi)",
    artist: "SOYOU, Junggigo, LIL BOI",
    album: "Some",
    duration: "4:45",
  },
  {
    videoId: "6DLLVIOBRmQ",
    name: "light",
    artist: "wave to earth",
    album: "wave 0.01",
    duration: "3:45",
  },
  {
    videoId: "hoknJbAsOZY",
    name: "Sometimes (original.Crush)",
    artist: "Yerin Baek",
    album: "",
    duration: "4:25",
  },
  {
    videoId: "ahBKiNZFBNI",
    name: "NewJeans - New Jeans (Cover) AI",
    artist: "DEANTRBL",
    album: "",
    duration: "1:48",
  },
  {
    videoId: "iGKqh1DiNqI",
    name: "NewJeans - Ditto (A.I. cover)",
    artist: "DEANTRBL",
    album: "",
    duration: "2:14",
  },
  {
    videoId: "5tcBJCouOmE",
    name: "NewJeans - Hype Boy (A.I. cover)",
    artist: "DEANTRBL",
    album: "",
    duration: "2:47",
  },
  {
    videoId: "e8ybbaxw2UM",
    name: "NewJeans - Get Up (City Pop Remix)",
    artist: "Matty Prasty",
    album: "",
    duration: "5:08",
  },
  {
    videoId: "kTefaqHHLtI",
    name: "Yerin Baek - Maybe It's Not Our Fault (A.I. cover)",
    artist: "IU",
    album: "",
    duration: "3:53",
  },
  {
    videoId: "6s-nDXnISQU",
    name: "LE SSERAFIM - Perfect Night (City Pop Remix)",
    artist: "Matt Prasty",
    album: "",
    duration: "4:32",
  },
  {
    videoId: "3vbSOmZKKV8",
    name: "TAEYEON - To. X (AI Cover)",
    artist: "DEANTRBL",
    album: "",
    duration: "2:50",
  },
  {
    videoId: "VUsDpXkTntc",
    name: "TAEYEON - To. X (A.I. cover)",
    artist: "Jung Kook",
    album: "",
    duration: "2:52",
  },
  {
    videoId: "c12nDjyHN-8",
    name: "ILLIT - Magnetic (Cover) AI",
    artist: "DEANTRBL",
    album: "",
    duration: "2:40",
  },
  {
    videoId: "wWcuUryeiwY",
    name: "ILLIT - AI Yerin Baek 'Magnetic' (City Pop ver.)",
    artist: "Yerin Baek",
    album: "",
    duration: "3:10",
  },
];
const songListDiv = document.getElementById("song-list");

const renderSongs = (songs: Song[]) => {
  if (songListDiv) {
    songListDiv.innerHTML = "";
    songs.forEach((song, index) => {
      const songDiv = document.createElement("a");
      songDiv.classList.add(
        "song-row",
        "flex",
        "items-center",
        "justify-between",
        "p-4",
        "rounded",
        "hover:bg-gray-800",
        "transition-colors",
        "duration-300"
      );
      songDiv.href = `https://www.youtube.com/watch?v=${song.videoId}`;
      songDiv.target = "_blank";
      songDiv.rel = "noopener noreferrer";
      songDiv.innerHTML = `
        <span class="songNumber w-10 text-center mr-4 text-white">${
          index + 1
        }</span>
        <img src="https://img.youtube.com/vi/${
          song.videoId
        }/mqdefault.jpg" alt="${song.name}">
        <div class="flex-1 ml-4 mr-auto">
          <span class="songName block font-bold text-base text-white">${
            song.name
          }</span>
          <span class="songArtist block text-sm text-white">${
            song.artist
          }</span>
        </div>
        <span class="songAlbum flex-1 text-sm text-white">${song.album}</span>
        <span class="songDuration w-16 text-right text-white">${
          song.duration
        }</span>
      `;
      songListDiv.appendChild(songDiv);
    });
  }
};
renderSongs(songs);

const sortButton = document.getElementsByClassName("headerTitle");
const sortAlbumButton = document.getElementsByClassName("headerAlbum");
const sortDurationButton = document.getElementsByClassName("headerDuration");
const searchInput = document.getElementById("search-input") as HTMLInputElement;
const customOrderButton = document.getElementsByClassName("customOrder")[0];

if (sortButton.length) {
  Array.prototype.slice.call(sortButton).forEach((button: HTMLElement) => {
    button.addEventListener("click", () => {
      const sortedSongs = [...songs].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      renderSongs(sortedSongs);
    });
  });
}

if (sortAlbumButton.length) {
  Array.prototype.slice.call(sortAlbumButton).forEach((button: HTMLElement) => {
    button.addEventListener("click", () => {
      const sortedSongs = [...songs].sort((a, b) =>
        a.album.localeCompare(b.album)
      );
      renderSongs(sortedSongs);
    });
  });
}

if (sortDurationButton.length) {
  Array.prototype.slice
    .call(sortDurationButton)
    .forEach((button: HTMLElement) => {
      button.addEventListener("click", () => {
        const sortedSongs = [...songs].sort((a, b) => {
          const [aMinutes, aSeconds] = a.duration.split(":").map(Number);
          const [bMinutes, bSeconds] = b.duration.split(":").map(Number);
          return aMinutes * 60 + aSeconds - (bMinutes * 60 + bSeconds);
        });
        renderSongs(sortedSongs);
      });
    });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(
      (song) =>
        song.name.toLowerCase().indexOf(query) !== -1 ||
        song.artist.toLowerCase().indexOf(query) !== -1 ||
        song.album.toLowerCase().indexOf(query) !== -1
    );
    renderSongs(filteredSongs);
  });
}

if (customOrderButton) {
  customOrderButton.addEventListener("click", () => {
    renderSongs(songs);
  });
}

const totalSongs: number = songs.length;
const totalDuration: number = songs.reduce((total, song) => {
  const [minutes, seconds] = song.duration.split(":").map(Number);
  return total + minutes * 60 + seconds;
}, 0);

const formatDuration = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  let duration = "";
  if (hours > 0) {
    duration += `${hours} hour${hours > 1 ? "s" : ""}`;
  }
  if (minutes > 0) {
    if (duration) duration += " ";
    duration += `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }
  return duration || "0 minutes";
};

const totalSongsElement = document.getElementById("total-songs");

if (totalSongsElement) {
  const linkElement = document.createElement("a");
  linkElement.href = "https://kennytrbl.github.io/";
  linkElement.textContent = "Kenny";
  linkElement.classList.add("hover:underline");

  const totalSongsText = document.createTextNode(
    " • " + totalSongs.toString() + " songs"
  );

  totalSongsElement.textContent = "";
  totalSongsElement.appendChild(linkElement);
  totalSongsElement.appendChild(totalSongsText);
}
document.getElementById("total-duration")!.textContent =
  ", " + formatDuration(totalDuration);

const getRandomVideoId = () =>
  songs[Math.floor(Math.random() * songs.length)].videoId;

const randomLink = document.getElementById("random-link") as HTMLAnchorElement;
if (randomLink) {
  randomLink.href = `https://www.youtube.com/watch?v=${getRandomVideoId()}&list=PLXWIpfPoBagjtqU5kTT9KR9RxTNI5EtC3&pp=gAQBiAQB8AUB`;
}

document
  .getElementById("dropdownButton")
  ?.addEventListener("click", function () {
    const menu = document.getElementById("dropdownMenu");
    menu?.classList.toggle("hidden");
  });

document.addEventListener("click", function (event) {
  const button = document.getElementById("dropdownButton");
  const menu = document.getElementById("dropdownMenu");

  if (button && menu) {
    const target = event.target as Node;

    if (!button.contains(target) && !menu.contains(target)) {
      menu.classList.add("hidden");
    }
  }
});
