
const autobiography = `<div class="autobiography">
Hello, My name is Jake Francis Arnosa, and I am 23 years old. I am currently a college student studying Computer Science. I may not have accomplished much in my life so far, but I have learned so much and have had so many experiences that have shaped who I am today. Writing this autobiography is a way for me to reflect on my journey so far and to document my thoughts and experiences for future reference. I hope that by sharing my story, I can inspire others to explore their own experiences and to never stop learning and growing.
<br>
<br>
I was born on October 14, 1999 at Caloocan, Manila. At this early years in my life, I am really into drawing. I have one brother and we both like to draw. As I remember, when my mother take us both out, we try to remember how vehicles look like and we draw it when we got home. At the time I was four years old. I'm not good at drawing though, I just like doing it as a kid. By the time I was 5, we move here in San Vicente, Palawan from Manila.
<br>
<br>
In my high school days, I am not the smart one type of student who always at the top of the class. I was just a typical high school kid. Well there is a year where I was at the top of the class, that was my first time and also the last time. After that year, I was move in different section where I don't have any close friends at all. That was the first time in my life that I feel alone for the most part of the year. I feel like I have no friends with me. I was also not the type of student that will approach first so I didn't make that much of friends. There is only 1 or 2 friends I've got at the end of that year. After that, I was getting use to it. I finally enjoy my personal space without trying to fit in with other's circle of friends, I still got few though. I don't feel alone anymore unlike before, almost all of my classmates during this time are friendly, but there are times that I prefer to be alone.
<br>
<br>
My senior year. At this stage of my life, this was the first time I feel worry about what should I be doing in the future as I suppose to choose a path related to what I want to pursue in college. But still I am not decided yet so I choose General Academic Strand as I heard that this path is for undecided students. I choose it and was decided that after a year or 2, I have to know of what I really want to become in the future. But unfortunately, after 2 years , I still am not decided. I guess my problem here is I really don't fully know myself yet. 
<br>
<br>
College life, I choose to pursue Information Technology at Palawan State University Main Campus. I feel like I chose it out of nowhere. I am not the type of student who is expose on computers. I also am not one of those students that almost live in a computer shops during high school days. I only know a little about computers because I am not really into it. At the time I was trying to imagine that being an IT person can be a good thing though, as almost all of the office needed an IT people. During my first year in college, I was not intimidated at all even though I am not that good in computers. We taught some basic programming. It was cool thinking that how some things work behind the scene. I was fascinated but I still am not into it to the point that I should study on my own to learn how to code. I just do coding for assignments and activity purposes only.
<br>
<br>
After my first year in college, I transfer back home in San Vicente, Palawan for some reason that I do not want to include to tell. So I choose Computer Science because they do not offer IT program. I was first year again, still not improved after that school year cause I don't study on my own. I was just taking of what the University is giving.
<br>
<br>
At that time pandemic happen. The next 2 years. I was enrolled for the next 2 years, but I really not into school anymore. There are courses I left behind in that span. By the time I was in my third year, We have our thesis coming up. I feel like I was not ready yet. I feel like in 2 year span, I just waste my time and wasn't achieve anything. I was kind of questioning my worth at this time. I was turning 22 and hasn't achieve anything yet. That was the time I decided to take a break and prepare my mindset for the next year. 
<br>
<br>
Third year version 2, almost the end of pandemic. This is the time where I feel fascinated to code again. But I really don't know where to start as I was clueless that there are other paths to consider in coding. Our adviser introduce the language called Kotlin, I addressed it as the child of java language, it is much simplier. At first, I was excited to learn mobile development, specifically android. I think that it was cool, so I did some research more about the development world and learn that, if choose this path, It may be hard to find a job especially here in the Philippines. And then I discover web development, I learned that this is the path where most of the programmers start with. There is also a lot of job openings out there when it comes to web development. It feels really cool, I tried html css back when I was first year as an IT student, but I didn't truly learn back then, I wasn't even trying to understand so I already forgot about those stuff at this time. 
<br>
<br>
I decided to pursue web development and study to code on my own, and I am planning to be a web developer one day. This is the first time in my life that I feel to myself that I really want this. I'm still in my journey of studying until now and hoping that one day, I could finally achieve my goal. My goal is to become a web developer. I hope I could do it, and hopefully my mind won't change because I don't have any back up plan for now as I am into learning web development right now. I am not that good yet, but I'm happy of my progress for now and hoping to achieve my plan one day.
<br>
<br>
I would like to say that my journey so far has been an incredible experience. From being a kid who loves to draw to a college student studying Computer Science, I have learned a lot and had numerous experiences that have molded me into who I am today. Reflecting on my past, I can see how far I have come and how much I have grown as a person. Although I may not have accomplished much in my life yet, I am grateful for the lessons I have learned along the way. I understand that my story may not be perfect, but I believe that it is through our imperfections that we learn the most about ourselves.
<br>
<br> 
In conclusion, I want to encourage others to explore their own experiences and never stop learning and growing. Your journey may not always be easy, but it is through the challenges and obstacles that you overcome that make you the person you are today. So embrace every moment, good or bad, and never stop pursuing your passions.

</div>`;

const hobbiesData = [
    'Playing Online Games',
    'Watching Movies',
    'Watching Animes',
    'Watching NBA',
    'Reading Manga',
    'Solving Rubik\'s Cube',
    'Coding Simple Projects',
    'Drawings'
]

// opening hobbies tag
let hobbies = `<div class="hobbies">`;
// hobbies children element
hobbiesData.forEach( hobby => {
    hobbies += `<div class="hobbies-list">${hobby}</div>`;
});
// hobbies closing tag
hobbies += `</div>`;

const skillsData = [
    { name: "HTML", value: 75, color: "rgb(255, 111, 0)" },
    { name: "CSS", value: 66, color: "rgb(0, 145, 255)" },
    { name: "JavaScript", value: 50, color: "yellow" },
    { name: "PHP", value: 54, color: "rgb(116, 116, 201)" },
    { name: "MYSQL", value: 59, color: "rgb(112, 195, 107)" },
    { name: "PHOTOSHOP", value: 40, color: "rgb(70, 58, 242)" },
];

// ---------------opening tag of skill 
let skills = '<div class="skills">';
// ----------------skill card
skillsData.forEach((skill) => {
skills += `
    <div class="skill-card">
    <div class="percent" style="--value:${skill.value};--color: ${skill.color}">
        <div class="dot"></div>
        <svg>
        <circle cx="100" cy="100" r="100"></circle>
        <circle cx="100" cy="100" r="100"></circle>
        </svg>
        <div class="number">
        <h1 >${skill.value} <span>%</span> </h1>
        <p>${skill.name}</p>
        </div>
    </div>
    </div>
`;
});
// ---------------------closing tag of skill 
skills += '</div>';

export { autobiography, hobbies, skills };