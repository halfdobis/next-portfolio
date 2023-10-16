

export const aboutMe = {
   name: "Adaobi Ezenwa",
   skills: [HTML, CSS, JavaScript, ReactJS, NodeJS, NextJS, Tailwind, MongoDB, Git, GitHub],
   projects: "https://halfdobis.vercel.app",
   contact: "missdobis@gmail.com",
};

const MyProfile =  () => {
return (
 <section>
   {aboutMe.map (( item, index ) => {
   return (
   <div key={ index }>
     <div>Hi there 👋, my name is {item.name}.</div>
   <div>🌱 My skills include: {item.skills}, and I’m currently learning nestjs, UI/UX, and improving my frontend skill.</div>
   <div>👨‍💻 All of my projects are available at {item.projects}</div>
   <div>📫 You can reach me  here - {item.contact}</div>
   </div>
   );
   })}
 </section>
);
};
