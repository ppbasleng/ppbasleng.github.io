import React from 'react';
import { FaPython, FaReact } from 'react-icons/fa';
import { DiDocker, DiGit, DiGithub, DiRor, DiRuby, DiJsBadge, DiNodejs, DiNginx } from 'react-icons/di';
import { SiTailwindcss, SiCsharp, SiExpress } from 'react-icons/si'
import { BiLogoFlask } from 'react-icons/bi'
import { IconContext } from 'react-icons';
import { useState } from 'react';

function Skill() {
    const [mySkill, setmySkill] = useState([
        {
            title: 'Python',
            icon: <FaPython />,
        },
        {
            title: 'C#',
            icon: <SiCsharp />,
        },
        {
            title: 'JavaScript',
            icon: <DiJsBadge />,
        },
        {
            title: 'Ruby',
            icon: <DiRuby />,
        },
    ]);

    const [myFrameWork, setmyFrameWork] = useState([
        {
            title: 'React',
            icon: <FaReact />,
        },
        {
            title: 'Ruby on Rails',
            icon: <DiRor />,
        },
        {
            title: 'tailwindcss',
            icon: <SiTailwindcss />,
        },
        {
            title: 'Node.js',
            icon: <DiNodejs />,
        },
        {
            title: 'Express.js',
            icon: <SiExpress />,
        },
        {
            title: "Flask",
            icon: <BiLogoFlask />,
        }
    ]);

    const [myTools, setmyTools] = useState([
        {
            title: 'Git',
            icon: <DiGit />,
        },
        {
            title: 'Github',
            icon: <DiGithub />,
        },
        {
            title: 'Docker',
            icon: <DiDocker />,
        },
        {
            title: 'NGINX',
            icon: <DiNginx />,
        },
    ]);

    const SkillGridView = ({ Data }) => {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Data.map((item, index) => (
                    <div className="flex flex-col items-center justify-center" key={index}>
                        <div>{item.icon}</div>
                        <div>{item.title}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h3 className="text-md font-bold mb-5">These are my skills</h3>
            <IconContext.Provider value={{ color: 'black', className: 'skill-icon' }}>
                <div className="grid grid-cols-1 gap-8 h-full md:w-4/5 mx-auto">
                    <SkillGridView Data={mySkill} />
                    <SkillGridView Data={myFrameWork} />
                    <SkillGridView Data={myTools} />
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Skill;
