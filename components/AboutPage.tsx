"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDb</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor Degree</li>
                <li>Computer science and engineering </li>
                <li>Anna University, India</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Software developer</li>
                <li>Finflow twch pvt ltd ,india</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base font-medium lg:text-lg">
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, MongoDb, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start font-medium mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("Experience")}
                            active={tab === "Experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8 font-medium">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;