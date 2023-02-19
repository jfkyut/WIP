
const autobiography = `<div class="autobiography">
Hello, my name is Jake Francis Arnosa and I'm a 23-year-old college student majoring in Computer Science. Although I haven't accomplished a lot in my life so far, I have gained valuable experience and learned a lot that has shaped me into the person I am today. Writing this autobiography is a way for me to reflect on my journey and record my experiences and thoughts for future reference. I hope that by sharing my story, I can inspire others to explore their own experiences, continue learning, and never stop growing.
<br>
<br>
I was born in Caloocan, Manila, on October 14, 1999. When I was young, I enjoyed drawing and spent a lot of time practicing with my younger brother. We used to draw vehicles we saw on the street, and it was a fun bonding experience. At age five, my family and I moved to San Vicente, Palawan, where I spent most of my formative years.
<br>
<br>
In high school, I was a typical student who didn't always excel academically. There was one year when I was at the top of my class, but it was a one-time occurrence. After that year, I was moved to a different section where I didn't have any close friends. This was a challenging experience for me, as I didn't make many new friends and felt isolated for most of the year. However, I eventually adjusted and came to enjoy having my own personal space. Although I didn't have many friends, I still made a few and never felt alone like I did before.
<br>
<br>
During my senior year of high school, I started to worry about my future and what path I should take. I wasn't sure what I wanted to do, so I chose the General Academic Strand, which was designed for students who were undecided. I hoped that after a year or two, I would know what I wanted to become. Unfortunately, I was still uncertain after two years, and I realized that I didn't fully know myself yet.
<br>
<br>
When I started college, I chose to pursue Information Technology at Palawan State University Main Campus, but I didn't have much experience with computers. I wasn't intimidated, though, and found the basic programming classes interesting. I thought that being an IT person could be a good thing since most offices needed someone with that expertise. However, I didn't take the initiative to learn more about programming outside of my coursework.
<br>
<br>
After my first year of college, I transferred back home to San Vicente, Palawan, and switched to Computer Science because my previous school didn't offer that program. However, I still struggled to improve since I wasn't studying outside of class. The pandemic also affected my studies, and I left some courses behind in the next two years. By the time I was in my third year, I didn't feel ready for our thesis, and I felt like I hadn't accomplished anything. This made me question my worth, and I decided to take a break and prepare my mindset for the next year.
<br>
<br>
In my third year of college, I became interested in coding again. Our adviser introduced me to the programming language Kotlin, which is similar to Java but simpler. At first, I was excited to learn mobile development, but I soon discovered that it would be challenging to find a job in that field in the Philippines. Then I learned about web development, which is a path that many programmers start with and has numerous job openings. I had previously tried HTML and CSS during my first year, but I didn't understand them then. Now, I find web development fascinating and hope to pursue it further.

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
    hobbies += `
        <div class="hobbies-list-container">
            <div class="hobbies-list">${hobby}</div>
        </div>
    `;
});
// hobbies closing tag
hobbies += `</div>`;

const skillsData = [
    { 
        name: "HTML", 
        value: 75, 
        color: "rgb(255, 111, 0)" 
    },
    { 
        name: "CSS", 
        value: 66, 
        color: "rgb(0, 145, 255)" 
    },
    { 
        name: "JavaScript", 
        value: 50, 
        color: "yellow" 
    },
    { 
        name: "PHP", 
        value: 54, 
        color: "rgb(116, 116, 201)" 
    },
    { 
        name: "MYSQL", 
        value: 59, 
        color: "rgb(112, 195, 107)" 
    },
    { 
        name: "PHOTOSHOP", 
        value: 40, 
        color: "rgb(70, 58, 242)" 
    },
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