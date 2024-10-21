import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ahmed from "../image/Ahemd.jpg";
import Aizaz from "../image/Aizaz.png";
import Bukht from "../image/Bukht.jpg";
import Hassan from "../image/Hassan.jpg";
import Haseeb from "../image/Haseeb.png";

const data = [
  {
    name: `Ahmad Ali`,
    img: `${Ahmed}`,
    skill: "Founder of RAAquatech and Project Manager",
    review: `Ahmad Ali, founder of RAAquatech, leads the company with a strong focus on innovation and growth. As Project Manager, he utilizes Agile and Scrum methodologies to drive project execution and deliver exceptional results. His leadership ensures seamless onboarding, effective client collaboration, and a user-centric approach, while his mentorship fosters team development and success.`,
  },
  {
    name: `Bakht Munir`,
    img: `${Bukht}`,
    skill: "MERN Stack Developer",
    review: `Bakht Munir is a talented MERN Stack Developer, proficient in building full-stack web applications using MongoDB, Express.js, React, and Node.js. His expertise spans both front-end and back-end development, delivering responsive, scalable, and robust applications. Bakht’s attention to detail and problem-solving abilities make him a key contributor to modern web development projects, ensuring efficient, user-friendly solutions.`,
  },
  {
    name: `Aizaz Alam Khan`,
    img: `${Aizaz}`,
    skill: "Mobile App Developer, iOS, Web, and Android Developer",
    review: `Aizaz Alam Khan is a versatile Mobile App Developer with expertise in iOS, Android, and Web app development. With a focus on building intuitive, high-performing applications, Aizaz excels in crafting seamless user experiences across platforms. His technical proficiency and commitment to innovation ensure that the apps he develops are functional, engaging, and meet user expectations and industry standards.`,
  },
  {
    name: `Ikram Ullah Khan`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4z9sHjDbGjLF8OdKdlgniG0elkKQY8pmH-A&s`,
    skill: "iOS and Android Developer",
    review: `Ikram Ullah Khan is a skilled iOS and Android developer, proficient in creating dynamic and user-friendly mobile applications for both platforms. With a keen eye for detail and a deep understanding of mobile development, Ikram ensures that the apps he develops are efficient, responsive, and aligned with modern user expectations.`,
  },
  {
    name: `Umar`,
    img: `https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg`,
    skill: "PHP, Laravel, and WordPress Developer",
    review: `Umar is an experienced PHP, Laravel, and WordPress developer. He specializes in building robust web applications and websites with an emphasis on functionality and seamless performance. Umar’s expertise in these technologies allows him to create dynamic, responsive, and secure platforms, tailored to meet both user and business needs.`,
  },
  {
    name: `Haseeb Ullah`,
    img: `${Haseeb}`,
    skill: "IoT and Embedded Systems Engineer",
    review: `Haseeb Ullah is a skilled IoT and Embedded Systems Engineer, specializing in a wide range of microcontrollers, MATLAB, Simulink, and PCB design. With a strong foundation in embedded technology, he leverages his expertise to design and implement innovative IoT solutions. His hands-on experience with diverse hardware platforms allows him to deliver efficient, high-performance systems. Haseeb’s approach combines technical excellence with a focus on problem-solving and precision, ensuring that each project meets its full potential from design to deployment.`,
  },
  {
    name: `Hassan Raza`,
    img: `${Hassan}`,
    skill: "MERN Stack Developer",
    review: `Hassan Raza is a talented MERN Stack Developer, proficient in building full-stack web applications using MongoDB, Express.js, React, and Node.js. His expertise spans both front-end and back-end development, delivering responsive, scalable, and robust applications. Hassan’s attention to detail and problem-solving abilities make him a key contributor to modern web development projects, ensuring efficient, user-friendly solutions.`,
  },
  {
    name: `Sarmad Faizan`,
    img: `https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg`,
    skill: "React.js, Next.js, and JavaScript Front-End Developer",
    review: `Sarmad Faizan is a proficient React.js, Next.js, and JavaScript front-end developer. He excels in creating dynamic, responsive user interfaces that enhance user engagement and experience. With a strong understanding of modern front-end technologies and best practices, Sarmad is committed to delivering high-quality, performant web applications that align with client requirements and industry standards.`,
  },
];

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10">
        <span className="text-green-800">Meet our Team</span>
      </h1>
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="grid grid-cols-2 justify-center md:grid-cols-3 gap-4 mx-auto">
            <div className="relative group">
              <div className="max-w-sm flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-4 mr-4 md:ml-6">
                <img className="rounded-t-lg h-80 w-full" src={d.img} alt={d.name} />
                <h5 className="text-2xl font-bold mb-2">{d.name}</h5>
                <p className="mb-1 text-center">{d.skill}</p>

                {/* Overlay */}
                <div className="absolute mx-4 sm:mx-0 h-80 sm:max-w-sm sm:left-6  inset-0 bg-black bg-opacity-70 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-center p-5 rounded-t-lg">
                  <div className="text-white text-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <p>{d.review}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Team;
